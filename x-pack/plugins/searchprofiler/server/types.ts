/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { IRouter, Logger } from '@kbn/core/server';
import { LicensingPluginSetup } from '@kbn/licensing-plugin/server';
import { LicenseStatus } from '../common';

export interface AppServerPluginDependencies {
  licensing: LicensingPluginSetup;
}

export interface RouteDependencies {
  getLicenseStatus: () => LicenseStatus;
  router: IRouter;
  log: Logger;
}
