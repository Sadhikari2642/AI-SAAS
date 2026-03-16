import { AuthShell } from "@/components/auth/auth-shell";
import { ResetForm } from "@/components/auth/reset-form";

export const metadata = {
  title: "Reset password"
};

export default function Reset() {
  return (
    <AuthShell
      title="Reset your password"
      description="We’ll email you a secure reset link."
    >
      <ResetForm />
    </AuthShell>
  );
}

