import type { DayInfo } from "@/lib/calendar";

export type WhyToday = {
  title: string;
  body: string;
  source: string;
};

export type LifeItem = {
  id: string;
  title: string;
  body: string;
};

export function todayInJewishLife(info: DayInfo): LifeItem[] {
  const items: LifeItem[] = [];
  const seen = new Set<string>();

  const push = (item: LifeItem) => {
    const key = item.title.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    items.push(item);
  };

  if (info.isRoshChodesh && info.roshChodeshTitle) {
    push({
      id: "rc",
      title: info.roshChodeshTitle,
      body: "The new month. Many communities add Hallel and Ya’aleh v’Yavo. Some treat it as a day of extra prayer or gathering.",
    });
  }
  if (info.omer) {
    push({
      id: "omer",
      title: info.omer.title,
      body: "Many count the Omer after nightfall, with a blessing if the count has not been missed. The count runs from Pesach toward Shavuot.",
    });
  }
  if (info.isFast && info.fastTitle) {
    push({
      id: "fast",
      title: info.fastTitle,
      body: "A fast day in many communities. Who fasts, and from when until when, depends on the day and on health. Do not fast if a doctor or your practice says not to.",
    });
  }
  if (info.specialShabbat) {
    push({
      id: "special",
      title: info.specialShabbat,
      body: "A special Shabbat in the yearly cycle. Many keep an extra reading or a particular mood of the day.",
    });
  }
  for (const title of info.holidaysToday) {
    if (/candle|havdalah|fast begins|fast ends/i.test(title)) continue;
    push({
      id: `h-${title}`,
      title,
      body: "Marked on the Jewish calendar today. Customs of how it is kept vary by community.",
    });
  }
  if (info.isShabbat && !info.specialShabbat) {
    push({
      id: "shabbat",
      title: "Shabbat",
      body: "The weekly stopping. Many light before sunset, make kiddush, rest, and close the day with havdalah.",
    });
  }
  return items;
}

export function whyToday(info: DayInfo): WhyToday {
  const blob = info.holidaysToday.join(" ").toLowerCase();

  if (/yom kippur/.test(blob)) {
    return {
      title: "Why today matters",
      body: "Yom Kippur is the Day of Atonement. Many fast, pray, and ask to be sealed for life. Customs of what is said, and who fasts, vary by community and health.",
      source: "Leviticus 16; 23:26–32. Local custom varies.",
    };
  }
  if (/rosh hashana/.test(blob)) {
    return {
      title: "Why today matters",
      body: "Rosh Hashanah is the Jewish new year and a day of remembering. Many hear the shofar and eat foods that speak a hope for sweetness. The greeting is Shana Tovah.",
      source: "Leviticus 23:23–25. Local custom varies.",
    };
  }
  if (/sukkot/.test(blob)) {
    return {
      title: "Why today matters",
      body: "Sukkot is the festival of booths. Many eat, and some sleep, under a sukkah. The four species are taken in many communities. Customs of how the sukkah is built vary.",
      source: "Leviticus 23:33–43. Local custom varies.",
    };
  }
  if (/simchat torah|shmini atzeret|shemini atzeret/.test(blob)) {
    return {
      title: "Why today matters",
      body: "The Torah cycle ends and begins again. Many dance with the scrolls. In the diaspora, Shemini Atzeret and Simchat Torah are often two days. In Israel they often fall together.",
      source: "Deuteronomy 31:10–13. Israel and diaspora calendars differ.",
    };
  }
  if (/chanukah|hanukkah/.test(blob)) {
    return {
      title: "Why today matters",
      body: "Chanukah remembers the rededication of the Temple. Many light the chanukiah after nightfall, adding one flame each night. Oil or wax, placement, and songs follow local custom.",
      source: "Shabbat 21b. Local custom varies.",
    };
  }
  if (/\bpurim\b/.test(blob)) {
    return {
      title: "Why today matters",
      body: "Purim remembers the story of Esther. Many hear the megillah, give gifts of food, give to the poor, and eat a festive meal. Walled cities may keep Shushan Purim the next day.",
      source: "Esther 9. Local custom varies.",
    };
  }
  if (/pesach|passover/.test(blob)) {
    return {
      title: "Why today matters",
      body: "Pesach remembers the going out from Egypt. Many eat matzah and tell the story at a seder. What is forbidden as chametz, and how many days are kept, differ in Israel and the diaspora.",
      source: "Exodus 12–13. Israel and diaspora calendars differ.",
    };
  }
  if (/shavuot/.test(blob)) {
    return {
      title: "Why today matters",
      body: "Shavuot remembers the giving of the Torah. Many stay up to learn. Dairy foods are a widespread custom, not a law. The date follows the counting of the Omer.",
      source: "Exodus 19–20; Leviticus 23:15–21. Local custom varies.",
    };
  }
  if (/selichot/.test(blob)) {
    return {
      title: "Why today matters",
      body: "Selichot are prayers of forgiveness. Ashkenazi communities often begin the Saturday night before Rosh Hashanah. Sephardi communities often say them through Elul. Customs vary.",
      source: "Traditional siddur. Ashkenazi and Sephardi custom differ.",
    };
  }
  if (info.isFast && info.fastTitle) {
    return {
      title: "Why today matters",
      body: `${info.fastTitle} is a fast day in many communities. Who fasts, and from when until when, depends on the day and on health. Do not fast if a doctor or your practice says not to.`,
      source: "Traditional calendar. Health comes first.",
    };
  }
  if (info.omer) {
    return {
      title: "Why today matters",
      body: `Today is ${info.omer.title}. Many count the Omer each night after dark, with a blessing if the count has not been missed. The count runs from Pesach toward Shavuot.`,
      source: "Leviticus 23:15–16. Nightfall begins the next count in many communities.",
    };
  }
  if (info.isRoshChodesh && info.roshChodeshTitle) {
    return {
      title: "Why today matters",
      body: `${info.roshChodeshTitle} marks the new month. Hallel and Ya’aleh v’Yavo are added in many communities. Some keep it as a day of extra prayer, rest, or gathering.`,
      source: "Numbers 28:11–15. Local custom varies.",
    };
  }
  if (info.specialShabbat) {
    return {
      title: "Why today matters",
      body: `${info.specialShabbat} is a special Shabbat in the yearly cycle. An extra reading or a particular mood of the day is kept in many communities.`,
      source: "Traditional Torah cycle. Local custom varies.",
    };
  }
  if (info.isShabbat) {
    return {
      title: "Why today matters",
      body: "Shabbat is a weekly stopping. Many light candles before sunset, make kiddush, eat, rest, and close the day with havdalah. What is refrained from, and how the table looks, follow community custom.",
      source: "Exodus 20:8–11. Local custom varies.",
    };
  }
  if (info.month === 6) {
    return {
      title: "Why today matters",
      body: "Elul is the month of return. Many hear the shofar on weekdays, recite Psalm 27, and look toward Rosh Hashanah. It is a season of repair, not of panic.",
      source: "Traditional Elul practice. Psalm 27 is widespread from Elul through Sukkot.",
    };
  }
  if (info.month === 7 && info.day <= 21) {
    return {
      title: "Why today matters",
      body: "These are the Days of Awe and the days that follow them. Many add Avinu Malkeinu and Psalm 27. The work of return does not end at ne’ilah.",
      source: "Traditional High Holy Day cycle. Local custom varies.",
    };
  }
  return {
    title: "Why today matters",
    body: "An ordinary Jewish day still has a date, a time to light, and a verse. The calendar is a way of standing still for a moment before the next thing.",
    source: "Jewish calendar via Hebcal.",
  };
}

