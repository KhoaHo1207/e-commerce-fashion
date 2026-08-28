"use client";

import { signInSchema, SignInSchema } from "@/validators/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import AuthButton from "./auth-button";
import AuthGoogleButton from "./auth-google-button";
import AuthPrompt from "./auth-prompt";

export default function SignInForm() {
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: SignInSchema) => {
    console.log(data);
  };
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} id="sign-in-form">
      <FieldGroup>
        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                {...field}
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="example@gmail.com"
                autoComplete="off"
                className="px-4 py-6"
                disabled={form.formState.isSubmitting}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                {...field}
                id="password"
                type="password"
                aria-invalid={fieldState.invalid}
                placeholder="Enter your password"
                autoComplete="new-password"
                className="px-4 py-6"
                disabled={form.formState.isSubmitting}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <Link href="/forgot-password">
        <div className="text-muted-foreground hover:text-primary mt-4 cursor-pointer text-right text-sm font-medium hover:underline">
          Forgot Password?
        </div>
      </Link>

      <AuthButton
        label="Sign In"
        className="mt-4"
        type="submit"
        form="sign-in-form"
      />

      <AuthGoogleButton className="mt-4" />

      <AuthPrompt
        message="Don't have an account?"
        linkText="Sign Up"
        href="/sign-up"
        className="mt-6"
      />
    </form>
  );
}
