import { Request, Response } from 'express';
import { productServices } from './products.services';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    //call service
    const result = await productServices.createProductDB(productData);
    //send status
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to create product!',
        error,
      });
    }
  }
};
export const productController = { createProduct };
