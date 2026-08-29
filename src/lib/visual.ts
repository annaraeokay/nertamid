import type { DayInfo, LightMood } from "@/lib/calendar";

export type Motif = "none" | "moon" | "braid" | "sukkah" | "open" | "manuscript" | "quiet" | "rings" | "year" | "omer";
export type Daypart = "morning" | "evening" | "night";

export type VisualState = {
  id: string;
  label: string;
  group: "weekday" | "shabbat" | "holiday";
  mood: LightMood;
  erev: number;
  lights: number;
  daypart: Daypart;
  motif: Motif;
  caption: string;
  hebrew: string;
  english: string;
};

export const SCENES: VisualState[] = [
  {
    id: "weekday-morning",
    label: "Weekday morning",
    group: "weekday",
    mood: "weekday",
    erev: 0,
    lights: 0,
    daypart: "morning",
    motif: "none",
    caption: "Quiet ivory. Ordinary time.",
    hebrew: "יום חול",
    english: "A weekday morning",
  },
  {
    id: "weekday-evening",
    label: "Weekday evening",
    group: "weekday",
    mood: "weekday",
    erev: 0,
    lights: 0,
    daypart: "evening",
    motif: "none",
    caption: "The same light, a little warmer.",
    hebrew: "יום חול",
    english: "A weekday evening",
  },
  {
    id: "friday-morning",
    label: "Friday morning",
    group: "shabbat",
    mood: "weekday",
    erev: 0.22,
    lights: 0,
    daypart: "morning",
    motif: "none",
    caption: "The light is beginning to gather.",
    hebrew: "ערב שבת",
    english: "Friday morning",
  },
  {
    id: "friday-afternoon",
    label: "Friday afternoon",
    group: "shabbat",
    mood: "weekday",
    erev: 0.5,
    lights: 0,
    daypart: "evening",
    motif: "none",
    caption: "Toward Shabbat. The light is gathering.",
    hebrew: "ערב שבת",
    english: "Friday afternoon",
  },
  {
    id: "candles-3h",
    label: "3 hours before candles",
    group: "shabbat",
    mood: "weekday",
    erev: 0.72,
    lights: 0,
    daypart: "evening",
    motif: "none",
    caption: "Erev Shabbat. The flame is filling.",
    hebrew: "ערב שבת",
    english: "Three hours before lighting",
  },
  {
    id: "candles-1h",
    label: "1 hour before candles",
    group: "shabbat",
    mood: "weekday",
    erev: 0.88,
    lights: 0,
    daypart: "evening",
    motif: "none",
    caption: "Almost time to light.",
    hebrew: "ערב שבת",
    english: "One hour before lighting",
  },
  {
    id: "candles-15m",
    label: "15 minutes before candles",
    group: "shabbat",
    mood: "weekday",
    erev: 0.96,
    lights: 0,
    daypart: "evening",
    motif: "none",
    caption: "Almost time to light.",
    hebrew: "הדלקת נרות",
    english: "Fifteen minutes before lighting",
  },
  {
    id: "candles",
    label: "Candle lighting",
    group: "shabbat",
    mood: "shabbat",
    erev: 1,
    lights: 0,
    daypart: "evening",
    motif: "none",
    caption: "The holy day begins.",
    hebrew: "הדלקת נרות",
    english: "Candle lighting",
  },
  {
    id: "shabbat-evening",
    label: "Shabbat evening",
    group: "shabbat",
    mood: "shabbat",
    erev: 1,
    lights: 0,
    daypart: "evening",
    motif: "none",
    caption: "Shabbat shalom.",
    hebrew: "שבת שלום",
    english: "Shabbat evening",
  },
  {
    id: "shabbat-morning",
    label: "Shabbat morning",
    group: "shabbat",
    mood: "shabbat",
    erev: 1,
    lights: 0,
    daypart: "morning",
    motif: "none",
    caption: "Shabbat shalom.",
    hebrew: "שבת שלום",
    english: "Shabbat morning",
  },
  {
    id: "havdalah-near",
    label: "Approaching Havdalah",
    group: "shabbat",
    mood: "shabbat",
    erev: 0.55,
    lights: 0,
    daypart: "night",
    motif: "braid",
    caption: "Toward Havdalah. Do not begin until Shabbat has ended.",
    hebrew: "הבדלה",
    english: "Approaching Havdalah",
  },
  {
    id: "havdalah",
    label: "Havdalah",
    group: "shabbat",
    mood: "shabbat",
    erev: 0.2,
    lights: 0,
    daypart: "night",
    motif: "braid",
    caption: "Between holy and ordinary.",
    hebrew: "הבדלה",
    english: "Havdalah",
  },
  {
    id: "post-havdalah",
    label: "After Havdalah",
    group: "shabbat",
    mood: "weekday",
    erev: 0,
    lights: 0,
    daypart: "night",
    motif: "none",
    caption: "Ordinary time returns.",
    hebrew: "מוצאי שבת",
    english: "After Havdalah",
  },
  {
    id: "rosh-chodesh",
    label: "Rosh Chodesh",
    group: "holiday",
    mood: "weekday",
    erev: 0,
    lights: 0,
    daypart: "evening",
    motif: "moon",
    caption: "A new moon. Start again.",
    hebrew: "ראש חודש",
    english: "Rosh Chodesh",
  },
  {
    id: "rosh-hashanah",
    label: "Rosh Hashanah",
    group: "holiday",
    mood: "rosh-hashanah",
    erev: 0,
    lights: 0,
    daypart: "morning",
    motif: "year",
    caption: "Shana Tovah.",
    hebrew: "ראש השנה",
    english: "Rosh Hashanah",
  },
  {
    id: "yom-kippur",
    label: "Yom Kippur",
    group: "holiday",
    mood: "yom-kippur",
    erev: 0,
    lights: 0,
    daypart: "morning",
    motif: "quiet",
    caption: "A still, white hour.",
    hebrew: "יום כפור",
    english: "Yom Kippur",
  },
  {
    id: "sukkot",
    label: "Sukkot",
    group: "holiday",
    mood: "sukkot",
    erev: 0,
    lights: 0,
    daypart: "evening",
    motif: "sukkah",
    caption: "Organic warmth. Sit under the sky.",
    hebrew: "סוכות",
    english: "Sukkot",
  },
  {
    id: "simchat-torah",
    label: "Simchat Torah",
    group: "holiday",
    mood: "shavuot",
    erev: 0.15,
    lights: 0,
    daypart: "evening",
    motif: "manuscript",
    caption: "The cycle ends and begins again.",
    hebrew: "שמחת תורה",
    english: "Simchat Torah",
  },
  {
    id: "chanukah-1",
    label: "Chanukah night 1",
    group: "holiday",
    mood: "chanukah",
    erev: 0,
    lights: 1,
    daypart: "night",
    motif: "rings",
    caption: "One light. A little holds a great deal of dark.",
    hebrew: "חנוכה",
    english: "Chanukah, first night",
  },
  {
    id: "chanukah-4",
    label: "Chanukah night 4",
    group: "holiday",
    mood: "chanukah",
    erev: 0,
    lights: 4,
    daypart: "night",
    motif: "rings",
    caption: "Four lights. The room is changing.",
    hebrew: "חנוכה",
    english: "Chanukah, fourth night",
  },
  {
    id: "chanukah-8",
    label: "Chanukah night 8",
    group: "holiday",
    mood: "chanukah",
    erev: 0,
    lights: 8,
    daypart: "night",
    motif: "rings",
    caption: "Eight lights. The fullest of the eight.",
    hebrew: "חנוכה",
    english: "Chanukah, eighth night",
  },
  {
    id: "purim",
    label: "Purim",
    group: "holiday",
    mood: "purim",
    erev: 0,
    lights: 0,
    daypart: "evening",
    motif: "none",
    caption: "A little more movement. The story turned.",
    hebrew: "פורים",
    english: "Purim",
  },
  {
    id: "pesach",
    label: "Pesach",
    group: "holiday",
    mood: "pesach",
    erev: 0,
    lights: 0,
    daypart: "evening",
    motif: "open",
    caption: "Open, luminous. We eat as free people.",
    hebrew: "פסח",
    english: "Pesach",
  },
  {
    id: "shavuot",
    label: "Shavuot",
    group: "holiday",
    mood: "shavuot",
    erev: 0,
    lights: 0,
    daypart: "night",
    motif: "manuscript",
    caption: "The gift of Torah. Stay up if you can.",
    hebrew: "שבועות",
    english: "Shavuot",
  },
  {
    id: "omer-16",
    label: "Omer, day 16",
    group: "holiday",
    mood: "weekday",
    erev: 0,
    lights: 0,
    daypart: "evening",
    motif: "omer",
    caption: "Toward Sinai. The count is the path.",
    hebrew: "ספירת העומר",
    english: "Omer, day 16",
  },
  {
    id: "omer-33",
    label: "Lag BaOmer",
    group: "holiday",
    mood: "weekday",
    erev: 0.12,
    lights: 0,
    daypart: "night",
    motif: "omer",
    caption: "A fire in the counting.",
    hebrew: "ל״ג בעומר",
    english: "Lag BaOmer",
  },
];

