import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/constrollers/UserController';
import SessionController from './app/constrollers/SessionController';
import FileController from './app/constrollers/FileController';
import ProvidersController from './app/constrollers/ProvidersController';

import authMiddleware from './app/middlewares/auth';
import AppointmentsController from './app/constrollers/AppointmentsController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), FileController.store);
routes.get('/providers', ProvidersController.index);

routes.get('/appointments', AppointmentsController.index);
routes.post('/appointments', AppointmentsController.store);
export default routes;
