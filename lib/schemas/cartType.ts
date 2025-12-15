import z from "zod";

export const LocalCartSchema = z.array(
  z.object({
    productId: z.string(),
    quantity: z.number(),
  }),
);

export type LocalCartType = z.infer<typeof LocalCartSchema>;

export const DBCartSchema = z.array(
  z.object({
    productId: z.string(),
    quantity: z.number(),
    discount: z.number(),
  }),
);

export type DBCartType = z.infer<typeof DBCartSchema>;
