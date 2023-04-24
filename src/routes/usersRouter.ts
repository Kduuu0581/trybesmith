import { Router } from 'express';
import usersController from '../controllers/usersController';

const router = Router();

router.post('/', usersController.createUser);

export default router;