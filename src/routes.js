import Router from 'express';

import Healthcheck from './utils/healthcheck';
import Version from './utils/version';

import File from './app/controllers/FileController';
import Log from './app/controllers/LogController';
import User from './app/controllers/UserController';

const routes = new Router();

routes.get('/healthcheck', Healthcheck.valid);
routes.get("/version", Version.valid);

routes.delete("/file/delete", File.delete);
routes.get("/file/filter", File.filter);
routes.put("/file/update", File.update);
routes.post("/file/upload", File.upload);

routes.get("/log/filter", Log.filter);

routes.post("/user/create", User.create);
routes.delete("/user/delete", User.delete);
routes.get("/user/filter", User.filter);
routes.put("/user/update", User.update);


export default routes;
