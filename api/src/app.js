import './bootstrap';
import models from '../src/app/models';
import express from 'express';

class App {
  constructor() {
    this.server = express();
    this.initServer();
  }

  initServer = async () => {
    models.sequelize
      .sync()
      .then((success) => {
        console.log(success)
        console.log(
          `db-postgres listening at http://[${success.options.host}]:${success.options.port}`
        );
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
