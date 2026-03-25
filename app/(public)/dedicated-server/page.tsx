"use client";

import { useState } from "react";
import { Cpu, HardDrive, Globe, Shield, Server, Clock } from "lucide-react";
import { PricingCard } from "@/components/sections/PricingCard";
import { PricingToggle } from "@/components/sections/PricingToggle";

const plan = {
  name: "Dedicated Server",
  price: 89.99,
  yearlyPrice: 69.99,
  slug: "dedicated",
  popular: true,
  features: [
    "Intel Xeon Processor",
    "32 GB DDR4 RAM",
    "1 TB NVMe SSD",
    "10 TB Transfer",
    "IPMI Access",
    "99.99% Uptime SLA",
    "Full Root Access",
    "DDoS Protection",
    "24/7 Priority Support",
  ],
};

const enterpriseFeatures = [
  {
    icon: Cpu,
    title: "Intel Xeon Processor",
    description:
      "Enterprise-grade Intel Xeon processors deliver unmatched performance for the most demanding workloads.",
  },
  {
    icon: HardDrive,
    title: "1 TB NVMe SSD",
    description:
      "Ultra-fast NVMe SSD storage with hardware RAID for maximum speed and redundancy.",
  },
  {
    icon: Globe,
    title: "10 TB Transfer",
    description:
      "Generous bandwidth allocation on a premium network with multiple Tier 1 providers.",
  },
  {
    icon: Server,
    title: "IPMI Access",
    description:
      "Full remote management via IPMI. Reboot, reinstall, and monitor your server from anywhere.",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description:
      "Enterprise-grade DDoS mitigation with automatic detection and traffic scrubbing.",
  },
  {
    icon: Clock,
    title: "99.99% Uptime",
    description:
      "Industry-leading SLA backed by redundant power, networking, and cooling infrastructure.",
  },
];

export default function DedicatedServerPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-6 bg-grid">
        <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent-blue/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-purple/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">Dedicated</span> Server
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Maximum performance with bare-metal hardware. Full control, enterprise
            features, and an uncompromising 99.99% uptime SLA.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-md">
          <div className="mb-12">
            <PricingToggle value={billingCycle} onChange={setBillingCycle} />
          </div>

          <PricingCard {...plan} billingCycle={billingCycle} />
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              <span className="gradient-text">Enterprise</span> Features
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Built for mission-critical applications that demand the highest levels
              of performance, security, and reliability.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {enterpriseFeatures.map((feature) => (
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
