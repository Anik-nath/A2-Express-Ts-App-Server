import Iorders from './orders.interface';
import Order from './orders.model';

// order creation function
const createOrdersFromDb = async (orderData: Iorders) => {
  const result = await Order.create(orderData);
  return result;
};
// get all products function
const getAllOrdersFromDB = async () => {
  const result = await Order.find();
  return result;
};
// order search function by email
const searchOrderFromDB = async (email: string) => {
  const regex = new RegExp(email, 'i');
  const result = await Order.find({ email: regex });
  return result;
};

export const orderServices = {
  createOrdersFromDb,
  getAllOrdersFromDB,
  searchOrderFromDB,
};
