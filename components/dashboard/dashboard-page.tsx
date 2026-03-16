"use client";

import Link from "next/link";
import { Activity, ArrowRight, Lock, Sparkles } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function DashboardPage() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Reveal>
          <Card className="surface shadow-elev p-5">
            <p className="text-xs text-muted-foreground">Artifacts generated</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">1,284</p>
            <p className="mt-1 text-xs text-muted-foreground">Last 30 days</p>
          </Card>
        </Reveal>
        <Reveal delay={0.06}>
          <Card className="surface shadow-elev p-5">
            <p className="text-xs text-muted-foreground">Approval rate</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">93%</p>
            <p className="mt-1 text-xs text-muted-foreground">Review-first outputs</p>
          </Card>
        </Reveal>
        <Reveal delay={0.12}>
          <Card className="surface shadow-elev p-5">
            <p className="text-xs text-muted-foreground">Policy status</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/20">
                <Lock className="size-4 text-primary" />
              </span>
              <div>
                <p className="text-sm font-semibold">Protected</p>
                <p className="text-xs text-muted-foreground">RBAC ready</p>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>

      <Reveal delay={0.06}>
        <Card className="surface shadow-elev p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold tracking-tight">
                Run a workflow copilot
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Draft a PRD, summarize a thread, or generate a launch plan from structured inputs.
              </p>
            </div>
            <Button className="group md:w-auto" asChild>
              <Link href="/docs">
                Open templates
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          <Separator className="my-5 bg-border/60" />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="surface rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-accent/15 ring-1 ring-accent/25">
                  <Sparkles className="size-5 text-accent" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Weekly planning summary</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Extract decisions, risks, and owners from updates and tickets.
                  </p>
                </div>
              </div>
            </div>
            <div className="surface rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/20">
                  <Activity className="size-5 text-primary" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Customer insights digest</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Cluster themes and draft follow-ups based on support conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Reveal>
    </div>
  );
}

