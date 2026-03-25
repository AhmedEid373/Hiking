"use client";

import { useState } from "react";
import { HardDrive, Lock, Mail, Settings, Globe, Database } from "lucide-react";
import { PricingCard } from "@/components/sections/PricingCard";
import { PricingToggle } from "@/components/sections/PricingToggle";

const plans = [
  {
    name: "Basic",
    price: 3.99,
    yearlyPrice: 2.99,
    slug: "shared-basic",
    features: [
      "1 Website",
      "10 GB SSD Storage",
      "Free SSL Certificate",
      "1 Email Account",
      "cPanel Access",
      "Weekly Backups",
    ],
  },
  {
    name: "Standard",
    price: 6.99,
    yearlyPrice: 4.99,
    slug: "shared-standard",
    popular: true,
    features: [
      "Unlimited Websites",
      "50 GB SSD Storage",
      "Free SSL Certificate",
      "10 Email Accounts",
      "cPanel Access",
      "Daily Backups",
      "Free Domain (1 year)",
    ],
  },
  {
    name: "Premium",
    price: 12.99,
    yearlyPrice: 9.99,
    slug: "shared-premium",
    features: [
      "Unlimited Websites",
      "100 GB SSD Storage",
      "Free SSL Certificate",
      "Unlimited Email Accounts",
      "cPanel Access",
      "Daily Backups",
      "Free Domain (1 year)",
      "Priority Support",
    ],
  },
];

const features = [
  {
    icon: HardDrive,
    title: "SSD Storage",
    description:
      "All plans include blazing-fast SSD storage for optimal website performance and quick load times.",
  },
  {
    icon: Lock,
    title: "Free SSL",
    description:
      "Every plan comes with a free SSL certificate to keep your visitors safe and boost your SEO.",
  },
  {
    icon: Mail,
    title: "Email Accounts",
    description:
      "Professional email addresses with your domain. Accessible via webmail, IMAP, or POP3.",
  },
  {
    icon: Settings,
    title: "cPanel Access",
    description:
      "Manage your hosting with the industry-standard cPanel control panel. Easy and intuitive.",
  },
  {
    icon: Globe,
    title: "Free Domain",
    description:
      "Get a free domain name for the first year with our Standard and Premium plans.",
  },
  {
    icon: Database,
    title: "Daily Backups",
    description:
      "Automatic backups ensure your data is always safe. Restore with a single click anytime.",
  },
];

export default function SharedHostingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-6 bg-grid">
        <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent-blue/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-purple/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">Shared</span> Hosting
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Affordable, reliable web hosting for personal sites, blogs, and small
            businesses. Get started with plans from just $2.99/mo.
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
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Our shared hosting plans come packed with features to help you build and grow your online presence.
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
