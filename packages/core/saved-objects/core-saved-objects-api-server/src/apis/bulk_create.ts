/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import type {
  SavedObjectReference,
  SavedObjectsMigrationVersion,
} from '@kbn/core-saved-objects-common';

/**
 *
 * @public
 */
export interface SavedObjectsBulkCreateObject<T = unknown> {
  id?: string;
  type: string;
  attributes: T;
  version?: string;
  references?: SavedObjectReference[];
  /** {@inheritDoc SavedObjectsMigrationVersion} */
  migrationVersion?: SavedObjectsMigrationVersion;
  /**
   * A semver value that is used when upgrading objects between Kibana versions. If undefined, this will be automatically set to the current
   * Kibana version when the object is created. If this is set to a non-semver value, or it is set to a semver value greater than the
   * current Kibana version, it will result in an error.
   *
   * @remarks
   * Do not attempt to set this manually. It should only be used if you retrieved an existing object that had the `coreMigrationVersion`
   * field set and you want to create it again.
   */
  coreMigrationVersion?: string;
  /** Optional ID of the original saved object, if this object's `id` was regenerated */
  originId?: string;
  /**
   * Optional initial namespaces for the object to be created in. If this is defined, it will supersede the namespace ID that is in
   * {@link SavedObjectsCreateOptions}.
   *
   * * For shareable object types (registered with `namespaceType: 'multiple'`): this option can be used to specify one or more spaces,
   *   including the "All spaces" identifier (`'*'`).
   * * For isolated object types (registered with `namespaceType: 'single'` or `namespaceType: 'multiple-isolated'`): this option can only
   *   be used to specify a single space, and the "All spaces" identifier (`'*'`) is not allowed.
   * * For global object types (registered with `namespaceType: 'agnostic'`): this option cannot be used.
   */
  initialNamespaces?: string[];
}
