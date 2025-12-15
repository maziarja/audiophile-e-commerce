"use server";

import { auth } from "@/lib/auth";
import connectDB from "@/lib/database";
import { convertToObject } from "@/lib/helpers/convertToObject";
import { DBProductsCartSchema } from "@/lib/schemas/productType";
import User from "@/models/Users";

export async function getDBCartProducts() {
  await connectDB();
  const session = await auth();

  const productDoc = await User.findById(session?.user?.id)
    .select(["cart", "_id"])
    .populate({
      path: "cart.productId",
      select: ["_id", "price", "categoryImage", "name", "discount"],
    })
    .lean();

  const userCart = convertToObject(productDoc?.cart);
  const validProduct = DBProductsCartSchema.safeParse(userCart);

  if (!validProduct.success) {
    throw new Error(validProduct.error.issues[0].message);
  }

  return validProduct.data;
}
