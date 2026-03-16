"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { product } from "@/lib/product";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function FeaturesPage() {
  return (
    <div className="container pb-20 pt-14 md:pb-28 md:pt-20">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Features built for repeatable work
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Turn messy inputs into clean artifacts. Standardize how your team
            drafts, reviews, and ships.
          </p>
          <div className="mt-7 flex justify-center gap-3">
            <Button asChild>
              <Link href={product.primaryCta.href}>{product.primaryCta.label}</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/pricing">
                View pricing <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {product.features.map((f, idx) => {
          const Icon = f.icon;
          return (
            <Reveal key={f.title} delay={idx * 0.04}>
              <Card className="surface shadow-elev h-full p-6">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/20">
                  <Icon className="size-5 text-primary" />
                </span>
                <p className="mt-4 text-base font-semibold">{f.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

