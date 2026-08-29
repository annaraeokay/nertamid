"use client";

import { useState } from "react";
import { HolidayBanners } from "@/components/holiday-banner";
import { Stage } from "@/components/stage";
import { Credit } from "@/components/credit";
import { Reveal } from "@/components/reveal";
import { SaveButton } from "@/components/save-button";
import { SourceLine } from "@/components/source-line";
import { erevTowardShabbat, formatUntil, gatheringNote, HEBCAL_SOURCE, type DayInfo } from "@/lib/calendar";
import { momentPrayer, todayInJewishLife, whyToday } from "@/lib/meaning";
import { monthGuide } from "@/lib/months";
import { parshaGuide } from "@/lib/parsha";
import { prayerById } from "@/lib/prayers";
import { readingForDay } from "@/lib/readings";
import { liveVisual } from "@/lib/visual";
import { useAppStore } from "@/store/app-store";
import type { City } from "@/lib/locations";

export function TodayView({ city, info, now }: { city: City; info: DayInfo; now: Date }) {
  const setTab = useAppStore((s) => s.setTab);
  const setOverlay = useAppStore((s) => s.setOverlay);
  const openPrayer = useAppStore((s) => s.openPrayer);
  const reading = readingForDay(info.absDay, info.psalm27Season);
  const marker = info.isShabbat ? info.nextHavdalah : info.nextCandles;
  const meaning = whyToday(info);
  const moment = momentPrayer(info, now.getTime());
  const prayer = moment ? prayerById(moment.id) : null;
  const life = todayInJewishLife(info);
  const erev = erevTowardShabbat(now.getTime(), info.nextCandles, info.isShabbat);
  const gathering = gatheringNote(erev, info.isShabbat);
  const visual = liveVisual(info, erev, now.getTime(), gathering ?? "");
  const month = monthGuide(info.month);
  const parsha = parshaGuide(info.parsha);
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (id: string) => setOpen((cur) => (cur === id ? null : id));

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-8 px-5 pb-10 pt-2">
      <header className="flex flex-col items-center pt-3 text-center">
        <Stage visual={visual} />
        {gathering ? (
          <p className="mt-4 font-display text-base italic text-muted">{gathering}</p>
        ) : null}
        <p className="mt-5 text-[0.8rem] tracking-[0.22em] text-muted" lang="he">
          נר תמיד
        </p>

        <Reveal
          align="center"
          open={open === "date"}
          onToggle={() => toggle("date")}
          label="About this Hebrew date"
          summary={
            <>
              <h1 className="type-hebrew-date mt-4" dir="rtl" lang="he">
                {info.hebrewHe}
              </h1>
              <p className="mt-2 font-display text-xl text-muted">{info.hebrewEn}</p>
              <p className="mt-1 font-sans text-sm text-subtle">
                {info.gregorianEn}
                <span> · {city.name}</span>
              </p>
              {info.seasonNote ? (
                <p className="mt-3 font-display text-lg italic text-fg">{info.seasonNote}</p>
              ) : null}
            </>
          }
        >
          <div className="rounded-xl bg-surface px-5 py-5 text-left shadow-[var(--shadow-border)]">
            {month ? (
              <>
                <p className="type-kicker">This month</p>
                <p className="mt-2 font-display text-xl text-fg">
                  {month.en}
                  <span className="ms-2 text-muted" lang="he" dir="rtl">
                    {month.he}
                  </span>
                </p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-fg">{month.body}</p>
              </>
            ) : null}
            <p className="mt-5 type-kicker">{meaning.title}</p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-fg">{meaning.body}</p>
            <div className="mt-3">
              <SourceLine>{month ? `${month.source} ${meaning.source}` : meaning.source}</SourceLine>
            </div>
            {life.length > 0 ? (
              <ul className="mt-4 flex flex-col gap-2">
                {life.map((item) => (
                  <li key={item.id} className="font-sans text-sm text-muted">
                    <span className="text-fg">{item.title}.</span> {item.body}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Reveal>
      </header>

      <div className="rounded-xl bg-surface px-5 py-5 shadow-[var(--shadow-border)]">
        <Reveal
          open={open === "zman"}
          onToggle={() => toggle("zman")}
          label={info.isShabbat ? "About Havdalah" : "About candle lighting"}
          summary={
            <>
              <p className="type-kicker">{info.isShabbat ? "Havdalah" : "Next candles"}</p>
              {marker ? (
                <>
                  <p className="type-time mt-2 text-fg">{marker.timeLabel ?? marker.title}</p>
                  <p className="mt-1 font-sans text-sm text-muted">
                    {info.isShabbat ? "Saturday" : marker.weekday}
                    {marker.at ? ` · ${formatUntil(marker.at, now)}` : null}
                  </p>
                </>
              ) : (
                <p className="mt-2 font-sans text-sm text-muted">Times will appear for this city.</p>
              )}
            </>
          }
        >
          <p className="font-sans text-sm leading-relaxed text-fg">
            {info.isShabbat
              ? "Havdalah closes Shabbat after nightfall, when three stars are customarily seen. Do not begin until Shabbat has ended in your location. Wine, spices, and a multi-wick flame are used in many homes."
              : "Candle lighting here is 18 minutes before sunset, via Hebcal. Many light, cover the eyes, then say the blessing. The holy day begins at sundown."}
          </p>
          <button
            type="button"
            onClick={() => openPrayer(info.isShabbat ? "havdalah" : "candles")}
            className="mt-3 font-sans text-sm font-medium text-fg underline decoration-border underline-offset-4"
          >
            {info.isShabbat ? "Havdalah blessing" : "Candle blessing"}
          </button>
        </Reveal>

        {info.parsha ? (
          <div className="mt-5 border-t border-border pt-5">
            <Reveal
              open={open === "parsha"}
              onToggle={() => toggle("parsha")}
              label={`About Parashat ${info.parsha}`}
              summary={
                <>
                  <p className="type-kicker">Parashah</p>
                  <p className="mt-2 font-display text-2xl text-fg">Parashat {info.parsha}</p>
                </>
              }
            >
              {parsha ? (
                <>
                  <p className="font-sans text-sm leading-relaxed text-fg">{parsha.summary}</p>
                  <p className="mt-2 type-meta">{parsha.from}</p>
                  <a
                    href={parsha.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block font-sans text-sm font-medium text-fg underline decoration-border underline-offset-4"
                  >
                    Read on Sefaria
                  </a>
                  <div className="mt-3">
                    <SourceLine>{parsha.source}</SourceLine>
                  </div>
                </>
              ) : null}
            </Reveal>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setOverlay("calendar")}
          className="mt-5 font-sans text-sm font-medium text-fg underline decoration-border underline-offset-4"
        >
          This week’s calendar
        </button>
        <div className="mt-3">
          <SourceLine>{HEBCAL_SOURCE}</SourceLine>
        </div>
      </div>

      <HolidayBanners announcements={info.announcements} />

      {prayer && moment ? (
        <button
          type="button"
          onClick={() => openPrayer(prayer.id)}
          className="rounded-xl bg-surface px-5 py-5 text-left shadow-[var(--shadow-border)]"
        >
          <p className="type-kicker">{moment.label}</p>
          <p className="mt-2 font-display text-2xl text-fg">{prayer.title}</p>
          <p className="mt-1 text-lg text-muted" dir="rtl" lang="he">
            {prayer.hebrewTitle}
          </p>
          {prayer.hebrew.split("\n").length === 1 ? (
            <p className="type-prayer mt-4 text-fg" dir="rtl" lang="he">
              {prayer.hebrew}
            </p>
          ) : null}
          <p className="mt-3 font-sans text-sm leading-relaxed text-muted">{moment.cue}</p>
        </button>
      ) : null}

      <article className="rounded-xl bg-surface px-5 py-5 shadow-[var(--shadow-border)]">
        <div className="flex items-start justify-between gap-3">
          <p className="type-kicker">Light for today</p>
          <SaveButton
            item={{
              id: `reading:${reading.id}`,
              kind: "reading",
              title: reading.source,
              subtitle: reading.english,
            }}
          />
        </div>
        <Reveal
          open={open === "reading"}
          onToggle={() => toggle("reading")}
          label="Expand today’s reading"
          summary={
            <p className="type-prayer mt-4 text-fg" dir="rtl" lang="he">
              {reading.hebrew}
            </p>
          }
        >
          <p className="type-translation text-fg">{reading.english}</p>
          <div className="mt-3">
            <SourceLine>{`${reading.source}. Tehillim text as commonly printed.`}</SourceLine>
          </div>
          <button
            type="button"
            onClick={() => setTab("play")}
            className="mt-4 font-sans text-sm font-medium text-fg underline decoration-border underline-offset-4"
          >
            Play today’s Tehillah
          </button>
        </Reveal>
      </article>

      <button
        type="button"
        onClick={() => openPrayer("haderekh")}
        className="rounded-xl bg-raised px-5 py-4 text-left shadow-[var(--shadow-border)]"
      >
        <p className="font-display text-xl text-fg">I am traveling</p>
        <p className="mt-1 font-sans text-sm leading-relaxed text-muted">
          Tefilat HaDerech, when you ask for it. A prayer, not a substitute for care on the road.
        </p>
      </button>

      <button
        type="button"
        onClick={() => setTab("safety")}
        className="rounded-xl bg-raised px-5 py-4 text-left shadow-[var(--shadow-border)]"
      >
        <p className="font-display text-xl text-fg">If you were targeted</p>
        <p className="mt-1 font-sans text-sm leading-relaxed text-muted">
          Report Jew-hate to the Chicago Jewish Alliance. If it is a genuine emergency, call 911.
        </p>
      </button>
      <Credit className="pt-1 text-center font-sans text-xs text-subtle" />
    </div>
  );
}
