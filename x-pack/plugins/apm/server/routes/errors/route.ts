/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { jsonRt, toNumberRt } from '@kbn/io-ts-utils';
import * as t from 'io-ts';
import { createApmServerRoute } from '../apm_routes/create_apm_server_route';
import { getErrorDistribution } from './distribution/get_distribution';
import { setupRequest } from '../../lib/helpers/setup_request';
import { environmentRt, kueryRt, rangeRt } from '../default_api_types';
import { getErrorGroupMainStatistics } from './get_error_groups/get_error_group_main_statistics';
import { getErrorGroupPeriods } from './get_error_groups/get_error_group_detailed_statistics';
import { getErrorGroupSample } from './get_error_groups/get_error_group_sample';
import { offsetRt } from '../../../common/comparison_rt';
import { getTopErroneousTransactionsPeriods } from './erroneous_transactions/get_top_erroneous_transactions';

const errorsMainStatisticsRoute = createApmServerRoute({
  endpoint:
    'GET /internal/apm/services/{serviceName}/errors/groups/main_statistics',
  params: t.type({
    path: t.type({
      serviceName: t.string,
    }),
    query: t.intersection([
      t.partial({
        sortField: t.string,
        sortDirection: t.union([t.literal('asc'), t.literal('desc')]),
      }),
      environmentRt,
      kueryRt,
      rangeRt,
    ]),
  }),
  options: { tags: ['access:apm'] },
  handler: async (
    resources
  ): Promise<{
    errorGroups: Array<{
      groupId: string;
      name: string;
      lastSeen: number;
      occurrences: number;
      culprit: string | undefined;
      handled: boolean | undefined;
      type: string | undefined;
    }>;
  }> => {
    const { params } = resources;
    const setup = await setupRequest(resources);
    const { serviceName } = params.path;
    const { environment, kuery, sortField, sortDirection, start, end } =
      params.query;

    const errorGroups = await getErrorGroupMainStatistics({
      environment,
      kuery,
      serviceName,
      sortField,
      sortDirection,
      setup,
      start,
      end,
    });

    return { errorGroups };
  },
});

const errorsMainStatisticsByTransactionNameRoute = createApmServerRoute({
  endpoint:
    'GET /internal/apm/services/{serviceName}/errors/groups/main_statistics_by_transaction_name',
  params: t.type({
    path: t.type({
      serviceName: t.string,
    }),
    query: t.intersection([
      t.type({
        transactionType: t.string,
        transactionName: t.string,
        maxNumberOfErrorGroups: toNumberRt,
      }),
      environmentRt,
      kueryRt,
      rangeRt,
    ]),
  }),
  options: { tags: ['access:apm'] },
  handler: async (
    resources
  ): Promise<{
    errorGroups: Array<{
      groupId: string;
      name: string;
      lastSeen: number;
      occurrences: number;
      culprit: string | undefined;
      handled: boolean | undefined;
      type: string | undefined;
    }>;
  }> => {
    const { params } = resources;
    const setup = await setupRequest(resources);
    const { serviceName } = params.path;
    const {
      environment,
      kuery,
      start,
      end,
      transactionName,
      transactionType,
      maxNumberOfErrorGroups,
    } = params.query;

    const errorGroups = await getErrorGroupMainStatistics({
      environment,
      kuery,
      serviceName,
      setup,
      start,
      end,
      maxNumberOfErrorGroups,
      transactionName,
      transactionType,
    });

    return { errorGroups };
  },
});

const errorsDetailedStatisticsRoute = createApmServerRoute({
  endpoint:
    'POST /internal/apm/services/{serviceName}/errors/groups/detailed_statistics',
  params: t.type({
    path: t.type({
      serviceName: t.string,
    }),
    query: t.intersection([
      environmentRt,
      kueryRt,
      rangeRt,
      offsetRt,
      t.type({
        numBuckets: toNumberRt,
      }),
    ]),
    body: t.type({ groupIds: jsonRt.pipe(t.array(t.string)) }),
  }),
  options: { tags: ['access:apm'] },
  handler: async (
    resources
  ): Promise<{
    currentPeriod: import('./../../../../../../node_modules/@types/lodash/ts3.1/index').Dictionary<{
      groupId: string;
      timeseries: Array<import('./../../../typings/timeseries').Coordinate>;
    }>;
    previousPeriod: import('./../../../../../../node_modules/@types/lodash/ts3.1/index').Dictionary<{
      timeseries: Array<{
        x: number;
        y: import('./../../../typings/common').Maybe<number>;
      }>;
      groupId: string;
    }>;
  }> => {
    const setup = await setupRequest(resources);
    const { params } = resources;

    const {
      path: { serviceName },
      query: { environment, kuery, numBuckets, start, end, offset },
      body: { groupIds },
    } = params;

    return getErrorGroupPeriods({
      environment,
      kuery,
      serviceName,
      setup,
      numBuckets,
      groupIds,
      start,
      end,
      offset,
    });
  },
});

