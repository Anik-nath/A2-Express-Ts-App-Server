import { model } from 'mongoose';
import { Iproduct } from './products.interface';
import productSchema from './products.schema';

// make Product model
const Product = model<Iproduct>('Product', productSchema);

export default Product;
