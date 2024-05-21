//3. make product model
import { model } from 'mongoose';
import { Iproduct } from './products.interface';
import productSchema from './products.schema';

const Product = model<Iproduct>('Product', productSchema);

export default Product;
