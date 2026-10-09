import {
  Blocks,
  Gauge,
  Package,
  Rocket,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type Achievement = {
  title: string;
  organization: string;
  /** Short category chip shown in the card's corner. */
  badge: string;
  subject: string;
  description: string;
  icon: LucideIcon;
  /** Internal paths ("/resume") use client navigation; full URLs open in a new tab. */
  link: { label: string; href: string };
};

export const achievements: Achievement[] = [
  {
    title: "Primary Engineer",
    organization: "Firmwide · PriceEstimator.ai",
    badge: "Ownership",
    subject: "Code to Cloud on a Billing Platform",
    description:
      "Own the platform end to end: the React frontend, Node.js/Express APIs, Microsoft single sign-on, and the GitHub Actions pipelines that ship Docker builds to staging and production.",
    icon: Rocket,
    link: { label: "View Experience", href: "/resume" },
  },
  {
    title: "Promoted to Software Engineer",
    organization: "SmartCrowd",
    badge: "2025",
    subject: "Junior Software Engineer → Software Engineer",
    description:
      "Promoted within just over two years for leading architecture improvements and delivering fintech features used by 10K+ active users.",
    icon: TrendingUp,
    link: { label: "Visit SmartCrowd", href: "https://smartcrowd.ae/" },
  },
  {
    title: "Share Transfer Facility",
    organization: "SmartCrowd",
    badge: "Delivery",
    subject: "Led End-to-End Delivery",
    description:
      "Coordinated backend, design, and product teams to ship share transfers in a high-volume transaction system with zero major post-release production issues.",
    icon: ShieldCheck,
    link: { label: "View Experience", href: "/resume" },
  },
  {
    title: "30–45% Faster Load",
    organization: "SmartCrowd",
    badge: "Performance",
    subject: "Initial Load-Time Optimization",
    description:
      "Reduced initial load time through code splitting, lazy loading, and legacy component optimization.",
    icon: Gauge,
    link: { label: "View Experience", href: "/resume" },
  },
  {
    title: "20+ Reusable Components",
    organization: "SmartCrowd",
    badge: "Architecture",
    subject: "Shared Component Library",
    description:
      "Built a shared component library that reduced duplicated UI implementation by approximately 35%.",
    icon: Blocks,
    link: { label: "View Experience", href: "/resume" },
  },
  {
    title: "Open Source on npm",
    organization: "block-browser-back · checkout-risk-sdk",
    badge: "Community",
    subject: "Published React Hooks",
    description:
      "Two React hooks on npm, including a Checkout.com fraud-detection integration, with about 400 downloads in the past year.",
    icon: Package,
    link: { label: "View Projects", href: "/projects" },
  },
];
