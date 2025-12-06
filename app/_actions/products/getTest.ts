"use server";

import connectDB from "@/lib/database";
import Test, { TestType } from "@/models/test";

export async function getTest(category: string) {
  try {
    await connectDB();
    const test = await Test.findOne({ name: "maz" }).lean();
    return test as TestType;
  } catch (err) {
    console.log(err);
  }
}
