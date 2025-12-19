import { Controller, UseFormReturn } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { CheckoutType } from "@/lib/schemas/checkoutType";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Input } from "../ui/input";
import IconCashOnDelivery from "../ui/icon-cash-on-delivery";

type Props = {
  form: UseFormReturn<CheckoutType>;
};

const paymentMethod = [
  { method: "e-money", title: "e-Money" },
  { method: "cash", title: "Cash on Delivery" },
];

function PaymentDetails({ form }: Props) {
  const paymentValue = form.watch("paymentMethod");

  return (
    <div>
      <p className="mb-4 text-[13px] leading-[25px] font-bold tracking-[0.93] text-[#d87d4a] uppercase">
        payment details
      </p>
      <div className="space-y-6">
        <Controller
          name="paymentMethod"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="md:grid md:grid-cols-2">
              <p className="mb-.5 text-sm leading-snug font-bold text-black capitalize">
                Payment Method
              </p>
              <RadioGroup
                name={field.name}
                value={field.value}
                onValueChange={field.onChange}
              >
                {paymentMethod.map((method, i) => (
                  <FieldLabel
                    key={i}
                    htmlFor={`form-rhf-radiogroup-${method.method}`}
                  >
                    <Field
                      orientation="horizontal"
                      data-invalid={fieldState.invalid}
                    >
                      <RadioGroupItem
                        value={method.method}
                        id={`form-rhf-radiogroup-${method.method}`}
                        aria-invalid={fieldState.invalid}
                      />
                      {method.title}
                    </Field>
                  </FieldLabel>
                ))}
              </RadioGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        {paymentValue === "e-money" && (
          <div className="space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-x-4">
            <Controller
              control={form.control}
              name="eMoneyNumber"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="capitalize" htmlFor={field.name}>
                    e-Money Number
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    maxLength={9}
                    placeholder="238521993"
                    autoComplete="off"
                    onChange={(e) => {
                      let value = e.target.value;
                      value = value.replace(/\D/g, "");
                      field.onChange(value);
                    }}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="eMoneyPin"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="capitalize" htmlFor={field.name}>
                    e-Money PIN
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="6891"
                    maxLength={4}
                    autoComplete="off"
                    onChange={(e) => {
                      let value = e.target.value;
                      value = value.replace(/\D/g, "");
                      field.onChange(value);
                    }}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
        )}
        {paymentValue === "cash" && (
          <div className="flex items-center gap-8">
            <IconCashOnDelivery />
            <p className="flex-1 text-[15px] leading-[25px] font-medium text-pretty text-black opacity-50">
              The &apos;Cash on Delivery&apos; option enables you to pay in cash
              when our delivery courier arrives at your residence. Just make
              sure your address is correct so that your order will not be
              cancelled.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentDetails;