export type Track = {
  id: string;
  label: string;
  duration: number;
  steps: { at: number; scene: string }[];
};

export const TRACKS: Track[] = [
  {
    id: "into-shabbat",
    label: "Into Shabbat",
    duration: 14000,
    steps: [
      { at: 0, scene: "weekday-morning" },
      { at: 0.12, scene: "friday-morning" },
      { at: 0.32, scene: "friday-afternoon" },
      { at: 0.5, scene: "candles-3h" },
      { at: 0.66, scene: "candles-1h" },
      { at: 0.8, scene: "candles-15m" },
      { at: 0.9, scene: "candles" },
      { at: 1, scene: "shabbat-evening" },
    ],
  },
  {
    id: "out-of-shabbat",
    label: "Out of Shabbat",
    duration: 12000,
    steps: [
      { at: 0, scene: "shabbat-evening" },
      { at: 0.25, scene: "shabbat-morning" },
      { at: 0.55, scene: "havdalah-near" },
      { at: 0.78, scene: "havdalah" },
      { at: 1, scene: "post-havdalah" },
    ],
  },
  {
    id: "chanukah-rise",
    label: "Chanukah, 1 to 8",
    duration: 10000,
    steps: [
      { at: 0, scene: "chanukah-1" },
      { at: 0.45, scene: "chanukah-4" },
      { at: 1, scene: "chanukah-8" },
    ],
  },
];

