import {RequestHandler} from 'express';
import promiseUserModel from '../models/User';

export const getUsers: RequestHandler = async (_, res) => {
  let userModel = await promiseUserModel;
  let dbData = await userModel.getUsers();
  res.json(dbData);
};
