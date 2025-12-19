import { Controller, UseFormReturn } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { CheckoutType } from "@/lib/schemas/checkoutType";

type Props = {
  form: UseFormReturn<CheckoutType>;
};

function ShippingInfo({ form }: Props) {
  return (
    <div className="md:mb-[61px]">
      <p className="mb-4 text-[13px] leading-[25px] font-bold tracking-[0.93] text-[#d87d4a] uppercase">
        shipping info
      </p>
      <div className="space-y-6 md:grid md:grid-cols-2 md:gap-x-4">
        <div className="md:col-span-2">
          <Controller
            control={form.control}
            name="address"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="capitalize" htmlFor={field.name}>
                  Your Address
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="1137 Williams Avenue"
                  autoComplete="off"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
        <Controller
          control={form.control}
          name="zipcode"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="capitalize" htmlFor={field.name}>
                ZIP Code
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                onChange={(e) => {
                  let value = e.target.value;
                  // keep only digits
                  value = value.replace(/\D/g, "");
                  field.onChange(value);
                }}
                maxLength={5}
                aria-invalid={fieldState.invalid}
                placeholder="10001"
                autoComplete="off"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="city"
          render={({ field, fieldState }) => {
            return (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="capitalize" htmlFor={field.name}>
                  City
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="New York"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            );
          }}
        />
        <Controller
          control={form.control}
          name="country"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="capitalize" htmlFor={field.name}>
                Country
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="United States"
                autoComplete="off"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>
    </div>
  );
}

export default ShippingInfo;
