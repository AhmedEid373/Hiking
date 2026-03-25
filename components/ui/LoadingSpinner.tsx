"use client";

import { cn } from "@/lib/utils";

type SpinnerSize = "sm" | "md" | "lg";

interface LoadingSpinnerProps {
  size?: SpinnerSize;
  className?: string;
}

const sizeStyles: Record<SpinnerSize, string> = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-[3px]",
  lg: "h-12 w-12 border-4",
};

function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        "animate-spin rounded-full border-indigo-500 border-t-transparent",
        sizeStyles[size],
        className,
      )}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export { LoadingSpinner, type LoadingSpinnerProps, type SpinnerSize };
