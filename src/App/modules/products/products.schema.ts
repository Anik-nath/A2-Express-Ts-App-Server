//2. make schema
import { Schema } from 'mongoose';
import { Inventory, Iproduct, Variant } from './products.interface';

// variant schema
const variantSchema = new Schema<Variant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});
// inventory schema
const inventorySchema = new Schema<Inventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});
//product schema
const productSchema = new Schema<Iproduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});
export default productSchema;
