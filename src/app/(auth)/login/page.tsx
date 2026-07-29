import LoginForm from "@/features/auth/components/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold">Welcome Back</h1>

        <p className="mt-2 text-muted-foreground">Sign in to your account</p>
      </div>

      <LoginForm />

      <div className="mt-6 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-primary hover:underline"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
}
