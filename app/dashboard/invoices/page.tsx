import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const invoices = [
  { id: "INV-1042", date: "Mar 22, 2026", amount: "$29.99", status: "paid" },
  { id: "INV-1038", date: "Mar 10, 2026", amount: "$59.88", status: "paid" },
  {
    id: "INV-1035",
    date: "Feb 18, 2026",
    amount: "$29.99",
    status: "paid",
  },
  {
    id: "INV-1030",
    date: "Feb 05, 2026",
    amount: "$9.99",
    status: "pending",
  },
  {
    id: "INV-1024",
    date: "Jan 18, 2026",
    amount: "$29.99",
    status: "paid",
  },
  {
    id: "INV-1019",
    date: "Jan 02, 2026",
    amount: "$59.88",
    status: "failed",
  },
  {
    id: "INV-1012",
    date: "Dec 18, 2025",
    amount: "$29.99",
    status: "paid",
  },
];

const statusVariant = (status: string) => {
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

export default function InvoicesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white font-heading">
          Invoice History
        </h1>
        <p className="mt-1 text-gray-400">
          View and download your billing history.
        </p>
      </div>

      <Card className="overflow-hidden !p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Invoice #
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Date
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                  Amount
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
              {invoices.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-white">
                    {invoice.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {invoice.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {invoice.amount}
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={statusVariant(invoice.status)}>
                      {invoice.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm">
                      Download
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
