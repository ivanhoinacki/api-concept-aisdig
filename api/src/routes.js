import { Router } from 'express';
import morgan from 'morgan';

import MoviesController from './app/controllers/MoviesController';

const routes = new Router();
if (
  process.env.NODE_ENV === 'development' &&
  process.env.NODE_ENV === 'production'
) {
  routes.use(morgan('dev'));
}

routes.get('/movies', MoviesController.getAll);

export default routes;
