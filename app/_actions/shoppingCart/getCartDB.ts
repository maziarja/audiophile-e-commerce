"use server";

import { auth } from "@/lib/auth";
import connectDB from "@/lib/database";
import { convertToObject } from "@/lib/helpers/convertToObject";
import { DBCartSchema } from "@/lib/schemas/cartType";
import User from "@/models/Users";

export async function getCartDB() {
  await connectDB();
  const session = await auth();
  if (!session?.user) throw new Error("You must login first");

  const userCartDoc = await User.findById(session.user.id)
    .select(["cart", "-_id"])
    .lean();

  const userCart = convertToObject(userCartDoc?.cart);
  const validUserCart = DBCartSchema.safeParse(userCart);

  if (!validUserCart.success) {
    throw new Error(validUserCart.error.issues[0].message);
  }

  return validUserCart.data;
}
