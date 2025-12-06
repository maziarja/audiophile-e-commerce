"use server";

import connectDB from "@/lib/database";
import Test, { TestType } from "@/models/test";

export async function getTest(category: string) {
  try {
    console.time("connectDB");
    await connectDB();
    console.timeEnd("connectDB");

    console.time("findOne");
    const test = await Test.findOne({ name: "maz" }).lean();
    console.timeEnd("findOne");

    return test as TestType;
  } catch (err) {
    console.error("getTest error", err);
  }
}
