"use client";

import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { product } from "@/lib/product";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { PricingPreview } from "./pricing-preview";
import { Testimonials } from "./testimonials";

export function Landing() {
  return (
    <div>
      <section className="container pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/50 px-3 py-1 text-xs text-muted-foreground">
                <Sparkles className="size-4 text-accent" />
                Production-ready AI SaaS template
                <span className="text-foreground/70">•</span>
                Next.js 14 + shadcn/ui
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                {product.tagline}
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                {product.description}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" className="group" asChild>
                  <Link href={product.primaryCta.href}>
                    {product.primaryCta.label}
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href={product.secondaryCta.href}>
                    {product.secondaryCta.label}
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-7 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {[
                  "Secure-by-default workspace UX",
                  "Modern components + motion",
                  "Responsive marketing pages",
                  "Dashboard layout scaffold"
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <span className="grid size-5 place-items-center rounded-full bg-accent/15 ring-1 ring-accent/25">
                      <Check className="size-3.5 text-accent" />
                    </span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <Card className="surface shadow-elev overflow-hidden">
                <div className="border-b border-border/60 bg-card/40 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">Workspace preview</p>
                      <p className="text-xs text-muted-foreground">
                        A clean dashboard layout with widgets.
                      </p>
                    </div>
                    <Button size="sm" variant="secondary" asChild>
                      <Link href="/dashboard">Open</Link>
                    </Button>
                  </div>
                </div>

                <div className="p-4">
                  <div className="grid gap-3">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="surface rounded-xl p-4">
                        <p className="text-xs text-muted-foreground">
                          Active projects
                        </p>
                        <p className="mt-2 text-2xl font-semibold">12</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          +3 this week
                        </p>
                      </div>
                      <div className="surface rounded-xl p-4">
                        <p className="text-xs text-muted-foreground">
                          Drafts generated
                        </p>
                        <p className="mt-2 text-2xl font-semibold">1,284</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Review-first workflows
                        </p>
                      </div>
                    </div>
                    <div className="surface rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold">Latest run</p>
                          <p className="text-xs text-muted-foreground">
                            Weekly planning summary
                          </p>
                        </div>
                        <span className="rounded-full bg-primary/15 px-2 py-1 text-xs text-primary ring-1 ring-primary/25">
                          Completed
                        </span>
                      </div>
                      <Separator className="my-3 bg-border/60" />
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <p>
                          - Top risks: onboarding docs, release timing, dependency
                          drift
                        </p>
                        <p>
                          - Owners: Product (A), Eng (B), Support (C)
                        </p>
                        <p>- Next steps: finalize scope, draft comms, QA plan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container pb-16 md:pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {product.features.slice(0, 3).map((f, idx) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={idx * 0.05}>
                <Card className="surface shadow-elev h-full p-6">
                  <div className="flex items-start gap-4">
                    <span className="grid size-10 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/20">
                      <Icon className="size-5 text-primary" />
                    </span>
                    <div>
                      <p className="text-base font-semibold">{f.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {f.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="secondary" asChild>
            <Link href="/features">
              Explore all features <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Testimonials />
      <PricingPreview />

      <section className="container pb-20 md:pb-28">
        <Card className="surface shadow-elev overflow-hidden">
          <div className="grid gap-10 p-8 md:grid-cols-12 md:items-center md:p-10">
            <div className="md:col-span-8">
              <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Ready to build your AI SaaS with a polished UI system?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                This scaffold gives you the marketing site, auth screens, and a
                dashboard shell with motion and accessibility baked in.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
              <Button size="lg" asChild>
                <Link href={product.primaryCta.href}>{product.primaryCta.label}</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/docs">Read the docs</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

