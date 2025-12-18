import z from "zod";

export const CheckoutSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, "Full name must be at least 2 characters"),
    emailAddress: z
      .email("Please enter a valid email address")
      .trim()
      .min(4, "Email address is too short")
      .toLowerCase(),
    phoneNumber: z.string().trim().min(15, "Phone number is incomplete"),
    address: z
      .string()
      .min(5, "Address must be at least 5 characters")
      .max(100, "Address must be less than 100 characters"),
    zipcode: z
      .string()
      .min(5, "Zip code must be exactly 5 digits")
      .max(5, "Zip code must be exactly 5 digits"),
    city: z
      .string()
      .min(2, "City name is too short")
      .max(50, "City name is too long"),
    country: z
      .string()
      .min(2, "Country name is too short")
      .max(50, "Country name is too long"),
    paymentMethod: z
      .union([z.literal("e-money"), z.literal("cash")])
      .nullable(),
    eMoneyNumber: z
      .string()
      .trim()
      .max(9, "E-money number must be 9 digits")
      .optional(),
    eMoneyPin: z
      .string()
      .trim()
      .max(4, "E-money PIN must be 4 digits")
      .optional(),
  })
  .superRefine((value, ctx) => {
    if (!value.paymentMethod) {
      ctx.addIssue({
        code: "custom",
        path: ["paymentMethod"],
        message: "Please select a payment method",
      });
    }

    if (value.paymentMethod === "e-money") {
      if (!value.eMoneyNumber) {
        ctx.addIssue({
          code: "custom",
          path: ["eMoneyNumber"],
          message: "E-money number is required",
        });
      }

      if (!value.eMoneyPin) {
        ctx.addIssue({
          code: "custom",
          path: ["eMoneyPin"],
          message: "E-money pin is required",
        });
      }
    }
  });

export type CheckoutType = z.infer<typeof CheckoutSchema>;
