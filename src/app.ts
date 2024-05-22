import express, { Request, Response } from 'express';
import cors from 'cors';
import { productRoutes } from './App/modules/products/procducts.route';
import { orderRoutes } from './App/modules/orders/orders.route';
// import { errorhandler } from './App/modules/errorHandler/error.handler';

const app = express();

// middlware
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
// app.all('*', (req: Request, res: Response) => {
//   res.status(400).json({
//     success: false,
//     message: 'Route not found',
//   });
// });

app.get('/', (req: Request, res: Response) => {
  const assignmentNo: number = 2;

  res.send(`Express and Typescript project assignment ${assignmentNo} server`);
});
export default app;
