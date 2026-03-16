import type React from "react";
import {
  Bot,
  Brain,
  Cable,
  FileText,
  Shield,
  Sparkles,
  Workflow
} from "lucide-react";

export type Product = {
  name: string;
  tagline: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  nav: { label: string; href: string }[];
  features: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  testimonials: {
    quote: string;
    name: string;
    title: string;
  }[];
  pricing: {
    tiers: {
      name: string;
      priceMonthly: number;
      description: string;
      highlighted?: boolean;
      features: string[];
      cta: { label: string; href: string };
    }[];
    comparison: {
      rows: { feature: string; tiers: Record<string, boolean | string> }[];
    };
  };
};

export const product: Product = {
  name: "Nebula AI",
  tagline: "Ship faster with an AI workspace built for real teams.",
  description:
    "Nebula AI is a secure, multi-project AI workspace that turns scattered docs, tickets, and discussions into aligned plans, drafts, and decisions—without sacrificing control.",
  primaryCta: { label: "Start free", href: "/auth/signup" },
  secondaryCta: { label: "View dashboard", href: "/dashboard" },
  nav: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Docs", href: "/docs" }
  ],
  features: [
    {
      title: "Project knowledge vault",
      description:
        "Organize specs, notes, and decisions into a searchable workspace with clean provenance.",
      icon: FileText
    },
    {
      title: "Workflow copilots",
      description:
        "Draft PRDs, launch plans, email sequences, and support macros using guided templates.",
      icon: Workflow
    },
    {
      title: "Actionable summaries",
      description:
        "Turn long threads into highlights, risks, owners, and next steps in seconds.",
      icon: Sparkles
    },
    {
      title: "Reasoning you can trust",
      description:
        "Citations-style outputs and structured responses that are easy to review and approve.",
      icon: Brain
    },
    {
      title: "Security by default",
      description:
        "Role-based access, audit-ready activity logs, and privacy controls at every layer.",
      icon: Shield
    },
    {
      title: "Integrations ready",
      description:
        "Connect tools when you’re ready—designed to scale with your stack, not fight it.",
      icon: Cable
    }
  ],
  testimonials: [
    {
      quote:
        "Nebula turned our weekly planning from a meeting into an artifact. Decisions are searchable now.",
      name: "Avery Chen",
      title: "Product Lead"
    },
    {
      quote:
        "The drafts are good. The real win is the consistency—same tone, same structure, every time.",
      name: "Samir Patel",
      title: "Head of Marketing"
    },
    {
      quote:
        "It feels like an internal tool, not a toy. Clean UX, quick responses, and sane permissions.",
      name: "Jordan Reyes",
      title: "Engineering Manager"
    }
  ],
  pricing: {
    tiers: [
      {
        name: "Starter",
        priceMonthly: 0,
        description: "For individuals exploring structured AI workflows.",
        features: [
          "1 workspace",
          "Core templates",
          "Basic exports",
          "Community support"
        ],
        cta: { label: "Get started", href: "/auth/signup" }
      },
      {
        name: "Pro",
        priceMonthly: 29,
        description: "For fast-moving teams that need consistency and control.",
        highlighted: true,
        features: [
          "Unlimited projects",
          "Team collaboration",
          "Advanced templates",
          "Priority support"
        ],
        cta: { label: "Start Pro", href: "/auth/signup" }
      },
      {
        name: "Enterprise",
        priceMonthly: 99,
        description: "For orgs that require governance and scalability.",
        features: [
          "SSO / SAML",
          "Roles & audit logs",
          "Custom policy controls",
          "Dedicated success"
        ],
        cta: { label: "Contact sales", href: "/docs" }
      }
    ],
    comparison: {
      rows: [
        {
          feature: "Workspaces",
          tiers: { Starter: "1", Pro: "Unlimited", Enterprise: "Unlimited" }
        },
        {
          feature: "Team members",
          tiers: { Starter: "1", Pro: "Up to 20", Enterprise: "Custom" }
        },
        {
          feature: "RBAC & audit logs",
          tiers: { Starter: false, Pro: false, Enterprise: true }
        },
        {
          feature: "SSO",
          tiers: { Starter: false, Pro: false, Enterprise: true }
        },
        {
          feature: "Priority support",
          tiers: { Starter: false, Pro: true, Enterprise: true }
        }
      ]
    }
  }
};

