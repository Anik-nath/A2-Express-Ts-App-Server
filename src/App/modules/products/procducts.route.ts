import express from 'express';
import { productController } from './products.controller';

const router = express.Router();

// create-product route
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getSingleProduct);
router.post('/create-product', productController.createProduct);
router.delete('/:productId', productController.deleteSingleProduct);

export const productRoutes = router;
