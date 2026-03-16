"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export function ResetForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast({
      title: "Reset link sent (demo)",
      description: "Check your inbox for a reset email."
    });
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required placeholder="you@company.com" />
      </div>
      <Button type="submit" disabled={loading} className="mt-1">
        {loading ? "Sending..." : "Send reset link"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Back to{" "}
        <Link href="/auth/login" className="text-foreground hover:underline">
          sign in
        </Link>
        .
      </p>
    </form>
  );
}

