"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { PricingCard } from "@/components/sections/PricingCard";
import { PricingToggle } from "@/components/sections/PricingToggle";

const plans = [
  {
    name: "Shared Basic",
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
    name: "Shared Standard",
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
    name: "Shared Premium",
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
      "Priority Support",
    ],
  },
  {
    name: "WP Starter",
    price: 6.99,
    yearlyPrice: 4.99,
    slug: "wp-starter",
    features: [
      "1 WordPress Site",
      "20 GB SSD Storage",
      "Free SSL Certificate",
      "1-Click Install",
      "Auto Updates",
      "Daily Backups",
    ],
  },
  {
    name: "WP Business",
    price: 12.99,
    yearlyPrice: 9.99,
    slug: "wp-business",
    features: [
      "5 WordPress Sites",
      "50 GB SSD Storage",
      "Free SSL Certificate",
      "Staging Environment",
      "WP-CLI Access",
      "Free Domain (1 year)",
    ],
  },
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
      "DDoS Protection",
    ],
  },
];

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely! You can upgrade your hosting plan at any time from your dashboard. The price difference will be prorated for the remainder of your billing cycle.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes, all plans come with a 30-day money-back guarantee. If you're not satisfied, we'll issue a full refund — no questions asked.",
  },
  {
    question: "Do you offer free website migration?",
    answer:
      "Yes! Our expert team will migrate your website from your current host for free. Just submit a support ticket after signing up.",
  },
  {
    question: "What is your uptime guarantee?",
    answer:
      "We guarantee 99.9% uptime for shared and WordPress hosting, and 99.99% for VPS and dedicated servers. If we fall short, you'll receive account credits.",
  },
  {
    question: "Can I host multiple websites on one plan?",
    answer:
      "Our Shared Standard, Shared Premium, and higher-tier WordPress plans support multiple websites. The Basic and Starter plans are limited to a single site.",
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-6 bg-grid">
        <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent-blue/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-purple/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Choose the perfect plan for your needs. No hidden fees, no
            surprises. Switch between monthly and yearly billing to save more.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <PricingToggle value={billingCycle} onChange={setBillingCycle} />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingCard
                key={plan.slug}
                {...plan}
                billingCycle={billingCycle}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Need a dedicated server?{" "}
              <Link
                href="/dedicated-server"
                className="font-medium text-accent-blue hover:underline"
              >
                View Dedicated Plans
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Got questions? We&apos;ve got answers. If you can&apos;t find what
              you&apos;re looking for, reach out to our support team.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-heading text-sm font-semibold text-white sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`ml-4 h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="border-t border-white/5 px-6 pb-5 pt-4">
                    <p className="text-sm leading-relaxed text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
