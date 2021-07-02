import 'reflect-metadata';

import * as dotenv from 'dotenv';
dotenv.config();

import { createConnection } from 'typeorm';

import app from './config/App';

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

createConnection()
  .then(async (connection) => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch(console.error);
