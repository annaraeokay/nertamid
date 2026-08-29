"use client";

import { createFileRoute } from "@tanstack/react-router";
import { Bell, Bookmark, BookOpen, FlameKindling, Puzzle, Shield, Users } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { CalendarView } from "@/components/calendar-view";
import { HolidayGuideView } from "@/components/holiday-guide-view";
import { CityPicker } from "@/components/city-picker";
import { PlacesView } from "@/components/places-view";
import { PlayView } from "@/components/play-view";
import { PrayersView } from "@/components/prayers-view";
import { SafetyView } from "@/components/safety-view";
import { SavedView } from "@/components/saved-view";
import { SettingsView } from "@/components/settings-view";
import { TodayView } from "@/components/today-view";
import { WalkAlarm } from "@/components/walk-alarm";
import { getDayInfo, type DayInfo } from "@/lib/calendar";
import { cn } from "@/lib/cn";
import { cityById } from "@/lib/locations";
import { notificationsSupported } from "@/lib/notify";
import { useAppStore, type Tab } from "@/store/app-store";

export const Route = createFileRoute("/")({ component: Home });

const TABS: { id: Tab; label: string; icon: typeof FlameKindling }[] = [
  { id: "today", label: "Today", icon: FlameKindling },
  { id: "play", label: "Play", icon: Puzzle },
  { id: "prayers", label: "Prayers", icon: BookOpen },
  { id: "safety", label: "Safety", icon: Shield },
  { id: "places", label: "Community", icon: Users },
];

function Home() {
  const tab = useAppStore((s) => s.tab);
  const setTab = useAppStore((s) => s.setTab);
  const overlay = useAppStore((s) => s.overlay);
  const setOverlay = useAppStore((s) => s.setOverlay);
  const cityId = useAppStore((s) => s.cityId);
  const hydrate = useAppStore((s) => s.hydrate);
  const tickWalk = useAppStore((s) => s.tickWalk);
  const [now, setNow] = useState(() => new Date());
  const [infoNow, setInfoNow] = useState(() => new Date());
  const [cityOpen, setCityOpen] = useState(false);
  const city = cityById(cityId);
  const info = useMemo(() => getDayInfo(city, infoNow), [city, infoNow]);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    setInfoNow(new Date());
  }, [city.id]);

  useEffect(() => {
    const id = window.setInterval(() => {
      const next = new Date();
      setNow(next);
      tickWalk(next.getTime());
    }, 1000);
    const slow = window.setInterval(() => setInfoNow(new Date()), 30_000);
    return () => {
      window.clearInterval(id);
      window.clearInterval(slow);
    };
  }, [tickWalk]);

  useLocalReminders(info);

  return (
    <div className="flex h-dvh justify-center bg-bg text-fg">
      <div className="relative flex h-dvh w-full max-w-lg flex-col overflow-hidden">
        <header className="flex items-center justify-between gap-3 px-5 pt-[max(1rem,env(safe-area-inset-top))] pb-3">
          <div className="min-w-0">
            <p className="font-display text-[1.35rem] leading-none text-fg">Ner Tamid</p>
            <p className="mt-1 font-display text-sm italic text-muted">Forever Light</p>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setOverlay(overlay === "saved" ? null : "saved")}
              aria-label="Saved"
              className="inline-flex size-10 items-center justify-center rounded-md text-muted hover:bg-raised hover:text-fg"
            >
              <Bookmark className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => setOverlay(overlay === "settings" ? null : "settings")}
              aria-label="Reminders"
              className="inline-flex size-10 items-center justify-center rounded-md text-muted hover:bg-raised hover:text-fg"
            >
              <Bell className="size-4" />
            </button>
            <CityPicker open={cityOpen} onOpenChange={setCityOpen} />
          </div>
        </header>

        <main className="min-h-0 flex-1 overflow-y-auto">
          {overlay === "calendar" ? <CalendarView city={city} info={info} /> : null}
          {overlay === "holiday" ? <HolidayGuideView city={city} info={info} /> : null}
          {overlay === "saved" ? <SavedView /> : null}
          {overlay === "settings" ? <SettingsView /> : null}
          {overlay === null && tab === "today" ? <TodayView city={city} info={info} now={now} /> : null}
          {overlay === null && tab === "play" ? <PlayView absDay={info.absDay} /> : null}
          {overlay === null && tab === "prayers" ? <PrayersView info={info} now={now} /> : null}
          {overlay === null && tab === "safety" ? <SafetyView now={now} /> : null}
          {overlay === null && tab === "places" ? <PlacesView city={city} /> : null}
        </main>

        <nav
          aria-label="Primary"
          className="grid grid-cols-5 border-t border-border bg-bg pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1"
        >
          {TABS.map((t) => {
            const active = overlay === null && tab === t.id;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  "flex h-14 flex-col items-center justify-center gap-1 font-sans text-xs",
                  active ? "text-fg" : "text-subtle",
                )}
              >
                <Icon className="size-5" strokeWidth={active ? 2.2 : 1.8} />
                {t.label}
              </button>
            );
          })}
        </nav>
        <WalkAlarm />
      </div>
    </div>
  );
}

function useLocalReminders(info: DayInfo) {
  const notify = useAppStore((s) => s.notify);
  const fired = useRef(new Set<string>());

  useEffect(() => {
    if (!notificationsSupported() || Notification.permission !== "granted") return;
    const now = Date.now();

    const mark = (id: string, body: string) => {
      const key = `${info.todayIso}:${id}`;
      if (fired.current.has(key)) return;
      fired.current.add(key);
      try {
        new Notification("Ner Tamid", { body, silent: true });
      } catch {
        /* ignore */
      }
    };

    if (notify.candles && info.nextCandles?.at) {
      const ms = info.nextCandles.at - now;
      if (ms > 0 && ms <= 60 * 60 * 1000) {
        mark("candles", `Candle lighting ${info.nextCandles.timeLabel ?? "soon"}`);
      }
    }
    if (notify.holiday && info.announcements[0] && info.announcements[0].daysUntil <= 1) {
      mark("holiday", `${info.announcements[0].greeting}. ${info.announcements[0].when}.`);
    }
    if (notify.roshChodesh && info.isRoshChodesh && info.roshChodeshTitle) {
      mark("rc", info.roshChodeshTitle);
    }
    if (notify.omer && info.omer) {
      mark("omer", info.omer.title);
    }
    if (notify.tehillah) {
      mark("tehillah", "Today’s Tehillah is ready.");
    }
  }, [info, notify]);
}