export function momentPrayer(info: DayInfo, nowMs: number): { id: string; label: string; cue: string } | null {
  const blob = info.holidaysToday.join(" ").toLowerCase();
  const hoursUntil = (at: number | null | undefined) => (at ? (at - nowMs) / 3_600_000 : Number.POSITIVE_INFINITY);
  const hoursSince = (at: number | null | undefined) => (at ? (nowMs - at) / 3_600_000 : Number.POSITIVE_INFINITY);

  const untilHavdalah = hoursUntil(info.nextHavdalah?.at);
  const sinceHavdalah = hoursSince(info.lastHavdalah?.at);
  if ((info.isShabbat && untilHavdalah <= 1.5 && untilHavdalah > 0) || (!info.isShabbat && sinceHavdalah >= 0 && sinceHavdalah <= 3)) {
    return {
      id: "havdalah",
      label: untilHavdalah > 0 ? "Toward Havdalah" : "After nightfall",
      cue: "Do not begin until Shabbat has ended in your location. Wine, spices, and a multi-wick flame in many homes.",
    };
  }

  const untilCandles = hoursUntil(info.nextCandles?.at);
  if (!info.isShabbat && info.nextCandles?.at && untilCandles <= 6 && untilCandles > -0.2) {
    const friday = info.nextCandles.weekday === "Friday";
    const festivalEve = /sukkot|pesach|passover|shavuot|rosh hashana|chanukah/.test(blob);
    if (friday || festivalEve) {
      return {
        id: "candles",
        label: untilCandles > 0 ? "Before candles" : "Time to light",
        cue: friday
          ? "Many light, cover the eyes, then say the blessing."
          : "Festival lighting uses “ner shel yom tov” in many communities, and Shehecheyanu is often added.",
      };
    }
  }

  if (info.isShabbat && info.lastCandles?.at && hoursSince(info.lastCandles.at) < 5) {
    return {
      id: "kiddush",
      label: "Friday night",
      cue: "Over wine or grape juice, before the meal. Many say Vayechulu first.",
    };
  }

  if (/rosh hashana|sukkot|pesach|passover|shavuot|simchat|shemini atzeret|chanukah|purim/.test(blob) && !/yom kippur/.test(blob)) {
    return {
      id: "shehecheyanu",
      label: "For this day",
      cue: "Said at the start of a festival, and on other firsts. Not typically said on Yom Kippur. Customs vary.",
    };
  }

  if (info.omer) {
    return {
      id: "omer",
      label: "The Omer",
      cue: `${info.omer.title}. Many count after nightfall, with a blessing if the count has not been missed.`,
    };
  }

  return null;
}

export function suggestedPrayerId(info: DayInfo, nowMs = Date.now()): string {
  return momentPrayer(info, nowMs)?.id ?? "modeh-ani";
}
