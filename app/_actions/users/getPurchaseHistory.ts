"use server";

import { auth } from "@/lib/auth";
import connectDB from "@/lib/database";
import { convertToObject } from "@/lib/helpers/convertToObject";
import { ProductHistorySchema } from "@/lib/schemas/purchaseHistoryType";
import User from "@/models/Users";

export async function getPurchaseHistory() {
  try {
    await connectDB();

    const session = await auth();

    if (!session) {
      throw new Error("You must login first");
    }

    const purchaseHistory = await User.findOne({
      emailAddress: session?.user?.email,
    })
      .select(["purchaseHistory", "-_id"])
      .populate({
        path: "purchaseHistory.items.productId",
        select: ["_id", "price", "categoryImage", "name", "discount"],
      })
      .lean();

    const purchaseHistoryDoc = convertToObject(
      purchaseHistory?.purchaseHistory,
    );
    const validPurchaseHistory =
      ProductHistorySchema.safeParse(purchaseHistoryDoc);

    if (!validPurchaseHistory.success) {
      throw new Error(validPurchaseHistory.error.issues[0].message);
    }

    return validPurchaseHistory.data;
  } catch (error) {
    console.error(error);
  }
}
