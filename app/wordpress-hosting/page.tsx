"use client";

import { useState } from "react";
import { Download, RefreshCw, Layers, Terminal, Shield, Zap } from "lucide-react";
import { PricingCard } from "@/components/sections/PricingCard";
import { PricingToggle } from "@/components/sections/PricingToggle";

const plans = [
  {
    name: "Starter",
    price: 6.99,
    yearlyPrice: 4.99,
    slug: "wp-starter",
    features: [
      "1 WordPress Site",
      "20 GB SSD Storage",
      "Free SSL Certificate",
      "1-Click WordPress Install",
      "Auto Updates",
      "Daily Backups",
    ],
  },
  {
    name: "Business",
    price: 12.99,
    yearlyPrice: 9.99,
    slug: "wp-business",
    popular: true,
    features: [
      "5 WordPress Sites",
      "50 GB SSD Storage",
      "Free SSL Certificate",
      "1-Click WordPress Install",
      "Auto Updates",
      "Staging Environment",
      "WP-CLI Access",
      "Free Domain (1 year)",
    ],
  },
  {
    name: "Enterprise",
    price: 24.99,
    yearlyPrice: 19.99,
    slug: "wp-enterprise",
    features: [
      "Unlimited WordPress Sites",
      "100 GB SSD Storage",
      "Free SSL Certificate",
      "1-Click WordPress Install",
      "Auto Updates",
      "Staging Environment",
      "WP-CLI Access",
      "Free Domain (1 year)",
      "Priority Support",
      "Redis Object Cache",
    ],
  },
];

const features = [
  {
    icon: Download,
    title: "1-Click Install",
    description:
      "Install WordPress in seconds with our 1-click installer. No technical expertise required.",
  },
  {
    icon: RefreshCw,
    title: "Auto Updates",
    description:
      "WordPress core, themes, and plugins are automatically updated to keep your site secure.",
  },
  {
    icon: Layers,
    title: "Staging Environment",
    description:
      "Test changes in a safe staging environment before pushing them live to your production site.",
  },
  {
    icon: Terminal,
    title: "WP-CLI Access",
    description:
      "Full WP-CLI access for advanced users who prefer managing WordPress from the command line.",
  },
  {
    icon: Shield,
    title: "WordPress Security",
    description:
      "Built-in malware scanning, firewalls, and brute-force protection tailored for WordPress.",
  },
  {
    icon: Zap,
    title: "Optimized Performance",
    description:
      "Server-level caching and CDN integration ensure your WordPress site loads lightning-fast.",
  },
];

export default function WordPressHostingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-6 bg-grid">
        <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent-blue/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-purple/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">WordPress</span> Hosting
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Hosting optimized for WordPress. Enjoy lightning-fast speeds, automatic
            updates, and expert WordPress support.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <PricingToggle value={billingCycle} onChange={setBillingCycle} />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <PricingCard
                key={plan.name}
                {...plan}
                billingCycle={billingCycle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Built for <span className="gradient-text">WordPress</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Our WordPress hosting is fine-tuned for performance, security, and ease of use.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass glass-hover rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
