import z from "zod";

export const AuthSchema = z.object({
  emailAddress: z.email().trim().min(4).toLowerCase(),
  password: z
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters")
    .toLowerCase(),
});

export type AuthType = z.infer<typeof AuthSchema>;
