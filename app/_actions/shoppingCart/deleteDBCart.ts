"use server";

import { auth } from "@/lib/auth";
import connectDB from "@/lib/database";
import User from "@/models/Users";
import { revalidatePath } from "next/cache";

export async function deleteDBCart() {
  await connectDB();
  const session = await auth();
  if (!session?.user) {
    throw new Error("You must login first");
  }

  const currentUser = await User.findById(session.user.id);
  if (!currentUser) return;
  currentUser.cart = [];
  await currentUser.save();
  revalidatePath("/");
}
