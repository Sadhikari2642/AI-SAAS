import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "@/components/auth/login-form";

export const metadata = {
  title: "Login"
};

export default function Login() {
  return (
    <AuthShell
      title="Welcome back"
      description="Sign in to your workspace to continue."
    >
      <LoginForm />
    </AuthShell>
  );
}

