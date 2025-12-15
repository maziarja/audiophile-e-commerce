"use server";

import { auth } from "@/lib/auth";
import connectDB from "@/lib/database";
import { DBCartType } from "@/lib/schemas/cartType";
import User from "@/models/Users";
import { Types } from "mongoose";
import { revalidatePath } from "next/cache";

export async function addToDBCart(cart: DBCartType[0]) {
  await connectDB();

  const session = await auth();
  if (!session?.user) {
    throw new Error("You must login first");
  }

  const user = await User.findById(session.user.id);
  if (user) {
    const userCart = user.cart;
    if (userCart) {
      const existingItem = userCart.find(
        (obj) => obj.productId.toString() === cart.productId,
      );

      let newCart;

      if (existingItem) {
        const updatedQuantity = existingItem.quantity + cart.quantity;

        if (updatedQuantity <= 0) {
          // remove item if quantity becomes 0 or negative
          newCart = userCart.filter(
            (obj) => obj.productId.toString() !== cart.productId,
          );
        } else {
          // update quantity
          newCart = userCart.map((obj) =>
            obj.productId.toString() === cart.productId
              ? { ...obj, quantity: updatedQuantity }
              : obj,
          );
        }
      } else {
        // add only if quantity is positive
        if (cart.quantity > 0) {
          newCart = [
            ...userCart,
            { ...cart, productId: new Types.ObjectId(cart.productId) },
          ];
        } else {
          newCart = userCart;
        }
      }

      revalidatePath("/");
      user.cart = newCart;
      await user.save();
      return { success: true };
    }
  }
}
