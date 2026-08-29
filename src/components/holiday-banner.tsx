"use client";

import type { Announcement } from "@/lib/calendar";
import { prettyIsoDate } from "@/lib/calendar";
import { cn } from "@/lib/cn";
import { useAppStore } from "@/store/app-store";

export function HolidayBanners({ announcements }: { announcements: Announcement[] }) {
  const openHoliday = useAppStore((s) => s.openHoliday);
  if (announcements.length === 0) return null;
  const [hero, ...rest] = announcements;
  const more = rest.slice(0, 2);

  function open(a: Announcement) {
    openHoliday({ title: a.titles[0] ?? a.greeting, isoDate: a.isoDate, kind: "holiday" });
  }

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={() => open(hero)}
        className="rounded-xl bg-raised px-5 py-5 text-left shadow-[var(--shadow-border)]"
      >
        <p className="type-kicker">
          {hero.daysUntil <= 0 ? "Today" : "Coming"}
        </p>
        <h2 className="mt-2 font-display text-3xl leading-tight text-fg">{hero.greeting}</h2>
        <p className="mt-1 font-display text-base text-muted">{hero.titles.join(" · ")}</p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-fg">{hero.note}</p>
        <p className="mt-3 font-sans text-sm tabular-nums text-subtle">
          {hero.when} · {prettyIsoDate(hero.isoDate)}
        </p>
        <p className="mt-3 font-sans text-xs text-muted">What is it, when it begins here, what we say and do.</p>
      </button>
      {more.map((a) => (
        <button
          key={a.id}
          type="button"
          onClick={() => open(a)}
          className={cn("rounded-xl bg-surface px-5 py-4 text-left shadow-[var(--shadow-border)]")}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="font-display text-lg leading-snug text-fg">{a.greeting}</p>
              <p className="mt-1 font-sans text-sm text-muted">{a.titles.join(" · ")}</p>
            </div>
            <p className="shrink-0 font-sans text-xs tabular-nums text-subtle">
              {a.when}
              <span className="mt-1 block text-right">{prettyIsoDate(a.isoDate)}</span>
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
