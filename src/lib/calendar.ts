import {
  CandleLightingEvent,
  Event,
  HDate,
  HavdalahEvent,
  HebrewCalendar,
  Location,
  OmerEvent,
  ParshaEvent,
  flags,
} from "@hebcal/core";
import { holidayCopy, whenLabel } from "@/lib/holidays";
import { withoutNikkud } from "@/lib/hebrew";
import type { City } from "@/lib/locations";

export type CalKind = "candles" | "havdalah" | "parsha" | "holiday";

export type LightMood =
  | "weekday"
  | "elul"
  | "shabbat"
  | "rosh-hashanah"
  | "yom-kippur"
  | "sukkot"
  | "chanukah"
  | "purim"
  | "pesach"
  | "shavuot";

export type CalItem = {
  id: string;
  isoDate: string;
  weekday: string;
  title: string;
  timeLabel: string | null;
  at: number | null;
  kind: CalKind;
};

export type Announcement = {
  id: string;
  isoDate: string;
  weekday: string;
  titles: string[];
  greeting: string;
  note: string;
  when: string;
  daysUntil: number;
  featured: boolean;
};

export type OmerInfo = {
  day: number;
  title: string;
};

export type DayInfo = {
  hebrewEn: string;
  hebrewHe: string;
  gregorianEn: string;
  weekday: string;
  isShabbat: boolean;
  isRoshChodesh: boolean;
  roshChodeshTitle: string | null;
  omer: OmerInfo | null;
  isFast: boolean;
  fastTitle: string | null;
  specialShabbat: string | null;
  psalm27Season: boolean;
  seasonNote: string | null;
  parsha: string | null;
  holidaysToday: string[];
  announcements: Announcement[];
  nextCandles: CalItem | null;
  nextHavdalah: CalItem | null;
  lastCandles: CalItem | null;
  lastHavdalah: CalItem | null;
  upcoming: CalItem[];
  absDay: number;
  todayIso: string;
  month: number;
  day: number;
  mood: LightMood;
  lights: number;
};

export function erevTowardShabbat(
  nowMs: number,
  nextCandles: CalItem | null,
  isShabbat: boolean,
): number {
  if (isShabbat) return 1;
  if (!nextCandles?.at || nextCandles.weekday !== "Friday") return 0;
  const hours = (nextCandles.at - nowMs) / 3_600_000;
  if (hours > 72) return 0;
  if (hours <= 0) return 1;
  const t = 1 - hours / 72;
  return t * t;
}

