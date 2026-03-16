"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function DashboardPlaceholder({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <Reveal>
      <Card className="surface shadow-elev p-6">
        <h1 className="text-xl font-semibold tracking-tight md:text-2xl">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/docs">
              Read docs <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/pricing">View pricing</Link>
          </Button>
        </div>
      </Card>
    </Reveal>
  );
}

