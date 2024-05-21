import { Iproduct } from './products.interface';
import Product from './products.model';

//create a document for product
const createProductDB = async (productData: Iproduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductsDB = async () => {
  const result = await Product.find();
  return result;
};

const getSignleProductFromDB = async (id: string) => {
  const result = await Product.findOne({ _id: id });
  return result;
};

const deleteSingleProductFromDB = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

export const productServices = {
  createProductDB,
  getAllProductsDB,
  getSignleProductFromDB,
  deleteSingleProductFromDB,
};
