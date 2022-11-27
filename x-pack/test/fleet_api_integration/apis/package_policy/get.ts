/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import expect from '@kbn/expect';
import { FtrProviderContext } from '../../../api_integration/ftr_provider_context';
import { skipIfNoDockerRegistry } from '../../helpers';

export default function (providerContext: FtrProviderContext) {
  const { getService } = providerContext;
  const supertest = getService('supertest');
  const dockerServers = getService('dockerServers');

  const server = dockerServers.get('registry');
  // use function () {} and not () => {} here
  // because `this` has to point to the Mocha context
  // see https://mochajs.org/#arrow-functions

  describe('Package Policy APIs', () => {
    skipIfNoDockerRegistry(providerContext);

    before(async () => {
      await getService('kibanaServer').savedObjects.cleanStandardList();

      await getService('esArchiver').load(
        'x-pack/test/functional/es_archives/fleet/empty_fleet_server'
      );
    });

    after(async () => {
      await getService('esArchiver').unload(
        'x-pack/test/functional/es_archives/fleet/empty_fleet_server'
      );
      await getService('kibanaServer').savedObjects.cleanStandardList();
    });

    describe('get by id', async function () {
      let agentPolicyId: string;
      let packagePolicyId: string;

      before(async function () {
        if (!server.enabled) {
          return;
        }

        const { body: agentPolicyResponse } = await supertest
          .post(`/api/fleet/agent_policies`)
          .set('kbn-xsrf', 'xxxx')
          .send({
            name: 'Test policy',
            namespace: 'default',
          });
        agentPolicyId = agentPolicyResponse.item.id;

        const { body: packagePolicyResponse } = await supertest
          .post(`/api/fleet/package_policies`)
          .set('kbn-xsrf', 'xxxx')
          .send({
            name: 'filetest-1',
            description: '',
            namespace: 'default',
            policy_id: agentPolicyId,
            enabled: true,
            inputs: [],
            package: {
              name: 'filetest',
              title: 'For File Tests',
              version: '0.1.0',
            },
          });
        packagePolicyId = packagePolicyResponse.item.id;
      });

      after(async function () {
        if (!server.enabled) {
          return;
        }

        await supertest
          .post(`/api/fleet/agent_policies/delete`)
          .set('kbn-xsrf', 'xxxx')
          .send({ agentPolicyId })
          .expect(200);

        await supertest
          .post(`/api/fleet/package_policies/delete`)
          .set('kbn-xsrf', 'xxxx')
          .send({ packagePolicyIds: [packagePolicyId] })
          .expect(200);
      });

      it('should succeed with a valid id', async function () {
        await supertest.get(`/api/fleet/package_policies/${packagePolicyId}`).expect(200);
      });

      it('should return a 404 with an invalid id', async function () {
        await supertest.get(`/api/fleet/package_policies/IS_NOT_PRESENT`).expect(404);
      });
    });

    describe('POST /api/fleet/package_policies/_bulk_get', async function () {
      let agentPolicyId: string;
      let packagePolicyId: string;

      before(async function () {
        if (!server.enabled) {
          return;
        }

        const { body: agentPolicyResponse } = await supertest
          .post(`/api/fleet/agent_policies`)
          .set('kbn-xsrf', 'xxxx')
          .send({
            name: 'Test policy',
            namespace: 'default',
          });
        agentPolicyId = agentPolicyResponse.item.id;

        const { body: packagePolicyResponse } = await supertest
          .post(`/api/fleet/package_policies`)
          .set('kbn-xsrf', 'xxxx')
          .send({
            name: 'filetest-1',
            description: '',
            namespace: 'default',
            policy_id: agentPolicyId,
            enabled: true,
            inputs: [],
            package: {
              name: 'filetest',
              title: 'For File Tests',
              version: '0.1.0',
            },
          });
        packagePolicyId = packagePolicyResponse.item.id;
      });

      after(async function () {
        if (!server.enabled) {
          return;
        }

        await supertest
          .post(`/api/fleet/agent_policies/delete`)
          .set('kbn-xsrf', 'xxxx')
          .send({ agentPolicyId })
          .expect(200);

        await supertest
          .post(`/api/fleet/package_policies/delete`)
          .set('kbn-xsrf', 'xxxx')
          .send({ packagePolicyIds: [packagePolicyId] })
          .expect(200);
      });

      it('should succeed with valid ids', async function () {
        const {
          body: { items },
        } = await supertest
          .post(`/api/fleet/package_policies/_bulk_get`)
          .set('kbn-xsrf', 'xxxx')
          .send({ ids: [packagePolicyId] })
          .expect(200);

        expect(items.length).eql(1);
      });

      it('should return 404 with invvalid ids', async function () {
        await supertest
          .post(`/api/fleet/package_policies/_bulk_get`)
          .set('kbn-xsrf', 'xxxx')
          .send({ ids: ['invalid-id-i-do-not-exists'] })
          .expect(404);
      });

      it('should succeed with mixed valid ids and invalid ids and ignoreMissing flag ', async function () {
        const {
          body: { items },
        } = await supertest
          .post(`/api/fleet/package_policies/_bulk_get`)
          .set('kbn-xsrf', 'xxxx')
          .send({ ids: [packagePolicyId, 'invalid-id-i-do-not-exists'], ignoreMissing: true })
          .expect(200);

        expect(items.length).eql(1);
      });
    });

    describe('get orphaned policies', () => {
      let agentPolicyId: string;
      let packagePolicyId: string;

      before(async function () {
        if (!server.enabled) {
          return;
        }

        const { body: agentPolicyResponse } = await supertest
          .post(`/api/fleet/agent_policies`)
          .set('kbn-xsrf', 'xxxx')
          .send({
            name: 'Test policy',
            namespace: 'default',
          });

        agentPolicyId = agentPolicyResponse.item.id;

        const { body: packagePolicyResponse } = await supertest
          .post(`/api/fleet/package_policies`)
          .set('kbn-xsrf', 'xxxx')
          .send({
            name: 'filetest-1',
            description: '',
            namespace: 'default',
            policy_id: agentPolicyId,
            enabled: true,
            inputs: [],
            package: {
              name: 'filetest',
              title: 'For File Tests',
              version: '0.1.0',
            },
          });

        packagePolicyId = packagePolicyResponse.item.id;

        // Delete the agent policy directly from ES to orphan the package policy
        const esClient = getService('es');
        await esClient.delete({
          index: '.kibana',
          id: `ingest-agent-policies:${agentPolicyId}`,
          refresh: 'wait_for',
        });
      });

      after(async function () {
        if (!server.enabled) {
          return;
        }

        await supertest
          .post(`/api/fleet/package_policies/delete`)
          .set('kbn-xsrf', 'xxxx')
          .send({ packagePolicyIds: [packagePolicyId], force: true })
          .expect(200);
      });

      it('should return orphaned policy', async () => {
        const response = await supertest
          .get('/internal/fleet/orphaned_integration_policies')
          .expect(200);

        expect(response.body.items).to.have.length(1);
        expect(response.body.items[0].id).to.eql(packagePolicyId);
      });
    });
  });
}
