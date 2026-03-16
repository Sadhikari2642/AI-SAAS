"use client";

import Link from "next/link";
import { Check } from "lucide-react";

import { product } from "@/lib/product";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PricingPreview() {
  return (
    <section className="container pb-16 md:pb-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
            Simple pricing that scales with you
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Start free, upgrade when your team’s workflows become repeatable.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {product.pricing.tiers.map((tier, idx) => (
          <Reveal key={tier.name} delay={idx * 0.06}>
            <Card
              className={[
                "surface shadow-elev relative h-full p-6",
                tier.highlighted
                  ? "ring-1 ring-primary/35"
                  : "ring-1 ring-border/40"
              ].join(" ")}
            >
              {tier.highlighted ? (
                <div className="absolute right-4 top-4 rounded-full bg-primary/15 px-2 py-1 text-xs text-primary ring-1 ring-primary/25">
                  Most popular
                </div>
              ) : null}

              <p className="text-sm font-semibold">{tier.name}</p>
              <div className="mt-2 flex items-end gap-2">
                <p className="text-3xl font-semibold tracking-tight">
                  ${tier.priceMonthly}
                </p>
                <p className="pb-1 text-xs text-muted-foreground">/ month</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {tier.description}
              </p>

              <div className="mt-5 grid gap-2 text-sm text-muted-foreground">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <span className="grid size-5 place-items-center rounded-full bg-accent/15 ring-1 ring-accent/25">
                      <Check className="size-3.5 text-accent" />
                    </span>
                    {f}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button
                  className="w-full"
                  variant={tier.highlighted ? "default" : "secondary"}
                  asChild
                >
                  <Link href={tier.cta.href}>{tier.cta.label}</Link>
                </Button>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button variant="ghost" asChild>
          <Link href="/pricing">See full pricing</Link>
        </Button>
      </div>
    </section>
  );
}

