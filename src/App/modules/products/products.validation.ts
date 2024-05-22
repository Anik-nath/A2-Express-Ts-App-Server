import { z } from 'zod';

// variant schema validation
const variantValidateSchema = z.object({
  type: z.string().min(1, { message: 'Type is required.' }),
  value: z.string().min(1, { message: 'Value is required.' }),
});
// inventory schema validation
const inventoryValidateSchema = z.object({
  quantity: z
    .number()
    .nonnegative({ message: 'Quantity must be non-negative.' })
    .refine((val) => Number.isInteger(val), {
      message: 'Quantity must be an integer.',
    }),
  inStock: z.boolean({ message: 'InStock must be a boolean.' }),
});
// product schema validation
const productValidateSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  description: z.string().min(1, { message: 'Description is required.' }),
  price: z.number().positive({ message: 'Price must be positive.' }),
  category: z.string().min(1, { message: 'Category is required.' }),
  tags: z
    .array(z.string().min(1, { message: 'Tags must be non-empty.' }))
    .min(1, { message: 'At least one tag is required.' }),
  variants: z
    .array(variantValidateSchema)
    .min(1, { message: 'At least one variant is required.' }),
  inventory: inventoryValidateSchema,
});
export default productValidateSchema;