const errorGroupsRoute = createApmServerRoute({
  endpoint: 'GET /internal/apm/services/{serviceName}/errors/{groupId}',
  params: t.type({
    path: t.type({
      serviceName: t.string,
      groupId: t.string,
    }),
    query: t.intersection([environmentRt, kueryRt, rangeRt]),
  }),
  options: { tags: ['access:apm'] },
  handler: async (
    resources
  ): Promise<{
    transaction:
      | import('./../../../typings/es_schemas/ui/transaction').Transaction
      | undefined;
    error: import('./../../../typings/es_schemas/ui/apm_error').APMError;
    occurrencesCount: number;
  }> => {
    const { params } = resources;
    const setup = await setupRequest(resources);
    const { serviceName, groupId } = params.path;
    const { environment, kuery, start, end } = params.query;

    return getErrorGroupSample({
      environment,
      groupId,
      kuery,
      serviceName,
      setup,
      start,
      end,
    });
  },
});

const errorDistributionRoute = createApmServerRoute({
  endpoint: 'GET /internal/apm/services/{serviceName}/errors/distribution',
  params: t.type({
    path: t.type({
      serviceName: t.string,
    }),
    query: t.intersection([
      t.partial({
        groupId: t.string,
      }),
      environmentRt,
      kueryRt,
      rangeRt,
      offsetRt,
    ]),
  }),
  options: { tags: ['access:apm'] },
  handler: async (
    resources
  ): Promise<{
    currentPeriod: Array<{ x: number; y: number }>;
    previousPeriod: Array<{
      x: number;
      y: import('./../../../typings/common').Maybe<number>;
    }>;
    bucketSize: number;
  }> => {
    const setup = await setupRequest(resources);
    const { params } = resources;
    const { serviceName } = params.path;
    const { environment, kuery, groupId, start, end, offset } = params.query;
    return getErrorDistribution({
      environment,
      kuery,
      serviceName,
      groupId,
      setup,
      start,
      end,
      offset,
    });
  },
});

const topErroneousTransactionsRoute = createApmServerRoute({
  endpoint:
    'GET /internal/apm/services/{serviceName}/errors/{groupId}/top_erroneous_transactions',
  params: t.type({
    path: t.type({
      serviceName: t.string,
      groupId: t.string,
    }),
    query: t.intersection([
      environmentRt,
      kueryRt,
      rangeRt,
      offsetRt,
      t.type({
        numBuckets: toNumberRt,
      }),
    ]),
  }),
  options: { tags: ['access:apm'] },
  handler: async (
    resources
  ): Promise<{
    topErroneousTransactions: Array<{
      transactionName: string;
      currentPeriodTimeseries: Array<{ x: number; y: number }>;
      previousPeriodTimeseries: Array<{ x: number; y: number }>;
      transactionType: string | undefined;
      occurrences: number;
    }>;
  }> => {
    const { params } = resources;
    const setup = await setupRequest(resources);

    const {
      path: { serviceName, groupId },
      query: { environment, kuery, numBuckets, start, end, offset },
    } = params;

    return await getTopErroneousTransactionsPeriods({
      environment,
      groupId,
      kuery,
      serviceName,
      setup,
      start,
      end,
      numBuckets,
      offset,
    });
  },
});

export const errorsRouteRepository = {
  ...errorsMainStatisticsRoute,
  ...errorsMainStatisticsByTransactionNameRoute,
  ...errorsDetailedStatisticsRoute,
  ...errorGroupsRoute,
  ...errorDistributionRoute,
  ...topErroneousTransactionsRoute,
};
