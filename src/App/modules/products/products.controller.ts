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

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProductsDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    if (error) {
      res.status(500).json({
        success: true,
        message: 'Product fetched Failed!',
        error,
      });
    }
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSignleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: `Product fetched successfully!`,
      data: result,
    });
  } catch (error) {
    if (error) {
      res.status(500).json({
        success: true,
        message: 'Product fetched Failed!',
        error,
      });
    }
  }
};

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = productServices.deleteSingleProductFromDB(productId);

    if ((await result).deletedCount > 0) {
      res.status(200).json({
        success: true,
        message: 'Product deleted successfully!',
        data: null,
      });
    }
  } catch (error) {
    if (error) {
      res.status(500).json({
        success: true,
        message: 'Product Delete Failed!',
        error,
      });
    }
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteSingleProduct,
};
