"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Server,
  Globe,
  HardDrive,
  DollarSign,
  HeadphonesIcon,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", icon: Globe },
  { label: "Shared Hosting", href: "/shared-hosting", icon: Server },
  { label: "VPS", href: "/vps-hosting", icon: HardDrive },
  { label: "Dedicated", href: "/dedicated-server", icon: HardDrive },
  { label: "Pricing", href: "/pricing", icon: DollarSign },
  { label: "Support", href: "/support", icon: HeadphonesIcon },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-bold gradient-text">HostInking</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop right-side buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/auth/login"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down panel */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-950/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 mt-4 border-t border-white/10 flex flex-col space-y-2">
              <Link
                href="/auth/login"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white text-center rounded-md transition-colors"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 text-center rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
