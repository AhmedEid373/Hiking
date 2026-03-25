import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

const customerData: Record<
  string,
  {
    name: string;
    email: string;
    status: string;
    joined: string;
    plans: { name: string; status: string; price: string; renewal: string }[];
    invoices: { id: string; date: string; amount: string; status: string }[];
    tickets: { id: number; subject: string; status: string; date: string }[];
  }
> = {
  "1": {
    name: "John Doe",
    email: "john@example.com",
    status: "active",
    joined: "Jan 10, 2025",
    plans: [
      {
        name: "VPS Pro",
        status: "active",
        price: "$29.99/mo",
        renewal: "Apr 18, 2026",
      },
      {
        name: "Shared Starter",
        status: "active",
        price: "$59.88/yr",
        renewal: "Jan 10, 2027",
      },
    ],
    invoices: [
      { id: "INV-1042", date: "Mar 22, 2026", amount: "$29.99", status: "paid" },
      { id: "INV-1038", date: "Mar 10, 2026", amount: "$59.88", status: "paid" },
      { id: "INV-1030", date: "Feb 05, 2026", amount: "$9.99", status: "pending" },
    ],
    tickets: [
      {
        id: 305,
        subject: "Cannot access cPanel on Shared Starter plan",
        status: "open",
        date: "Mar 21, 2026",
      },
      {
        id: 298,
        subject: "SSL certificate renewal question",
        status: "answered",
        date: "Mar 15, 2026",
      },
    ],
  },
};

const fallbackCustomer = {
  name: "Customer",
  email: "customer@example.com",
  status: "active",
  joined: "2025",
  plans: [],
  invoices: [],
  tickets: [],
};

const statusVariant = (status: string) => {
  switch (status) {
    case "active":
      return "success" as const;
    case "suspended":
      return "error" as const;
    case "inactive":
      return "default" as const;
    default:
      return "default" as const;
  }
};

const invoiceStatusVariant = (status: string) => {
  switch (status) {
    case "paid":
      return "success" as const;
    case "pending":
      return "warning" as const;
    case "failed":
      return "error" as const;
    default:
      return "default" as const;
  }
};

const ticketStatusVariant = (status: string) => {
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

export default async function CustomerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const customer = customerData[id] || fallbackCustomer;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Link
            href="/admin/customers"
            className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            &larr; Back to Customers
          </Link>
          <h1 className="text-3xl font-bold text-white font-heading mt-2">
            {customer.name}
          </h1>
          <p className="mt-1 text-gray-400">{customer.email}</p>
        </div>
        <Badge variant={statusVariant(customer.status)}>
          {customer.status}
        </Badge>
      </div>

      {/* Profile Info */}
      <Card>
        <h2 className="text-lg font-semibold text-white font-heading mb-4">
          Profile Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Name</p>
            <p className="text-sm text-white mt-1">{customer.name}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
            <p className="text-sm text-white mt-1">{customer.email}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Joined</p>
            <p className="text-sm text-white mt-1">{customer.joined}</p>
          </div>
        </div>
      </Card>

      {/* Active Plans */}
      <Card>
        <h2 className="text-lg font-semibold text-white font-heading mb-4">
          Active Plans
        </h2>
        {customer.plans.length === 0 ? (
          <p className="text-sm text-gray-500">No active plans.</p>
        ) : (
          <div className="divide-y divide-white/5">
            {customer.plans.map((plan, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-3 first:pt-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-white">
                    {plan.name}
                  </span>
                  <Badge variant={statusVariant(plan.status)}>
                    {plan.status}
                  </Badge>
                </div>
                <div className="flex gap-4 text-sm text-gray-400">
                  <span>{plan.price}</span>
                  <span>Renews: {plan.renewal}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Invoice History */}
      <Card className="overflow-hidden !p-0">
        <div className="px-6 pt-6 pb-4">
          <h2 className="text-lg font-semibold text-white font-heading">
            Invoice History
          </h2>
        </div>
        {customer.invoices.length === 0 ? (
          <p className="text-sm text-gray-500 px-6 pb-6">No invoices found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-3">
                    Invoice
                  </th>
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-3">
                    Date
                  </th>
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-3">
                    Amount
                  </th>
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {customer.invoices.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-3 text-sm font-medium text-white">
                      {invoice.id}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-400">
                      {invoice.date}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-300">
                      {invoice.amount}
                    </td>
                    <td className="px-6 py-3">
                      <Badge variant={invoiceStatusVariant(invoice.status)}>
                        {invoice.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Support Tickets */}
      <Card>
        <h2 className="text-lg font-semibold text-white font-heading mb-4">
          Support Tickets
        </h2>
        {customer.tickets.length === 0 ? (
          <p className="text-sm text-gray-500">No tickets found.</p>
        ) : (
          <div className="divide-y divide-white/5">
            {customer.tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-3 first:pt-0 last:pb-0"
              >
                <div className="space-y-1">
                  <Link
                    href={`/admin/tickets/${ticket.id}`}
                    className="text-sm font-medium text-white hover:text-indigo-400 transition-colors"
                  >
                    #{ticket.id} — {ticket.subject}
                  </Link>
                  <p className="text-xs text-gray-500">{ticket.date}</p>
                </div>
                <Badge variant={ticketStatusVariant(ticket.status)}>
                  {ticket.status}
                </Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
