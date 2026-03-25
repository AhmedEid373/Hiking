"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const ticketData: Record<
  string,
  {
    subject: string;
    customer: string;
    customerEmail: string;
    status: string;
    priority: string;
    description: string;
    created: string;
    replies: { author: string; role: string; message: string; date: string }[];
  }
> = {
  "305": {
    subject: "Cannot access cPanel on Shared Starter plan",
    customer: "John Doe",
    customerEmail: "john@example.com",
    status: "open",
    priority: "high",
    description:
      "I've been trying to access the cPanel for my Shared Starter plan but keep getting a 503 error. I've tried clearing cache and using different browsers. The issue started about 2 hours ago.",
    created: "Mar 21, 2026",
    replies: [
      {
        author: "Support Team",
        role: "staff",
        message:
          "Hi John, thank you for reporting this. We are currently investigating the issue with the shared hosting node. We'll update you shortly.",
        date: "Mar 21, 2026 — 3:15 PM",
      },
    ],
  },
  "304": {
    subject: "Billing discrepancy on last invoice",
    customer: "Sarah Miller",
    customerEmail: "sarah@example.com",
    status: "open",
    priority: "medium",
    description:
      "I was charged $39.99 instead of the expected $29.99 for my VPS plan this month. Could you please check this?",
    created: "Mar 20, 2026",
    replies: [],
  },
  "298": {
    subject: "SSL certificate renewal question",
    customer: "John Doe",
    customerEmail: "john@example.com",
    status: "answered",
    priority: "medium",
    description:
      "My SSL certificate is expiring next month. Does it auto-renew, or do I need to manually renew it?",
    created: "Mar 15, 2026",
    replies: [
      {
        author: "Support Team",
        role: "staff",
        message:
          "Hi John, great question! All SSL certificates on our platform auto-renew 30 days before expiration. You don't need to take any action.",
        date: "Mar 15, 2026 — 11:45 AM",
      },
    ],
  },
};

const fallbackTicket = {
  subject: "Support Ticket",
  customer: "Customer",
  customerEmail: "customer@example.com",
  status: "open",
  priority: "medium",
  description: "Ticket details are loading...",
  created: "Mar 2026",
  replies: [],
};

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

export default function AdminTicketDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const ticket = ticketData[id] || fallbackTicket;

  const [reply, setReply] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(ticket.status);

  const handleStatusChange = async (newStatus: string) => {
    setStatus(newStatus);
    // Placeholder — would call API to update status
  };

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reply.trim()) return;
    setSubmitting(true);

    try {
      await fetch(`/api/tickets/${id}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: reply }),
      });
      setReply("");
    } catch {
      // Handle error silently
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Back link */}
      <Link
        href="/admin/tickets"
        className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
      >
        &larr; Back to All Tickets
      </Link>

      {/* Ticket header */}
      <Card>
        <div className="space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h1 className="text-2xl font-bold text-white font-heading">
              {ticket.subject}
            </h1>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <Badge variant={statusVariant(status)}>{status}</Badge>
            <Badge variant={priorityVariant(ticket.priority)}>
              {ticket.priority} priority
            </Badge>
            <span className="text-sm text-gray-500">
              Opened {ticket.created}
            </span>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <span>
              Customer:{" "}
              <span className="text-white">{ticket.customer}</span>
            </span>
            <span>
              Email:{" "}
              <span className="text-white">{ticket.customerEmail}</span>
            </span>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed">
            {ticket.description}
          </p>
        </div>
      </Card>

      {/* Admin controls */}
      <Card>
        <h3 className="text-md font-semibold text-white mb-3">
          Admin Controls
        </h3>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <label
              htmlFor="ticket-status"
              className="text-sm text-gray-400"
            >
              Change Status:
            </label>
            <select
              id="ticket-status"
              value={status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="rounded-lg border border-navy-700 bg-navy-900 px-3 py-2 text-sm text-white transition-colors duration-200 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
            >
              <option value="open">Open</option>
              <option value="answered">Answered</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Reply thread */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-white font-heading">
          Replies
        </h2>
        {ticket.replies.length === 0 ? (
          <Card>
            <p className="text-sm text-gray-500 text-center py-4">
              No replies yet.
            </p>
          </Card>
        ) : (
          ticket.replies.map((r, i) => (
            <Card key={i}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white">
                    {r.author}
                  </span>
                  {r.role === "staff" && (
                    <Badge variant="info">Staff</Badge>
                  )}
                </div>
                <span className="text-xs text-gray-500">{r.date}</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {r.message}
              </p>
            </Card>
          ))
        )}
      </div>

      {/* Reply form */}
      <Card>
        <h3 className="text-md font-semibold text-white mb-3">
          Post a Reply
        </h3>
        <form onSubmit={handleReply} className="space-y-4">
          <textarea
            rows={4}
            placeholder="Type your reply..."
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            required
            className="w-full rounded-lg border border-navy-700 bg-navy-900 px-3.5 py-2.5 text-sm text-white placeholder-gray-500 transition-colors duration-200 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 resize-y"
          />
          <Button type="submit" disabled={submitting}>
            {submitting ? "Sending..." : "Send Reply"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
