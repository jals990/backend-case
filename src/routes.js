import Router from 'express';

import Healthcheck from './utils/healthcheck';
import Version from './utils/version';

import zDev from './app/controllers/zDevelopmentController';

const routes = new Router();

routes.post('/dev', zDev.dev);
routes.get('/healthcheck', Healthcheck.valid);
routes.get("/version", Version.valid);

export default routes;
