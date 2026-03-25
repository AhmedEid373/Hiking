import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    plans: 2,
    status: "active",
    joined: "Jan 10, 2025",
  },
  {
    id: 2,
    name: "Sarah Miller",
    email: "sarah@example.com",
    plans: 1,
    status: "active",
    joined: "Feb 14, 2025",
  },
  {
    id: 3,
    name: "Mike Chen",
    email: "mike@example.com",
    plans: 3,
    status: "active",
    joined: "Mar 22, 2025",
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma@example.com",
    plans: 1,
    status: "suspended",
    joined: "Apr 05, 2025",
  },
  {
    id: 5,
    name: "Alex Johnson",
    email: "alex@example.com",
    plans: 2,
    status: "active",
    joined: "May 18, 2025",
  },
  {
    id: 6,
    name: "Lisa Park",
    email: "lisa@example.com",
    plans: 0,
    status: "inactive",
    joined: "Jun 30, 2025",
  },
];

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

export default function CustomersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white font-heading">
          Customers
        </h1>
        <p className="mt-1 text-gray-400">
          Manage all customer accounts.
        </p>
      </div>

      <Card className="overflow-hidden !p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Name
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Email
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Plans
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Status
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Joined
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4">
                    <Link
                      href={`/admin/customers/${customer.id}`}
                      className="text-sm font-medium text-white hover:text-indigo-400 transition-colors"
                    >
                      {customer.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {customer.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {customer.plans}
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={statusVariant(customer.status)}>
                      {customer.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {customer.joined}
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
