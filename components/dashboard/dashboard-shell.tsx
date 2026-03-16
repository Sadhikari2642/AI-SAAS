"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Bot,
  FileText,
  LayoutDashboard,
  LogOut,
  Settings
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const nav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/assistants", label: "Copilots", icon: Bot },
  { href: "/dashboard/reports", label: "Reports", icon: BarChart3 },
  { href: "/dashboard/docs", label: "Knowledge", icon: FileText },
  { href: "/dashboard/settings", label: "Settings", icon: Settings }
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="container py-6">
      <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="surface shadow-elev hidden h-[calc(100dvh-56px-48px)] rounded-2xl p-4 lg:block">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">Workspace</p>
              <p className="text-xs text-muted-foreground">Nebula / Core</p>
            </div>
            <Button variant="secondary" size="sm" asChild>
              <Link href="/">Home</Link>
            </Button>
          </div>

          <Separator className="my-4 bg-border/60" />

          <nav className="grid gap-1">
            {nav.map((item) => {
              const active =
                item.href === "/dashboard"
                  ? pathname === "/dashboard"
                  : pathname?.startsWith(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/35 hover:text-foreground",
                    active && "bg-muted/45 text-foreground"
                  )}
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto" />

          <Separator className="my-4 bg-border/60" />
          <Button variant="ghost" className="w-full justify-start gap-2" asChild>
            <Link href="/auth/login">
              <LogOut className="size-4" />
              Sign out
            </Link>
          </Button>
        </aside>

        <div className="min-w-0">
          <div className="surface shadow-elev mb-6 flex items-center justify-between rounded-2xl px-4 py-3">
            <div>
              <p className="text-sm font-semibold">Dashboard</p>
              <p className="text-xs text-muted-foreground">
                A workspace shell ready for your app logic.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm" asChild>
                <Link href="/docs">Docs</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/auth/signup">Upgrade</Link>
              </Button>
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

