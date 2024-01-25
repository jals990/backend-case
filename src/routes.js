import Router from 'express';

import Healthcheck from './utils/healthcheck';
import Version from './utils/version';

import zDev from './app/controllers/zDevelopmentController';

import File from './app/controllers/FileController';

const routes = new Router();

routes.post('/dev', zDev.dev);
routes.get('/healthcheck', Healthcheck.valid);
routes.get("/version", Version.valid);

routes.delete("/file/delete", File.delete);
routes.get("/file/filter", File.filter);
routes.put("/file/update", File.update);
routes.post("/file/upload", File.upload);

export default routes;
