"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

import { product } from "@/lib/product";
import { Card } from "@/components/ui/card";

export function AuthShell({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container flex min-h-[calc(100dvh-56px)] items-center justify-center py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid size-10 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/20">
              <Sparkles className="size-5 text-primary" />
            </span>
            <span className="text-sm font-semibold tracking-tight">
              {product.name}
            </span>
          </Link>
        </div>
        <Card className="surface shadow-elev p-6">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          <div className="mt-6">{children}</div>
        </Card>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          By continuing you agree to our{" "}
          <Link className="text-foreground hover:underline" href="/docs#terms">
            Terms
          </Link>{" "}
          and{" "}
          <Link className="text-foreground hover:underline" href="/docs#privacy">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

