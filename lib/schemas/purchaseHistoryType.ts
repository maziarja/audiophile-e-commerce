import z from "zod";

export const ProductHistorySchema = z.array(
  z.object({
    items: z.array(
      z.object({
        productId: z.object({
          categoryImage: z.object({
            mobile: z.string(),
            tablet: z.string(),
            desktop: z.string(),
          }),
          name: z.string(),
          price: z.number(),
          _id: z.string(),
        }),
        quantity: z.number(),
        discount: z.number(),
        _id: z.string(),
      }),
    ),
    date: z.string(),
  }),
);

export type ProductHistoryType = z.infer<typeof ProductHistorySchema>;
