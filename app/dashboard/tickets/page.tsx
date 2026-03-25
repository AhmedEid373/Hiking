import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const tickets = [
  {
    id: 305,
    subject: "Cannot access cPanel on Shared Starter plan",
    status: "open",
    priority: "high",
    created: "Mar 21, 2026",
  },
  {
    id: 298,
    subject: "SSL certificate renewal question",
    status: "answered",
    priority: "medium",
    created: "Mar 15, 2026",
  },
  {
    id: 284,
    subject: "Request to upgrade VPS resources",
    status: "closed",
    priority: "low",
    created: "Mar 02, 2026",
  },
  {
    id: 271,
    subject: "Email deliverability issues",
    status: "closed",
    priority: "medium",
    created: "Feb 18, 2026",
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

export default function TicketsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white font-heading">
            Support Tickets
          </h1>
          <p className="mt-1 text-gray-400">
            View and manage your support requests.
          </p>
        </div>
        <Link href="/dashboard/tickets/new">
          <Button variant="primary">New Ticket</Button>
        </Link>
      </div>

      <Card className="overflow-hidden !p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Subject
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Status
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Priority
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Created
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4">
                    <Link
                      href={`/dashboard/tickets/${ticket.id}`}
                      className="text-sm font-medium text-white hover:text-indigo-400 transition-colors"
                    >
                      {ticket.subject}
                    </Link>
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
                    {ticket.created}
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
