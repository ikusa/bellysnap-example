import express from 'express';
import {db} from './db';
import routes from './route';

const app = express();
const port = 3000;

let runServer = async () => {
  app.locals.db = await db;
  app.use('/api', routes);
  // tslint:disable-next-line:no-console
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

runServer();
