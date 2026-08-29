import { create } from "zustand";
import { DEFAULT_CITY_ID } from "@/lib/locations";
import { DEFAULT_NOTIFY, parsePrefs, type NotifyPrefs } from "@/lib/notify";

export type Tab = "today" | "play" | "prayers" | "safety" | "places";
export type Overlay = "calendar" | "saved" | "settings" | "holiday" | null;
export type FavKind = "prayer" | "reading" | "resource";

export type HolidayFocus = {
  title: string;
  isoDate: string;
  kind?: string;
};

export type Favorite = {
  id: string;
  kind: FavKind;
  title: string;
  subtitle: string;
};

const CITY_KEY = "ner-tamid-city";
const NOTE_KEY = "ner-tamid-note";
const WALK_KEY = "ner-tamid-walk";
const FAV_KEY = "ner-tamid-favs";
const NOTIFY_KEY = "ner-tamid-notify";

type WalkState = {
  endsAt: number | null;
  alarming: boolean;
};

type AppState = {
  cityId: string;
  tab: Tab;
  overlay: Overlay;
  note: string;
  walkEndsAt: number | null;
  alarming: boolean;
  favorites: Favorite[];
  notify: NotifyPrefs;
  hydrated: boolean;
  openPrayerId: string | null;
  holidayFocus: HolidayFocus | null;
  setCityId: (id: string) => void;
  setTab: (tab: Tab) => void;
  setOverlay: (overlay: Overlay) => void;
  openPrayer: (id: string) => void;
  clearPrayer: () => void;
  openHoliday: (focus: HolidayFocus) => void;
  setNote: (note: string) => void;
  startWalk: (minutes: number) => void;
  checkIn: () => void;
  tickWalk: (now: number) => void;
  toggleFavorite: (item: Favorite) => void;
  isFavorite: (id: string) => boolean;
  setNotify: (key: keyof NotifyPrefs, value: boolean) => void;
  hydrate: () => void;
};

function readWalk(): WalkState {
  try {
    const raw = localStorage.getItem(WALK_KEY);
    if (!raw) return { endsAt: null, alarming: false };
    const parsed = JSON.parse(raw) as { endsAt?: number };
    const endsAt = typeof parsed.endsAt === "number" ? parsed.endsAt : null;
    if (!endsAt) return { endsAt: null, alarming: false };
    return { endsAt, alarming: Date.now() >= endsAt };
  } catch {
    return { endsAt: null, alarming: false };
  }
}

function writeWalk(endsAt: number | null) {
  if (!endsAt) {
    localStorage.removeItem(WALK_KEY);
    return;
  }
  localStorage.setItem(WALK_KEY, JSON.stringify({ endsAt }));
}

function readFavorites(): Favorite[] {
  try {
    const raw = localStorage.getItem(FAV_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Favorite[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((f) => f && typeof f.id === "string" && typeof f.title === "string");
  } catch {
    return [];
  }
}

function migrateTab(raw: string | null): Tab {
  if (raw === "report") return "safety";
  if (raw === "calendar") return "today";
  if (raw === "today" || raw === "play" || raw === "prayers" || raw === "safety" || raw === "places") return raw;
  return "today";
}

export const useAppStore = create<AppState>((set, get) => ({
  cityId: DEFAULT_CITY_ID,
  tab: "today",
  overlay: null,
  note: "",
  walkEndsAt: null,
  alarming: false,
  favorites: [],
  notify: { ...DEFAULT_NOTIFY },
  hydrated: false,
  openPrayerId: null,
  holidayFocus: null,
  setCityId: (id) => {
    localStorage.setItem(CITY_KEY, id);
    set({ cityId: id });
  },
  setTab: (tab) => set({ tab, overlay: null, openPrayerId: null, holidayFocus: null }),
  setOverlay: (overlay) => set({ overlay }),
  openPrayer: (id) => set({ tab: "prayers", overlay: null, openPrayerId: id, holidayFocus: null }),
  clearPrayer: () => set({ openPrayerId: null }),
  openHoliday: (focus) => set({ overlay: "holiday", holidayFocus: focus }),
  setNote: (note) => {
    localStorage.setItem(NOTE_KEY, note);
    set({ note });
  },
  startWalk: (minutes) => {
    const endsAt = Date.now() + minutes * 60_000;
    writeWalk(endsAt);
    set({ walkEndsAt: endsAt, alarming: false });
  },
  checkIn: () => {
    writeWalk(null);
    set({ walkEndsAt: null, alarming: false });
  },
  tickWalk: (now) => {
    const endsAt = get().walkEndsAt;
    if (endsAt && now >= endsAt && !get().alarming) {
      set({ alarming: true });
    }
  },
  toggleFavorite: (item) => {
    const current = get().favorites;
    const exists = current.some((f) => f.id === item.id);
    const next = exists ? current.filter((f) => f.id !== item.id) : [...current, item];
    localStorage.setItem(FAV_KEY, JSON.stringify(next));
    set({ favorites: next });
  },
  isFavorite: (id) => get().favorites.some((f) => f.id === id),
  setNotify: (key, value) => {
    const next = { ...get().notify, [key]: value };
    localStorage.setItem(NOTIFY_KEY, JSON.stringify(next));
    set({ notify: next });
  },
  hydrate: () => {
    if (get().hydrated) return;
    const cityId = localStorage.getItem(CITY_KEY) ?? DEFAULT_CITY_ID;
    const note = localStorage.getItem(NOTE_KEY) ?? "";
    const walk = readWalk();
    const overlay: Overlay = localStorage.getItem("ner-tamid-tab") === "calendar" ? "calendar" : null;
    set({
      cityId,
      tab: migrateTab(localStorage.getItem("ner-tamid-tab")),
      overlay,
      note,
      walkEndsAt: walk.endsAt,
      alarming: walk.alarming,
      favorites: readFavorites(),
      notify: parsePrefs(localStorage.getItem(NOTIFY_KEY)),
      hydrated: true,
    });
  },
}));
