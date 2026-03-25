import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    id: 1,
    name: "VPS Pro",
    status: "active",
    cycle: "Monthly",
    price: "$29.99/mo",
    renewal: "Apr 18, 2026",
    specs: "4 vCPU, 8 GB RAM, 160 GB NVMe",
  },
  {
    id: 2,
    name: "Shared Starter",
    status: "active",
    cycle: "Yearly",
    price: "$59.88/yr",
    renewal: "Jan 10, 2027",
    specs: "10 GB SSD, 100 GB Bandwidth",
  },
  {
    id: 3,
    name: "WordPress Basic",
    status: "cancelled",
    cycle: "Monthly",
    price: "$9.99/mo",
    renewal: "N/A",
    specs: "5 GB SSD, 1 Site",
  },
];

const statusVariant = (status: string) => {
  switch (status) {
    case "active":
      return "success" as const;
    case "cancelled":
      return "error" as const;
    default:
      return "default" as const;
  }
};

export default function PlansPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white font-heading">
          My Hosting Plans
        </h1>
        <p className="mt-1 text-gray-400">
          Manage your active hosting subscriptions.
        </p>
      </div>

      <div className="space-y-4">
        {plans.map((plan) => (
          <Card key={plan.id}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-white">
                    {plan.name}
                  </h3>
                  <Badge variant={statusVariant(plan.status)}>
                    {plan.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-400">{plan.specs}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span>
                    Billing: <span className="text-gray-300">{plan.cycle}</span>
                  </span>
                  <span>
                    Price: <span className="text-gray-300">{plan.price}</span>
                  </span>
                  <span>
                    Next Renewal:{" "}
                    <span className="text-gray-300">{plan.renewal}</span>
                  </span>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button variant="outline" size="sm">
                  Manage
                </Button>
                {plan.status === "active" && (
                  <Button variant="ghost" size="sm">
                    Cancel
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
