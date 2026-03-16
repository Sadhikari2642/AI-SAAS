"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles } from "lucide-react";

import { product } from "@/lib/product";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/45">
      <div className="container flex h-14 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/20">
            <Sparkles className="size-5 text-primary" />
          </span>
          <span className="text-sm font-semibold tracking-tight">
            {product.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {product.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  active && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href={product.primaryCta.href}>{product.primaryCta.label}</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <span className="grid size-9 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/20">
                    <Sparkles className="size-5 text-primary" />
                  </span>
                  {product.name}
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 grid gap-2">
                {product.nav.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className="justify-start"
                    asChild
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
              </div>

              <div className="mt-6 grid gap-2">
                <Button variant="secondary" asChild>
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href={product.primaryCta.href}>
                    {product.primaryCta.label}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

