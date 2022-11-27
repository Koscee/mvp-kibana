/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { IEventLogClient } from './types';

const createEventLogClientMock = () => {
  const mock: jest.Mocked<IEventLogClient> = {
    findEventsBySavedObjectIds: jest.fn(),
    aggregateEventsBySavedObjectIds: jest.fn(),
    aggregateEventsWithAuthFilter: jest.fn(),
  };
  return mock;
};

export const eventLogClientMock = {
  create: createEventLogClientMock,
};
