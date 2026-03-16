import { AuthShell } from "@/components/auth/auth-shell";
import { SignupForm } from "@/components/auth/signup-form";

export const metadata = {
  title: "Sign up"
};

export default function Signup() {
  return (
    <AuthShell
      title="Create your account"
      description="Start in minutes. Upgrade anytime."
    >
      <SignupForm />
    </AuthShell>
  );
}

