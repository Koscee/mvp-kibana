/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { FunctionComponent } from 'react';

export const ElasticsearchIndices: FunctionComponent<ElasticsearchIndicesProps>;
export interface ElasticsearchIndicesProps {
  clusterStatus: unknown;
  indices: unknown;
  sorting: unknown;
  pagination: unknown;
  onTableChange: unknown;
  toggleShowSystemIndices: unknown;
  showSystemIndices: unknown;
  alerts: unknown;
}
