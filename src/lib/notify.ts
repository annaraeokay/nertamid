export type NotifyKey = "candles" | "holiday" | "roshChodesh" | "omer" | "tehillah";

export type NotifyPrefs = Record<NotifyKey, boolean>;

export const DEFAULT_NOTIFY: NotifyPrefs = {
  candles: false,
  holiday: false,
  roshChodesh: false,
  omer: false,
  tehillah: false,
};

export const NOTIFY_COPY: { key: NotifyKey; label: string; hint: string }[] = [
  { key: "candles", label: "Candle lighting", hint: "About an hour before the listed time." },
  { key: "holiday", label: "Holiday begins tonight", hint: "When a festival or fast is coming at sundown." },
  { key: "roshChodesh", label: "Rosh Chodesh", hint: "On the new month." },
  { key: "omer", label: "Omer count", hint: "During the counting, in season." },
  { key: "tehillah", label: "Daily Tehillah", hint: "A quiet nudge that today’s verse is ready." },
];

export function parsePrefs(raw: string | null): NotifyPrefs {
  if (!raw) return { ...DEFAULT_NOTIFY };
  try {
    const parsed = JSON.parse(raw) as Partial<NotifyPrefs>;
    return {
      candles: Boolean(parsed.candles),
      holiday: Boolean(parsed.holiday),
      roshChodesh: Boolean(parsed.roshChodesh),
      omer: Boolean(parsed.omer),
      tehillah: Boolean(parsed.tehillah),
    };
  } catch {
    return { ...DEFAULT_NOTIFY };
  }
}

export function notificationsSupported(): boolean {
  return typeof window !== "undefined" && "Notification" in window;
}
