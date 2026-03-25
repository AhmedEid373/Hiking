import Link from "next/link";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: number;
  yearlyPrice: number;
  features: string[];
  popular?: boolean;
  slug: string;
  billingCycle: "monthly" | "yearly";
}

function PricingCard({
  name,
  price,
  yearlyPrice,
  features,
  popular = false,
  billingCycle,
}: PricingCardProps) {
  const displayPrice = billingCycle === "monthly" ? price : yearlyPrice;
  const period = billingCycle === "monthly" ? "/mo" : "/yr";

  return (
    <div
      className={`glass relative rounded-xl border p-6 backdrop-blur-md transition-all duration-300 ${
        popular
          ? "border-accent-blue/60 shadow-lg shadow-accent-blue/10"
          : "border-white/10 bg-white/5"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="btn-gradient rounded-full px-4 py-1 text-xs font-semibold text-white">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6 text-center">
        <h3 className="font-heading text-xl font-semibold text-white">
          {name}
        </h3>
        <div className="mt-4 flex items-baseline justify-center gap-1">
          <span className="font-heading text-4xl font-bold text-white">
            ${displayPrice.toFixed(2)}
          </span>
          <span className="text-sm text-gray-400">{period}</span>
        </div>
      </div>

      <ul className="mb-8 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/auth/register"
        className={`block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all ${
          popular
            ? "btn-gradient text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            : "border border-indigo-500/50 text-indigo-300 hover:border-indigo-400 hover:bg-indigo-500/10"
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}

export { PricingCard, type PricingCardProps };
