import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowLeft, a as Square, c as Phone, d as ChevronDown, f as Check, g as ArrowUpRight, h as Bell, l as FlameKindling, m as BookOpen, n as Volume2, o as Shield, p as Bookmark, r as Users, s as Puzzle, t as X, u as Copy } from "../_libs/lucide-react.mjs";
import { a as HavdalahEvent, c as HDate, i as CandleLightingEvent, l as Locale, n as ParshaEvent, o as Location, r as OmerEvent, s as flags, t as HebrewCalendar } from "../_libs/@hebcal/core+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dq4mkeZs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Sheet({ title, onClose, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-lg flex-col px-5 pb-8 pt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClose,
				className: "inline-flex size-10 items-center justify-center rounded-md text-muted hover:bg-raised hover:text-fg",
				"aria-label": "Back",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl text-fg",
				children: title
			})]
		}), children]
	});
}
function SourceLine({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "font-sans text-xs leading-relaxed text-subtle",
		children: ["Source: ", children]
	});
}
function holidayCopy(title) {
	const t = title.toLowerCase();
	if (t.includes("rosh hashana") || t.includes("rosh hashanah")) return {
		greeting: "Shana Tovah",
		note: "May you be written and sealed for life."
	};
	if (t.includes("yom kippur")) return {
		greeting: "Gmar chatimah tovah",
		note: "A day of return. The gates are still open."
	};
	if (t.includes("sukkot") || t.includes("simchat torah") || t.includes("shmini atzeret") || t.includes("shemini atzeret")) return {
		greeting: "Chag sameach",
		note: "Sit under the sky. The cycle of Torah begins again."
	};
	if (t.includes("selichot")) return {
		greeting: "Leil Selichot",
		note: "The month of return finds its voice."
	};
	if (t.includes("chanukah") || t.includes("hanukkah")) return {
		greeting: "Chag urim sameach",
		note: "A little light holds a great deal of dark."
	};
	if (t.includes("pesach") || t.includes("passover")) return {
		greeting: "Chag sameach",
		note: "We were slaves. Tonight we eat as free people."
	};
	if (t.includes("shavuot")) return {
		greeting: "Chag sameach",
		note: "The gift of Torah. Stay up if you can."
	};
	if (t.includes("purim")) return {
		greeting: "Chag purim sameach",
		note: "The story turned. Send food. Hear the megillah."
	};
	if (t.includes("tisha") || t.includes("tish'a")) return {
		greeting: "A day of mourning",
		note: "We remember what was broken, and what we still repair."
	};
	if (t.includes("tu bi") || t.includes("tu bishvat") || t.includes("tu b'shvat")) return {
		greeting: "Chag sameach",
		note: "The trees’ new year."
	};
	if (t.includes("lag baomer") || t.includes("lag ba'omer")) return {
		greeting: "Lag BaOmer",
		note: "A fire in the counting of the Omer."
	};
	if (t.includes("yom haatzma") || t.includes("yom ha'atzma")) return {
		greeting: "Yom HaAtzmaut",
		note: "A day of independence."
	};
	if (t.includes("yom hashoah")) return {
		greeting: "Yom HaShoah",
		note: "We say their names. We do not look away."
	};
	if (t.includes("erev")) return {
		greeting: "Light candles tonight",
		note: "The holy day begins at sundown."
	};
	if (t.includes("rosh chodesh")) return {
		greeting: "Rosh Chodesh",
		note: "A new moon. Start again."
	};
	if (t.includes("fast")) return {
		greeting: title,
		note: "A fast day. Eat before, if that is your practice."
	};
	return {
		greeting: title,
		note: "A day set apart."
	};
}
function whenLabel(daysUntil, weekday) {
	if (daysUntil <= 0) return "Today";
	if (daysUntil === 1) return "Tomorrow";
	if (daysUntil < 7) return weekday;
	return `in ${daysUntil} days`;
}
function withoutNikkud(text) {
	return Locale.hebrewStripNikkud(text);
}
function pad(n) {
	return String(n).padStart(2, "0");
}
function ymdInTz(now, tz) {
	const parts = new Intl.DateTimeFormat("en-US", {
		timeZone: tz,
		year: "numeric",
		month: "numeric",
		day: "numeric"
	}).formatToParts(now);
	const num = (type) => Number(parts.find((p) => p.type === type)?.value);
	return {
		y: num("year"),
		m: num("month"),
		d: num("day")
	};
}
function civilNoonUtc(y, m, d) {
	return new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
}
function addDays(y, m, d, delta) {
	return new Date(Date.UTC(y, m - 1, d + delta, 12, 0, 0));
}
function formatIso(y, m, d) {
	return `${y}-${pad(m)}-${pad(d)}`;
}
function weekdayName(date, tz) {
	return new Intl.DateTimeFormat("en-US", {
		timeZone: tz,
		weekday: "long"
	}).format(date);
}
function formatClock(date, tz) {
	return new Intl.DateTimeFormat("en-US", {
		timeZone: tz,
		hour: "numeric",
		minute: "2-digit"
	}).format(date);
}
function formatGregorian(date, tz) {
	return new Intl.DateTimeFormat("en-US", {
		timeZone: tz,
		weekday: "long",
		month: "long",
		day: "numeric",
		year: "numeric"
	}).format(date);
}
function hebLocation(city) {
	return new Location(city.lat, city.lon, city.il, city.tz, `${city.name}, ${city.region}`, city.cc);
}
function eventIso(ev) {
	const greg = ev.getDate().greg();
	return `${greg.getUTCFullYear()}-${pad(greg.getUTCMonth() + 1)}-${pad(greg.getUTCDate())}`;
}
function eventTime(ev) {
	if (ev instanceof CandleLightingEvent || ev instanceof HavdalahEvent) return ev.eventTime ?? null;
	return null;
}
function kindOf(ev) {
	if (ev instanceof CandleLightingEvent) return "candles";
	if (ev instanceof HavdalahEvent) return "havdalah";
	if (ev instanceof ParshaEvent) return "parsha";
	const f = ev.getFlags();
	if (f & flags.DAF_YOMI || f & flags.MISHNA_YOMI || f & flags.YERUSHALMI_YOMI || f & flags.NACH_YOMI || f & flags.DAILY_LEARNING || f & flags.HEBREW_DATE || f & flags.MOLAD || f & flags.OMER_COUNT) return null;
	const desc = ev.getDesc();
	if (/^fast (begins|ends)/i.test(desc)) return null;
	return "holiday";
}
function toItem(ev, tz) {
	const kind = kindOf(ev);
	if (!kind) return null;
	const greg = ev.getDate().greg();
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
		kind
	};
}
function seasonNote(hd, isShabbat) {
	if (isShabbat) return "Shabbat shalom.";
	const month = hd.getMonth();
	const day = hd.getDate();
	if (month === 6) return "Elul, the month of return.";
	if (month === 7 && day <= 2) return "Shana Tovah.";
	if (month === 7 && day === 10) return "Gmar chatimah tovah.";
	if (month === 7 && day <= 21) return "Avinu Malkeinu.";
	return null;
}
function daysBetween(fromIso, toIso) {
	const [fy, fm, fd] = fromIso.split("-").map(Number);
	const [ty, tm, td] = toIso.split("-").map(Number);
	return Math.round((Date.UTC(ty, tm - 1, td) - Date.UTC(fy, fm - 1, fd)) / 864e5);
}
function buildAnnouncements(items, todayIso) {
	const byDate = /* @__PURE__ */ new Map();
	for (const it of items) {
		if (it.kind !== "holiday") continue;
		if (it.isoDate < todayIso) continue;
		const list = byDate.get(it.isoDate) ?? [];
		if (!list.some((x) => x.title === it.title)) list.push(it);
		byDate.set(it.isoDate, list);
	}
	return [...byDate.keys()].sort().slice(0, 4).map((isoDate, index) => {
		const list = byDate.get(isoDate) ?? [];
		const titles = list.map((x) => x.title);
		const copy = holidayCopy(titles.find((t) => !/^erev\b/i.test(t)) ?? titles[0]);
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
			featured: index === 0
		};
	});
}
function lightMood(opts) {
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
function getDayInfo(city, now) {
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
		yomKippurKatan: false
	});
	const items = events.map((ev) => toItem(ev, city.tz)).filter((x) => x !== null);
	const todayIso = formatIso(y, m, d);
	const todayEvents = events.filter((ev) => eventIso(ev) === todayIso);
	const holidaysToday = items.filter((it) => it.isoDate === todayIso && it.kind === "holiday").map((it) => it.title);
	const parshaToday = items.find((it) => it.isoDate === todayIso && it.kind === "parsha");
	const upcomingParsha = items.find((it) => it.kind === "parsha" && it.isoDate >= todayIso);
	const nextCandles = items.find((it) => it.kind === "candles" && (it.at ?? 0) > now.getTime()) ?? null;
	const nextHavdalah = items.find((it) => it.kind === "havdalah" && (it.at ?? 0) > now.getTime()) ?? null;
	const lastCandles = [...items].reverse().find((it) => it.kind === "candles" && (it.at ?? 0) <= now.getTime());
	const havdalahAfter = lastCandles ? items.find((it) => it.kind === "havdalah" && (it.at ?? 0) > (lastCandles.at ?? 0)) : null;
	const isShabbat = Boolean(lastCandles && havdalahAfter && now.getTime() < (havdalahAfter.at ?? 0) && (havdalahAfter.at ?? 0) - (lastCandles.at ?? 0) < 1728e5);
	const month = hd.getMonth();
	const day = hd.getDate();
	const psalm27Season = month === 6 || month === 7 && day <= 21;
	const omerEv = todayEvents.find((ev) => ev instanceof OmerEvent);
	const rcEv = todayEvents.find((ev) => ev.getFlags() & flags.ROSH_CHODESH);
	const fastEv = todayEvents.find((ev) => {
		const f = ev.getFlags();
		if (!(f & flags.MINOR_FAST || f & flags.MAJOR_FAST)) return false;
		return !/^fast (begins|ends)/i.test(ev.getDesc());
	});
	const specialEv = todayEvents.find((ev) => ev.getFlags() & flags.SPECIAL_SHABBAT);
	const upcoming = items.filter((it) => {
		if (it.kind === "parsha") return it.isoDate >= todayIso;
		if (it.at) return it.at >= now.getTime() - 6e4;
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
		omer: omerEv ? {
			day: omerEv.omer,
			title: omerEv.render("en")
		} : null,
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
		upcoming,
		absDay: hd.abs(),
		todayIso,
		month,
		day,
		mood: lightMood({
			holidays: holidaysToday,
			isShabbat,
			month
		})
	};
}
function formatUntil(target, now) {
	const delta = target - now.getTime();
	if (delta <= 0) return "now";
	const mins = Math.round(delta / 6e4);
	if (mins < 60) return `in ${mins} min`;
	const hours = Math.floor(mins / 60);
	if (hours < 36) {
		const remaining = mins % 60;
		return remaining === 0 ? `in ${hours} hr` : `in ${hours} hr ${remaining} min`;
	}
	const days = Math.round(mins / 1440);
	return days === 1 ? "tomorrow" : `in ${days} days`;
}
function prettyIsoDate(iso) {
	const [y, m, d] = iso.split("-").map(Number);
	return new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric"
	}).format(new Date(Date.UTC(y, m - 1, d, 12)));
}
var HEBCAL_SOURCE = "Jewish dates, holidays, and candle times from Hebcal, using this city’s coordinates. Israel and diaspora calendars differ.";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var CITIES = [
	{
		id: "skokie",
		name: "Skokie",
		region: "Illinois",
		lat: 42.0334,
		lon: -87.7334,
		tz: "America/Chicago",
		il: false,
		cc: "US"
	},
	{
		id: "chicago",
		name: "Chicago",
		region: "Illinois",
		lat: 41.85003,
		lon: -87.65005,
		tz: "America/Chicago",
		il: false,
		cc: "US"
	},
	{
		id: "new-york",
		name: "New York",
		region: "New York",
		lat: 40.7128,
		lon: -74.006,
		tz: "America/New_York",
		il: false,
		cc: "US"
	},
	{
		id: "los-angeles",
		name: "Los Angeles",
		region: "California",
		lat: 34.0522,
		lon: -118.2437,
		tz: "America/Los_Angeles",
		il: false,
		cc: "US"
	},
	{
		id: "miami",
		name: "Miami",
		region: "Florida",
		lat: 25.7617,
		lon: -80.1918,
		tz: "America/New_York",
		il: false,
		cc: "US"
	},
	{
		id: "boston",
		name: "Boston",
		region: "Massachusetts",
		lat: 42.3601,
		lon: -71.0589,
		tz: "America/New_York",
		il: false,
		cc: "US"
	},
	{
		id: "philadelphia",
		name: "Philadelphia",
		region: "Pennsylvania",
		lat: 39.9526,
		lon: -75.1652,
		tz: "America/New_York",
		il: false,
		cc: "US"
	},
	{
		id: "washington",
		name: "Washington",
		region: "D.C.",
		lat: 38.9072,
		lon: -77.0369,
		tz: "America/New_York",
		il: false,
		cc: "US"
	},
	{
		id: "atlanta",
		name: "Atlanta",
		region: "Georgia",
		lat: 33.749,
		lon: -84.388,
		tz: "America/New_York",
		il: false,
		cc: "US"
	},
	{
		id: "houston",
		name: "Houston",
		region: "Texas",
		lat: 29.7604,
		lon: -95.3698,
		tz: "America/Chicago",
		il: false,
		cc: "US"
	},
	{
		id: "denver",
		name: "Denver",
		region: "Colorado",
		lat: 39.7392,
		lon: -104.9903,
		tz: "America/Denver",
		il: false,
		cc: "US"
	},
	{
		id: "seattle",
		name: "Seattle",
		region: "Washington",
		lat: 47.6062,
		lon: -122.3321,
		tz: "America/Los_Angeles",
		il: false,
		cc: "US"
	},
	{
		id: "san-francisco",
		name: "San Francisco",
		region: "California",
		lat: 37.7749,
		lon: -122.4194,
		tz: "America/Los_Angeles",
		il: false,
		cc: "US"
	},
	{
		id: "jerusalem",
		name: "Jerusalem",
		region: "Israel",
		lat: 31.7683,
		lon: 35.2137,
		tz: "Asia/Jerusalem",
		il: true,
		cc: "IL"
	},
	{
		id: "tel-aviv",
		name: "Tel Aviv",
		region: "Israel",
		lat: 32.0853,
		lon: 34.7818,
		tz: "Asia/Jerusalem",
		il: true,
		cc: "IL"
	},
	{
		id: "haifa",
		name: "Haifa",
		region: "Israel",
		lat: 32.794,
		lon: 34.9896,
		tz: "Asia/Jerusalem",
		il: true,
		cc: "IL"
	},
	{
		id: "london",
		name: "London",
		region: "United Kingdom",
		lat: 51.5074,
		lon: -.1278,
		tz: "Europe/London",
		il: false,
		cc: "GB"
	},
	{
		id: "toronto",
		name: "Toronto",
		region: "Canada",
		lat: 43.6532,
		lon: -79.3832,
		tz: "America/Toronto",
		il: false,
		cc: "CA"
	},
	{
		id: "paris",
		name: "Paris",
		region: "France",
		lat: 48.8566,
		lon: 2.3522,
		tz: "Europe/Paris",
		il: false,
		cc: "FR"
	},
	{
		id: "melbourne",
		name: "Melbourne",
		region: "Australia",
		lat: -37.8136,
		lon: 144.9631,
		tz: "Australia/Melbourne",
		il: false,
		cc: "AU"
	}
];
var DEFAULT_CITY_ID = "skokie";
function cityById(id) {
	return CITIES.find((c) => c.id === id) ?? CITIES[0];
}
function isChicagoland(id) {
	return id === "skokie" || id === "chicago";
}
var DEFAULT_NOTIFY = {
	candles: false,
	holiday: false,
	roshChodesh: false,
	omer: false,
	tehillah: false
};
var NOTIFY_COPY = [
	{
		key: "candles",
		label: "Candle lighting",
		hint: "About an hour before the listed time."
	},
	{
		key: "holiday",
		label: "Holiday begins tonight",
		hint: "When a festival or fast is coming at sundown."
	},
	{
		key: "roshChodesh",
		label: "Rosh Chodesh",
		hint: "On the new month."
	},
	{
		key: "omer",
		label: "Omer count",
		hint: "During the counting, in season."
	},
	{
		key: "tehillah",
		label: "Daily Tehillah",
		hint: "A quiet nudge that today’s verse is ready."
	}
];
function parsePrefs(raw) {
	if (!raw) return { ...DEFAULT_NOTIFY };
	try {
		const parsed = JSON.parse(raw);
		return {
			candles: Boolean(parsed.candles),
			holiday: Boolean(parsed.holiday),
			roshChodesh: Boolean(parsed.roshChodesh),
			omer: Boolean(parsed.omer),
			tehillah: Boolean(parsed.tehillah)
		};
	} catch {
		return { ...DEFAULT_NOTIFY };
	}
}
function notificationsSupported() {
	return typeof window !== "undefined" && "Notification" in window;
}
var CITY_KEY = "ner-tamid-city";
var NOTE_KEY = "ner-tamid-note";
var WALK_KEY = "ner-tamid-walk";
var FAV_KEY = "ner-tamid-favs";
var NOTIFY_KEY = "ner-tamid-notify";
function readWalk() {
	try {
		const raw = localStorage.getItem(WALK_KEY);
		if (!raw) return {
			endsAt: null,
			alarming: false
		};
		const parsed = JSON.parse(raw);
		const endsAt = typeof parsed.endsAt === "number" ? parsed.endsAt : null;
		if (!endsAt) return {
			endsAt: null,
			alarming: false
		};
		return {
			endsAt,
			alarming: Date.now() >= endsAt
		};
	} catch {
		return {
			endsAt: null,
			alarming: false
		};
	}
}
function writeWalk(endsAt) {
	if (!endsAt) {
		localStorage.removeItem(WALK_KEY);
		return;
	}
	localStorage.setItem(WALK_KEY, JSON.stringify({ endsAt }));
}
function readFavorites() {
	try {
		const raw = localStorage.getItem(FAV_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		return parsed.filter((f) => f && typeof f.id === "string" && typeof f.title === "string");
	} catch {
		return [];
	}
}
function migrateTab(raw) {
	if (raw === "report") return "safety";
	if (raw === "calendar") return "today";
	if (raw === "today" || raw === "play" || raw === "prayers" || raw === "safety" || raw === "places") return raw;
	return "today";
}
var useAppStore = create((set, get) => ({
	cityId: DEFAULT_CITY_ID,
	tab: "today",
	overlay: null,
	note: "",
	walkEndsAt: null,
	alarming: false,
	favorites: [],
	notify: { ...DEFAULT_NOTIFY },
	hydrated: false,
	setCityId: (id) => {
		localStorage.setItem(CITY_KEY, id);
		set({ cityId: id });
	},
	setTab: (tab) => set({
		tab,
		overlay: null
	}),
	setOverlay: (overlay) => set({ overlay }),
	setNote: (note) => {
		localStorage.setItem(NOTE_KEY, note);
		set({ note });
	},
	startWalk: (minutes) => {
		const endsAt = Date.now() + minutes * 6e4;
		writeWalk(endsAt);
		set({
			walkEndsAt: endsAt,
			alarming: false
		});
	},
	checkIn: () => {
		writeWalk(null);
		set({
			walkEndsAt: null,
			alarming: false
		});
	},
	tickWalk: (now) => {
		const endsAt = get().walkEndsAt;
		if (endsAt && now >= endsAt && !get().alarming) set({ alarming: true });
	},
	toggleFavorite: (item) => {
		const current = get().favorites;
		const next = current.some((f) => f.id === item.id) ? current.filter((f) => f.id !== item.id) : [...current, item];
		localStorage.setItem(FAV_KEY, JSON.stringify(next));
		set({ favorites: next });
	},
	isFavorite: (id) => get().favorites.some((f) => f.id === id),
	setNotify: (key, value) => {
		const next = {
			...get().notify,
			[key]: value
		};
		localStorage.setItem(NOTIFY_KEY, JSON.stringify(next));
		set({ notify: next });
	},
	hydrate: () => {
		if (get().hydrated) return;
		const cityId = localStorage.getItem(CITY_KEY) ?? "skokie";
		const note = localStorage.getItem(NOTE_KEY) ?? "";
		const walk = readWalk();
		const overlay = localStorage.getItem("ner-tamid-tab") === "calendar" ? "calendar" : null;
		set({
			cityId,
			tab: migrateTab(localStorage.getItem("ner-tamid-tab")),
			overlay,
			note,
			walkEndsAt: walk.endsAt,
			alarming: walk.alarming,
			favorites: readFavorites(),
			notify: parsePrefs(localStorage.getItem(NOTIFY_KEY)),
			hydrated: true
		});
	}
}));
function kindLabel(kind) {
	if (kind === "candles") return "Candles";
	if (kind === "havdalah") return "Havdalah";
	if (kind === "parsha") return "Parsha";
	return "Holy day";
}
function CalendarView({ city, info }) {
	const setOverlay = useAppStore((s) => s.setOverlay);
	const groups = groupByDate(info.upcoming);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		title: "Calendar",
		onClose: () => setOverlay(null),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-4 font-sans text-sm text-muted",
				children: [
					"Shabbat and holy days for ",
					city.name,
					". Candle lighting is 18 minutes before sunset."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-col gap-3",
				children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-sans text-xs font-medium tracking-widest text-muted uppercase",
						children: [
							group.weekday,
							" · ",
							prettyIsoDate(group.isoDate)
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-col gap-2",
						children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-base leading-snug text-fg",
									children: cleanTitle(item)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-sans text-xs text-subtle",
									children: kindLabel(item.kind)
								})]
							}), item.timeLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("shrink-0 font-sans text-sm tabular-nums text-fg"),
								children: item.timeLabel
							}) : null]
						}, item.id))
					})]
				}, group.isoDate))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { children: HEBCAL_SOURCE })
			})
		]
	});
}
function cleanTitle(item) {
	if (item.kind === "candles") return "Candle lighting";
	if (item.kind === "havdalah") return "Havdalah";
	return item.title.replace(/^Parashat\s+/, "Parashat ");
}
function groupByDate(items) {
	const map = /* @__PURE__ */ new Map();
	for (const item of items) {
		const existing = map.get(item.isoDate);
		if (existing) existing.items.push(item);
		else map.set(item.isoDate, {
			isoDate: item.isoDate,
			weekday: item.weekday,
			items: [item]
		});
	}
	return [...map.values()];
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-sans font-medium transition-[transform,background-color,color,opacity,box-shadow] duration-150 ease-out select-none disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg hover:bg-accent/90",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-raised",
			ghost: "bg-transparent text-muted hover:text-fg hover:bg-raised",
			danger: "bg-danger text-danger-fg hover:bg-danger/90"
		},
		size: {
			default: "h-11 rounded-md px-4 text-sm",
			lg: "h-12 w-full rounded-lg px-5 text-sm",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function CityPicker({ open, onOpenChange }) {
	const cityId = useAppStore((s) => s.cityId);
	const setCityId = useAppStore((s) => s.setCityId);
	const city = cityById(cityId);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") onOpenChange(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, onOpenChange]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		type: "button",
		variant: "outline",
		onClick: () => onOpenChange(true),
		className: "min-w-0 max-w-32 gap-1 px-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate",
			children: city.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 opacity-70" })]
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center sm:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Close city list",
			className: "absolute inset-0 bg-bg/70",
			onClick: () => onOpenChange(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "city-picker-title",
			className: "relative flex max-h-[80dvh] w-full max-w-md flex-col rounded-t-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:rounded-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-2 pb-2 pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "city-picker-title",
					className: "font-display text-lg text-fg",
					children: "Candle-lighting city"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "icon",
					"aria-label": "Close",
					onClick: () => onOpenChange(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "min-h-0 flex-1 overflow-y-auto px-1 pb-3",
				children: CITIES.map((c) => {
					const selected = c.id === cityId;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setCityId(c.id);
							onOpenChange(false);
						},
						className: cn("flex h-12 w-full items-center justify-between rounded-md px-3 text-left", selected ? "bg-raised text-fg" : "text-fg hover:bg-raised"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex min-w-0 flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate font-sans text-sm font-medium",
								children: c.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate font-sans text-xs text-muted",
								children: c.region
							})]
						}), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-accent" }) : null]
					}) }, c.id);
				})
			})]
		})]
	}) : null] });
}
function SaveButton({ item, className }) {
	const toggle = useAppStore((s) => s.toggleFavorite);
	const saved = useAppStore((s) => s.favorites.some((f) => f.id === item.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => toggle(item),
		"aria-pressed": saved,
		"aria-label": saved ? `Remove ${item.title} from saved` : `Save ${item.title}`,
		className: cn("inline-flex size-10 items-center justify-center rounded-md text-muted hover:bg-raised hover:text-fg", saved && "text-fg", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
			className: "size-4",
			fill: saved ? "currentColor" : "none"
		})
	});
}
var EMERGENCY = {
	id: "911",
	name: "Emergency",
	blurb: "If this is a genuine emergency and someone is in danger, call 911.",
	href: "tel:911",
	phone: "911",
	kind: "safety"
};
var REPORT = [
	{
		id: "cja",
		name: "Chicago Jewish Alliance",
		blurb: "Report Jew-hate locally. They document and respond to incidents in schools, on campus, and across Chicagoland.",
		href: "https://chicago.jewishalliance.com/initiatives/incident-response",
		phone: "847-231-2180",
		kind: "safety"
	},
	{
		id: "adl",
		name: "ADL incident report",
		blurb: "Report antisemitism, extremism, or bias. Used in the national audit.",
		href: "https://www.adl.org/report-incident",
		kind: "safety"
	},
	{
		id: "scn",
		name: "Secure Community Network",
		blurb: "The official security desk for North American Jewish institutions.",
		href: "https://securecommunitynetwork.org/incidentreporting/",
		kind: "safety"
	},
	{
		id: "fbi",
		name: "FBI tips",
		blurb: "Report a hate crime. You may remain anonymous.",
		href: "https://tips.fbi.gov/",
		phone: "1-800-225-5324",
		kind: "safety"
	},
	{
		id: "doj",
		name: "U.S. Department of Justice",
		blurb: "How to report a hate crime, and what counts as one.",
		href: "https://www.justice.gov/hatecrimes/report-a-hate-crime",
		kind: "safety"
	}
];
var NATIONAL = [
	{
		id: "adl-home",
		name: "Anti-Defamation League",
		blurb: "Tracking, education, and legal work against antisemitism.",
		href: "https://www.adl.org/",
		kind: "safety"
	},
	{
		id: "scn-home",
		name: "Secure Community Network",
		blurb: "Training, threat monitoring, and institutional security.",
		href: "https://www.securecommunitynetwork.org/",
		kind: "safety"
	},
	{
		id: "federations",
		name: "Find your federation",
		blurb: "Local Jewish community, emergency aid, and synagogues near you.",
		href: "https://www.jewishfederations.org/find-your-federation",
		kind: "federation"
	},
	{
		id: "hillel",
		name: "Hillel International",
		blurb: "Campus community, and a place to start if school does not feel safe.",
		href: "https://www.hillel.org/",
		kind: "directory"
	},
	{
		id: "chabad",
		name: "Find a Chabad",
		blurb: "Shabbat tables and open doors in hundreds of cities.",
		href: "https://www.chabad.org/centers",
		kind: "chabad"
	},
	{
		id: "jcca",
		name: "Find a JCC",
		blurb: "Jewish community centers across North America.",
		href: "https://www.jcca.org/",
		kind: "jcc"
	},
	{
		id: "mikvah-org",
		name: "Find a mikvah",
		blurb: "Public directory of mikvaot. Confirm hours with the site before you go.",
		href: "https://www.mikvah.org/directory",
		kind: "mikveh"
	},
	{
		id: "blue-dove",
		name: "The Blue Dove Foundation",
		blurb: "Jewish mental health resources. You do not have to hold this alone.",
		href: "https://thebluedovefoundation.org/",
		kind: "health"
	},
	{
		id: "urj",
		name: "Find a Reform congregation",
		blurb: "Union for Reform Judaism. Search by city.",
		href: "https://reformjudaism.org/congregations",
		kind: "synagogue"
	},
	{
		id: "uscj",
		name: "Find a Conservative congregation",
		blurb: "United Synagogue of Conservative Judaism.",
		href: "https://uscj.org/",
		kind: "synagogue"
	}
];
var CHICAGO = [
	{
		id: "cja-home",
		name: "Chicago Jewish Alliance",
		blurb: "Skokie-based. Report antisemitism and get local response.",
		href: "https://chicago.jewishalliance.com/initiatives/incident-response",
		phone: "847-231-2180",
		kind: "safety"
	},
	{
		id: "juf",
		name: "Jewish United Fund",
		blurb: "Chicago’s federation. Community, crisis help, and Israel support.",
		href: "https://www.juf.org/",
		kind: "federation"
	},
	{
		id: "jcrc",
		name: "JCRC Chicago",
		blurb: "Community relations, advocacy, and response to antisemitism.",
		href: "https://www.juf.org/our-impact/civic-engagement/jewish-community-relations-council/",
		kind: "safety"
	},
	{
		id: "ark",
		name: "The Ark",
		blurb: "Food, medical care, and help for Chicagoland Jews facing hardship. Free and confidential.",
		href: "https://arkchicago.org/",
		phone: "773-973-1000",
		kind: "aid"
	},
	{
		id: "museum",
		name: "Illinois Holocaust Museum",
		blurb: "In Skokie. Memory, education, and a public stand against hate.",
		href: "https://www.ilholocaustmuseum.org/",
		kind: "museum"
	},
	{
		id: "jcfs",
		name: "JCFS Chicago",
		blurb: "Counseling, family services, and disability support.",
		href: "https://www.jcfs.org/",
		kind: "health"
	},
	{
		id: "jcc-chicago",
		name: "JCC Chicago",
		blurb: "Community centers, camp, fitness, and Jewish life across Chicagoland.",
		href: "https://jccchicago.org/",
		kind: "jcc"
	},
	{
		id: "crc",
		name: "cRc kosher establishments",
		blurb: "Chicago Rabbinical Council list of kosher restaurants and stores.",
		href: "https://consumer.crckosher.org/kosher-establishments/",
		phone: "773-465-3900",
		kind: "kosher"
	},
	{
		id: "juf-guide",
		name: "JUF Guide to Jewish Living",
		blurb: "Directory of congregations, mikvaot, and organizations in Chicago.",
		href: "https://www.juf.org/guide/",
		kind: "directory"
	},
	{
		id: "skokie-pd",
		name: "Skokie Police",
		blurb: "Local non-emergency reporting for incidents in Skokie.",
		href: "https://www.skokie.org/212/Police-Department",
		kind: "safety"
	}
];
var SYNAGOGUES = [
	{
		id: "anshe-emet",
		name: "Anshe Emet Synagogue",
		blurb: "Conservative. Lakeview.",
		href: "https://www.ansheemet.org/",
		kind: "synagogue"
	},
	{
		id: "tbi",
		name: "Temple Beth Israel",
		blurb: "Reform. Skokie.",
		href: "https://tbiskokie.org/",
		phone: "847-675-0951",
		kind: "synagogue"
	},
	{
		id: "beth-emet",
		name: "Beth Emet the Free Synagogue",
		blurb: "Reform. Evanston.",
		href: "https://bethemet.org/",
		phone: "847-869-4230",
		kind: "synagogue"
	},
	{
		id: "sinai",
		name: "Chicago Sinai Congregation",
		blurb: "Reform. Near North Side.",
		href: "https://chicagosinai.org/",
		phone: "312-867-7000",
		kind: "synagogue"
	},
	{
		id: "sholom",
		name: "Temple Sholom of Chicago",
		blurb: "Reform. Lakeview.",
		href: "https://www.sholomchicago.org/",
		kind: "synagogue"
	},
	{
		id: "emanuel",
		name: "Emanuel Congregation",
		blurb: "Reform. Edgewater.",
		href: "https://www.emanuelcong.org/",
		kind: "synagogue"
	},
	{
		id: "ehnt",
		name: "Ezra-Habonim, Niles Township Jewish Congregation",
		blurb: "Conservative. Skokie.",
		href: "https://www.ehnt.org/",
		phone: "847-675-4141",
		kind: "synagogue"
	},
	{
		id: "kol-emeth",
		name: "Congregation Kol Emeth",
		blurb: "Conservative. Skokie.",
		href: "https://www.kolemethskokie.org/",
		phone: "847-673-3370",
		kind: "synagogue"
	}
];
var MIKVAOT = [{
	id: "community-mikvah",
	name: "Community Mikvah of the Conservative Movement",
	blurb: "Wilmette. Public community mikvah. Call before you go.",
	href: "http://www.communitymikvahwilmette.org/",
	phone: "847-256-4699",
	kind: "mikveh"
}, {
	id: "chicago-mikvah",
	name: "Chicago Mikvah Association",
	blurb: "Directory and guidance for mikvaot in Chicago.",
	href: "https://www.chicagomikvah.com/",
	kind: "mikveh"
}];
function PlacesView({ city }) {
	const local = isChicagoland(city.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-lg flex-col gap-5 px-5 pb-8 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl text-fg",
				children: "Community"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-sans text-sm leading-relaxed text-muted",
				children: "Official doors, not a map of Jewish homes. If you need people, start here."
			})] }),
			local ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceGroup, {
					title: "Chicago and Skokie",
					items: CHICAGO
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceGroup, {
					title: "Synagogues",
					items: SYNAGOGUES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceGroup, {
					title: "Mikvaot",
					items: MIKVAOT
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-xl bg-surface px-4 py-4 font-sans text-sm leading-relaxed text-muted shadow-[var(--shadow-border)]",
				children: [
					"Local listings for ",
					city.name,
					" are not in this version yet. Use the national finders below rather than a guessed map."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceGroup, {
				title: "Everywhere",
				items: NATIONAL
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { children: "Public institution sites only. Confirm hours and access before you go." })
		]
	});
}
function ResourceGroup({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-lg text-fg",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 flex flex-col gap-2",
			children: items.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-stretch gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: r.href,
					target: "_blank",
					rel: "noreferrer",
					className: "flex min-w-0 flex-1 items-start justify-between gap-3 rounded-lg bg-raised px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-sans text-sm font-medium text-fg",
								children: r.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-sans text-sm leading-relaxed text-muted",
								children: r.blurb
							}),
							r.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-sans text-xs tabular-nums text-subtle",
								children: r.phone
							}) : null
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-0.5 size-4 shrink-0 text-muted" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveButton, {
					item: {
						id: `resource:${r.id}`,
						kind: "resource",
						title: r.name,
						subtitle: r.blurb
					},
					className: "self-center"
				})]
			}, r.id))
		})]
	});
}
var LETTER_LESSONS = [{
	id: "tet",
	char: "ט",
	name: "Tet",
	pronunciation: "A hard t, as in “tall.” In modern Israeli Hebrew it sounds like tav. Some Ashkenazi traditions keep a distinction.",
	about: "Tet is the ninth letter. Its name is tet. It often carries the sense of “good” in Hebrew words. This is letter recognition, not a full grammar lesson.",
	words: [
		{
			hebrew: "טוב",
			translit: "tov",
			english: "good"
		},
		{
			hebrew: "טל",
			translit: "tal",
			english: "dew"
		},
		{
			hebrew: "טבע",
			translit: "teva",
			english: "nature"
		}
	],
	distractorNames: [
		"Tav",
		"Dalet",
		"Chet"
	],
	distractorChars: [
		"ת",
		"ד",
		"ח"
	],
	source: "Standard Hebrew alphabet. Pronunciation notes follow common teaching, not a posek."
}];
function letterLessonById(id) {
	return LETTER_LESSONS.find((l) => l.id === id) ?? LETTER_LESSONS[0];
}
function LetterLessonGame({ letterId = "tet" }) {
	const lesson = (0, import_react.useMemo)(() => letterLessonById(letterId), [letterId]);
	const [step, setStep] = (0, import_react.useState)("learn");
	const [findPick, setFindPick] = (0, import_react.useState)(null);
	const [namePick, setNamePick] = (0, import_react.useState)(null);
	const findOptions = (0, import_react.useMemo)(() => [
		lesson.distractorChars[0],
		lesson.char,
		lesson.distractorChars[2],
		lesson.distractorChars[1]
	], [lesson]);
	const nameOptions = (0, import_react.useMemo)(() => [
		lesson.distractorNames[1],
		lesson.name,
		lesson.distractorNames[0],
		lesson.distractorNames[2]
	], [lesson]);
	const findCorrect = findPick === lesson.char;
	const nameCorrect = namePick === lesson.name;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto w-full max-w-lg px-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-medium tracking-widest text-muted uppercase",
					children: "Hebrew letters"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-2 font-display text-2xl text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						lang: "he",
						children: lesson.char
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [" · ", lesson.name] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-sans text-sm leading-relaxed text-muted",
					children: "Learn the letter, then find it, then name it. Other letters can use this same path later."
				})
			] }),
			step === "learn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-xl bg-surface px-5 py-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center font-display text-7xl leading-none text-fg",
						lang: "he",
						"aria-label": lesson.name,
						children: lesson.char
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-sans text-sm leading-relaxed text-fg",
						children: lesson.pronunciation
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-sans text-sm leading-relaxed text-muted",
						children: lesson.about
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-col gap-2",
						children: lesson.words.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl text-fg",
								dir: "rtl",
								lang: "he",
								children: w.hebrew
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-sans text-sm text-muted",
								children: [
									w.translit,
									" · ",
									w.english
								]
							})]
						}, w.hebrew))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setStep("find"),
						className: "mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-raised px-4 font-sans text-sm text-fg shadow-[var(--shadow-border)]",
						children: ["Find ", lesson.name]
					})
				]
			}) : null,
			step === "find" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-xl bg-surface px-5 py-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-sans text-sm text-fg",
						children: [
							"Which of these is ",
							lesson.name,
							"?"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-2 gap-2",
						role: "group",
						"aria-label": `Choose the letter ${lesson.name}`,
						children: findOptions.map((ch) => {
							const selected = findPick === ch;
							const right = ch === lesson.char;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setFindPick(ch),
								"aria-pressed": selected,
								className: cn("min-h-16 rounded-lg font-display text-4xl text-fg shadow-[var(--shadow-border)]", selected && right && "bg-accent text-accent-fg", selected && !right && "tile-wrong bg-raised opacity-70", !selected && "bg-raised"),
								lang: "he",
								children: ch
							}, ch);
						})
					}),
					findPick ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-sans text-sm text-muted",
						"aria-live": "polite",
						children: findCorrect ? `Yes. This is ${lesson.name}.` : `Not that one. ${lesson.name} is ${lesson.char}.`
					}) : null,
					findCorrect ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setStep("name"),
						className: "mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-raised px-4 font-sans text-sm text-fg shadow-[var(--shadow-border)]",
						children: "Name the letter"
					}) : null
				]
			}) : null,
			step === "name" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-xl bg-surface px-5 py-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center font-display text-7xl leading-none text-fg",
						lang: "he",
						children: lesson.char
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-sans text-sm text-fg",
						children: "What is this letter called?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-2 gap-2",
						role: "group",
						"aria-label": "Choose the letter name",
						children: nameOptions.map((n) => {
							const selected = namePick === n;
							const right = n === lesson.name;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setNamePick(n),
								"aria-pressed": selected,
								className: cn("min-h-11 rounded-lg font-sans text-sm text-fg shadow-[var(--shadow-border)]", selected && right && "bg-accent text-accent-fg", selected && !right && "tile-wrong bg-raised opacity-70", !selected && "bg-raised"),
								children: n
							}, n);
						})
					}),
					namePick ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-sans text-sm text-muted",
						"aria-live": "polite",
						children: nameCorrect ? `Yes. ${lesson.char} is ${lesson.name}.` : `This is ${lesson.name}.`
					}) : null
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { children: lesson.source })
			})
		]
	});
}
var TEHILLIM = [
	{
		id: "psalm-27",
		ref: "Psalm 27:1",
		hebrew: "ה׳ אוֹרִי וְיִשְׁעִי מִמִּי אִירָא. ה׳ מָעוֹז חַיַּי מִמִּי אֶפְחָד.",
		english: "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?",
		phrases: [
			"The Lord is my light and my salvation",
			"whom shall I fear?",
			"The Lord is the stronghold of my life",
			"of whom shall I be afraid?"
		]
	},
	{
		id: "psalm-121",
		ref: "Psalm 121:1–2",
		hebrew: "אֶשָּׂא עֵינַי אֶל הֶהָרִים מֵאַיִן יָבֹא עֶזְרִי. עֶזְרִי מֵעִם ה׳ עֹשֵׂה שָׁמַיִם וָאָרֶץ.",
		english: "I lift up my eyes to the mountains: from where will my help come? My help comes from the Lord, maker of heaven and earth.",
		phrases: [
			"I lift up my eyes to the mountains",
			"from where will my help come?",
			"My help comes from the Lord",
			"maker of heaven and earth"
		]
	},
	{
		id: "psalm-23",
		ref: "Psalm 23:4",
		hebrew: "גַּם כִּי אֵלֵךְ בְּגֵיא צַלְמָוֶת לֹא אִירָא רָע כִּי אַתָּה עִמָּדִי.",
		english: "Though I walk through a valley of deep darkness, I will fear no evil, for You are with me.",
		phrases: [
			"Though I walk through a valley of deep darkness",
			"I will fear no evil",
			"for You are with me"
		]
	},
	{
		id: "psalm-46",
		ref: "Psalm 46:2",
		hebrew: "אֱלֹהִים לָנוּ מַחֲסֶה וָעֹז עֶזְרָה בְצָרוֹת נִמְצָא מְאֹד.",
		english: "God is our refuge and strength, a very present help in trouble.",
		phrases: ["God is our refuge and strength", "a very present help in trouble"]
	},
	{
		id: "psalm-91",
		ref: "Psalm 91:1–2",
		hebrew: "יֹשֵׁב בְּסֵתֶר עֶלְיוֹן בְּצֵל שַׁדַּי יִתְלוֹנָן. אֹמַר לַה׳ מַחְסִי וּמְצוּדָתִי אֱלֹהַי אֶבְטַח בּוֹ.",
		english: "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord: my refuge and my fortress.",
		phrases: [
			"Whoever dwells in the shelter of the Most High",
			"will rest in the shadow of the Almighty",
			"I will say of the Lord",
			"my refuge and my fortress"
		]
	},
	{
		id: "psalm-16",
		ref: "Psalm 16:8",
		hebrew: "שִׁוִּיתִי ה׳ לְנֶגְדִּי תָמִיד כִּי מִימִינִי בַּל אֶמּוֹט.",
		english: "I have set the Lord always before me; because He is at my right hand, I will not be shaken.",
		phrases: [
			"I have set the Lord always before me",
			"because He is at my right hand",
			"I will not be shaken"
		]
	},
	{
		id: "psalm-30",
		ref: "Psalm 30:6",
		hebrew: "בָּעֶרֶב יָלִין בֶּכִי וְלַבֹּקֶר רִנָּה.",
		english: "Weeping may tarry for the night, but joy comes with the morning.",
		phrases: ["Weeping may tarry for the night", "but joy comes with the morning"]
	},
	{
		id: "psalm-34",
		ref: "Psalm 34:9",
		hebrew: "טַעֲמוּ וּרְאוּ כִּי טוֹב ה׳ אַשְׁרֵי הַגֶּבֶר יֶחֱסֶה בּוֹ.",
		english: "Taste and see that the Lord is good; happy is the one who takes refuge in Him.",
		phrases: ["Taste and see that the Lord is good", "happy is the one who takes refuge in Him"]
	},
	{
		id: "psalm-118",
		ref: "Psalm 118:24",
		hebrew: "זֶה הַיּוֹם עָשָׂה ה׳ נָגִילָה וְנִשְׂמְחָה בוֹ.",
		english: "This is the day the Lord has made; let us rejoice and be glad in it.",
		phrases: ["This is the day the Lord has made", "let us rejoice and be glad in it"]
	},
	{
		id: "psalm-126",
		ref: "Psalm 126:5",
		hebrew: "הַזֹּרְעִים בְּדִמְעָה בְּרִנָּה יִקְצֹרוּ.",
		english: "Those who sow in tears will reap with songs of joy.",
		phrases: ["Those who sow in tears", "will reap with songs of joy"]
	},
	{
		id: "psalm-130",
		ref: "Psalm 130:1–2",
		hebrew: "מִמַּעֲמַקִּים קְרָאתִיךָ ה׳. אֲדֹנָי שִׁמְעָה בְקוֹלִי.",
		english: "Out of the depths I call to You, O Lord. Lord, hear my voice.",
		phrases: ["Out of the depths I call to You, O Lord", "Lord, hear my voice"]
	},
	{
		id: "psalm-90",
		ref: "Psalm 90:12",
		hebrew: "לִמְנוֹת יָמֵינוּ כֵּן הוֹדַע וְנָבִא לְבַב חָכְמָה.",
		english: "Teach us to number our days, that we may get a heart of wisdom.",
		phrases: ["Teach us to number our days", "that we may get a heart of wisdom"]
	},
	{
		id: "psalm-92",
		ref: "Psalm 92:2",
		hebrew: "טוֹב לְהֹדוֹת לַה׳ וּלְזַמֵּר לְשִׁמְךָ עֶלְיוֹן.",
		english: "It is good to give thanks to the Lord, to sing praises to Your name, O Most High.",
		phrases: ["It is good to give thanks to the Lord", "to sing praises to Your name, O Most High"]
	},
	{
		id: "psalm-150",
		ref: "Psalm 150:6",
		hebrew: "כֹּל הַנְּשָׁמָה תְּהַלֵּל יָהּ הַלְלוּ יָהּ.",
		english: "Let everything that has breath praise the Lord. Hallelujah.",
		phrases: ["Let everything that has breath praise the Lord", "Hallelujah"]
	},
	{
		id: "psalm-19",
		ref: "Psalm 19:15",
		hebrew: "יִהְיוּ לְרָצוֹן אִמְרֵי פִי וְהֶגְיוֹן לִבִּי לְפָנֶיךָ ה׳ צוּרִי וְגֹאֲלִי.",
		english: "May the words of my mouth and the meditation of my heart be acceptable before You, O Lord, my rock and my redeemer.",
		phrases: [
			"May the words of my mouth",
			"and the meditation of my heart",
			"be acceptable before You",
			"O Lord, my rock and my redeemer"
		]
	},
	{
		id: "psalm-121-keep",
		ref: "Psalm 121:7–8",
		hebrew: "ה׳ יִשְׁמָרְךָ מִכָּל רָע יִשְׁמֹר אֶת נַפְשֶׁךָ. ה׳ יִשְׁמָר צֵאתְךָ וּבוֹאֶךָ מֵעַתָּה וְעַד עוֹלָם.",
		english: "The Lord will keep you from all evil; He will keep your soul. The Lord will keep your going out and your coming in, from now and forever.",
		phrases: [
			"The Lord will keep you from all evil",
			"He will keep your soul",
			"The Lord will keep your going out and your coming in",
			"from now and forever"
		]
	}
];
function tehillahForDay(absDay) {
	const raw = TEHILLIM[Math.abs(absDay) % TEHILLIM.length];
	return {
		...raw,
		hebrew: withoutNikkud(raw.hebrew)
	};
}
function seededShuffle(items, seed) {
	const out = [...items];
	let a = seed | 0;
	for (let i = out.length - 1; i > 0; i--) {
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		const r = ((t ^ t >>> 14) >>> 0) / 4294967296;
		const j = Math.floor(r * (i + 1));
		const tmp = out[i];
		out[i] = out[j];
		out[j] = tmp;
	}
	return out;
}
var STREAK_KEY = "ner-tamid-tehillah";
function loadSave() {
	try {
		const raw = localStorage.getItem(STREAK_KEY);
		if (!raw) return {
			lastWinAbs: null,
			streak: 0,
			wonAbs: null
		};
		const parsed = JSON.parse(raw);
		return {
			lastWinAbs: typeof parsed.lastWinAbs === "number" ? parsed.lastWinAbs : null,
			streak: typeof parsed.streak === "number" ? parsed.streak : 0,
			wonAbs: typeof parsed.wonAbs === "number" ? parsed.wonAbs : null
		};
	} catch {
		return {
			lastWinAbs: null,
			streak: 0,
			wonAbs: null
		};
	}
}
function writeSave(save) {
	localStorage.setItem(STREAK_KEY, JSON.stringify(save));
}
function TehillahGame({ absDay }) {
	const psalm = (0, import_react.useMemo)(() => tehillahForDay(absDay), [absDay]);
	const bank = (0, import_react.useMemo)(() => {
		const shuffled = seededShuffle(psalm.phrases, absDay * 1103515245 + 12345);
		if (shuffled.join("|") === psalm.phrases.join("|") && shuffled.length > 1) {
			const swapped = [...shuffled];
			const tmp = swapped[0];
			swapped[0] = swapped[swapped.length - 1];
			swapped[swapped.length - 1] = tmp;
			return swapped;
		}
		return shuffled;
	}, [psalm, absDay]);
	const [placed, setPlaced] = (0, import_react.useState)([]);
	const [shake, setShake] = (0, import_react.useState)(0);
	const [save, setSave] = (0, import_react.useState)({
		lastWinAbs: null,
		streak: 0,
		wonAbs: null
	});
	const alreadyWon = save.wonAbs === absDay;
	const won = alreadyWon || placed.length === psalm.phrases.length;
	(0, import_react.useEffect)(() => {
		setSave(loadSave());
		setPlaced([]);
		setShake(0);
	}, [absDay]);
	(0, import_react.useEffect)(() => {
		if (!won || alreadyWon) return;
		if (placed.length !== psalm.phrases.length) return;
		const prev = loadSave();
		const next = {
			lastWinAbs: absDay,
			streak: prev.lastWinAbs === absDay - 1 ? prev.streak + 1 : 1,
			wonAbs: absDay
		};
		writeSave(next);
		setSave(next);
	}, [
		won,
		alreadyWon,
		placed.length,
		psalm.phrases.length,
		absDay
	]);
	const remaining = bank.filter((p) => !placed.includes(p));
	function pick(phrase) {
		if (won) return;
		const nextIndex = placed.length;
		if (psalm.phrases[nextIndex] !== phrase) {
			setShake((n) => n + 1);
			return;
		}
		setPlaced((cur) => [...cur, phrase]);
	}
	function undo() {
		if (won && alreadyWon) return;
		if (won) return;
		setPlaced((cur) => cur.slice(0, -1));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-lg flex-col gap-5 px-5 pb-8 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-medium tracking-widest text-muted uppercase",
					children: "Daily Tehillah"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-2xl text-fg",
					children: "Restore the verse"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-sans text-sm text-muted",
					children: "Tap the lines in order. A new psalm each day."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 font-sans text-sm tabular-nums text-subtle",
					children: [save.streak > 0 ? `${save.streak} day streak` : "Build a streak", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [" · ", psalm.ref] })]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: cn("min-h-36 rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]", shake > 0 && "tile-wrong"),
				"aria-live": "polite",
				children: won ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex flex-col gap-2",
					children: psalm.phrases.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "font-display text-lg leading-snug text-fg",
						children: line
					}, line))
				}) : placed.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-sm text-subtle",
					children: "The verse waits here."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex flex-col gap-2",
					children: placed.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "font-display text-lg leading-snug text-fg",
						children: line
					}, line))
				})
			}, shake),
			won ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-raised px-5 py-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs font-medium tracking-widest text-muted uppercase",
						children: "Complete"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-xl leading-snug text-fg",
						dir: "rtl",
						lang: "he",
						children: psalm.hebrew
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-sans text-base leading-relaxed text-fg",
						children: psalm.english
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-sans text-sm text-muted",
						children: psalm.ref
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-base italic text-fg",
						children: "Come back tomorrow for the next Tehillah."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [remaining.map((phrase) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => pick(phrase),
					className: "min-h-12 rounded-lg bg-surface px-4 py-3 text-left font-sans text-sm leading-snug text-fg shadow-[var(--shadow-border)] transition-transform duration-150 ease-out active:scale-[0.98]",
					children: phrase
				}, phrase)), placed.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					onClick: undo,
					className: "mt-1 self-start",
					children: "Undo"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { children: "Tehillim as commonly printed. English is a reading aid. A new verse each Hebrew day." })
		]
	});
}
function PlayView({ absDay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-10 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TehillahGame, { absDay }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LetterLessonGame, { letterId: "tet" })]
	});
}
function waitForVoices() {
	const now = window.speechSynthesis.getVoices();
	if (now.length > 0) return Promise.resolve(now);
	return new Promise((resolve) => {
		const finish = () => {
			window.speechSynthesis.removeEventListener("voiceschanged", finish);
			resolve(window.speechSynthesis.getVoices());
		};
		window.speechSynthesis.addEventListener("voiceschanged", finish);
		window.setTimeout(finish, 600);
	});
}
function delay(ms) {
	return new Promise((r) => window.setTimeout(r, ms));
}
function speechAvailable() {
	return typeof window !== "undefined" && "speechSynthesis" in window;
}
function hebrewForSpeech(hebrew) {
	return hebrew.replaceAll("ה׳", "אדוני").replaceAll("׳", "");
}
function phrasesOf(text) {
	return text.split(/\n+|(?<=[.,;])\s+/).map((s) => s.trim()).filter(Boolean);
}
async function speakPrayer(opts) {
	const voices = await waitForVoices();
	const hebrewVoice = voices.find((v) => v.lang.toLowerCase().startsWith("he")) ?? voices.find((v) => /hebrew|ivrit/i.test(`${v.lang} ${v.name}`));
	const en = voices.find((v) => v.lang.toLowerCase().startsWith("en") && v.localService) ?? voices.find((v) => v.lang.toLowerCase().startsWith("en"));
	const useHebrew = Boolean(hebrewVoice);
	const raw = useHebrew ? hebrewForSpeech(opts.hebrew) : opts.transliteration.replaceAll("\n", ". ");
	const phrases = phrasesOf(raw);
	const chunks = phrases.length > 0 ? phrases : [raw];
	let stopped = false;
	window.speechSynthesis.cancel();
	await delay(50);
	const handle = {
		stop() {
			stopped = true;
			window.speechSynthesis.cancel();
		},
		done: Promise.resolve()
	};
	handle.done = new Promise((resolve, reject) => {
		const speakAt = (i) => {
			if (stopped) {
				resolve();
				return;
			}
			if (i >= chunks.length) {
				resolve();
				return;
			}
			const utter = new SpeechSynthesisUtterance(chunks[i]);
			if (useHebrew && hebrewVoice) {
				utter.voice = hebrewVoice;
				utter.lang = hebrewVoice.lang || "he-IL";
			} else {
				if (en) utter.voice = en;
				utter.lang = "en-US";
			}
			const last = i === chunks.length - 1;
			const first = i === 0;
			utter.rate = .64;
			utter.pitch = first ? 1.04 : last ? .86 : .96;
			utter.volume = 1;
			utter.onerror = () => {
				if (!stopped) reject(/* @__PURE__ */ new Error("speech failed"));
				else resolve();
			};
			utter.onend = () => {
				if (stopped) {
					resolve();
					return;
				}
				window.setTimeout(() => speakAt(i + 1), last ? 0 : 320);
			};
			window.speechSynthesis.speak(utter);
		};
		speakAt(0);
	});
	return handle;
}
function stopSpeech() {
	if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
	window.speechSynthesis.cancel();
}
function PronounceButton({ audioSrc, hebrew, transliteration }) {
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [note, setNote] = (0, import_react.useState)(null);
	const audioRef = (0, import_react.useRef)(null);
	const handleRef = (0, import_react.useRef)(null);
	const canSpeak = speechAvailable();
	(0, import_react.useEffect)(() => {
		return () => {
			handleRef.current?.stop();
			stopSpeech();
			audioRef.current?.pause();
		};
	}, []);
	function stopAll() {
		handleRef.current?.stop();
		handleRef.current = null;
		stopSpeech();
		const audio = audioRef.current;
		if (audio) {
			audio.pause();
			audio.currentTime = 0;
		}
		setPlaying(false);
	}
	async function playRecording(src) {
		const audio = audioRef.current ?? new Audio();
		audioRef.current = audio;
		audio.src = src;
		audio.onended = () => setPlaying(false);
		audio.onerror = () => setPlaying(false);
		await audio.play();
		setPlaying(true);
		setNote("A human recitation. The melody in shul may differ.");
	}
	async function playRecitative() {
		if (!canSpeak) {
			setNote("This browser cannot speak the prayer aloud.");
			return;
		}
		const handle = await speakPrayer({
			hebrew,
			transliteration
		});
		handleRef.current = handle;
		setPlaying(true);
		setNote("A slow recitation, like davening. The tune in shul will differ. A reading aid, not a hazzan.");
		await handle.done;
		if (handleRef.current === handle) {
			handleRef.current = null;
			setPlaying(false);
		}
	}
	async function toggle() {
		if (playing) {
			stopAll();
			return;
		}
		try {
			if (audioSrc) {
				await playRecording(audioSrc);
				return;
			}
			await playRecitative();
		} catch {
			stopAll();
			setNote("The prayer could not be heard. Try again, and turn the volume up.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => void toggle(),
			className: cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 font-sans text-sm shadow-[var(--shadow-border)]", playing ? "bg-fg text-bg" : "bg-raised text-fg"),
			children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "size-3.5 fill-current" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }), playing ? "Stop" : "Hear the prayer"]
		}), note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-sans text-xs leading-relaxed text-subtle",
			children: note
		}) : null]
	});
}
function todayInJewishLife(info) {
	const items = [];
	const seen = /* @__PURE__ */ new Set();
	const push = (item) => {
		const key = item.title.toLowerCase();
		if (seen.has(key)) return;
		seen.add(key);
		items.push(item);
	};
	if (info.isRoshChodesh && info.roshChodeshTitle) push({
		id: "rc",
		title: info.roshChodeshTitle,
		body: "The new month. Many communities add Hallel and Ya’aleh v’Yavo. Some treat it as a day of extra prayer or gathering."
	});
	if (info.omer) push({
		id: "omer",
		title: info.omer.title,
		body: "Many count the Omer after nightfall, with a blessing if the count has not been missed. The count runs from Pesach toward Shavuot."
	});
	if (info.isFast && info.fastTitle) push({
		id: "fast",
		title: info.fastTitle,
		body: "A fast day in many communities. Who fasts, and from when until when, depends on the day and on health. Do not fast if a doctor or your practice says not to."
	});
	if (info.specialShabbat) push({
		id: "special",
		title: info.specialShabbat,
		body: "A special Shabbat in the yearly cycle. Many keep an extra reading or a particular mood of the day."
	});
	for (const title of info.holidaysToday) {
		if (/candle|havdalah|fast begins|fast ends/i.test(title)) continue;
		push({
			id: `h-${title}`,
			title,
			body: "Marked on the Jewish calendar today. Customs of how it is kept vary by community."
		});
	}
	if (info.isShabbat && !info.specialShabbat) push({
		id: "shabbat",
		title: "Shabbat",
		body: "The weekly stopping. Many light before sunset, make kiddush, rest, and close the day with havdalah."
	});
	return items;
}
function whyToday(info) {
	const blob = info.holidaysToday.join(" ").toLowerCase();
	if (/yom kippur/.test(blob)) return {
		title: "Why today matters",
		body: "Yom Kippur is the Day of Atonement. Many fast, pray, and ask to be sealed for life. Customs of what is said, and who fasts, vary by community and health.",
		source: "Leviticus 16; 23:26–32. Local custom varies."
	};
	if (/rosh hashana/.test(blob)) return {
		title: "Why today matters",
		body: "Rosh Hashanah is the Jewish new year and a day of remembering. Many hear the shofar and eat foods that speak a hope for sweetness. The greeting is Shana Tovah.",
		source: "Leviticus 23:23–25. Local custom varies."
	};
	if (/sukkot/.test(blob)) return {
		title: "Why today matters",
		body: "Sukkot is the festival of booths. Many eat, and some sleep, under a sukkah. The four species are taken in many communities. Customs of how the sukkah is built vary.",
		source: "Leviticus 23:33–43. Local custom varies."
	};
	if (/simchat torah|shmini atzeret|shemini atzeret/.test(blob)) return {
		title: "Why today matters",
		body: "The Torah cycle ends and begins again. Many dance with the scrolls. In the diaspora, Shemini Atzeret and Simchat Torah are often two days. In Israel they often fall together.",
		source: "Deuteronomy 31:10–13. Israel and diaspora calendars differ."
	};
	if (/chanukah|hanukkah/.test(blob)) return {
		title: "Why today matters",
		body: "Chanukah remembers the rededication of the Temple. Many light the chanukiah after nightfall, adding one flame each night. Oil or wax, placement, and songs follow local custom.",
		source: "Shabbat 21b. Local custom varies."
	};
	if (/\bpurim\b/.test(blob)) return {
		title: "Why today matters",
		body: "Purim remembers the story of Esther. Many hear the megillah, give gifts of food, give to the poor, and eat a festive meal. Walled cities may keep Shushan Purim the next day.",
		source: "Esther 9. Local custom varies."
	};
	if (/pesach|passover/.test(blob)) return {
		title: "Why today matters",
		body: "Pesach remembers the going out from Egypt. Many eat matzah and tell the story at a seder. What is forbidden as chametz, and how many days are kept, differ in Israel and the diaspora.",
		source: "Exodus 12–13. Israel and diaspora calendars differ."
	};
	if (/shavuot/.test(blob)) return {
		title: "Why today matters",
		body: "Shavuot remembers the giving of the Torah. Many stay up to learn. Dairy foods are a widespread custom, not a law. The date follows the counting of the Omer.",
		source: "Exodus 19–20; Leviticus 23:15–21. Local custom varies."
	};
	if (/selichot/.test(blob)) return {
		title: "Why today matters",
		body: "Selichot are prayers of forgiveness. Ashkenazi communities often begin the Saturday night before Rosh Hashanah. Sephardi communities often say them through Elul. Customs vary.",
		source: "Traditional siddur. Ashkenazi and Sephardi custom differ."
	};
	if (info.isFast && info.fastTitle) return {
		title: "Why today matters",
		body: `${info.fastTitle} is a fast day in many communities. Who fasts, and from when until when, depends on the day and on health. Do not fast if a doctor or your practice says not to.`,
		source: "Traditional calendar. Health comes first."
	};
	if (info.omer) return {
		title: "Why today matters",
		body: `Today is ${info.omer.title}. Many count the Omer each night after dark, with a blessing if the count has not been missed. The count runs from Pesach toward Shavuot.`,
		source: "Leviticus 23:15–16. Nightfall begins the next count in many communities."
	};
	if (info.isRoshChodesh && info.roshChodeshTitle) return {
		title: "Why today matters",
		body: `${info.roshChodeshTitle} marks the new month. Hallel and Ya’aleh v’Yavo are added in many communities. Some keep it as a day of extra prayer, rest, or gathering.`,
		source: "Numbers 28:11–15. Local custom varies."
	};
	if (info.specialShabbat) return {
		title: "Why today matters",
		body: `${info.specialShabbat} is a special Shabbat in the yearly cycle. An extra reading or a particular mood of the day is kept in many communities.`,
		source: "Traditional Torah cycle. Local custom varies."
	};
	if (info.isShabbat) return {
		title: "Why today matters",
		body: "Shabbat is a weekly stopping. Many light candles before sunset, make kiddush, eat, rest, and close the day with havdalah. What is refrained from, and how the table looks, follow community custom.",
		source: "Exodus 20:8–11. Local custom varies."
	};
	if (info.month === 6) return {
		title: "Why today matters",
		body: "Elul is the month of return. Many hear the shofar on weekdays, recite Psalm 27, and look toward Rosh Hashanah. It is a season of repair, not of panic.",
		source: "Traditional Elul practice. Psalm 27 is widespread from Elul through Sukkot."
	};
	if (info.month === 7 && info.day <= 21) return {
		title: "Why today matters",
		body: "These are the Days of Awe and the days that follow them. Many add Avinu Malkeinu and Psalm 27. The work of return does not end at ne’ilah.",
		source: "Traditional High Holy Day cycle. Local custom varies."
	};
	return {
		title: "Why today matters",
		body: "An ordinary Jewish day still has a date, a time to light, and a verse. The calendar is a way of standing still for a moment before the next thing.",
		source: "Jewish calendar via Hebcal."
	};
}
function suggestedPrayerId(info) {
	const blob = info.holidaysToday.join(" ").toLowerCase();
	if (/yom kippur/.test(blob)) return "shema";
	if (/rosh hashana|sukkot|simchat|shavuot|pesach|passover|chanukah|purim/.test(blob)) return "shehecheyanu";
	if (info.isShabbat) return "kiddush";
	if (info.nextCandles && info.nextCandles.isoDate === info.todayIso) return "candles";
	if (info.omer) return "shema";
	if (info.month === 6) return "modeh-ani";
	return "modeh-ani";
}
var RAW = [
	{
		id: "modeh-ani",
		title: "Modeh Ani",
		hebrewTitle: "מודה אני",
		category: "daily",
		hebrew: "מודה אני לפניך מלך חי וקים שהחזרת בי נשמתי בחמלה רבה אמונתך.",
		transliteration: "Modeh ani lefanekha, melekh chai vekayam, shehechezarta bi nishmati bechemlah. Rabbah emunatekha.",
		english: "I thank You, living and enduring King, for You have restored my soul to me in mercy. Great is Your faithfulness.",
		when: "Upon waking, before getting out of bed. Many communities say this before washing the hands, because it does not contain the Divine Name. Wording differs slightly between Ashkenazi and Sephardi siddurim.",
		source: "Traditional siddur. Sefaria, Modeh Ani.",
		audioSrc: null
	},
	{
		id: "shema",
		title: "Shema",
		hebrewTitle: "שמע",
		category: "daily",
		hebrew: "שמע ישראל ה׳ אלהינו ה׳ אחד.\nואהבת את ה׳ אלהיך בכל לבבך ובכל נפשך ובכל מאדך.\nוהיו הדברים האלה אשר אנכי מצוך היום על לבבך.\nושננתם לבניך ודברת בם בשבתך בביתך ובלכתך בדרך ובשכבך ובקומך.\nוקשרתם לאות על ידך והיו לטטפת בין עיניך.\nוכתבתם על מזוזות ביתך ובשעריך.",
		transliteration: "Shema Yisrael, Adonai Eloheinu, Adonai echad. Ve’ahavta et Adonai Elohekha, bekhol levavkha, uvkhol nafshekha, uvkhol me’odekha.",
		english: "Hear, O Israel: the Lord is our God, the Lord is one. You shall love the Lord your God with all your heart, with all your soul, and with all your might. Take these words that I command you today upon your heart. Teach them to your children. Speak of them when you sit in your house, when you walk on the way, when you lie down, and when you rise. Bind them as a sign on your hand, and let them be frontlets between your eyes. Write them on the doorposts of your house and on your gates.",
		when: "Morning and evening. This is the first paragraph (Deuteronomy 6:4–9). The full Shema in many communities includes two more biblical paragraphs and surrounding blessings. Covering the eyes for the first line is a widespread custom.",
		source: "Deuteronomy 6:4–9. Traditional siddur. Full Shema continues through Deuteronomy 11 and Numbers 15.",
		audioSrc: null
	},
	{
		id: "ashrei",
		title: "Ashrei",
		hebrewTitle: "אשרי",
		category: "daily",
		hebrew: "אשרי יושבי ביתך עוד יהללוך סלה.\nאשרי העם שככה לו אשרי העם שה׳ אלהיו.\nתהלה לדוד ארוממך אלהי המלך ואברכה שמך לעולם ועד.\nבכל יום אברכך ואהללה שמך לעולם ועד.\nגדול ה׳ ומהלל מאד ולגדלתו אין חקר.\nדור לדור ישבח מעשיך וגבורתיך יגידו.\nהדר כבוד הודך ודברי נפלאתיך אשיחה.\nועזוז נוראתיך יאמרו וגדלותך אספרנה.\nזכר רב טובך יביעו וצדקתך ירננו.\nחנון ורחום ה׳ ארך אפים וגדל חסד.\nטוב ה׳ לכל ורחמיו על כל מעשיו.\nיודוך ה׳ כל מעשיך וחסידיך יברכוכה.\nכבוד מלכותך יאמרו וגבורתך ידברו.\nלהודיע לבני האדם גבורתיו וכבוד הדר מלכותו.\nמלכותך מלכות כל עולמים וממשלתך בכל דור ודור.\nסומך ה׳ לכל הנפלים וזוקף לכל הכפופים.\nעיני כל אליך ישברו ואתה נותן להם את אכלם בעתו.\nפותח את ידך ומשביע לכל חי רצון.\nצדיק ה׳ בכל דרכיו וחסיד בכל מעשיו.\nקרוב ה׳ לכל קראיו לכל אשר יקראהו באמת.\nרצון יראיו יעשה ואת שועתם ישמע ויושיעם.\nשומר ה׳ את כל אהביו ואת כל הרשעים ישמיד.\nתהלת ה׳ ידבר פי ויברך כל בשר שם קדשו לעולם ועד.\nואנחנו נברך יה מעתה ועד עולם הללויה.",
		transliteration: "Ashrei yoshvei veitekha, od yehalelukha selah.\nAshrei ha’am shekakhah lo, ashrei ha’am she’Adonai Elohav.\nTehillah leDavid. Aromimkha Elohai haMelekh, va’avarkha shimkha le’olam va’ed.\nBekhol yom avarekhekha, va’ahalelah shimkha le’olam va’ed.\nGadol Adonai umehulal me’od, veligdulato ein cheker.\nDor ledor yeshabach ma’asekha, ugvurotekha yagidu.\nHadar kevod hodekha, vedivrei nifle’otekha asichah.\nVe’ezuz nora’otekha yomeru, ugdulat’kha asaperenah.\nZekher rav tuvkha yabi’u, vetzidkatkha yeranenu.\nChanun verachum Adonai, erekh apayim ugdol chased.\nTov Adonai lakol, verachamav al kol ma’asav.\nYodukha Adonai kol ma’asekha, vachasidekha yevarekhukhah.\nKevod malkhutkha yomeru, ugvurat’kha yedaberu.\nLehodi’a livnei ha’adam gevurotav, ukhvod hadar malkhuto.\nMalkhutkha malkhut kol olamim, umemshalt’kha bechol dor vador.\nSomekh Adonai lekhol hanoflim, vezokef lekhol hakefufim.\nEinei khol elekha yesaberu, ve’atah noten lahem et okhlam be’ito.\nPote’ach et yadekha, umasbia lechol chai ratzon.\nTzadik Adonai bechol derakhav, vechasid bechol ma’asav.\nKarov Adonai lekhol kor’av, lekhol asher yikra’uhu ve’emet.\nRetzon yere’av ya’aseh, ve’et shavatam yishma veyoshi’em.\nShomer Adonai et kol ohavav, ve’et kol haresha’im yashmid.\nTehilat Adonai yedaber pi, vivarekh kol basar shem kodsho le’olam va’ed.\nVa’anachnu nevarekh Yah, me’atah ve’ad olam. Halleluyah.",
		english: "Happy are those who dwell in Your house; they will praise You yet again. Selah.\nHappy is the people for whom this is so; happy is the people whose God is the Lord.\nA psalm of David. I will exalt You, my God the King, and bless Your name forever and ever.\nEvery day I will bless You, and praise Your name forever and ever.\nGreat is the Lord and highly to be praised; His greatness cannot be fathomed.\nOne generation will praise Your works to another, and tell of Your mighty acts.\nI will speak of the glorious splendor of Your majesty, and of Your wondrous works.\nThey will speak of the power of Your awesome deeds, and I will tell of Your greatness.\nThey will pour out the memory of Your great goodness, and sing of Your righteousness.\nThe Lord is gracious and compassionate, slow to anger and great in kindness.\nThe Lord is good to all, and His mercy is over all His works.\nAll Your works will thank You, Lord, and Your faithful ones will bless You.\nThey will speak of the glory of Your kingship, and tell of Your might,\nto make known to people His mighty acts, and the majestic glory of His kingship.\nYour kingship is a kingship for all ages, and Your dominion for every generation.\nThe Lord supports all who fall, and raises up all who are bent.\nThe eyes of all look to You, and You give them their food in its time.\nYou open Your hand and satisfy every living thing with favor.\nThe Lord is righteous in all His ways, and kind in all His works.\nThe Lord is near to all who call on Him, to all who call on Him in truth.\nHe does the will of those who fear Him; He hears their cry and saves them.\nThe Lord guards all who love Him, and all the wicked He will destroy.\nMy mouth will speak the praise of the Lord, and all flesh will bless His holy name forever and ever.\nAnd we will bless the Lord from now and forever. Hallelujah.",
		when: "Ashrei is recited in many communities three times a day. It is built around the whole of Psalm 145, with opening verses from Psalms 84 and 144, and a closing verse from Psalm 115. Twice daily is a Talmudic teaching; a third recitation is later custom. The traditional siddur omits a nun verse in Psalm 145; some modern editions restore one. This is the common siddur form.",
		source: "Psalms 84:5; 144:15; 145; 115:18. Berakhot 4b. Traditional siddur. The nun verse is absent in most communities.",
		audioSrc: null
	},
	{
		id: "candles",
		title: "Shabbat candles",
		hebrewTitle: "הדלקת נרות",
		category: "shabbat",
		hebrew: "ברוך אתה ה׳ אלהינו מלך העולם אשר קדשנו במצותיו וצונו להדליק נר של שבת.",
		transliteration: "Barukh atah Adonai, Eloheinu melekh ha’olam, asher kidshanu bemitzvotav, vetzivanu lehadlik ner shel Shabbat.",
		english: "Blessed are You, Lord our God, King of the universe, who has sanctified us with commandments, and commanded us to kindle the Sabbath light.",
		when: "On Friday before sunset. Many light, then cover the eyes, then say the blessing. On festivals the wording becomes “ner shel yom tov,” and Shehecheyanu is often added. How many candles, and who lights, follow household custom.",
		source: "Traditional siddur. Shabbat 23b. Festival wording differs.",
		audioSrc: null
	},
	{
		id: "kiddush",
		title: "Kiddush",
		hebrewTitle: "קידוש",
		category: "shabbat",
		hebrew: "ברוך אתה ה׳ אלהינו מלך העולם בורא פרי הגפן.\nברוך אתה ה׳ אלהינו מלך העולם אשר קדשנו במצותיו ורצה בנו, ושבת קדשו באהבה וברצון הנחילנו, זכרון למעשה בראשית. כי הוא יום תחלה למקראי קדש, זכר ליציאת מצרים. כי בנו בחרת ואותנו קדשת מכל העמים, ושבת קדשך באהבה וברצון הנחלתנו. ברוך אתה ה׳ מקדש השבת.",
		transliteration: "Barukh atah Adonai, Eloheinu melekh ha’olam, borei peri hagafen. … Barukh atah Adonai, mekadesh haShabbat.",
		english: "Blessed are You, Lord our God, King of the universe, who creates the fruit of the vine. Blessed are You, Lord our God, King of the universe, who has sanctified us with commandments and taken delight in us, and with love and favor given us the holy Sabbath as a heritage, a remembrance of creation. For it is first among the holy days, a remembrance of the going out from Egypt. You have chosen us and sanctified us from among the peoples, and given us the holy Sabbath in love and favor. Blessed are You, Lord, who sanctifies the Sabbath.",
		when: "Friday night, over wine or grape juice, before the meal. Many also recite Genesis 2:1–3 (Vayechulu) first. Daytime kiddush is shorter. Festival kiddush uses different words. Standing or sitting is a matter of custom.",
		source: "Traditional siddur. Pesachim 106a. Ashkenazi wording given here; Sephardi texts differ in places.",
		audioSrc: null
	},
	{
		id: "havdalah",
		title: "Havdalah",
		hebrewTitle: "הבדלה",
		category: "shabbat",
		hebrew: "ברוך אתה ה׳ אלהינו מלך העולם בורא פרי הגפן.\nברוך אתה ה׳ אלהינו מלך העולם בורא מיני בשמים.\nברוך אתה ה׳ אלהינו מלך העולם בורא מאורי האש.\nברוך אתה ה׳ אלהינו מלך העולם המבדיל בין קדש לחול, בין אור לחשך, בין ישראל לעמים, בין יום השביעי לששת ימי המעשה. ברוך אתה ה׳ המבדיל בין קדש לחול.",
		transliteration: "Barukh atah Adonai, Eloheinu melekh ha’olam, borei peri hagafen. Borei minei vesamim. Borei me’orei ha’esh. … Hamavdil bein kodesh lechol.",
		english: "Blessed are You, Lord our God, King of the universe, who creates the fruit of the vine. Blessed are You, who creates kinds of spice. Blessed are You, who creates the lights of fire. Blessed are You, Lord our God, King of the universe, who distinguishes between holy and ordinary, between light and dark, between Israel and the nations, between the seventh day and the six days of work. Blessed are You, Lord, who distinguishes between holy and ordinary.",
		when: "After nightfall at the end of Shabbat, when three stars are customarily seen. Wine, spices, and a multi-wick flame are used in many homes. The order and the melody vary. Do not begin until Shabbat has ended in your location.",
		source: "Traditional siddur. Berakhot 51b–52a. Local custom varies.",
		audioSrc: null
	},
	{
		id: "shehecheyanu",
		title: "Shehecheyanu",
		hebrewTitle: "שהחיינו",
		category: "season",
		hebrew: "ברוך אתה ה׳ אלהינו מלך העולם שהחיינו וקיימנו והגיענו לזמן הזה.",
		transliteration: "Barukh atah Adonai, Eloheinu melekh ha’olam, shehecheyanu vekiyemanu vehigianu lazman hazeh.",
		english: "Blessed are You, Lord our God, King of the universe, who has given us life, sustained us, and brought us to this time.",
		when: "At the start of a festival, on lighting festival candles, the first night of Chanukah, a first fruit in season, and other firsts. Not typically said on Yom Kippur. Some say it on wearing a new garment. Customs of when it is required differ.",
		source: "Traditional siddur. Berakhot 54a. Local custom varies.",
		audioSrc: null
	},
	{
		id: "hamotzi",
		title: "Blessing over bread",
		hebrewTitle: "המוציא",
		category: "food",
		hebrew: "ברוך אתה ה׳ אלהינו מלך העולם המוציא לחם מן הארץ.",
		transliteration: "Barukh atah Adonai, Eloheinu melekh ha’olam, hamotzi lechem min ha’aretz.",
		english: "Blessed are You, Lord our God, King of the universe, who brings forth bread from the earth.",
		when: "Before eating bread from the five grains. Washing the hands (netilat yadayim) first is traditional in many communities. After the meal, Birkat Hamazon is said. Cake and other baked foods use a different blessing (mezonot).",
		source: "Berakhot 35a. Traditional siddur.",
		audioSrc: null
	},
	{
		id: "hagafen",
		title: "Blessing over wine",
		hebrewTitle: "בורא פרי הגפן",
		category: "food",
		hebrew: "ברוך אתה ה׳ אלהינו מלך העולם בורא פרי הגפן.",
		transliteration: "Barukh atah Adonai, Eloheinu melekh ha’olam, borei peri hagafen.",
		english: "Blessed are You, Lord our God, King of the universe, who creates the fruit of the vine.",
		when: "Before drinking wine or grape juice. This blessing also opens kiddush and havdalah. Other drinks use shehakol.",
		source: "Berakhot 35a. Traditional siddur.",
		audioSrc: null
	},
	{
		id: "haetz",
		title: "Blessing over fruit",
		hebrewTitle: "בורא פרי העץ",
		category: "food",
		hebrew: "ברוך אתה ה׳ אלהינו מלך העולם בורא פרי העץ.",
		transliteration: "Barukh atah Adonai, Eloheinu melekh ha’olam, borei peri ha’etz.",
		english: "Blessed are You, Lord our God, King of the universe, who creates the fruit of the tree.",
		when: "Before fruit that grows on trees: apples, grapes eaten as fruit, olives, and the like. Wine has its own blessing. What counts as a tree versus the ground is a halakhic question. Ask your community if unsure.",
		source: "Berakhot 35a. Traditional siddur. Customs of classification vary.",
		audioSrc: null
	},
	{
		id: "haadama",
		title: "Blessing over vegetables",
		hebrewTitle: "בורא פרי האדמה",
		category: "food",
		hebrew: "ברוך אתה ה׳ אלהינו מלך העולם בורא פרי האדמה.",
		transliteration: "Barukh atah Adonai, Eloheinu melekh ha’olam, borei peri ha’adamah.",
		english: "Blessed are You, Lord our God, King of the universe, who creates the fruit of the ground.",
		when: "Before vegetables, legumes, and fruits that grow from the ground, such as bananas, strawberries, and potatoes. If bread is being eaten, hamotzi often covers the rest of the meal.",
		source: "Berakhot 35a. Traditional siddur.",
		audioSrc: null
	},
	{
		id: "shehakol",
		title: "Blessing over other foods",
		hebrewTitle: "שהכל נהיה בדברו",
		category: "food",
		hebrew: "ברוך אתה ה׳ אלהינו מלך העולם שהכל נהיה בדברו.",
		transliteration: "Barukh atah Adonai, Eloheinu melekh ha’olam, shehakol nihyah bidvaro.",
		english: "Blessed are You, Lord our God, King of the universe, by whose word all things come into being.",
		when: "Before foods and drinks that do not have a more specific blessing: water, juice, eggs, fish, meat, and many processed foods. When unsure, many communities use this blessing.",
		source: "Berakhot 40b. Traditional siddur.",
		audioSrc: null
	},
	{
		id: "haderekh",
		title: "Traveler’s Prayer",
		hebrewTitle: "תפלת הדרך",
		category: "travel",
		hebrew: "יהי רצון מלפניך ה׳ אלהינו ואלהי אבותינו שתוליכנו לשלום ותצעידנו לשלום ותדריכנו לשלום ותגיענו למחוז חפצנו לחיים ולשמחה ולשלום. ותצילנו מכף כל אויב ואורב ולסטים וחיות רעות בדרך ומכל מיני פורעניות המתרגשות לבוא לעולם. ותשלח ברכה במעשי ידינו ותתננו לחן לחסד ולרחמים בעיניך ובעיני כל רואינו. ותשמע קול תחנונינו כי אל שומע תפלה ותחנון אתה. ברוך אתה ה׳ שומע תפלה.",
		transliteration: "Yehi ratzon milfanekha, Adonai Eloheinu veilohei avoteinu, shetolikheinu leshalom. … Barukh atah Adonai, shomei’a tefillah.",
		english: "May it be Your will, Lord our God and God of our ancestors, that You lead us in peace, guide our steps in peace, and bring us to our destination in life, joy, and peace. Rescue us from every enemy, ambush, bandit, and wild beast on the way, and from all kinds of disaster that rise in the world. Send blessing on the work of our hands, and grant us grace, kindness, and mercy in Your eyes and in the eyes of all who see us. Hear the voice of our pleading, for You are a God who hears prayer. Blessed are You, Lord, who hears prayer.",
		when: "At the start of a journey, traditionally once the city has been left. Many say it on planes and long road trips. Wording has several versions. It is a prayer, not a substitute for ordinary care on the road.",
		source: "Berakhot 29b–30a. Traditional siddur. Versions differ.",
		audioSrc: null
	}
];
var PRAYER_WHY = {
	"modeh-ani": "These are often the first words of the day. Many communities say them before washing the hands because the traditional wording has no Divine Name. Sephardi wording differs slightly.",
	shema: "The Shema is a declaration of God’s oneness, and a command to love and teach. Covering the eyes for the first line is a widespread custom. This is the first biblical paragraph, not the whole recitation.",
	ashrei: "Ashrei is built on Psalm 145. The Talmud praises one who recites it three times a day. The traditional siddur has no nun verse; some modern editions restore one. Twice daily is a Talmudic teaching; a third recitation is later custom.",
	candles: "Kindling Shabbat light is a rabbinic mitzvah in traditional law. Many light, cover the eyes, then say the blessing. Who lights, and how many candles, follow household custom.",
	kiddush: "Kiddush sanctifies the day over wine or grape juice. Friday night has a longer text than daytime. Festival kiddush uses different words. Standing or sitting is a matter of custom.",
	havdalah: "Havdalah separates holy time from ordinary time. Wine, spices, and a multi-wick flame are used in many homes. Do not begin until Shabbat has ended in your location.",
	shehecheyanu: "Shehecheyanu marks firsts: a festival, a first fruit, a new garment in some communities. It is not typically said on Yom Kippur. When it is required is a matter of custom and law.",
	hamotzi: "Hamotzi is said over bread from the five grains. Washing the hands first is traditional in many communities. Cake uses a different blessing (mezonot).",
	hagafen: "This blessing is said over wine and grape juice. It also opens kiddush and havdalah. Other drinks use shehakol.",
	haetz: "Said over fruit that grows on trees. Wine has its own blessing. What counts as a tree versus the ground is a halakhic question.",
	haadama: "Said over vegetables and produce of the ground. If bread is being eaten, hamotzi often covers the rest of the meal.",
	shehakol: "A general blessing for foods and drinks that do not have a more specific one. When unsure, many communities use this blessing.",
	haderekh: "A Talmudic prayer for the road. Many say it once the city has been left, including on planes. It is a prayer, not a substitute for ordinary care."
};
var PRAYERS = RAW.map((p) => ({
	...p,
	hebrew: withoutNikkud(p.hebrew),
	why: PRAYER_WHY[p.id] ?? "Customs of when and how this is said vary by community."
}));
var PRAYER_CATEGORIES = [
	{
		id: "daily",
		label: "Daily"
	},
	{
		id: "shabbat",
		label: "Shabbat"
	},
	{
		id: "food",
		label: "Food"
	},
	{
		id: "season",
		label: "Season"
	},
	{
		id: "travel",
		label: "Travel"
	}
];
function prayerById(id) {
	return PRAYERS.find((p) => p.id === id);
}
function PrayersView({ info }) {
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const suggested = prayerById(suggestedPrayerId(info));
	const open = openId ? PRAYERS.find((p) => p.id === openId) : null;
	if (open) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrayerDetail, {
		prayer: open,
		onBack: () => setOpenId(null)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-lg flex-col gap-5 px-5 pb-8 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl text-fg",
				children: "Prayers"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-sans text-sm leading-relaxed text-muted",
				children: "A small lamp, not a whole siddur. Wording follows common Ashkenazi use unless noted. Customs vary."
			})] }),
			suggested ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpenId(suggested.id),
				className: "rounded-xl bg-raised px-5 py-4 text-left shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs font-medium tracking-widest text-muted uppercase",
						children: "For today"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-xl text-fg",
						children: suggested.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-base text-muted",
						dir: "rtl",
						lang: "he",
						children: suggested.hebrewTitle
					})
				]
			}) : null,
			PRAYER_CATEGORIES.map((cat) => {
				const items = PRAYERS.filter((p) => p.category === cat.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg text-fg",
						children: cat.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 flex flex-col",
						children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpenId(p.id),
							className: "flex w-full items-baseline justify-between gap-3 py-3 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-sm text-fg",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm text-muted",
								dir: "rtl",
								lang: "he",
								children: p.hebrewTitle
							})]
						}) }, p.id))
					})]
				}, cat.id);
			})
		]
	});
}
function PrayerDetail({ prayer, onBack }) {
	const verses = (0, import_react.useMemo)(() => {
		const he = prayer.hebrew.split("\n");
		const tr = prayer.transliteration.split("\n");
		const en = prayer.english.split("\n");
		if (he.length > 1 && he.length === tr.length && he.length === en.length) return he.map((hebrew, i) => ({
			hebrew,
			transliteration: tr[i],
			english: en[i]
		}));
		return null;
	}, [prayer]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-lg flex-col gap-5 px-5 pb-8 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onBack,
					className: "font-sans text-sm font-medium text-fg underline decoration-border underline-offset-4",
					children: "All prayers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveButton, { item: {
					id: `prayer:${prayer.id}`,
					kind: "prayer",
					title: prayer.title,
					subtitle: prayer.hebrewTitle
				} })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl text-fg",
				children: prayer.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-xl text-muted",
				dir: "rtl",
				lang: "he",
				children: prayer.hebrewTitle
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl bg-surface px-5 py-5 shadow-[var(--shadow-border)]",
				children: verses ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex flex-col gap-5",
					children: verses.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-[11px] font-medium tracking-widest text-muted uppercase",
							children: "Hebrew"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-xl leading-relaxed text-fg",
							dir: "rtl",
							lang: "he",
							children: v.hebrew
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-sans text-[11px] font-medium tracking-widest text-muted uppercase",
							children: "Transliteration"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-sans text-sm italic leading-relaxed text-muted",
							children: v.transliteration
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-sans text-[11px] font-medium tracking-widest text-muted uppercase",
							children: "Translation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-sans text-sm leading-relaxed text-fg",
							children: v.english
						})
					] }, `${prayer.id}-${i}`))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-[11px] font-medium tracking-widest text-muted uppercase",
						children: "Hebrew"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-xl leading-relaxed text-fg whitespace-pre-line",
						dir: "rtl",
						lang: "he",
						children: prayer.hebrew
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 font-sans text-[11px] font-medium tracking-widest text-muted uppercase",
						children: "Transliteration"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-sans text-sm italic leading-relaxed text-muted",
						children: prayer.transliteration
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 font-sans text-[11px] font-medium tracking-widest text-muted uppercase",
						children: "Translation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-sans text-base leading-relaxed text-fg",
						children: prayer.english
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg text-fg",
				children: "When do I say this?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-sans text-sm leading-relaxed text-muted",
				children: prayer.when
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg text-fg",
					children: "Why / context"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-sans text-sm leading-relaxed text-muted",
					children: prayer.why
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { children: prayer.source })
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PronounceButton, {
				audioSrc: prayer.audioSrc,
				hebrew: prayer.hebrew,
				transliteration: prayer.transliteration
			})
		]
	});
}
var WALK_MINUTES = [
	10,
	15,
	20,
	30
];
function SafetyView({ now }) {
	const note = useAppStore((s) => s.note);
	const setNote = useAppStore((s) => s.setNote);
	const walkEndsAt = useAppStore((s) => s.walkEndsAt);
	const startWalk = useAppStore((s) => s.startWalk);
	const checkIn = useAppStore((s) => s.checkIn);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const remaining = walkEndsAt ? Math.max(0, walkEndsAt - now.getTime()) : 0;
	const walking = Boolean(walkEndsAt && remaining > 0);
	async function copyNote() {
		try {
			await navigator.clipboard.writeText(note);
			setCopied(true);
		} catch {
			setCopied(false);
		}
	}
	(0, import_react.useEffect)(() => {
		if (!copied) return;
		const t = window.setTimeout(() => setCopied(false), 1600);
		return () => window.clearTimeout(t);
	}, [copied]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-lg flex-col gap-5 px-5 pb-8 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl text-fg",
				children: "Safety"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-sans text-sm leading-relaxed text-muted",
				children: "Help is a call and a record, not a lecture. This app cannot watch you or contact anyone on its own."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg text-fg",
				children: "Emergency"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: EMERGENCY.href,
				className: "mt-3 flex min-h-14 items-center justify-between rounded-xl bg-danger px-5 py-4 text-danger-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-display text-lg",
					children: "Call 911"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-sans text-sm opacity-90",
					children: "Genuine emergency"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" })]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg text-fg",
						children: "Document an incident"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-sans text-sm text-muted",
						children: "Stays on this device. Time, place, words, who saw it, while it is still clear."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: note,
						onChange: (e) => setNote(e.target.value),
						rows: 5,
						placeholder: "What happened",
						className: "mt-3 w-full resize-y rounded-md bg-raised px-3 py-3 font-sans text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => void copyNote(),
							disabled: !note.trim(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), copied ? "Copied" : "Copy"]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg text-fg",
						children: "Report antisemitism"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-sans text-sm text-muted",
						children: "File with people whose work is response, not commentary."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-col gap-2",
						children: REPORT.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: r.href,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-start justify-between gap-3 rounded-lg bg-raised px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-sans text-sm font-medium text-fg",
										children: r.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block font-sans text-sm leading-relaxed text-muted",
										children: r.blurb
									}),
									r.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block font-sans text-xs tabular-nums text-subtle",
										children: r.phone
									}) : null
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-0.5 size-4 shrink-0 text-muted" })]
						}) }, r.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { children: "Official reporting desks. Links go to each organization, not through this app." })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg text-fg",
						children: "Walk timer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-sans text-sm leading-relaxed text-muted",
						children: "Set a time. If you do not tap “I am safe,” this phone alarms here only. It does not call 911, friends, family, or a trusted contact. Ner Tamid does not monitor you."
					}),
					walking ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-col gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl tabular-nums text-fg",
							children: formatRemain(remaining)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "lg",
							onClick: checkIn,
							children: "I am safe"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-4 gap-2",
						children: WALK_MINUTES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => startWalk(m),
							className: "px-0",
							children: [m, "m"]
						}, m))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-sans text-xs leading-relaxed text-subtle",
						children: "Trusted-contact check-ins are not in this version. The timer cannot reach anyone but you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { children: "This is a local phone alarm only. It is not emergency monitoring." })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg text-fg",
						children: "Community safety resources"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-sans text-sm text-muted",
						children: "People and desks whose work is response and care. Confirm hours on their sites."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-col gap-2",
						children: CHICAGO.filter((r) => r.kind === "safety" || r.kind === "health" || r.kind === "aid").map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: r.href,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-start justify-between gap-3 rounded-lg bg-raised px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-sans text-sm font-medium text-fg",
										children: r.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block font-sans text-sm leading-relaxed text-muted",
										children: r.blurb
									}),
									r.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block font-sans text-xs tabular-nums text-subtle",
										children: r.phone
									}) : null
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-0.5 size-4 shrink-0 text-muted" })]
						}) }, r.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { children: "Public organization sites. This app does not send them your note." })
					})
				]
			})
		]
	});
}
function formatRemain(ms) {
	const total = Math.ceil(ms / 1e3);
	const m = Math.floor(total / 60);
	const s = total % 60;
	return `${m}:${String(s).padStart(2, "0")}`;
}
var READINGS = [
	{
		id: "psalm-27",
		hebrew: "ה׳ אוֹרִי וְיִשְׁעִי מִמִּי אִירָא. ה׳ מָעוֹז חַיַּי מִמִּי אֶפְחָד.",
		english: "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?",
		source: "Psalm 27:1"
	},
	{
		id: "psalm-121",
		hebrew: "אֶשָּׂא עֵינַי אֶל הֶהָרִים מֵאַיִן יָבֹא עֶזְרִי. עֶזְרִי מֵעִם ה׳ עֹשֵׂה שָׁמַיִם וָאָרֶץ.",
		english: "I lift up my eyes to the mountains: from where will my help come? My help comes from the Lord, maker of heaven and earth.",
		source: "Psalm 121:1–2"
	},
	{
		id: "psalm-23",
		hebrew: "גַּם כִּי אֵלֵךְ בְּגֵיא צַלְמָוֶת לֹא אִירָא רָע כִּי אַתָּה עִמָּדִי.",
		english: "Though I walk through a valley of deep darkness, I will fear no evil, for You are with me.",
		source: "Psalm 23:4"
	},
	{
		id: "psalm-46",
		hebrew: "אֱלֹהִים לָנוּ מַחֲסֶה וָעֹז עֶזְרָה בְצָרוֹת נִמְצָא מְאֹד.",
		english: "God is our refuge and strength, a very present help in trouble.",
		source: "Psalm 46:2"
	},
	{
		id: "narrow-bridge",
		hebrew: "כָּל הָעוֹלָם כֻּלּוֹ גֶּשֶׁר צַר מְאֹד, וְהָעִיקָר לֹא לְפַחֵד כְּלָל.",
		english: "The whole world is a very narrow bridge, and the main thing is not to fear at all.",
		source: "Rebbe Nachman of Breslov"
	},
	{
		id: "hillel",
		hebrew: "אִם אֵין אֲנִי לִי, מִי לִי. וּכְשֶׁאֲנִי לְעַצְמִי, מָה אֲנִי. וְאִם לֹא עַכְשָׁיו, אֵימָתַי.",
		english: "If I am not for myself, who will be for me? When I am only for myself, what am I? And if not now, when?",
		source: "Hillel, Pirkei Avot 1:14"
	},
	{
		id: "sanhedrin",
		hebrew: "כָּל הַמְקַיֵּם נֶפֶשׁ אַחַת, מַעֲלִין עָלָיו כְּאִלּוּ קִיֵּם עוֹלָם מָלֵא.",
		english: "Whoever saves a single life is considered to have saved an entire world.",
		source: "Mishnah Sanhedrin 4:5"
	},
	{
		id: "devarim",
		hebrew: "חִזְקוּ וְאִמְצוּ, אַל תִּירְאוּ וְאַל תַּעַרְצוּ.",
		english: "Be strong and courageous. Do not fear and do not be dismayed.",
		source: "Deuteronomy 31:6"
	}
];
function readingForDay(absDay, psalm27Season) {
	const raw = psalm27Season ? READINGS[0] : READINGS.slice(1)[Math.abs(absDay) % (READINGS.length - 1)];
	return {
		...raw,
		hebrew: withoutNikkud(raw.hebrew)
	};
}
function SavedView() {
	const favorites = useAppStore((s) => s.favorites);
	const setOverlay = useAppStore((s) => s.setOverlay);
	const setTab = useAppStore((s) => s.setTab);
	const toggle = useAppStore((s) => s.toggleFavorite);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		title: "Saved",
		onClose: () => setOverlay(null),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-4 font-sans text-sm leading-relaxed text-muted",
			children: "Kept on this device. Not an account. Open a prayer, a reading, or a door you want to find again."
		}), favorites.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "rounded-xl bg-surface px-4 py-4 font-sans text-sm text-muted shadow-[var(--shadow-border)]",
			children: "Nothing saved yet. Use the bookmark on a prayer, a reading, or a community listing."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-2",
			children: favorites.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl bg-surface px-4 py-3 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg text-fg",
						children: f.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-sans text-sm text-muted",
						children: f.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "font-sans text-sm font-medium text-fg underline decoration-border underline-offset-4",
							onClick: () => {
								if (f.kind === "prayer") setTab("prayers");
								else if (f.kind === "resource") setTab("places");
								else setTab("today");
							},
							children: "Open"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "font-sans text-sm text-muted",
							onClick: () => toggle(f),
							children: "Remove"
						})]
					})
				]
			}, f.id))
		})]
	});
}
function Credit({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: className ?? "font-sans text-xs text-subtle",
		children: "© 2026 Anna Rae Gilbert"
	});
}
function SettingsView() {
	const setOverlay = useAppStore((s) => s.setOverlay);
	const notify = useAppStore((s) => s.notify);
	const setNotify = useAppStore((s) => s.setNotify);
	const [perm, setPerm] = (0, import_react.useState)(() => notificationsSupported() ? Notification.permission : "unsupported");
	async function enable(key, on) {
		if (on && notificationsSupported() && Notification.permission === "default") {
			const next = await Notification.requestPermission();
			setPerm(next);
		}
		setNotify(key, on);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		title: "Reminders",
		onClose: () => setOverlay(null),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 font-sans text-sm leading-relaxed text-muted",
				children: "These can only appear while this app is open on this phone. We cannot send alerts after you leave, and we do not watch you in the background."
			}),
			!notificationsSupported() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 rounded-xl bg-surface px-4 py-3 font-sans text-sm text-muted shadow-[var(--shadow-border)]",
				children: "This browser does not offer notifications."
			}) : perm === "denied" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 rounded-xl bg-surface px-4 py-3 font-sans text-sm text-muted shadow-[var(--shadow-border)]",
				children: "Notifications are blocked in this browser. You can still save your preferences for later."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-2",
				children: NOTIFY_COPY.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-3 rounded-xl bg-surface px-4 py-3 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-sans text-sm text-fg",
						children: item.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block font-sans text-xs text-muted",
						children: item.hint
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "switch",
						"aria-checked": notify[item.key],
						onClick: () => void enable(item.key, !notify[item.key]),
						className: notify[item.key] ? "h-7 w-12 rounded-full bg-accent" : "h-7 w-12 rounded-full bg-raised shadow-[var(--shadow-border)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: notify[item.key] ? "ml-6 block size-5 rounded-full bg-accent-fg" : "ml-1 block size-5 rounded-full bg-muted" })
					})]
				}, item.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg text-fg",
						children: "Sources"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { children: HEBCAL_SOURCE }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { children: "Prayer texts follow common siddur use. Ashkenazi, Sephardi, Israeli, and diaspora customs differ. This is not a posek." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { children: "Translations are educational English, not a new revelation of the Hebrew." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { children: "Tehillim and daily readings follow the Masoretic text as commonly printed. Psalm 27 is widespread from Elul through Sukkot." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { children: "Holiday and custom notes use language of “many communities” because minhag differs." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { children: "Community links are public institution sites, never private homes." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { children: "Safety tools stay on this device. Reporting links go to each organization, not through this app." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Credit, { className: "pt-4 font-sans text-xs text-subtle" })
				]
			})
		]
	});
}
function HolidayBanners({ announcements }) {
	if (announcements.length === 0) return null;
	const [hero, ...rest] = announcements;
	const more = rest.slice(0, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-xl bg-raised px-5 py-5 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-medium tracking-widest text-muted uppercase",
					children: hero.daysUntil <= 0 ? "Today" : "Coming"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-2xl leading-tight text-fg",
					children: hero.greeting
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-base text-muted",
					children: hero.titles.join(" · ")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-sans text-sm leading-relaxed text-fg",
					children: hero.note
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 font-sans text-sm tabular-nums text-subtle",
					children: [
						hero.when,
						" · ",
						prettyIsoDate(hero.isoDate)
					]
				})
			]
		}), more.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
			className: cn("rounded-xl bg-surface px-5 py-4 shadow-[var(--shadow-border)]"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg leading-snug text-fg",
						children: a.greeting
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-sans text-sm text-muted",
						children: a.titles.join(" · ")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "shrink-0 font-sans text-xs tabular-nums text-subtle",
					children: [a.when, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-right",
						children: prettyIsoDate(a.isoDate)
					})]
				})]
			})
		}, a.id))]
	});
}
var MOTION = {
	weekday: {
		sway: 4.6,
		speed: 1,
		flicker: 1,
		lift: 2.2
	},
	elul: {
		sway: 3.2,
		speed: .78,
		flicker: .7,
		lift: 1.4
	},
	shabbat: {
		sway: 2.8,
		speed: .72,
		flicker: .55,
		lift: 1.2
	},
	"rosh-hashanah": {
		sway: 3.4,
		speed: .82,
		flicker: .75,
		lift: 1.6
	},
	"yom-kippur": {
		sway: 1.4,
		speed: .48,
		flicker: .35,
		lift: .6
	},
	sukkot: {
		sway: 5.2,
		speed: 1.05,
		flicker: 1.05,
		lift: 2.4
	},
	chanukah: {
		sway: 5.6,
		speed: 1.22,
		flicker: 1.45,
		lift: 2.6
	},
	purim: {
		sway: 6.4,
		speed: 1.35,
		flicker: 1.6,
		lift: 3
	},
	pesach: {
		sway: 3.6,
		speed: .88,
		flicker: .8,
		lift: 1.6
	},
	shavuot: {
		sway: 3,
		speed: .8,
		flicker: .65,
		lift: 1.3
	}
};
function Flame({ mood = "weekday" }) {
	const motionRef = (0, import_react.useRef)(null);
	const bloomRef = (0, import_react.useRef)(null);
	const tightRef = (0, import_react.useRef)(null);
	const bodyRef = (0, import_react.useRef)(null);
	const brightRef = (0, import_react.useRef)(null);
	const hotRef = (0, import_react.useRef)(null);
	const embersRef = (0, import_react.useRef)([
		null,
		null,
		null
	]);
	(0, import_react.useEffect)(() => {
		const motion = motionRef.current;
		if (!motion) return;
		const m = MOTION[mood];
		let raf = 0;
		const t0 = performance.now();
		const phases = [
			0,
			.85,
			1.7
		];
		const tick = (now) => {
			const t = (now - t0) / 1e3 * m.speed;
			const sway = Math.sin(t * 2.05) * m.sway + Math.sin(t * 3.35) * (m.sway * .37);
			const stretch = 1 + Math.sin(t * 2.55) * (.05 * m.flicker) + Math.sin(t * 5.05) * (.018 * m.flicker);
			const lift = Math.sin(t * 2.15) * m.lift;
			motion.style.transform = `rotate(${sway}deg) translateY(${lift}px) scaleY(${stretch})`;
			if (bloomRef.current) bloomRef.current.style.opacity = String(.72 + Math.sin(t * 1.9) * .28);
			if (tightRef.current) tightRef.current.style.opacity = String(.55 + Math.sin(t * 2.8) * .35);
			if (bodyRef.current) {
				const sx = 1 + Math.sin(t * 3.2) * (.06 * m.flicker);
				const sy = 1 + Math.sin(t * 2.7) * (.05 * m.flicker);
				bodyRef.current.style.transform = `translateX(-50%) scale(${sx}, ${sy})`;
			}
			if (brightRef.current) {
				const sx = 1 + Math.sin(t * 4.1) * (.1 * m.flicker);
				const sy = 1 + Math.sin(t * 3.6) * (.12 * m.flicker);
				brightRef.current.style.transform = `translateX(-50%) scale(${sx}, ${sy})`;
			}
			if (hotRef.current) {
				const s = 1 + Math.sin(t * 5.4) * (.16 * m.flicker);
				hotRef.current.style.transform = `translateX(-50%) scale(${s})`;
				hotRef.current.style.opacity = String(.78 + Math.sin(t * 6.1) * .22);
			}
			embersRef.current.forEach((el, i) => {
				if (!el) return;
				const cycle = 2.5 / Math.max(.55, m.speed);
				const p = (t + phases[i]) % cycle / cycle;
				el.style.opacity = p < .12 ? String(p / .12 * .95) : String(Math.max(0, 1.02 - p) * .85);
				el.style.transform = `translate(-50%, ${-p * 56}px) scale(${1 - p * .7})`;
			});
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [mood]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lamp",
		"data-mood": mood,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lamp-bloom",
				ref: bloomRef
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lamp-bloom lamp-bloom-tight",
				ref: tightRef
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lamp-motion",
				ref: motionRef,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "lamp-orb lamp-aura" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lamp-orb lamp-body",
						ref: bodyRef
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lamp-orb lamp-bright",
						ref: brightRef
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "lamp-orb lamp-pool" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lamp-orb lamp-hot",
						ref: hotRef
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "lamp-ember lamp-ember-a",
						ref: (el) => {
							embersRef.current[0] = el;
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "lamp-ember lamp-ember-b",
						ref: (el) => {
							embersRef.current[1] = el;
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "lamp-ember lamp-ember-c",
						ref: (el) => {
							embersRef.current[2] = el;
						}
					})
				]
			})
		]
	});
}
function TodayView({ city, info, now }) {
	const setTab = useAppStore((s) => s.setTab);
	const setOverlay = useAppStore((s) => s.setOverlay);
	const reading = readingForDay(info.absDay, info.psalm27Season);
	const marker = info.isShabbat ? info.nextHavdalah : info.nextCandles;
	const meaning = whyToday(info);
	const prayer = prayerById(suggestedPrayerId(info));
	const life = todayInJewishLife(info);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-lg flex-col gap-6 px-5 pb-8 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center pt-2 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { mood: info.mood }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-sm text-muted",
						lang: "he",
						children: "נר תמיד"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-3xl leading-tight text-fg",
						dir: "rtl",
						lang: "he",
						children: info.hebrewHe
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-lg text-muted",
						children: info.hebrewEn
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-sans text-sm text-subtle",
						children: [info.gregorianEn, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-subtle",
							children: [" · ", city.name]
						})]
					}),
					info.seasonNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-base italic text-fg",
						children: info.seasonNote
					}) : null
				]
			}),
			life.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface px-5 py-5 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-sans text-xs font-medium tracking-widest text-muted uppercase",
					children: "Today in Jewish life"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-col gap-4",
					children: life.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg text-fg",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-sans text-sm leading-relaxed text-muted",
						children: item.body
					})] }, item.id))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HolidayBanners, { announcements: info.announcements }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface px-5 py-4 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs font-medium tracking-widest text-muted uppercase",
						children: info.isShabbat ? "Havdalah" : "Next candles"
					}),
					marker ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-2xl text-fg",
						children: marker.timeLabel ?? marker.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-sans text-sm text-muted",
						children: [info.isShabbat ? "Saturday" : marker.weekday, marker.at ? ` · ${formatUntil(marker.at, now)}` : null]
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-sans text-sm text-muted",
						children: "Times will appear for this city."
					}),
					info.parsha ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 font-display text-base text-fg",
						children: ["Parashat ", info.parsha]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOverlay("calendar"),
						className: "mt-3 font-sans text-sm font-medium text-fg underline decoration-border underline-offset-4",
						children: "This week’s calendar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { children: HEBCAL_SOURCE })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-surface px-5 py-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs font-medium tracking-widest text-muted uppercase",
						children: meaning.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-sans text-sm leading-relaxed text-fg",
						children: meaning.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { children: meaning.source })
					})
				]
			}),
			prayer ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setTab("prayers"),
				className: "rounded-xl bg-surface px-5 py-4 text-left shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs font-medium tracking-widest text-muted uppercase",
						children: "A blessing for today"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-lg text-fg",
						children: prayer.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-sans text-sm leading-relaxed text-muted",
						children: [prayer.when.split(".")[0], "."]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-surface px-5 py-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-xs font-medium tracking-widest text-muted uppercase",
							children: "Today’s reading"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveButton, { item: {
							id: `reading:${reading.id}`,
							kind: "reading",
							title: reading.source,
							subtitle: reading.english
						} })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-xl leading-snug text-fg",
						dir: "rtl",
						lang: "he",
						children: reading.hebrew
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-sans text-base leading-relaxed text-fg",
						children: reading.english
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { children: `${reading.source}. Tehillim text as commonly printed.` })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTab("play"),
						className: "mt-4 font-sans text-sm font-medium text-fg underline decoration-border underline-offset-4",
						children: "Play today’s Tehillah"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setTab("safety"),
				className: "rounded-xl bg-raised px-5 py-4 text-left shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg text-fg",
					children: "If you were targeted"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-sans text-sm leading-relaxed text-muted",
					children: "Report Jew-hate to the Chicago Jewish Alliance. If it is a genuine emergency, call 911."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Credit, { className: "pt-2 text-center font-sans text-xs text-subtle" })
		]
	});
}
var ctx = null;
var timer = null;
function context() {
	const Ctor = window.AudioContext || window.webkitAudioContext;
	if (!Ctor) return null;
	if (!ctx) ctx = new Ctor();
	return ctx;
}
function beep() {
	const audio = context();
	if (!audio) return;
	audio.resume();
	const osc = audio.createOscillator();
	const gain = audio.createGain();
	osc.type = "sine";
	osc.frequency.value = 880;
	gain.gain.value = 1e-4;
	osc.connect(gain);
	gain.connect(audio.destination);
	const now = audio.currentTime;
	gain.gain.setValueAtTime(1e-4, now);
	gain.gain.exponentialRampToValueAtTime(.12, now + .02);
	gain.gain.exponentialRampToValueAtTime(1e-4, now + .28);
	osc.start(now);
	osc.stop(now + .3);
}
function startAlarm() {
	if (timer != null) return;
	beep();
	timer = window.setInterval(beep, 900);
}
function stopAlarm() {
	if (timer != null) {
		window.clearInterval(timer);
		timer = null;
	}
}
function WalkAlarm() {
	const alarming = useAppStore((s) => s.alarming);
	const checkIn = useAppStore((s) => s.checkIn);
	(0, import_react.useEffect)(() => {
		if (!alarming) {
			stopAlarm();
			return;
		}
		startAlarm();
		return () => stopAlarm();
	}, [alarming]);
	if (!alarming) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center bg-bg/90 p-5 sm:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-xl bg-surface px-5 py-6 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-medium tracking-widest text-muted uppercase",
					children: "Walk timer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl text-fg",
					children: "Check in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-sans text-sm leading-relaxed text-muted",
					children: "The time you set has ended. This alarm is only on this phone."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						size: "lg",
						onClick: checkIn,
						children: "I am safe"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "danger",
						size: "lg",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:911",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), "Call 911"]
						})
					})]
				})
			]
		})
	});
}
var TABS = [
	{
		id: "today",
		label: "Today",
		icon: FlameKindling
	},
	{
		id: "play",
		label: "Play",
		icon: Puzzle
	},
	{
		id: "prayers",
		label: "Prayers",
		icon: BookOpen
	},
	{
		id: "safety",
		label: "Safety",
		icon: Shield
	},
	{
		id: "places",
		label: "Community",
		icon: Users
	}
];
function Home() {
	const tab = useAppStore((s) => s.tab);
	const setTab = useAppStore((s) => s.setTab);
	const overlay = useAppStore((s) => s.overlay);
	const setOverlay = useAppStore((s) => s.setOverlay);
	const cityId = useAppStore((s) => s.cityId);
	const hydrate = useAppStore((s) => s.hydrate);
	const tickWalk = useAppStore((s) => s.tickWalk);
	const [now, setNow] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	const [infoNow, setInfoNow] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	const [cityOpen, setCityOpen] = (0, import_react.useState)(false);
	const city = cityById(cityId);
	const info = (0, import_react.useMemo)(() => getDayInfo(city, infoNow), [city, infoNow]);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		setInfoNow(/* @__PURE__ */ new Date());
	}, [city.id]);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			const next = /* @__PURE__ */ new Date();
			setNow(next);
			tickWalk(next.getTime());
		}, 1e3);
		const slow = window.setInterval(() => setInfoNow(/* @__PURE__ */ new Date()), 3e4);
		return () => {
			window.clearInterval(id);
			window.clearInterval(slow);
		};
	}, [tickWalk]);
	useLocalReminders(info);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-dvh justify-center bg-bg text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-dvh w-full max-w-lg flex-col overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center justify-between gap-3 px-5 pt-[max(1rem,env(safe-area-inset-top))] pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl leading-none text-fg",
							children: "Ner Tamid"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-xs italic text-muted",
							children: "Forever Light"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setOverlay(overlay === "saved" ? null : "saved"),
								"aria-label": "Saved",
								className: "inline-flex size-10 items-center justify-center rounded-md text-muted hover:bg-raised hover:text-fg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setOverlay(overlay === "settings" ? null : "settings"),
								"aria-label": "Reminders",
								className: "inline-flex size-10 items-center justify-center rounded-md text-muted hover:bg-raised hover:text-fg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityPicker, {
								open: cityOpen,
								onOpenChange: setCityOpen
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "min-h-0 flex-1 overflow-y-auto",
					children: [
						overlay === "calendar" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarView, {
							city,
							info
						}) : null,
						overlay === "saved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavedView, {}) : null,
						overlay === "settings" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsView, {}) : null,
						overlay === null && tab === "today" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodayView, {
							city,
							info,
							now
						}) : null,
						overlay === null && tab === "play" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayView, { absDay: info.absDay }) : null,
						overlay === null && tab === "prayers" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrayersView, { info }) : null,
						overlay === null && tab === "safety" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafetyView, { now }) : null,
						overlay === null && tab === "places" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlacesView, { city }) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary",
					className: "grid grid-cols-5 border-t border-border bg-bg pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1",
					children: TABS.map((t) => {
						const active = overlay === null && tab === t.id;
						const Icon = t.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setTab(t.id),
							className: cn("flex h-14 flex-col items-center justify-center gap-1 font-sans text-xs", active ? "text-fg" : "text-subtle"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								strokeWidth: active ? 2.2 : 1.8
							}), t.label]
						}, t.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalkAlarm, {})
			]
		})
	});
}
function useLocalReminders(info) {
	const notify = useAppStore((s) => s.notify);
	const fired = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	(0, import_react.useEffect)(() => {
		if (!notificationsSupported() || Notification.permission !== "granted") return;
		const now = Date.now();
		const mark = (id, body) => {
			const key = `${info.todayIso}:${id}`;
			if (fired.current.has(key)) return;
			fired.current.add(key);
			try {
				new Notification("Ner Tamid", {
					body,
					silent: true
				});
			} catch {}
		};
		if (notify.candles && info.nextCandles?.at) {
			const ms = info.nextCandles.at - now;
			if (ms > 0 && ms <= 36e5) mark("candles", `Candle lighting ${info.nextCandles.timeLabel ?? "soon"}`);
		}
		if (notify.holiday && info.announcements[0] && info.announcements[0].daysUntil <= 1) mark("holiday", `${info.announcements[0].greeting}. ${info.announcements[0].when}.`);
		if (notify.roshChodesh && info.isRoshChodesh && info.roshChodeshTitle) mark("rc", info.roshChodeshTitle);
		if (notify.omer && info.omer) mark("omer", info.omer.title);
		if (notify.tehillah) mark("tehillah", "Today’s Tehillah is ready.");
	}, [info, notify]);
}
//#endregion
export { Home as component };
