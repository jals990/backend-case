import express from 'express';
import cors from 'cors';
import Youch from 'youch';
import 'express-async-errors';
import routes from './routes';
import 'dotenv/config';

class App {
  constructor() {
    this.server = express();
     this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Erro interno do servidor' });
    });
  }
}

export default new App().server;
