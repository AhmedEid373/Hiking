"use client";

import { useState } from "react";
import { Globe, HardDrive, Shield, Mail, Inbox, Monitor } from "lucide-react";
import { PricingCard } from "@/components/sections/PricingCard";
import { PricingToggle } from "@/components/sections/PricingToggle";

const plan = {
  name: "Email Hosting",
  price: 2.99,
  yearlyPrice: 1.99,
  slug: "email",
  popular: true,
  features: [
    "Custom Domain Email",
    "10 GB Mailbox Storage",
    "Spam & Virus Protection",
    "IMAP / POP3 Support",
    "Webmail Access",
    "Calendar & Contacts",
    "Mobile Sync",
    "24/7 Support",
  ],
};

const features = [
  {
    icon: Globe,
    title: "Custom Domain",
    description:
      "Use your own domain for professional email addresses like you@yourdomain.com.",
  },
  {
    icon: HardDrive,
    title: "10 GB Mailbox",
    description:
      "Generous storage for all your emails, attachments, and archives. Expand as you grow.",
  },
  {
    icon: Shield,
    title: "Spam Protection",
    description:
      "Advanced spam filtering and virus scanning keep your inbox clean and safe.",
  },
  {
    icon: Inbox,
    title: "IMAP / POP3",
    description:
      "Access your email from any device using standard IMAP or POP3 protocols.",
  },
  {
    icon: Monitor,
    title: "Webmail Access",
    description:
      "Read and send email from any browser with our modern, responsive webmail interface.",
  },
  {
    icon: Mail,
    title: "Mobile Sync",
    description:
      "Sync your email, calendar, and contacts seamlessly across all your devices.",
  },
];

export default function EmailHostingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-6 bg-grid">
        <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent-blue/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-purple/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">Email</span> Hosting
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Professional email hosting with your own domain. Reliable, secure, and
            accessible from any device — starting at just $1.99/mo.
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

      {/* Features */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Professional <span className="gradient-text">Email Features</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Everything you need for reliable, professional email communication.
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
