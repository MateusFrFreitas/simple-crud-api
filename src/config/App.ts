import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import routes from '@routes/Index';
import { errorMiddleware } from '@middlewares/errorMiddleware';

class App {
  public server: Application;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.errorMiddleware();
  }

  middlewares() {
    this.server.use(helmet());
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  errorMiddleware() {
    this.server.use(errorMiddleware);
  }
}

export default new App().server;
