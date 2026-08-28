import { z } from "zod";

export const signUpSchema = z
  .object({
    fullName: z
      .string({ error: "Full name is required" })
      .min(3, { message: "Full name must be at least 3 characters" }),
    email: z
      .string({ error: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string({ error: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string({ error: "Confirm password is required" })
      .min(8, { message: "Confirm password must be at least 8 characters" }),
  })
  .strict()
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;

export const signInSchema = z
  .object({
    email: z
      .string({ error: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string({ error: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" }),
  })
  .strict();

export type SignInSchema = z.infer<typeof signInSchema>;
