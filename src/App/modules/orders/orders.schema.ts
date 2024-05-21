import { Schema } from 'mongoose';
import Iorders from './orders.interface';

const orderSchema = new Schema<Iorders>(
  {
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  { versionKey: false },
);
export default orderSchema;
