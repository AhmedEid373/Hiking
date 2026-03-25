import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const stats = [
  { label: "Active Plans", value: "2", change: "+1 this month" },
  { label: "Open Tickets", value: "1", change: "Avg response: 2h" },
  { label: "Total Invoices", value: "12", change: "3 pending" },
  { label: "Account Status", value: "Active", change: "Since Jan 2025" },
];

const recentActivity = [
  {
    id: 1,
    action: "Invoice #1042 paid",
    date: "Mar 22, 2026",
    type: "billing",
  },
  {
    id: 2,
    action: "Ticket #305 replied by support",
    date: "Mar 21, 2026",
    type: "ticket",
  },
  {
    id: 3,
    action: "VPS Pro plan renewed",
    date: "Mar 18, 2026",
    type: "plan",
  },
  {
    id: 4,
    action: "Password changed",
    date: "Mar 15, 2026",
    type: "account",
  },
  {
    id: 5,
    action: "Invoice #1038 paid",
    date: "Mar 10, 2026",
    type: "billing",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold text-white font-heading">
          Welcome back, John
        </h1>
        <p className="mt-1 text-gray-400">
          Here&apos;s an overview of your hosting account.
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

      {/* Recent activity + Quick actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <h2 className="text-lg font-semibold text-white font-heading mb-4">
              Recent Activity
            </h2>
            <div className="divide-y divide-white/5">
              {recentActivity.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-indigo-500" />
                    <span className="text-sm text-gray-300">
                      {item.action}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card>
            <h2 className="text-lg font-semibold text-white font-heading mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Link href="/dashboard/tickets/new" className="block">
                <Button variant="primary" className="w-full">
                  New Ticket
                </Button>
              </Link>
              <Link href="/dashboard/plans" className="block">
                <Button variant="outline" className="w-full">
                  View Plans
                </Button>
              </Link>
              <Link href="/dashboard/invoices" className="block">
                <Button variant="ghost" className="w-full">
                  Billing Portal
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
