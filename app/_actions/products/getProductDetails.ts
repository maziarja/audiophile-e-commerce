"use server";

import { convertToObject } from "@/lib/convertToObject";
import connectDB from "@/lib/database";
import { ProductSchema } from "@/lib/schemas/productType";
import Product from "@/models/Products";

export async function getProductDetails(id: string) {
  try {
    await connectDB();
    const productDoc = await Product.findById(id).lean();
    const product = convertToObject(productDoc);
    const result = ProductSchema.safeParse(product);
    if (!result.success) {
      throw new Error("Error:" + result.error.issues[0].message);
    }
    if (result.success) return result.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch this product");
  }
}
