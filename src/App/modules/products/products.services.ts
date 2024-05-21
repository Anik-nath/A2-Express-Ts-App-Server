import { Iproduct } from './products.interface';
import Product from './products.model';

//create a document for product
const createProductDB = async (productData: Iproduct) => {
  const result = await Product.create(productData);
  return result;
};
// .....more.....

export const productServices = { createProductDB };
