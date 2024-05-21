import express from 'express';
import { productController } from './products.controller';

const router = express.Router();

// create-product route
router.post('/create-product', productController.createProduct);

export const productRoutes = router;
