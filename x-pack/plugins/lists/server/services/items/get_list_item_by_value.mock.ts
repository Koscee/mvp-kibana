/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { elasticsearchClientMock } from '@kbn/core-elasticsearch-client-server-mocks';

import { LIST_ID, LIST_ITEM_INDEX, TYPE, VALUE } from '../../../common/constants.mock';

import { GetListItemByValueOptions } from '.';

export const getListItemByValueOptionsMocks = (): GetListItemByValueOptions => ({
  esClient: elasticsearchClientMock.createScopedClusterClient().asCurrentUser,
  listId: LIST_ID,
  listItemIndex: LIST_ITEM_INDEX,
  type: TYPE,
  value: VALUE,
});
