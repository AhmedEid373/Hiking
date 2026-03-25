"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "success" | "warning" | "error" | "info" | "default";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  success: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  warning: "bg-yellow-500/15 text-yellow-400 border-yellow-500/25",
  error: "bg-red-500/15 text-red-400 border-red-500/25",
  info: "bg-blue-500/15 text-blue-400 border-blue-500/25",
  default: "bg-gray-500/15 text-gray-400 border-gray-500/25",
};

function Badge({ variant = "default", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

export { Badge, type BadgeProps, type BadgeVariant };
