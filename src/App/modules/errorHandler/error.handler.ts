import { Request, Response } from 'express';

function insufficientHandler(req: Request, res: Response) {
  res.status(404).json({
    success: false,
    message: 'Insufficient quantity available in inventory',
  });
}
function notFoundHandler(req: Request, res: Response) {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
}
function orderNotFoundHandler(req: Request, res: Response) {
  res.status(404).json({
    success: false,
    message: 'Order not found',
  });
}
function productNotFoundHandler(req: Request, res: Response) {
  res.status(404).json({
    success: false,
    message: 'Product not found',
  });
}

export const errorhandler = {
  notFoundHandler,
  orderNotFoundHandler,
  insufficientHandler,
  productNotFoundHandler,
};
