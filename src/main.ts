import express from 'express';
import {getDB} from './db';
import routes from './routes';

const app = express();
const port = 3000;

let runServer = async () => {
  app.locals.db = await getDB();
  app.use('/api', routes);
  app.listen(port, () =>
    // tslint:disable-next-line:no-console
    console.log(`Example app listening on port http://localhost:${port} !`),
  );
};

runServer();
