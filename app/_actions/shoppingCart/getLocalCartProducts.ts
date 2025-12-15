"use server";

import connectDB from "@/lib/database";
import { convertToObject } from "@/lib/helpers/convertToObject";
import { LocalProductCartSchema } from "@/lib/schemas/productType";
import Product from "@/models/Products";

export async function getLocalCartProducts(productId: string[]) {
  await connectDB();

  const productDoc = await Product.find({
    _id: { $in: productId },
  })
    .select(["_id", "price", "categoryImage", "name"])
    .lean();

  const product = convertToObject(productDoc);
  const validProduct = LocalProductCartSchema.safeParse(product);

  if (!validProduct.success) {
    throw new Error(validProduct.error.issues[0].message);
  }

  return validProduct.data;
}
