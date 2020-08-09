import request from 'supertest';

import app from '../../src/app';
import truncate from '../utils/truncate';
import { initSeaders } from '../../../api/src/database/seeds';
process.env.API_KEY = 'a869c7b6f3a117679ccda7e6932a8400';
jest.useFakeTimers();
jest.disableAutomock();

describe('Movies', async () => {
  afterAll(async () => {
    await truncate();
  });

  it('if I initialize the seeders and make a query it works the route', async (done) => {
    await initSeaders();
    const response = await request(app).get('/movies');
    expect(response.status).toBe(200);
    expect(response.body.data).toBeDefined();
    done();
  });

  it('if i consult the films route it returns a list', async (done) => {
    const response = await request(app).get('/movies');
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(20);
    done();
  });
});
