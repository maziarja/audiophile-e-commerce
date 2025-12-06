import z from "zod";

export const ProductSchema = z.object({
  _id: z.string(),
  slug: z.string(),
  name: z.string(),
  image: z.object({
    mobile: z.string(),
    tablet: z.string(),
    desktop: z.string(),
  }),
  category: z.string(),
  categoryImage: z.object({
    mobile: z.string(),
    tablet: z.string(),
    desktop: z.string(),
  }),
  new: z.boolean(),
  price: z.number(),
  description: z.string(),
  features: z.string(),
  includes: z.array(
    z.object({
      quantity: z.number(),
      item: z.string(),
    }),
  ),

  gallery: z.object({
    first: z.object({
      mobile: z.string(),
      tablet: z.string(),
      desktop: z.string(),
    }),
    second: z.object({
      mobile: z.string(),
      tablet: z.string(),
      desktop: z.string(),
    }),
    third: z.object({
      mobile: z.string(),
      tablet: z.string(),
      desktop: z.string(),
    }),
  }),

  others: z.array(
    z.object({
      slug: z.string(),
      name: z.string(),
      image: z.object({
        mobile: z.string(),
        tablet: z.string(),
        desktop: z.string(),
      }),
    }),
  ),
});

export const ProductsSchema = z.array(ProductSchema);
export type ProductType = z.infer<typeof ProductSchema>;

const ProductByCategorySchema = ProductSchema.pick({
  _id: true,
  // categoryImage: true,
  // description: true,
  // new: true,
  name: true,
  // category: true,
});

export const ProductsByCategorySchema = z.array(ProductByCategorySchema);
export type ProductTypeByCategory = z.infer<typeof ProductByCategorySchema>;
