"use client";

import { Sheet } from "@/components/sheet";
import { SourceLine } from "@/components/source-line";
import type { CalItem, DayInfo } from "@/lib/calendar";
import { HEBCAL_SOURCE, prettyIsoDate } from "@/lib/calendar";
import { holidayGuide } from "@/lib/holidays";
import type { City } from "@/lib/locations";
import { cn } from "@/lib/cn";
import { useAppStore } from "@/store/app-store";

function kindLabel(kind: CalItem["kind"]): string {
  if (kind === "candles") return "Candles";
  if (kind === "havdalah") return "Havdalah";
  if (kind === "parsha") return "Parsha";
  return "Holy day";
}

export function CalendarView({ city, info }: { city: City; info: DayInfo }) {
  const setOverlay = useAppStore((s) => s.setOverlay);
  const openHoliday = useAppStore((s) => s.openHoliday);
  const groups = groupByDate(info.upcoming);

  return (
    <Sheet title="Calendar" onClose={() => setOverlay(null)}>
      <p className="mb-4 font-sans text-sm text-muted">
        Tap a day for meaning, not only a date. Times are for {city.name}. Candle lighting is 18 minutes before sunset.
      </p>
      <ol className="flex flex-col gap-3">
        {groups.map((group) => (
          <li key={group.isoDate} className="rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]">
            <p className="font-sans text-xs font-medium tracking-widest text-muted uppercase">
              {group.weekday} · {prettyIsoDate(group.isoDate)}
            </p>
            <ul className="mt-3 flex flex-col gap-1">
              {group.items.map((item) => {
                const readable = holidayGuide(item.title, item.kind);
                const label = cleanTitle(item);
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => openHoliday({ title: item.title, isoDate: item.isoDate, kind: item.kind })}
                      className="flex w-full items-start justify-between gap-3 rounded-lg py-2 text-left"
                    >
                      <div className="min-w-0">
                        <p className="font-display text-base leading-snug text-fg">{label}</p>
                        <p className="font-sans text-xs text-subtle">
                          {kindLabel(item.kind)}
                          {readable ? " · Open" : ""}
                        </p>
                      </div>
                      {item.timeLabel ? (
                        <p className={cn("shrink-0 font-sans text-sm tabular-nums text-fg")}>{item.timeLabel}</p>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ol>
      <div className="mt-4">
        <SourceLine>{HEBCAL_SOURCE}</SourceLine>
      </div>
    </Sheet>
  );
}

function cleanTitle(item: CalItem): string {
  if (item.kind === "candles") return "Candle lighting";
  if (item.kind === "havdalah") return "Havdalah";
  return item.title.replace(/^Parashat\s+/, "Parashat ");
}

function groupByDate(items: CalItem[]): { isoDate: string; weekday: string; items: CalItem[] }[] {
  const map = new Map<string, { isoDate: string; weekday: string; items: CalItem[] }>();
  for (const item of items) {
    const existing = map.get(item.isoDate);
    if (existing) existing.items.push(item);
    else map.set(item.isoDate, { isoDate: item.isoDate, weekday: item.weekday, items: [item] });
  }
  return [...map.values()];
}
