/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { left } from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/pipeable';
import { exactCheck, foldLeftRight, getPaths } from '@kbn/securitysolution-io-ts-utils';

import { getSearchListItemResponseMock } from './index.mock';
import { SearchListItemSchema, searchListItemSchema } from '.';

describe('search_list_item_schema', () => {
  test('it should validate a typical search list item response', () => {
    const payload = getSearchListItemResponseMock();
    const decoded = searchListItemSchema.decode(payload);
    const checked = exactCheck(payload, decoded);
    const message = pipe(checked, foldLeftRight);

    expect(getPaths(left(message.errors))).toEqual([]);
    expect(message.schema).toEqual(payload);
  });

  test('it should NOT validate with an "undefined" for "items"', () => {
    const { items, ...noItems } = getSearchListItemResponseMock();
    const decoded = searchListItemSchema.decode(noItems);
    const checked = exactCheck(noItems, decoded);
    const message = pipe(checked, foldLeftRight);

    expect(getPaths(left(message.errors))).toEqual([
      'Invalid value "undefined" supplied to "items"',
    ]);
    expect(message.schema).toEqual({});
  });

  test('it should not allow an extra key to be sent in', () => {
    const payload: SearchListItemSchema & { extraKey?: string } = getSearchListItemResponseMock();
    payload.extraKey = 'some new value';
    const decoded = searchListItemSchema.decode(payload);
    const checked = exactCheck(payload, decoded);
    const message = pipe(checked, foldLeftRight);
    expect(getPaths(left(message.errors))).toEqual(['invalid keys "extraKey"']);
    expect(message.schema).toEqual({});
  });
});
