import express from 'express';
import { ordersController } from './orders.controller';

const router = express.Router();

router.post('/', ordersController.createOrders);
router.get('/',ordersController.getAllOrders)

export const orderRoutes = router;
