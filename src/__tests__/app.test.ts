import { test, expect, afterAll } from '@jest/globals';
import { buildApp } from '../app';
import supertest from 'supertest';

const app = buildApp();

afterAll(() => app.close());

test('GET `/` route', async () => {
  await app.ready();
  const response = await supertest(app.server)
  .get('/')
  .expect(200)
  .expect('Content-Type', 'application/json; charset=utf-8');

  expect(response.body).toEqual({ hello: 'world' });
});

test ('Not exist route', async () => {
  await app.ready();
  await supertest(app.server)
  .get('/not-exist')
  .expect(404)
});