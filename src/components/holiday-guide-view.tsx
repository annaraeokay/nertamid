"use client";

import { ArrowUpRight } from "lucide-react";
import { Sheet } from "@/components/sheet";
import { SourceLine } from "@/components/source-line";
import type { CalItem, DayInfo } from "@/lib/calendar";
import { prettyIsoDate } from "@/lib/calendar";
import { holidayGuide } from "@/lib/holidays";
import type { City } from "@/lib/locations";
import { useAppStore } from "@/store/app-store";

export function HolidayGuideView({ city, info }: { city: City; info: DayInfo }) {
  const focus = useAppStore((s) => s.holidayFocus);
  const setOverlay = useAppStore((s) => s.setOverlay);
  const openPrayer = useAppStore((s) => s.openPrayer);

  const title = focus?.title ?? "";
  const guide = holidayGuide(title, focus?.kind);
  const whenHere = whenItBegins(city, info, focus?.isoDate ?? "", guide);

  function close() {
    setOverlay(null);
  }

  if (!guide) {
    return (
      <Sheet title="This day" onClose={close}>
        <p className="font-sans text-sm leading-relaxed text-muted">
          {title || "A day on the calendar."} Meaning for this listing is not written yet. Times still come from Hebcal for {city.name}.
        </p>
      </Sheet>
    );
  }

  return (
    <Sheet title={guide.title} onClose={close}>
      <p className="font-display text-xl text-fg">{guide.greeting}</p>
      <section className="mt-6">
        <h2 className="font-sans text-xs font-medium tracking-widest text-muted uppercase">What is it?</h2>
        <p className="mt-2 font-sans text-sm leading-relaxed text-fg">{guide.what}</p>
      </section>
      <section className="mt-5">
        <h2 className="font-sans text-xs font-medium tracking-widest text-muted uppercase">When does it begin here?</h2>
        <p className="mt-2 font-sans text-sm leading-relaxed text-fg">{whenHere}</p>
      </section>
      <section className="mt-5">
        <h2 className="font-sans text-xs font-medium tracking-widest text-muted uppercase">What do I need?</h2>
        <p className="mt-2 font-sans text-sm leading-relaxed text-fg">{guide.need}</p>
      </section>
      <section className="mt-5">
        <h2 className="font-sans text-xs font-medium tracking-widest text-muted uppercase">What do we say?</h2>
        <p className="mt-2 font-sans text-sm leading-relaxed text-fg">{guide.say}</p>
        {guide.prayerId ? (
          <button
            type="button"
            onClick={() => openPrayer(guide.prayerId as string)}
            className="mt-3 font-sans text-sm font-medium text-fg underline decoration-border underline-offset-4"
          >
            Open the words
          </button>
        ) : null}
      </section>
      <section className="mt-5">
        <h2 className="font-sans text-xs font-medium tracking-widest text-muted uppercase">What do we do?</h2>
        <p className="mt-2 font-sans text-sm leading-relaxed text-fg">{guide.do}</p>
      </section>
      <section className="mt-5">
        <h2 className="font-sans text-xs font-medium tracking-widest text-muted uppercase">Learn more</h2>
        <p className="mt-2 font-sans text-sm leading-relaxed text-fg">{guide.more}</p>
        {guide.learnHref && guide.learnLabel ? (
          <a
            href={guide.learnHref}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1 font-sans text-sm font-medium text-fg underline decoration-border underline-offset-4"
          >
            {guide.learnLabel}
            <ArrowUpRight className="size-3.5" />
          </a>
        ) : null}
        <div className="mt-3">
          <SourceLine>{guide.source}</SourceLine>
        </div>
      </section>
    </Sheet>
  );
}

function whenItBegins(
  city: City,
  info: DayInfo,
  isoDate: string,
  guide: { key: string; twoDaysInDiaspora: boolean } | null,
): string {
  const onDay = info.upcoming.filter((it) => it.isoDate === isoDate);
  const candles = findCandles(info, isoDate, onDay, guide?.key ?? "");
  const havdalah = onDay.find((it) => it.kind === "havdalah");
  const weekday = onDay[0]?.weekday ?? "";
  const date = isoDate ? prettyIsoDate(isoDate) : "";
  const parts: string[] = [];

  if (candles?.timeLabel) {
    parts.push(
      `In ${city.name}, it begins at candle lighting, ${candles.timeLabel} on ${candles.weekday}, ${prettyIsoDate(candles.isoDate)}. Lighting here is 18 minutes before sunset.`,
    );
  } else if (weekday && date) {
    parts.push(`In ${city.name}, it is marked on ${weekday}, ${date}. Holy days begin at sundown the evening before.`);
  } else {
    parts.push(`Times for ${city.name} come from Hebcal, using this city’s coordinates.`);
  }

  if (havdalah?.timeLabel && guide?.key === "shabbat") {
    parts.push(`It ends at Havdalah, ${havdalah.timeLabel} on ${havdalah.weekday}.`);
  }

  if (guide?.twoDaysInDiaspora) {
    parts.push(
      city.il
        ? "Israel’s calendar is used for this city."
        : "In the diaspora this is often kept for two days. Israel’s calendar can differ.",
    );
  }

  return parts.join(" ");
}

function prevIso(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d - 1));
  return `${dt.getUTCFullYear()}-${String(dt.getUTCMonth() + 1).padStart(2, "0")}-${String(dt.getUTCDate()).padStart(2, "0")}`;
}

function findCandles(info: DayInfo, isoDate: string, onDay: CalItem[], key: string): CalItem | undefined {
  const same = onDay.find((it) => it.kind === "candles");
  const erevKeys = new Set([
    "rosh-hashanah",
    "yom-kippur",
    "sukkot",
    "pesach",
    "shavuot",
    "shemini-atzeret",
    "simchat-torah",
    "shabbat",
    "chanukah",
  ]);
  if (erevKeys.has(key) && isoDate) {
    const erev = info.upcoming.find((it) => it.kind === "candles" && it.isoDate === prevIso(isoDate));
    if (erev) return erev;
  }
  return same;
}
