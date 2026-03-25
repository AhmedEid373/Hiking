"use client";

import { useState } from "react";
import { Terminal, Cpu, HardDrive, Shield } from "lucide-react";
import { PricingCard } from "@/components/sections/PricingCard";
import { PricingToggle } from "@/components/sections/PricingToggle";

const plans = [
  {
    name: "VPS Starter",
    price: 12.99,
    yearlyPrice: 9.99,
    slug: "vps-starter",
    features: [
      "2 vCPU Cores",
      "4 GB RAM",
      "80 GB SSD Storage",
      "3 TB Transfer",
      "Full Root Access",
      "Dedicated Resources",
      "DDoS Protection",
    ],
  },
  {
    name: "VPS Pro",
    price: 24.99,
    yearlyPrice: 19.99,
    slug: "vps-pro",
    popular: true,
    features: [
      "4 vCPU Cores",
      "8 GB RAM",
      "160 GB SSD Storage",
      "5 TB Transfer",
      "Full Root Access",
      "Dedicated Resources",
      "DDoS Protection",
      "Free Managed Support",
    ],
  },
];

const features = [
  {
    icon: Terminal,
    title: "Full Root Access",
    description:
      "Complete control over your server environment. Install any software and configure settings your way.",
  },
  {
    icon: Cpu,
    title: "Dedicated Resources",
    description:
      "Guaranteed CPU, RAM, and storage that are never shared with other users on the same server.",
  },
  {
    icon: HardDrive,
    title: "SSD Storage",
    description:
      "Enterprise-grade NVMe SSD storage delivers up to 20x faster read/write speeds than traditional drives.",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description:
      "Advanced DDoS mitigation keeps your VPS safe from attacks with always-on traffic monitoring.",
  },
];

export default function VPSHostingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-6 bg-grid">
        <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent-blue/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-purple/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">VPS</span> Hosting
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            High-performance virtual private servers with dedicated resources, full
            root access, and enterprise-grade infrastructure.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <PricingToggle value={billingCycle} onChange={setBillingCycle} />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
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
              Powerful <span className="gradient-text">VPS Features</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Everything you need for demanding applications, from development to production.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
