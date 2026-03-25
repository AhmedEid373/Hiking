"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Server,
  CreditCard,
  MessageSquare,
  Settings,
  Users,
  Menu,
  X,
  LogOut,
  User,
} from "lucide-react";

interface DashboardSidebarProps {
  isAdmin: boolean;
}

const customerLinks = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "My Plans", href: "/dashboard/plans", icon: Server },
  { label: "Invoices", href: "/dashboard/invoices", icon: CreditCard },
  { label: "Tickets", href: "/dashboard/tickets", icon: MessageSquare },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

const adminLinks = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Plans", href: "/admin/plans", icon: Server },
  { label: "Tickets", href: "/admin/tickets", icon: MessageSquare },
];

export default function DashboardSidebar({ isAdmin }: DashboardSidebarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = isAdmin ? adminLinks : customerLinks;

  const isActive = (href: string) => {
    if (href === "/dashboard" || href === "/admin") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
        <Link href="/">
          <span className="text-xl font-bold gradient-text">HostInking</span>
        </Link>
        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden p-1 text-gray-400 hover:text-white transition-colors"
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {links.map((link) => {
          const Icon = link.icon;
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                active
                  ? "bg-indigo-600/20 text-indigo-400"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom user area */}
      <div className="border-t border-white/10 p-4 space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-600/20 text-indigo-400">
            <User className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              {isAdmin ? "Admin" : "My Account"}
            </p>
            <p className="text-xs text-gray-400 truncate">
              {isAdmin ? "Administrator" : "Customer"}
            </p>
          </div>
        </div>
        <Link
          href="/auth/login"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-red-400 hover:bg-white/5 rounded-lg transition-colors w-full"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-navy-900 text-gray-300 hover:text-white rounded-lg border border-white/10 transition-colors"
        aria-label="Open sidebar"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-navy-900 transform transition-transform duration-200 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 bg-navy-900 border-r border-white/10">
        {sidebarContent}
      </aside>
    </>
  );
}
