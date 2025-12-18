"use server";

import bcrypt from "bcryptjs";
import connectDB from "@/lib/database";
import { AuthSchema, AuthType } from "@/lib/schemas/authType";
import User from "@/models/Users";

export async function signUp(data: AuthType) {
  try {
    await connectDB();
    const validData = AuthSchema.safeParse(data);
    if (!validData.success) {
      throw new Error(validData.error.issues[0].message);
    }
    const hashedPassword = await bcrypt.hash(validData.data.password, 10);

    await User.create({
      emailAddress: validData.data.emailAddress,
      password: hashedPassword,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
