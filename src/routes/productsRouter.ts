import { Router } from 'express';
import productsController from '../controllers/productsController';

const router = Router();

router.post('/', productsController.createProduct);
router.get('/', productsController.getProduct);

export default router;