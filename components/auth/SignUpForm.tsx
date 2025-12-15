import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema, AuthType } from "@/lib/schemas/authType";
import { signUp } from "@/app/_actions/users/signUp";
import Spinner from "../ui/spinner";

type Props = {
  onActiveTab: React.Dispatch<React.SetStateAction<"signIn" | "joinUs">>;
};

function SignUpForm({ onActiveTab }: Props) {
  const form = useForm({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
    },
  });

  async function onSubmit(data: AuthType) {
    const result = await signUp(data);
    if (result?.success) {
      onActiveTab("signIn");
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4">
      <FieldGroup>
        <Controller
          name="emailAddress"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Password</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="password"
                aria-invalid={fieldState.invalid}
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button type="submit" className="w-full rounded-md text-white">
        {!form.formState.isSubmitting ? "  Join for Free" : <Spinner />}
      </Button>
    </form>
  );
}

export default SignUpForm;
