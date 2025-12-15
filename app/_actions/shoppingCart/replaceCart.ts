"use server";

import { auth } from "@/lib/auth";
import { REGISTRATION_DISCOUNT } from "@/lib/const";
import connectDB from "@/lib/database";
import { LocalCartType } from "@/lib/schemas/cartType";
import User from "@/models/Users";
import { Types } from "mongoose";
import { revalidatePath } from "next/cache";

export async function replaceCart(cart: LocalCartType) {
  try {
    await connectDB();
    const session = await auth();
    if (!session) throw new Error("You must login first");
    const user = await User.findById(session.user?.id);

    if (user)
      user.cart = cart.map((item) => ({
        ...item,
        productId: new Types.ObjectId(item.productId),
        discount: REGISTRATION_DISCOUNT,
      }));

    await user?.save();
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error(error);
  }
}
