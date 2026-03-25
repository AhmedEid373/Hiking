"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md",
        hover && "glass-hover transition-all duration-300 hover:bg-white/10 hover:border-white/20",
        className,
      )}
    >
      {children}
    </div>
  );
}

export { Card, type CardProps };
