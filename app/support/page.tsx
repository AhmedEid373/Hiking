"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  TicketPlus,
  MessageCircle,
  Phone,
  ChevronDown,
  Search,
  ArrowRight,
} from "lucide-react";

const supportOptions = [
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description:
      "Browse our comprehensive library of tutorials, guides, and troubleshooting articles.",
    href: "#",
    linkText: "Browse Articles",
  },
  {
    icon: TicketPlus,
    title: "Submit a Ticket",
    description:
      "Create a support ticket and our team will respond within 2 hours during business hours.",
    href: "/dashboard/tickets/new",
    linkText: "Open Ticket",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description:
      "Chat with a support agent in real time. Available 24/7 for all hosting customers.",
    href: "#",
    linkText: "Start Chat",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description:
      "Speak directly with a hosting expert. Call us at +1 (800) 555-HOST anytime.",
    href: "tel:+18005554678",
    linkText: "Call Now",
  },
];

const faqs = [
  {
    question: "How do I reset my hosting account password?",
    answer:
      'You can reset your password from the dashboard by navigating to Settings > Security > Change Password. Alternatively, use the "Forgot Password" link on the login page.',
  },
  {
    question: "How do I point my domain to HostInking?",
    answer:
      "Update your domain's nameservers to ns1.hostinking.com and ns2.hostinking.com through your domain registrar. Changes typically propagate within 24-48 hours.",
  },
  {
    question: "Can I migrate my website from another host?",
    answer:
      "Yes! We offer free website migration for all plans. Simply submit a support ticket after signing up and our team will handle the entire process for you.",
  },
  {
    question: "How do I install an SSL certificate?",
    answer:
      "All hosting plans include a free SSL certificate that is automatically installed. You can manage SSL settings from your cPanel or dashboard under the Security section.",
  },
  {
    question: "What should I do if my website is down?",
    answer:
      "First, check our status page for any ongoing incidents. If everything looks normal, try clearing your browser cache or contact our 24/7 support team for immediate assistance.",
  },
  {
    question: "How do I set up email accounts?",
    answer:
      "Log in to your cPanel, navigate to the Email section, and click 'Email Accounts'. From there you can create new email addresses using your domain.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee on all hosting plans. If you're not satisfied, contact support within 30 days of purchase for a full refund.",
  },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-6 bg-grid">
        <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent-blue/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-purple/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            How Can We <span className="gradient-text">Help</span>?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Our support team is available 24/7 to help you with any questions or
            issues. Choose the channel that works best for you.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-10 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full rounded-xl border border-navy-700 bg-navy-900 py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 transition-colors duration-200 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {supportOptions.map((option) => (
              <Link
                key={option.title}
                href={option.href}
                className="glass glass-hover group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple">
                  <option.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {option.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {option.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-blue transition-colors group-hover:text-indigo-300">
                  {option.linkText}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
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
              Quick answers to the most common questions. Can&apos;t find what
              you need?{" "}
              <Link
                href="/contact"
                className="font-medium text-accent-blue hover:underline"
              >
                Contact us
              </Link>
              .
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
