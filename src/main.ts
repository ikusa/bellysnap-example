import express from 'express';
import {RequestHandler} from 'express';
import {connect} from './db';
const app = express();
const port = 3000;

let runServer = async () => {
  const db = await connect();

  let test: RequestHandler = async (_, res) => {
    let dbData = await db.collection('Users').insertOne({a: 1});
    res.json(dbData);
  };

  app.get('/', test);

  // tslint:disable-next-line:no-console
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

runServer();
