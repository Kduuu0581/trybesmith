import { Router } from 'express';
import usersController from '../controllers/usersController';

const loginRouter = Router();

loginRouter.post('/', usersController.loginUser);

export default loginRouter;