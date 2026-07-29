import RegisterForm from "@/features/auth/components/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold">Create Account</h1>

        <p className="mt-2 text-muted-foreground">
          Create your account to get started
        </p>
      </div>

      <RegisterForm />

      <div className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-primary hover:underline"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
