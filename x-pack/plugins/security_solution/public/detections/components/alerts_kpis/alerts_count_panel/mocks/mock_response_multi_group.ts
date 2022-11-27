/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { AlertSearchResponse } from '../../../../containers/detection_engine/alerts/types';
import type { AlertsCountAggregation } from '../types';

export const buckets = [
  {
    key: 'matches everything',
    doc_count: 34,
  },
  {
    key: 'EQL process sequence',
    doc_count: 28,
  },
  {
    key: 'Endpoint Security',
    doc_count: 19,
  },
  {
    key: 'mimikatz process started',
    doc_count: 5,
  },
  {
    key: 'Threshold rule',
    doc_count: 1,
  },
];

/**
 * A mock response to a request containing multiple group by fields
 */
export const mockMultiGroupResponse: AlertSearchResponse<unknown, AlertsCountAggregation> = {
  took: 0,
  timeout: false,
  _shards: {
    total: 1,
    successful: 1,
    skipped: 0,
    failed: 0,
  },
  hits: {
    total: {
      value: 87,
      relation: 'eq',
    },
    max_score: null,
    hits: [],
  },
  aggregations: {
    stackByField0: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets,
    },
  },
};
