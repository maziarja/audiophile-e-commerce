"use server";

import { signIn } from "@/lib/auth";
import { AuthSchema, AuthType } from "@/lib/schemas/authType";

export async function signInCredential(data: AuthType) {
  try {
    const validData = AuthSchema.safeParse(data);
    if (!validData.success) {
      throw new Error(validData.error.issues[0].message);
    }
    await signIn("credentials", {
      emailAddress: validData.data.emailAddress,
      password: validData.data.password,
      redirect: false,
    });
    return { success: true };
  } catch (error) {
    console.error(error);
  }
}
