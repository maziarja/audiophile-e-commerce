"use server";

import { auth } from "@/lib/auth";

export async function isLoggedInUser() {
  const session = await auth();
  return session?.user ? true : false;
}
