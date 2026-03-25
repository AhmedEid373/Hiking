"use client";

interface PricingToggleProps {
  value: "monthly" | "yearly";
  onChange: (v: "monthly" | "yearly") => void;
}

function PricingToggle({ value, onChange }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className={`text-sm font-medium transition-colors ${
          value === "monthly" ? "text-white" : "text-gray-400"
        }`}
      >
        Monthly
      </span>

      <button
        type="button"
        role="switch"
        aria-checked={value === "yearly"}
        onClick={() => onChange(value === "monthly" ? "yearly" : "monthly")}
        className="relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border border-white/10 bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:ring-offset-2 focus:ring-offset-navy-950"
      >
        <span
          className={`inline-block h-5 w-5 rounded-full btn-gradient shadow-md transition-transform ${
            value === "yearly" ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>

      <div className="flex items-center gap-2">
        <span
          className={`text-sm font-medium transition-colors ${
            value === "yearly" ? "text-white" : "text-gray-400"
          }`}
        >
          Yearly
        </span>
        <span className="rounded-full bg-accent-purple/20 px-2 py-0.5 text-xs font-semibold text-accent-purple">
          Save 20%
        </span>
      </div>
    </div>
  );
}

export { PricingToggle, type PricingToggleProps };
