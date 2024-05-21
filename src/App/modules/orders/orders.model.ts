import { model } from 'mongoose';
import Iorders from './orders.interface';
import orderSchema from './orders.schema';

const Order = model<Iorders>('Order', orderSchema);
export default Order;
