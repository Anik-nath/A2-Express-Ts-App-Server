import { Request, Response } from 'express';

// insufficient quantity error handler
function insufficientHandler(req: Request, res: Response) {
  res.status(404).json({
    success: false,
    message: 'Insufficient quantity available in inventory',
  });
}
// route not found error handler
function notFoundHandler(req: Request, res: Response) {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
}
// order not found error handler
function orderNotFoundHandler(req: Request, res: Response) {
  res.status(404).json({
    success: false,
    message: 'Order not found',
  });
}
// product not found error handler
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
