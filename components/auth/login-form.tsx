"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export function LoginForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast({
      title: "Signed in (demo)",
      description: "Wire this up to your auth provider when ready."
    });
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required placeholder="you@company.com" />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center justify-between gap-3">
          <Label htmlFor="password">Password</Label>
          <Link className="text-xs text-muted-foreground hover:text-foreground hover:underline" href="/auth/reset">
            Forgot password?
          </Link>
        </div>
        <Input id="password" name="password" type="password" required placeholder="••••••••" />
      </div>
      <Button type="submit" disabled={loading} className="mt-1">
        {loading ? "Signing in..." : "Sign in"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        New here?{" "}
        <Link href="/auth/signup" className="text-foreground hover:underline">
          Create an account
        </Link>
      </p>
    </form>
  );
}

