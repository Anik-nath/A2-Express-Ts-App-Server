import express from 'express';
import { productController } from './products.controller';

const router = express.Router();

// all routes for products
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getSingleProduct);
router.post('/create-product', productController.createProduct);
router.delete('/:productId', productController.deleteSingleProduct);
router.put('/:productId', productController.upadateSingleProduct);

export const productRoutes = router;
