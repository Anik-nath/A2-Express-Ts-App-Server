import express, { Request, Response } from 'express';
import cors from 'cors';
import { productRoutes } from './modules/products/procducts.route';
import { orderRoutes } from './modules/orders/orders.route';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req: Request, res: Response) => {
  const assignmentNo: number = 2;

  res.send(`Express and Typescript project assignment ${assignmentNo} server`);
});
export default app;
