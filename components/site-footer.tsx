"use client";

import Link from "next/link";
import { Github, Mail, Shield } from "lucide-react";

import { product } from "@/lib/product";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/20">
                <Shield className="size-5 text-primary" />
              </span>
              <span className="text-sm font-semibold tracking-tight">
                {product.name}
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button variant="secondary" size="sm" asChild>
                <Link href="/docs">Documentation</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/pricing">Pricing</Link>
              </Button>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold">Product</h3>
            <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
              {product.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold">Resources</h3>
            <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
              <Link
                href="/auth/login"
                className="w-fit transition-colors hover:text-foreground"
              >
                Account
              </Link>
              <Link
                href="/docs#security"
                className="w-fit transition-colors hover:text-foreground"
              >
                Security
              </Link>
              <Link
                href="/docs#support"
                className="w-fit transition-colors hover:text-foreground"
              >
                Support
              </Link>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <Button variant="ghost" size="icon" aria-label="Email">
                <Mail className="size-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="size-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {product.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/docs#privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/docs#terms" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

