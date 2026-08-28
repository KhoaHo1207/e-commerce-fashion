import SignUpForm from "@/components/auth/sign-up-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create an account to start shopping",
};

export default function SignUpPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-16">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-foreground text-3xl font-bold">Create Account</h2>

          <p className="text-muted-foreground mt-3">
            Join us and start shopping your favorite styles.
          </p>
        </div>
        {/* Form */}
        <div className="mt-8">
          <SignUpForm />
        </div>
      </div>
    </section>
  );
}
