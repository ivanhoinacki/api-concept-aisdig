import request from 'supertest';
import app from '../../src/app';
jest.useFakeTimers();
jest.disableAutomock();

describe('Session', () => {
  /**
   * A criacao dos testes referece a ordem de codificacao do controller, cada condicao
   * deve ser testada.
   * basedo no grafico informado no coverage
   */
  it('if I search the movies route, it returns a list of movies', async (done) => {
    const response = await request(app).get('/movies');

    expect(response.body.data).toBeDefined(); // token retornado e decodificado
    done();
  });
});