export function gatheringNote(erev: number, isShabbat: boolean): string | null {
  if (isShabbat || erev < 0.07) return null;
  if (erev < 0.22) return "The light is beginning to gather.";
  if (erev < 0.5) return "Toward Shabbat. The light is gathering.";
  if (erev < 0.82) return "Erev Shabbat. The flame is filling.";
  return "Almost time to light.";
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function ymdInTz(now: Date, tz: string): { y: number; m: number; d: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(now);
  const num = (type: string) => Number(parts.find((p) => p.type === type)?.value);
  return { y: num("year"), m: num("month"), d: num("day") };
}

function civilNoonUtc(y: number, m: number, d: number): Date {
  return new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
}

function addDays(y: number, m: number, d: number, delta: number): Date {
  return new Date(Date.UTC(y, m - 1, d + delta, 12, 0, 0));
}

function formatIso(y: number, m: number, d: number): string {
  return `${y}-${pad(m)}-${pad(d)}`;
}

function weekdayName(date: Date, tz: string): string {
  return new Intl.DateTimeFormat("en-US", { timeZone: tz, weekday: "long" }).format(date);
}

function formatClock(date: Date, tz: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function formatGregorian(date: Date, tz: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function hebLocation(city: City): Location {
  return new Location(city.lat, city.lon, city.il, city.tz, `${city.name}, ${city.region}`, city.cc);
}

function eventIso(ev: Event): string {
  const greg = ev.getDate().greg();
  return `${greg.getUTCFullYear()}-${pad(greg.getUTCMonth() + 1)}-${pad(greg.getUTCDate())}`;
}

function eventTime(ev: Event): Date | null {
  if (ev instanceof CandleLightingEvent || ev instanceof HavdalahEvent) {
    const timed = ev as Event & { eventTime?: Date };
    return timed.eventTime ?? null;
  }
  return null;
}

function kindOf(ev: Event): CalKind | null {
  if (ev instanceof CandleLightingEvent) return "candles";
  if (ev instanceof HavdalahEvent) return "havdalah";
  if (ev instanceof ParshaEvent) return "parsha";
  const f = ev.getFlags();
  if (
    f & flags.DAF_YOMI ||
    f & flags.MISHNA_YOMI ||
    f & flags.YERUSHALMI_YOMI ||
    f & flags.NACH_YOMI ||
    f & flags.DAILY_LEARNING ||
    f & flags.HEBREW_DATE ||
    f & flags.MOLAD ||
    f & flags.OMER_COUNT
  ) {
    return null;
  }
  const desc = ev.getDesc();
  if (/^fast (begins|ends)/i.test(desc)) return null;
  return "holiday";
}

function toItem(ev: Event, tz: string): CalItem | null {
  const kind = kindOf(ev);
  if (!kind) return null;
  const hd = ev.getDate();
  const greg = hd.greg();
  const isoDate = `${greg.getUTCFullYear()}-${pad(greg.getUTCMonth() + 1)}-${pad(greg.getUTCDate())}`;
  const atDate = eventTime(ev);
  const weekdayDate = atDate ?? civilNoonUtc(greg.getUTCFullYear(), greg.getUTCMonth() + 1, greg.getUTCDate());
  return {
    id: `${isoDate}-${ev.getDesc()}`,
    isoDate,
    weekday: weekdayName(weekdayDate, tz),
    title: ev.render("en"),
    timeLabel: atDate ? formatClock(atDate, tz) : null,
    at: atDate ? atDate.getTime() : null,
    kind,
  };
}

function seasonNote(hd: HDate, isShabbat: boolean): string | null {
  if (isShabbat) return "Shabbat shalom.";
  const month = hd.getMonth();
  const day = hd.getDate();
  if (month === 6) return "Elul, the month of return.";
  if (month === 7 && day <= 2) return "Shana Tovah.";
  if (month === 7 && day === 10) return "Gmar chatimah tovah.";
  if (month === 7 && day <= 21) return "Avinu Malkeinu.";
  return null;
}

function daysBetween(fromIso: string, toIso: string): number {
  const [fy, fm, fd] = fromIso.split("-").map(Number);
  const [ty, tm, td] = toIso.split("-").map(Number);
  return Math.round((Date.UTC(ty, tm - 1, td) - Date.UTC(fy, fm - 1, fd)) / 86_400_000);
}

function buildAnnouncements(items: CalItem[], todayIso: string): Announcement[] {
  const byDate = new Map<string, CalItem[]>();
  for (const it of items) {
    if (it.kind !== "holiday") continue;
    if (it.isoDate < todayIso) continue;
    const list = byDate.get(it.isoDate) ?? [];
    if (!list.some((x) => x.title === it.title)) list.push(it);
    byDate.set(it.isoDate, list);
  }
  const dates = [...byDate.keys()].sort();
  return dates.slice(0, 4).map((isoDate, index) => {
    const list = byDate.get(isoDate) ?? [];
    const titles = list.map((x) => x.title);
    const primary = titles.find((t) => !/^erev\b/i.test(t)) ?? titles[0];
    const copy = holidayCopy(primary);
    const daysUntil = daysBetween(todayIso, isoDate);
    return {
      id: isoDate,
      isoDate,
      weekday: list[0]?.weekday ?? "",
      titles,
      greeting: copy.greeting,
      note: copy.note,
      when: whenLabel(daysUntil, list[0]?.weekday ?? ""),
      daysUntil,
      featured: index === 0,
    };
  });
}

function chanukahLights(holidays: string[]): number {
  const hit = holidays.find((t) => /chanukah|hanukkah/i.test(t));
  if (!hit) return 0;
  const m = hit.match(/(\d+)/);
  if (!m) return 8;
  return Math.min(8, Math.max(1, Number(m[1])));
}

function lightMood(opts: {
  holidays: string[];
  isShabbat: boolean;
  month: number;
}): LightMood {
  const blob = opts.holidays.join(" ").toLowerCase();
  if (/yom kippur/.test(blob)) return "yom-kippur";
  if (/rosh hashana/.test(blob)) return "rosh-hashanah";
  if (/sukkot|simchat torah|shmini atzeret|shemini atzeret/.test(blob)) return "sukkot";
  if (/chanukah|hanukkah/.test(blob)) return "chanukah";
  if (/\bpurim\b/.test(blob)) return "purim";
  if (/pesach|passover/.test(blob)) return "pesach";
  if (/shavuot/.test(blob)) return "shavuot";
  if (opts.isShabbat) return "shabbat";
  if (opts.month === 6) return "elul";
  return "weekday";
}

export function getDayInfo(city: City, now: Date): DayInfo {
  const { y, m, d } = ymdInTz(now, city.tz);
  const noon = civilNoonUtc(y, m, d);
  const hd = new HDate(noon);
  const loc = hebLocation(city);
  const start = addDays(y, m, d, -1);
  const end = addDays(y, m, d, 45);

  const events = HebrewCalendar.calendar({
    start,
    end,
    location: loc,
    il: city.il,
    candlelighting: true,
    sedrot: true,
    omer: true,
    molad: false,
    yomKippurKatan: false,
  });

  const items = events
    .map((ev) => toItem(ev, city.tz))
    .filter((x): x is CalItem => x !== null);

  const todayIso = formatIso(y, m, d);
  const todayEvents = events.filter((ev) => eventIso(ev) === todayIso);

  const holidaysToday = items
    .filter((it) => it.isoDate === todayIso && it.kind === "holiday")
    .map((it) => it.title);

  const parshaToday = items.find((it) => it.isoDate === todayIso && it.kind === "parsha");
  const upcomingParsha = items.find((it) => it.kind === "parsha" && it.isoDate >= todayIso);

  const nextCandles = items.find((it) => it.kind === "candles" && (it.at ?? 0) > now.getTime()) ?? null;
  const nextHavdalah = items.find((it) => it.kind === "havdalah" && (it.at ?? 0) > now.getTime()) ?? null;

  const lastCandles = [...items]
    .reverse()
    .find((it) => it.kind === "candles" && (it.at ?? 0) <= now.getTime());
  const havdalahAfter = lastCandles
    ? items.find((it) => it.kind === "havdalah" && (it.at ?? 0) > (lastCandles.at ?? 0))
    : null;
  const lastHavdalah = [...items]
    .reverse()
    .find((it) => it.kind === "havdalah" && (it.at ?? 0) <= now.getTime()) ?? null;

  const isShabbat = Boolean(
    lastCandles &&
      havdalahAfter &&
      now.getTime() < (havdalahAfter.at ?? 0) &&
      (havdalahAfter.at ?? 0) - (lastCandles.at ?? 0) < 48 * 60 * 60 * 1000,
  );

  const month = hd.getMonth();
  const day = hd.getDate();
  const psalm27Season = month === 6 || (month === 7 && day <= 21);

  const omerEv = todayEvents.find((ev): ev is OmerEvent => ev instanceof OmerEvent);
  const rcEv = todayEvents.find((ev) => ev.getFlags() & flags.ROSH_CHODESH);
  const fastEv = todayEvents.find((ev) => {
    const f = ev.getFlags();
    if (!(f & flags.MINOR_FAST || f & flags.MAJOR_FAST)) return false;
    return !/^fast (begins|ends)/i.test(ev.getDesc());
  });
  const specialEv = todayEvents.find((ev) => ev.getFlags() & flags.SPECIAL_SHABBAT);

  const upcoming = items.filter((it) => {
    if (it.kind === "parsha") return it.isoDate >= todayIso;
    if (it.at) return it.at >= now.getTime() - 60_000;
    return it.isoDate >= todayIso;
  });

  return {
    hebrewEn: hd.render("en"),
    hebrewHe: withoutNikkud(hd.renderGematriya()),
    gregorianEn: formatGregorian(noon, city.tz),
    weekday: weekdayName(noon, city.tz),
    isShabbat,
    isRoshChodesh: Boolean(rcEv),
    roshChodeshTitle: rcEv ? rcEv.render("en") : null,
    omer: omerEv ? { day: omerEv.omer, title: omerEv.render("en") } : null,
    isFast: Boolean(fastEv),
    fastTitle: fastEv ? fastEv.render("en") : null,
    specialShabbat: specialEv ? specialEv.render("en") : null,
    psalm27Season,
    seasonNote: seasonNote(hd, isShabbat),
    parsha: (parshaToday ?? upcomingParsha)?.title.replace(/^Parashat\s+/, "") ?? null,
    holidaysToday,
    announcements: buildAnnouncements(items, todayIso),
    nextCandles,
    nextHavdalah,
    lastCandles: lastCandles ?? null,
    lastHavdalah,
    upcoming,
    absDay: hd.abs(),
    todayIso,
    month,
    day,
    mood: lightMood({ holidays: holidaysToday, isShabbat, month }),
    lights: chanukahLights(holidaysToday),
  };
}

export function formatUntil(target: number, now: Date): string {
  const delta = target - now.getTime();
  if (delta <= 0) return "now";
  const mins = Math.round(delta / 60_000);
  if (mins < 60) return `in ${mins} min`;
  const hours = Math.floor(mins / 60);
  if (hours < 36) {
    const remaining = mins % 60;
    return remaining === 0 ? `in ${hours} hr` : `in ${hours} hr ${remaining} min`;
  }
  const days = Math.round(mins / (60 * 24));
  return days === 1 ? "tomorrow" : `in ${days} days`;
}

export function prettyIsoDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(
    new Date(Date.UTC(y, m - 1, d, 12)),
  );
}

export const HEBCAL_SOURCE = "Jewish dates, holidays, and candle times from Hebcal, using this city’s coordinates. Israel and diaspora calendars differ.";
