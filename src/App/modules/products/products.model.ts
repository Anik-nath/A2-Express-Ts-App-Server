//3. make product model
import { model } from 'mongoose';
import { Iproduct } from './products.interface';
import productSchema from './products.schema';

// model
const Product = model<Iproduct>('Product', productSchema);

export default Product;
