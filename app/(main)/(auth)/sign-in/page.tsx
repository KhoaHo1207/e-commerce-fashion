import SignInForm from "@/components/auth/sign-in-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account to start shopping",
};

export default function SignInPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-16">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-foreground text-3xl font-bold">Sign In</h2>

          <p className="text-muted-foreground mt-3">
            Sign in to your account to continue shopping.
          </p>
        </div>
        {/* Form */}
        <div className="mt-8">
          <SignInForm />
        </div>
      </div>
    </section>
  );
}
