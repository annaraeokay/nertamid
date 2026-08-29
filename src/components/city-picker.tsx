"use client";

import { useEffect } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { CITIES, cityById } from "@/lib/locations";
import { useAppStore } from "@/store/app-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export function CityPicker({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const cityId = useAppStore((s) => s.cityId);
  const setCityId = useAppStore((s) => s.setCityId);
  const city = cityById(cityId);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  return (
    <>
      <Button type="button" variant="outline" onClick={() => onOpenChange(true)} className="min-w-0 max-w-32 gap-1 px-3">
        <span className="truncate">{city.name}</span>
        <ChevronDown className="size-4 shrink-0 opacity-70" />
      </Button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
          <button
            type="button"
            aria-label="Close city list"
            className="absolute inset-0 bg-bg/70"
            onClick={() => onOpenChange(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="city-picker-title"
            className="relative flex max-h-[80dvh] w-full max-w-md flex-col rounded-t-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:rounded-xl"
          >
            <div className="flex items-center justify-between px-2 pb-2 pt-1">
              <h2 id="city-picker-title" className="font-display text-lg text-fg">
                Candle-lighting city
              </h2>
              <Button type="button" variant="ghost" size="icon" aria-label="Close" onClick={() => onOpenChange(false)}>
                <X className="size-5" />
              </Button>
            </div>
            <ul className="min-h-0 flex-1 overflow-y-auto px-1 pb-3">
              {CITIES.map((c) => {
                const selected = c.id === cityId;
                return (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setCityId(c.id);
                        onOpenChange(false);
                      }}
                      className={cn(
                        "flex h-12 w-full items-center justify-between rounded-md px-3 text-left",
                        selected ? "bg-raised text-fg" : "text-fg hover:bg-raised",
                      )}
                    >
                      <span className="flex min-w-0 flex-col">
                        <span className="truncate font-sans text-sm font-medium">{c.name}</span>
                        <span className="truncate font-sans text-xs text-muted">{c.region}</span>
                      </span>
                      {selected ? <Check className="size-4 text-accent" /> : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
