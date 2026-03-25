"use client";

import Link from "next/link";
import { Globe, Mail, ExternalLink } from "lucide-react";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Hosting",
    links: [
      { label: "Shared Hosting", href: "/shared-hosting" },
      { label: "WordPress Hosting", href: "/wordpress-hosting" },
      { label: "VPS Hosting", href: "/vps-hosting" },
      { label: "Dedicated Servers", href: "/dedicated-server" },
      { label: "Email Hosting", href: "/email-hosting" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Submit Ticket", href: "/support/ticket" },
      { label: "Status Page", href: "/status" },
      { label: "Documentation", href: "/docs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "SLA", href: "/sla" },
    ],
  },
];

const socialLinks = [
  { label: "Website", href: "https://hostinking.com", icon: Globe },
  { label: "Email", href: "mailto:support@hostinking.com", icon: Mail },
  { label: "Status", href: "/status", icon: ExternalLink },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Columns grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; 2024 HostInking. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
