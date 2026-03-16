import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: {
    default: "Nebula AI — Production-ready AI SaaS",
    template: "%s — Nebula AI"
  },
  description:
    "A modern AI SaaS website scaffold built with Next.js, Tailwind, shadcn/ui, and Framer Motion."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh font-sans">
        <div className="relative min-h-dvh">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-1/2 top-[-240px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-[-200px] top-[180px] h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute bottom-[-220px] left-[-240px] h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
          </div>

          <SiteNav />
          <main className="min-h-[calc(100dvh-56px)]">{children}</main>
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}

