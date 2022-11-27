/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { LicenseExpirationRule } from './license_expiration_rule';
import { RULE_LICENSE_EXPIRATION } from '../../common/constants';
import { AlertSeverity } from '../../common/enums';
import { fetchLicenses } from '../lib/alerts/fetch_licenses';
import { fetchClusters } from '../lib/alerts/fetch_clusters';
import { elasticsearchServiceMock } from '@kbn/core/server/mocks';

const RealDate = Date;

jest.mock('../lib/alerts/fetch_licenses', () => ({
  fetchLicenses: jest.fn(),
}));
jest.mock('../lib/alerts/fetch_clusters', () => ({
  fetchClusters: jest.fn(),
}));
jest.mock('moment', () => {
  const actual = jest.requireActual('moment');
  return {
    ...actual,
    duration: () => ({ humanize: () => 'HUMANIZED_DURATION' }),
  };
});

jest.mock('../static_globals', () => ({
  Globals: {
    app: {
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

describe('LicenseExpirationRule', () => {
  it('should have defaults', () => {
    const rule = new LicenseExpirationRule();
    expect(rule.ruleOptions.id).toBe(RULE_LICENSE_EXPIRATION);
    expect(rule.ruleOptions.name).toBe('License expiration');
    expect(rule.ruleOptions.throttle).toBe('1d');
    expect(rule.ruleOptions.actionVariables).toStrictEqual([
      { name: 'expiredDate', description: 'The date when the license expires.' },
      { name: 'clusterName', description: 'The cluster to which the license belong.' },
      {
        name: 'internalShortMessage',
        description: 'The short internal message generated by Elastic.',
      },
      {
        name: 'internalFullMessage',
        description: 'The full internal message generated by Elastic.',
      },
      { name: 'state', description: 'The current state of the alert.' },
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

    const clusterUuid = 'abc123';
    const clusterName = 'testCluster';
    const license = {
      status: 'expired',
      type: 'gold',
      expiryDateMS: 1000 * 60 * 60 * 24 * 59,
      clusterUuid,
    };

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
      (fetchLicenses as jest.Mock).mockImplementation(() => {
        return [license];
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
      const alert = new LicenseExpirationRule();
      const type = alert.getRuleType();
      await type.executor({
        ...executorOptions,
        params: alert.ruleOptions.defaultParams,
      } as any);
      expect(replaceState).toHaveBeenCalledWith({
        alertStates: [
          {
            cluster: { clusterUuid, clusterName },
            ccs: undefined,
            itemLabel: undefined,
            meta: {
              clusterUuid: 'abc123',
              expiryDateMS: 5097600000,
              status: 'expired',
              type: 'gold',
            },
            nodeId: undefined,
            nodeName: undefined,
            ui: {
              isFiring: true,
              message: {
                text: 'The license for this cluster expires in #relative at #absolute. #start_linkPlease update your license.#end_link',
                tokens: [
                  {
                    startToken: '#relative',
                    type: 'time',
                    isRelative: true,
                    isAbsolute: false,
                    timestamp: 5097600000,
                  },
                  {
                    startToken: '#absolute',
                    type: 'time',
                    isAbsolute: true,
                    isRelative: false,
                    timestamp: 5097600000,
                  },
                  {
                    startToken: '#start_link',
                    endToken: '#end_link',
                    type: 'link',
                    url: 'license',
                  },
                ],
              },
              severity: 'danger',
              triggeredMS: 1,
              lastCheckedMS: 0,
            },
          },
        ],
      });
      expect(scheduleActions).toHaveBeenCalledWith('default', {
        action: '[Please update your license.](elasticsearch/nodes)',
        actionPlain: 'Please update your license.',
        internalFullMessage:
          'License expiration alert is firing for testCluster. Your license expires in HUMANIZED_DURATION. [Please update your license.](elasticsearch/nodes)',
        internalShortMessage:
          'License expiration alert is firing for testCluster. Your license expires in HUMANIZED_DURATION. Please update your license.',
        clusterName,
        expiredDate: 'HUMANIZED_DURATION',
        state: 'firing',
      });
    });

    it('should not fire actions if the license is not expired', async () => {
      (fetchLicenses as jest.Mock).mockImplementation(() => {
        return [
          {
            status: 'active',
            type: 'gold',
            expiryDateMS: 1000 * 60 * 60 * 24 * 61,
            clusterUuid,
          },
        ];
      });
      const rule = new LicenseExpirationRule();
      const type = rule.getRuleType();
      await type.executor({
        ...executorOptions,
        // @ts-ignore
        params: rule.ruleOptions.defaultParams,
      } as any);
      expect(replaceState).not.toHaveBeenCalledWith({});
      expect(scheduleActions).not.toHaveBeenCalled();
    });

    it('should use danger severity for a license expiring soon', async () => {
      (fetchLicenses as jest.Mock).mockImplementation(() => {
        return [
          {
            status: 'active',
            type: 'gold',
            expiryDateMS: 1000 * 60 * 60 * 24 * 2,
            clusterUuid,
          },
        ];
      });
      const rule = new LicenseExpirationRule();
      const type = rule.getRuleType();
      await type.executor({
        ...executorOptions,
        // @ts-ignore
        params: rule.ruleOptions.defaultParams,
      } as any);
      expect(replaceState.mock.calls[0][0].alertStates[0].ui.severity).toBe(AlertSeverity.Danger);
    });

    it('should use warning severity for a license expiring in a bit', async () => {
      (fetchLicenses as jest.Mock).mockImplementation(() => {
        return [
          {
            status: 'active',
            type: 'gold',
            expiryDateMS: 1000 * 60 * 60 * 24 * 31,
            clusterUuid,
          },
        ];
      });
      const rule = new LicenseExpirationRule();
      const type = rule.getRuleType();
      await type.executor({
        ...executorOptions,
        // @ts-ignore
        params: rule.ruleOptions.defaultParams,
      } as any);
      expect(replaceState.mock.calls[0][0].alertStates[0].ui.severity).toBe(AlertSeverity.Warning);
    });
  });
});
