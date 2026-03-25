import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

const stats = [
  { label: "Total Revenue", value: "$12,482", change: "+12% this month" },
  { label: "Active Customers", value: "184", change: "+8 this month" },
  { label: "Active Subscriptions", value: "247", change: "93% retention" },
  { label: "Open Tickets", value: "12", change: "Avg response: 1.5h" },
];

const latestTickets = [
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

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white font-heading">
          Admin Dashboard
        </h1>
        <p className="mt-1 text-gray-400">
          Overview of your hosting platform.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <p className="text-sm text-gray-400">{stat.label}</p>
            <p className="mt-1 text-2xl font-bold text-white">{stat.value}</p>
            <p className="mt-1 text-xs text-gray-500">{stat.change}</p>
          </Card>
        ))}
      </div>

      {/* Chart placeholder + Latest tickets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart placeholder */}
        <div className="lg:col-span-1">
          <Card className="h-full">
            <h2 className="text-lg font-semibold text-white font-heading mb-4">
              Revenue Chart
            </h2>
            <div className="flex items-center justify-center h-48 rounded-lg border border-dashed border-white/10">
              <p className="text-sm text-gray-500">
                Chart placeholder — integrate with charting library
              </p>
            </div>
          </Card>
        </div>

        {/* Latest tickets */}
        <div className="lg:col-span-2">
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white font-heading">
                Latest Tickets
              </h2>
              <Link
                href="/admin/tickets"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                View all
              </Link>
            </div>
            <div className="divide-y divide-white/5">
              {latestTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-3 first:pt-0 last:pb-0"
                >
                  <div className="space-y-1">
                    <Link
                      href={`/admin/tickets/${ticket.id}`}
                      className="text-sm font-medium text-white hover:text-indigo-400 transition-colors"
                    >
                      {ticket.subject}
                    </Link>
                    <p className="text-xs text-gray-500">{ticket.customer}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge variant={statusVariant(ticket.status)}>
                      {ticket.status}
                    </Badge>
                    <Badge variant={priorityVariant(ticket.priority)}>
                      {ticket.priority}
                    </Badge>
                    <span className="text-xs text-gray-500 whitespace-nowrap">
                      {ticket.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
