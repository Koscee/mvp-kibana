/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { ExceptionListSchema } from '@kbn/securitysolution-io-ts-list-types';
import {
  ENDPOINT_LIST_ID,
  ENDPOINT_TRUSTED_APPS_LIST_DESCRIPTION,
  ENDPOINT_TRUSTED_APPS_LIST_ID,
  ENDPOINT_TRUSTED_APPS_LIST_NAME,
} from '@kbn/securitysolution-list-constants';

import {
  DATE_NOW,
  DESCRIPTION,
  DETECTION_TYPE,
  ELASTIC_USER,
  ENDPOINT_TYPE,
  IMMUTABLE,
  LIST_ID,
  META,
  NAME,
  TIE_BREAKER,
  USER,
  VERSION,
  _VERSION,
} from '../../constants.mock';

export const getExceptionListSchemaMock = (): ExceptionListSchema => ({
  _version: _VERSION,
  created_at: DATE_NOW,
  created_by: USER,
  description: DESCRIPTION,
  id: '1',
  immutable: IMMUTABLE,
  list_id: ENDPOINT_LIST_ID,
  meta: META,
  name: 'Sample Endpoint Exception List',
  namespace_type: 'agnostic',
  os_types: ['linux'],
  tags: ['user added string for a tag', 'malware'],
  tie_breaker_id: TIE_BREAKER,
  type: ENDPOINT_TYPE,
  updated_at: DATE_NOW,
  updated_by: 'user_name',
  version: VERSION,
});

export const getDetectionsExceptionListSchemaMock = (): ExceptionListSchema => ({
  _version: _VERSION,
  created_at: DATE_NOW,
  created_by: USER,
  description: DESCRIPTION,
  id: '1',
  immutable: IMMUTABLE,
  list_id: 'exception_list_id',
  meta: META,
  name: 'Sample Exception List',
  namespace_type: 'single',
  os_types: ['linux'],
  tags: ['user added string for a tag', 'malware'],
  tie_breaker_id: TIE_BREAKER,
  type: DETECTION_TYPE,
  updated_at: DATE_NOW,
  updated_by: 'user_name',
  version: VERSION,
});

export const getTrustedAppsListSchemaMock = (): ExceptionListSchema => {
  return {
    ...getExceptionListSchemaMock(),
    description: ENDPOINT_TRUSTED_APPS_LIST_DESCRIPTION,
    list_id: ENDPOINT_TRUSTED_APPS_LIST_ID,
    name: ENDPOINT_TRUSTED_APPS_LIST_NAME,
  };
};

/**
 * This is useful for end to end tests where we remove the auto generated parts for comparisons
 * such as created_at, updated_at, and id.
 */
export const getExceptionResponseMockWithoutAutoGeneratedValues =
  (): Partial<ExceptionListSchema> => ({
    created_by: ELASTIC_USER,
    description: DESCRIPTION,
    immutable: IMMUTABLE,
    list_id: LIST_ID,
    name: NAME,
    namespace_type: 'single',
    os_types: [],
    tags: [],
    type: ENDPOINT_TYPE,
    updated_by: ELASTIC_USER,
    version: VERSION,
  });
