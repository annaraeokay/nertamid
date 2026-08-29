"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Reveal({
  open,
  onToggle,
  label,
  summary,
  children,
  align = "left",
}: {
  open: boolean;
  onToggle: () => void;
  label: string;
  summary: ReactNode;
  children: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={cn(align === "center" && "text-center")}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-label={label}
        className={cn("w-full", align === "center" ? "text-center" : "text-left")}
      >
        {summary}
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out-soft)] motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className={cn("pt-3", align === "center" && "mx-auto max-w-md")}>{children}</div>
        </div>
      </div>
    </div>
  );
}
