"use server";

import { auth } from "@/lib/auth";
import connectDB from "@/lib/database";
import { LocalCartType } from "@/lib/schemas/cartType";
import { CheckoutSchema, CheckoutType } from "@/lib/schemas/checkoutType";
import Guest from "@/models/Guests";
import User from "@/models/Users";
import mongoose from "mongoose";

export async function checkout(
  data: CheckoutType,
  loggedInUser: boolean,
  localCart: LocalCartType,
) {
  try {
    await connectDB();
    const validData = CheckoutSchema.safeParse(data);
    if (!validData.success) {
      throw new Error(validData.error.issues[0].message);
    }
    if (loggedInUser) {
      const session = await auth();

      if (session?.user?.email !== validData.data.emailAddress) {
        throw new Error("Wrong email address");
      }
      const user = await User.findOne({ emailAddress: session.user.email });
      if (user) {
        user.fullName = validData.data.fullName;
        user.phoneNumber = validData.data.phoneNumber;
        user.address = validData.data.address;
        user.zipcode = validData.data.zipcode;
        user.city = validData.data.city;
        user.country = validData.data.country;
        user.paymentMethod = validData.data.paymentMethod;
      }
      await user?.save();
      return { success: true };
    }

    if (!loggedInUser) {
      const formattedLocalCart = localCart.map((cart) => ({
        ...cart,
        productId: new mongoose.Types.ObjectId(cart.productId),
        discount: 0,
      }));

      await Guest.create({
        cart: formattedLocalCart,
        emailAddress: validData.data.emailAddress,
        fullName: validData.data.fullName,
        phoneNumber: validData.data.phoneNumber,
        address: validData.data.address,
        zipcode: validData.data.zipcode,
        city: validData.data.city,
        country: validData.data.country,
        paymentMethod: validData.data.paymentMethod,
      });
      return { success: true };
    }
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
