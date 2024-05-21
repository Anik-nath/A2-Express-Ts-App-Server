//2. make schema
import { Schema } from 'mongoose';
import { Inventory, Iproduct, Variant } from './products.interface';

// variant schema
const variantSchema = new Schema<Variant>(
  {
    type: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false },
);
// inventory schema
const inventorySchema = new Schema<Inventory>(
  {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  { _id: false },
);
//product schema
const productSchema = new Schema<Iproduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [variantSchema], required: true },
    inventory: { type: inventorySchema, required: true },
    // isDeleted: { type: Boolean, default: false },
  },
  { versionKey: false },
);
export default productSchema;
