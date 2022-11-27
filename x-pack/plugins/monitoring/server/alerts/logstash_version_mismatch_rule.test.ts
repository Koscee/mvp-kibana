/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { LogstashVersionMismatchRule } from './logstash_version_mismatch_rule';
import { RULE_LOGSTASH_VERSION_MISMATCH } from '../../common/constants';
import { fetchLogstashVersions } from '../lib/alerts/fetch_logstash_versions';
import { fetchClusters } from '../lib/alerts/fetch_clusters';
import { elasticsearchServiceMock } from '@kbn/core/server/mocks';

const RealDate = Date;

jest.mock('../lib/alerts/fetch_logstash_versions', () => ({
  fetchLogstashVersions: jest.fn(),
}));
jest.mock('../lib/alerts/fetch_clusters', () => ({
  fetchClusters: jest.fn(),
}));

jest.mock('../static_globals', () => ({
  Globals: {
    app: {
      url: 'UNIT_TEST_URL',
      getLogger: () => ({ debug: jest.fn() }),
      config: {
        ui: {
          show_license_expiration: true,
          ccs: { enabled: true },
          container: { elasticsearch: { enabled: false } },
        },
      },
    },
  },
}));

describe('LogstashVersionMismatchRule', () => {
  it('should have defaults', () => {
    const rule = new LogstashVersionMismatchRule();
    expect(rule.ruleOptions.id).toBe(RULE_LOGSTASH_VERSION_MISMATCH);
    expect(rule.ruleOptions.name).toBe('Logstash version mismatch');
    expect(rule.ruleOptions.throttle).toBe('1d');
    expect(rule.ruleOptions.actionVariables).toStrictEqual([
      {
        name: 'versionList',
        description: 'The versions of Logstash running in this cluster.',
      },
      {
        name: 'internalShortMessage',
        description: 'The short internal message generated by Elastic.',
      },
      {
        name: 'internalFullMessage',
        description: 'The full internal message generated by Elastic.',
      },
      { name: 'state', description: 'The current state of the alert.' },
      { name: 'clusterName', description: 'The cluster to which the node(s) belongs.' },
      { name: 'action', description: 'The recommended action for this alert.' },
      {
        name: 'actionPlain',
        description: 'The recommended action for this alert, without any markdown.',
      },
    ]);
  });

  describe('execute', () => {
    function FakeDate() {}
    FakeDate.prototype.valueOf = () => 1;

    const ccs = undefined;
    const clusterUuid = 'abc123';
    const clusterName = 'testCluster';
    const logstashVersions = [
      {
        versions: ['8.0.0', '7.2.1'],
        clusterUuid,
        ccs,
      },
    ];

    const replaceState = jest.fn();
    const scheduleActions = jest.fn();
    const getState = jest.fn();
    const executorOptions = {
      services: {
        scopedClusterClient: elasticsearchServiceMock.createScopedClusterClient(),
        alertFactory: {
          create: jest.fn().mockImplementation(() => {
            return {
              replaceState,
              scheduleActions,
              getState,
            };
          }),
        },
      },
      state: {},
    };

    beforeEach(() => {
      // @ts-ignore
      Date = FakeDate;
      (fetchLogstashVersions as jest.Mock).mockImplementation(() => {
        return logstashVersions;
      });
      (fetchClusters as jest.Mock).mockImplementation(() => {
        return [{ clusterUuid, clusterName }];
      });
    });

    afterEach(() => {
      Date = RealDate;
      replaceState.mockReset();
      scheduleActions.mockReset();
      getState.mockReset();
    });

    it('should fire actions', async () => {
      const rule = new LogstashVersionMismatchRule();
      const type = rule.getRuleType();
      await type.executor({
        ...executorOptions,
        // @ts-ignore
        params: rule.ruleOptions.defaultParams,
      } as any);
      expect(replaceState).toHaveBeenCalledWith({
        alertStates: [
          {
            cluster: { clusterUuid: 'abc123', clusterName: 'testCluster' },
            ccs,
            itemLabel: undefined,
            nodeId: undefined,
            nodeName: undefined,
            meta: {
              ccs,
              clusterUuid,
              versions: ['8.0.0', '7.2.1'],
            },
            ui: {
              isFiring: true,
              message: {
                text: 'Multiple versions of Logstash (8.0.0, 7.2.1) running in this cluster.',
              },
              severity: 'warning',
              triggeredMS: 1,
              lastCheckedMS: 0,
            },
          },
        ],
      });
      expect(scheduleActions).toHaveBeenCalledWith('default', {
        action: `[View nodes](UNIT_TEST_URL/app/monitoring#/logstash/nodes?_g=(cluster_uuid:${clusterUuid}))`,
        actionPlain: 'Verify you have the same version across all nodes.',
        internalFullMessage: `Logstash version mismatch alert is firing for testCluster. Logstash is running 8.0.0, 7.2.1. [View nodes](UNIT_TEST_URL/app/monitoring#/logstash/nodes?_g=(cluster_uuid:${clusterUuid}))`,
        internalShortMessage:
          'Logstash version mismatch alert is firing for testCluster. Verify you have the same version across all nodes.',
        versionList: ['8.0.0', '7.2.1'],
        clusterName,
        state: 'firing',
      });
    });

    it('should not fire actions if there is no mismatch', async () => {
      (fetchLogstashVersions as jest.Mock).mockImplementation(() => {
        return [
          {
            versions: ['8.0.0'],
            clusterUuid,
            ccs,
          },
        ];
      });
      const rule = new LogstashVersionMismatchRule();
      const type = rule.getRuleType();
      await type.executor({
        ...executorOptions,
        // @ts-ignore
        params: rule.ruleOptions.defaultParams,
      } as any);
      expect(replaceState).not.toHaveBeenCalledWith({});
      expect(scheduleActions).not.toHaveBeenCalled();
    });
  });
});