export function sceneById(id: string): VisualState {
  return SCENES.find((s) => s.id === id) ?? SCENES[0];
}

export function mixVisual(a: VisualState, b: VisualState, t: number): VisualState {
  const u = t < 0 ? 0 : t > 1 ? 1 : t;
  return {
    ...b,
    erev: a.erev + (b.erev - a.erev) * u,
    lights: Math.round(a.lights + (b.lights - a.lights) * u),
    mood: u < 0.45 ? a.mood : b.mood,
    motif: u < 0.4 ? a.motif : b.motif,
    daypart: u < 0.5 ? a.daypart : b.daypart,
    caption: u < 0.5 ? a.caption : b.caption,
    hebrew: u < 0.5 ? a.hebrew : b.hebrew,
    english: u < 0.5 ? a.english : b.english,
    label: u < 0.5 ? a.label : b.label,
  };
}

export function visualAt(track: Track, progress: number): VisualState {
  const p = progress < 0 ? 0 : progress > 1 ? 1 : progress;
  const steps = track.steps;
  let i = 0;
  while (i < steps.length - 1 && steps[i + 1].at <= p) i += 1;
  const cur = steps[i];
  const next = steps[i + 1] ?? cur;
  const span = next.at - cur.at || 1;
  const local = (p - cur.at) / span;
  return mixVisual(sceneById(cur.scene), sceneById(next.scene), local);
}

export function variablesOf(v: VisualState) {
  const night = v.mood === "chanukah" ? v.lights / 8 : 0;
  return [
    { name: "Mood", value: v.mood },
    { name: "Erev", value: v.erev.toFixed(2) },
    { name: "Chanukah lights", value: String(v.lights) },
    { name: "Flame intensity", value: (0.55 + v.erev * 0.35 + night * 0.3).toFixed(2) },
    { name: "Halo", value: (0.4 + v.erev * 0.4 + night * 0.4).toFixed(2) },
    { name: "Warmth", value: v.mood === "yom-kippur" || v.mood === "pesach" ? "cool" : v.erev > 0.4 || v.mood === "shabbat" ? "gold" : "ivory" },
    { name: "Motif", value: v.motif },
    { name: "Daypart", value: v.daypart },
  ];
}

export function motifForDay(info: DayInfo, nowMs: number): Motif {
  const blob = info.holidaysToday.join(" ").toLowerCase();
  if (/yom kippur/.test(blob)) return "quiet";
  if (/rosh hashana/.test(blob)) return "year";
  if (/sukkot/.test(blob)) return "sukkah";
  if (/simchat torah|shavuot/.test(blob)) return "manuscript";
  if (/pesach|passover/.test(blob)) return "open";
  if (/chanukah|hanukkah/.test(blob)) return "rings";
  if (info.omer) return "omer";
  if (info.isRoshChodesh) return "moon";
  const until = info.nextHavdalah?.at ? (info.nextHavdalah.at - nowMs) / 3_600_000 : 99;
  const since = info.lastHavdalah?.at ? (nowMs - info.lastHavdalah.at) / 3_600_000 : 99;
  if ((info.isShabbat && until <= 1.5) || (!info.isShabbat && since >= 0 && since <= 3)) return "braid";
  return "none";
}

export function liveVisual(info: DayInfo, erev: number, nowMs: number, caption: string): VisualState {
  const hour = new Date(nowMs).getHours();
  const daypart: Daypart = hour < 5 || hour >= 21 ? "night" : hour < 16 ? "morning" : "evening";
  return {
    id: "live",
    label: "Live",
    group: info.isShabbat ? "shabbat" : info.holidaysToday.length ? "holiday" : "weekday",
    mood: info.mood,
    erev,
    lights: info.lights,
    daypart,
    motif: motifForDay(info, nowMs),
    caption,
    hebrew: info.hebrewHe,
    english: info.hebrewEn,
  };
}
