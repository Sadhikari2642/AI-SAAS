"use client";

import { Quote } from "lucide-react";

import { product } from "@/lib/product";
import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section className="container pb-16 md:pb-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
            Loved by teams who care about clarity
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Clean artifacts beat messy meetings. Reviewable AI outputs keep your
            team aligned.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {product.testimonials.map((t, idx) => (
          <Reveal key={t.name} delay={idx * 0.06}>
            <Card className="surface shadow-elev h-full p-6">
              <Quote className="size-5 text-accent" />
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                “{t.quote}”
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

