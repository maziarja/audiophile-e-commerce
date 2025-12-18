"use server";

import connectDB from "@/lib/database";
import { getDBCartProducts } from "../shoppingCart/getDBCartProducts";
import Guest from "@/models/Guests";
import { convertToObject } from "@/lib/helpers/convertToObject";
import { DBProductsCartSchema } from "@/lib/schemas/productType";

export async function confirmation(
  loggedInUser: boolean,
  emailAddress: string,
) {
  try {
    await connectDB();

    if (loggedInUser) {
      const confirmationCart = await getDBCartProducts();
      return confirmationCart;
    }

    if (!loggedInUser) {
      const productDoc = await Guest.findOne({ emailAddress })
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
  } catch (error) {
    console.error(error);
  }
}
