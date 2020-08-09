import request from 'supertest';

import app from '../../src/app';
import truncate from '../utils/truncate';
import { initSeaders } from '../../../api/src/database/seeds';

jest.useFakeTimers();
jest.disableAutomock();

describe('Movies', async () => {
  beforeAll(async () => {
    process.env.API_KEY = 'a869c7b6f3a117679ccda7e6932a8400';
    await initSeaders();
  });

  afterAll(async () => {
    await truncate();
  });

  it('if I search the movies route, it returns a list of movies', async (done) => {
    const response = await request(app).get('/movies');

    expect(response.status).toBe(200);
    expect(response.body.data).toBeDefined();
    expect(response.body.data.length).toBe(20);
    done();
  });
});
