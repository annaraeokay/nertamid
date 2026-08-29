"use client";

import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

export function Sheet({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col px-5 pb-8 pt-2">
      <div className="mb-4 flex items-center gap-2">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex size-10 items-center justify-center rounded-md text-muted hover:bg-raised hover:text-fg"
          aria-label="Back"
        >
          <ArrowLeft className="size-5" />
        </button>
        <h1 className="font-display text-2xl text-fg">{title}</h1>
      </div>
      {children}
    </div>
  );
}
