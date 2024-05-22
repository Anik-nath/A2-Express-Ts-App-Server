import { Request, Response } from 'express';
import { orderServices } from './orders.services';
import orderValidatdSchema from './orders.validation';
import { errorhandler } from '../errorHandler/error.handler';
import Product from '../products/products.model';

const createOrders = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;
    const zodValidateData = orderValidatdSchema.parse(orderData);
    const product = await Product.findById(zodValidateData.productId);

    if (!product) {
      return errorhandler.productNotFoundHandler(req, res);
    } else if (zodValidateData.quantity > product.inventory.quantity) {
      return errorhandler.insufficientHandler(req, res);
    } else {
      // Update quantity
      product.inventory.quantity =
        product.inventory.quantity - zodValidateData.quantity;
      // update instock status
      if (product.inventory.quantity === 0) {
        product.inventory.inStock = false;
      }
      await product.save();
      // create orders
      const result = await orderServices.createOrdersFromDb(zodValidateData);
      res.status(200).json({
        success: true,
        message: 'Order created successfully!',
        data: result,
      });
    }
  } catch (error) {
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to create order!',
        error,
      });
    }
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  const { email } = req.query;

  if (!email) {
    try {
      const result = await orderServices.getAllOrdersFromDB();
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    } catch (error) {
      if (error) {
        res.status(500).json({
          success: false,
          message: 'Failed to fetch order!',
          error,
        });
      }
    }
  } else {
    try {
      const result = await orderServices.searchOrderFromDB(email as string);
      if (result.length === 0) {
        return errorhandler.orderNotFoundHandler(req, res);
      } else {
        res.status(200).json({
          success: true,
          message: 'Orders search successfully!',
          data: result,
        });
      }
    } catch (error) {
      if (error) {
        res.status(500).json({
          success: false,
          message: 'Failed to search order!',
          error,
        });
      }
    }
  }
};

export const ordersController = {
  createOrders,
  getAllOrders,
};
