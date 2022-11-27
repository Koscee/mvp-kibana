/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { ListSchema } from '@kbn/securitysolution-io-ts-list-types';

import {
  DATE_NOW,
  DESCRIPTION,
  ELASTIC_USER,
  IMMUTABLE,
  LIST_ID,
  META,
  NAME,
  TIE_BREAKER,
  TYPE,
  USER,
  VERSION,
} from '../../constants.mock';

export const getListResponseMock = (): ListSchema => ({
  _version: undefined,
  created_at: DATE_NOW,
  created_by: USER,
  description: DESCRIPTION,
  deserializer: undefined,
  id: LIST_ID,
  immutable: IMMUTABLE,
  meta: META,
  name: NAME,
  serializer: undefined,
  tie_breaker_id: TIE_BREAKER,
  type: TYPE,
  updated_at: DATE_NOW,
  updated_by: USER,
  version: VERSION,
});

/**
 * This is useful for end to end tests where we remove the auto generated parts for comparisons
 * such as created_at, updated_at, and id.
 */
export const getListResponseMockWithoutAutoGeneratedValues = (): Partial<ListSchema> => ({
  created_by: ELASTIC_USER,
  description: DESCRIPTION,
  immutable: IMMUTABLE,
  name: NAME,
  type: TYPE,
  updated_by: ELASTIC_USER,
  version: VERSION,
});
