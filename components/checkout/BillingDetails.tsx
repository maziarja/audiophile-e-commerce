import { Controller, UseFormReturn } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { CheckoutType } from "@/lib/schemas/checkoutType";

type Props = {
  form: UseFormReturn<CheckoutType>;
  emailAddress: string;
};

function BillingDetails({ form, emailAddress }: Props) {
  return (
    <div className="md:mb-[53px]">
      <p className="mb-4 text-[13px] leading-[25px] font-bold tracking-[0.93] text-[#d87d4a] uppercase">
        billing details
      </p>
      <div className="space-y-6 md:grid md:grid-cols-2 md:gap-x-4">
        <Controller
          control={form.control}
          name="fullName"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="capitalize" htmlFor={field.name}>
                Full Name
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Alexei Ward"
                autoComplete="off"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="emailAddress"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="capitalize" htmlFor={field.name}>
                Email Address
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="alexei@mail.com"
                autoComplete="off"
                onChange={(e) => {
                  if (emailAddress) {
                    const value = emailAddress;
                    field.onChange(value);
                  } else {
                    const value = e.target.value;
                    field.onChange(value);
                  }
                }}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="phoneNumber"
          render={({ field, fieldState }) => {
            return (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="capitalize" htmlFor={field.name}>
                  Phone Number
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="tel"
                  aria-invalid={fieldState.invalid}
                  placeholder="+1 202-555-0136"
                  autoComplete="off"
                  onChange={(e) => {
                    const value = e.target.value;
                    // keep only digits
                    const digits = value.replace(/\D/g, "");
                    // format: +1 202-555-0136
                    let formatted = "+";
                    if (digits.length > 0) {
                      formatted += digits.slice(0, 1);
                    }
                    if (digits.length > 1) {
                      formatted += " " + digits.slice(1, 4);
                    }
                    if (digits.length > 4) {
                      formatted += "-" + digits.slice(4, 7);
                    }
                    if (digits.length > 7) {
                      formatted += "-" + digits.slice(7, 11);
                    }
                    field.onChange(formatted);
                  }}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            );
          }}
        />
      </div>
    </div>
  );
}

export default BillingDetails;
