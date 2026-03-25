import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    id: 1,
    name: "Shared Starter",
    category: "Shared Hosting",
    monthly: "$4.99",
    yearly: "$49.99",
    status: "active",
  },
  {
    id: 2,
    name: "Shared Business",
    category: "Shared Hosting",
    monthly: "$9.99",
    yearly: "$99.99",
    status: "active",
  },
  {
    id: 3,
    name: "VPS Basic",
    category: "VPS Hosting",
    monthly: "$14.99",
    yearly: "$149.99",
    status: "active",
  },
  {
    id: 4,
    name: "VPS Pro",
    category: "VPS Hosting",
    monthly: "$29.99",
    yearly: "$299.99",
    status: "active",
  },
  {
    id: 5,
    name: "VPS Enterprise",
    category: "VPS Hosting",
    monthly: "$59.99",
    yearly: "$599.99",
    status: "active",
  },
  {
    id: 6,
    name: "WordPress Basic",
    category: "WordPress Hosting",
    monthly: "$9.99",
    yearly: "$99.99",
    status: "active",
  },
  {
    id: 7,
    name: "WordPress Pro",
    category: "WordPress Hosting",
    monthly: "$19.99",
    yearly: "$199.99",
    status: "active",
  },
  {
    id: 8,
    name: "Dedicated Starter",
    category: "Dedicated Server",
    monthly: "$99.99",
    yearly: "$999.99",
    status: "active",
  },
  {
    id: 9,
    name: "Email Basic",
    category: "Email Hosting",
    monthly: "$3.99",
    yearly: "$39.99",
    status: "inactive",
  },
];

export default function AdminPlansPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white font-heading">
            Manage Plans
          </h1>
          <p className="mt-1 text-gray-400">
            View and edit all hosting plans.
          </p>
        </div>
        <Button variant="primary">Add Plan</Button>
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
                  Category
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Monthly
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Yearly
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Status
                </th>
                <th className="text-right text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {plans.map((plan) => (
                <tr
                  key={plan.id}
                  className="hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-white">
                    {plan.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {plan.category}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {plan.monthly}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {plan.yearly}
                  </td>
                  <td className="px-6 py-4">
                    <Badge
                      variant={
                        plan.status === "active" ? "success" : "default"
                      }
                    >
                      {plan.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
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
