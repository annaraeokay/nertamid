"use client";

import { useEffect } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { startAlarm, stopAlarm } from "@/lib/alarm";
import { useAppStore } from "@/store/app-store";

export function WalkAlarm() {
  const alarming = useAppStore((s) => s.alarming);
  const checkIn = useAppStore((s) => s.checkIn);

  useEffect(() => {
    if (!alarming) {
      stopAlarm();
      return;
    }
    startAlarm();
    return () => stopAlarm();
  }, [alarming]);

  if (!alarming) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-bg/90 p-5 sm:items-center">
      <div className="w-full max-w-md rounded-xl bg-surface px-5 py-6 shadow-[var(--shadow-border)]">
        <p className="font-sans text-xs font-medium tracking-widest text-muted uppercase">Walk timer</p>
        <h2 className="mt-3 font-display text-3xl text-fg">Check in</h2>
        <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
          The time you set has ended. This alarm is only on this phone.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Button type="button" size="lg" onClick={checkIn}>
            I am safe
          </Button>
          <Button type="button" variant="danger" size="lg" asChild>
            <a href="tel:911">
              <Phone className="size-4" />
              Call 911
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
