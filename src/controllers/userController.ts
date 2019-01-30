import {RequestHandler} from 'express';
import {Db} from 'mongodb';

export const getUsers: RequestHandler = async (req, res) => {
  const db: Db = req.app.locals.db;
  let dbData = await db
    .collection('Users')
    .find()
    .toArray();
  res.json(dbData);
};
