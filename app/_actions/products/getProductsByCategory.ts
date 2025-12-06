"use server";

import { convertToObject } from "@/lib/convertToObject";
import connectDB from "@/lib/database";
import {
  ProductsByCategorySchema,
  ProductType,
} from "@/lib/schemas/productType";
import Product from "@/models/Products";

export async function getProductByCategory(category: string) {
  try {
    await connectDB();
    console.log("Fetching products for category:", category);
    const productsDoc = await Product.find({ category }).lean();
    console.log("Products fetched:", productsDoc.length);
    // .sort({ _id: -1 })
    // .select(["categoryImage", "description", "new", "name", "category"])

    const products = convertToObject(productsDoc);

    // const result = ProductsByCategorySchema.safeParse(products);
    // if (!result.success) {
    //   throw new Error("Error: " + result.error.issues[0].message);
    // }

    // if (result.success) return result.data;
    return products as ProductType[];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products");
  }
}
