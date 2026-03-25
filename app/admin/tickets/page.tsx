"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const allTickets = [
  {
    id: 305,
    subject: "Cannot access cPanel on Shared Starter plan",
    customer: "John Doe",
    status: "open",
    priority: "high",
    date: "Mar 21, 2026",
  },
  {
    id: 304,
    subject: "Billing discrepancy on last invoice",
    customer: "Sarah Miller",
    status: "open",
    priority: "medium",
    date: "Mar 20, 2026",
  },
  {
    id: 303,
    subject: "Request for dedicated IP address",
    customer: "Mike Chen",
    status: "answered",
    priority: "low",
    date: "Mar 19, 2026",
  },
  {
    id: 302,
    subject: "WordPress migration assistance",
    customer: "Emma Wilson",
    status: "open",
    priority: "medium",
    date: "Mar 18, 2026",
  },
  {
    id: 301,
    subject: "DNS propagation delay",
    customer: "Alex Johnson",
    status: "closed",
    priority: "low",
    date: "Mar 17, 2026",
  },
  {
    id: 298,
    subject: "SSL certificate renewal question",
    customer: "John Doe",
    status: "answered",
    priority: "medium",
    date: "Mar 15, 2026",
  },
  {
    id: 295,
    subject: "Server response time too slow",
    customer: "Lisa Park",
    status: "closed",
    priority: "high",
    date: "Mar 12, 2026",
  },
  {
    id: 290,
    subject: "Email forwarding not working",
    customer: "Mike Chen",
    status: "closed",
    priority: "medium",
    date: "Mar 08, 2026",
  },
];

const statusVariant = (status: string) => {
  switch (status) {
    case "open":
      return "warning" as const;
    case "answered":
      return "info" as const;
    case "closed":
      return "default" as const;
    default:
      return "default" as const;
  }
};

const priorityVariant = (priority: string) => {
  switch (priority) {
    case "high":
      return "error" as const;
    case "medium":
      return "warning" as const;
    case "low":
      return "success" as const;
    default:
      return "default" as const;
  }
};

export default function AdminTicketsPage() {
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredTickets =
    statusFilter === "all"
      ? allTickets
      : allTickets.filter((t) => t.status === statusFilter);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white font-heading">
            All Tickets
          </h1>
          <p className="mt-1 text-gray-400">
            Manage support tickets from all customers.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <label
            htmlFor="status-filter"
            className="text-sm text-gray-400"
          >
            Filter:
          </label>
          <select
            id="status-filter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-navy-700 bg-navy-900 px-3 py-2 text-sm text-white transition-colors duration-200 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
          >
            <option value="all">All Status</option>
            <option value="open">Open</option>
            <option value="answered">Answered</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      <Card className="overflow-hidden !p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  ID
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Subject
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Customer
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Status
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Priority
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredTickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-gray-400">
                    #{ticket.id}
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/admin/tickets/${ticket.id}`}
                      className="text-sm font-medium text-white hover:text-indigo-400 transition-colors"
                    >
                      {ticket.subject}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {ticket.customer}
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={statusVariant(ticket.status)}>
                      {ticket.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={priorityVariant(ticket.priority)}>
                      {ticket.priority}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {ticket.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
