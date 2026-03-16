"use client";

import Link from "next/link";
import { BookOpen, Shield, LifeBuoy } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function DocsPage() {
  return (
    <div className="container pb-20 pt-14 md:pb-28 md:pt-20">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Documentation & resources
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            A lightweight docs page to help you connect auth, billing, and AI APIs.
          </p>
          <div className="mt-7 flex justify-center gap-3">
            <Button asChild>
              <Link href="/dashboard">Open dashboard</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/pricing">View pricing</Link>
            </Button>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        <Reveal>
          <Card className="surface shadow-elev p-6">
            <BookOpen className="size-5 text-primary" />
            <h2 className="mt-4 text-base font-semibold">Getting started</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Run the app locally, customize product copy, then hook up your backend services.
            </p>
            <Separator className="my-5 bg-border/60" />
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>1) Update `lib/product.ts`</li>
              <li>2) Add auth (NextAuth/Clerk/Supabase)</li>
              <li>3) Add billing (Stripe)</li>
              <li>4) Connect AI provider + workflows</li>
            </ul>
          </Card>
        </Reveal>

        <Reveal delay={0.06}>
          <Card className="surface shadow-elev p-6" id="security">
            <Shield className="size-5 text-accent" />
            <h2 className="mt-4 text-base font-semibold">Security</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              This UI scaffold is built with accessible primitives and a “review-first” UX.
            </p>
            <Separator className="my-5 bg-border/60" />
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Role-based access patterns in dashboard nav</li>
              <li>Audit-friendly layout for activity feeds</li>
              <li>Tokenized color system for consistent surfaces</li>
            </ul>
          </Card>
        </Reveal>

        <Reveal delay={0.12}>
          <Card className="surface shadow-elev p-6" id="support">
            <LifeBuoy className="size-5 text-primary" />
            <h2 className="mt-4 text-base font-semibold">Support</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Add your support channels, SLAs, and onboarding links here.
            </p>
            <Separator className="my-5 bg-border/60" />
            <div className="grid gap-2">
              <Button variant="secondary" asChild>
                <Link href="/auth/signup">Create an account</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/">Back to home</Link>
              </Button>
            </div>
          </Card>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <Card className="surface shadow-elev p-6" id="privacy">
          <h2 className="text-base font-semibold">Privacy</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Replace this section with your official privacy policy and data retention terms.
          </p>
        </Card>
        <Card className="surface shadow-elev p-6" id="terms">
          <h2 className="text-base font-semibold">Terms</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Replace this section with your official terms of service and billing terms.
          </p>
        </Card>
      </div>
    </div>
  );
}

