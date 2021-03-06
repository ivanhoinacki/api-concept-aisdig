import cors from 'cors';

import { initSeaders } from '../src/database/seeds';
import models from '../src/app/models';
import express from 'express';
import routes from './routes';
class App {
  constructor() {
    this.server = express();
    this.initServer();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  initServer = async () => {
    models.sequelize
      .sync()
      .then(async (success) => {
        console.log(
          `db-postgres listening at http://[${success.options.host}]:${success.options.port}`
        );
        try {
          let intgration = await initSeaders();
          console.log(intgration.msg);
        } catch (error) {
          console.log(error);
        }
      })
      .catch((error) => {
        console.error(error);
        console.log('New connection attempt in 10sec...');
        setTimeout(() => {
          this.initServer();
        }, 10000);
      });
  };
}
export default new App().server;
