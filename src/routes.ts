import express from 'express';
import {getUsers} from './controllers/userController';

let mainRoute = express.Router();

mainRoute.get('/users', getUsers);

export default mainRoute;
