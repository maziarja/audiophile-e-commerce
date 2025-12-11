"use server";

import bcrypt from "bcryptjs";
import connectDB from "@/lib/database";
import { AuthType } from "@/lib/schemas/authType";
import User from "@/models/Users";

export async function signUp(data: AuthType) {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    await connectDB();
    await User.create({
      emailAddress: data.emailAddress,
      password: hashedPassword,
    });
  } catch (error) {
    console.error(error);
  }
}
