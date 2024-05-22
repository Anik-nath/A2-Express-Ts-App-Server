import { Iproduct } from './products.interface';
import Product from './products.model';

//create a product function
const createProductDB = async (productData: Iproduct) => {
  const result = await Product.create(productData);
  return result;
};
// get all products function
const getAllProductsDB = async () => {
  const result = await Product.find();
  return result;
};
// get a single products function
const getSignleProductFromDB = async (id: string) => {
  const result = await Product.findOne({ _id: id });
  return result;
};
// delete a product function
const deleteSingleProductFromDB = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};
// update a product function
const updateSingleProductFromDB = async (id: string, userData: Iproduct) => {
  const result = await Product.findByIdAndUpdate(
    { _id: id },
    { $set: userData },
    { new: true },
  );
  return result;
};
// search product by searchTerm
const searchProductsDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i');
  const result = await Product.find({
    $or: [
      { name: regex },
      { description: regex },
      { category: regex },
      { tags: { $in: [regex] } },
    ],
  });
  return result;
};

export const productServices = {
  createProductDB,
  getAllProductsDB,
  getSignleProductFromDB,
  deleteSingleProductFromDB,
  updateSingleProductFromDB,
  searchProductsDB,
};
