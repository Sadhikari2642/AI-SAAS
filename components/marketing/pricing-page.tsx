"use client";

import Link from "next/link";
import { Check, Minus } from "lucide-react";

import { product } from "@/lib/product";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function BoolCell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm text-foreground">{value}</span>;
  }
  return value ? (
    <span className="grid size-7 place-items-center rounded-full bg-accent/15 ring-1 ring-accent/25">
      <Check className="size-4 text-accent" />
    </span>
  ) : (
    <span className="grid size-7 place-items-center rounded-full bg-muted/40 ring-1 ring-border/50">
      <Minus className="size-4 text-muted-foreground" />
    </span>
  );
}

export function PricingPage() {
  const tiers = product.pricing.tiers;

  return (
    <div className="container pb-20 pt-14 md:pb-28 md:pt-20">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Pricing that matches your pace
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Start with the essentials. Add governance and scale when you’re
            ready.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {tiers.map((tier, idx) => (
          <Reveal key={tier.name} delay={idx * 0.06}>
            <Card
              className={[
                "surface shadow-elev relative h-full p-6",
                tier.highlighted ? "ring-1 ring-primary/35" : "ring-1 ring-border/40"
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

              <Separator className="my-5 bg-border/60" />

              <div className="grid gap-2 text-sm text-muted-foreground">
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

      <Reveal delay={0.1}>
        <div className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Compare plans
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A quick overview of what’s included at each tier.
          </p>

          <Card className="surface shadow-elev mt-6 overflow-hidden">
            <div className="px-5 py-4">
              <div className="grid grid-cols-[minmax(0,1fr)_repeat(3,minmax(0,140px))] items-center gap-4 border-b border-border/60 pb-3 text-xs font-semibold text-muted-foreground">
                <div>Feature</div>
                {tiers.map((t) => (
                  <div key={t.name} className="text-center">
                    {t.name}
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-4">
                {product.pricing.comparison.rows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-[minmax(0,1fr)_repeat(3,minmax(0,140px))] items-center gap-4"
                  >
                    <div className="text-sm text-foreground">{row.feature}</div>
                    {tiers.map((t) => (
                      <div key={t.name} className="flex justify-center">
                        <BoolCell value={row.tiers[t.name]} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </Reveal>
    </div>
  );
}

