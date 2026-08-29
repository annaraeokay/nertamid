const MONTHS: Record<number, { he: string; en: string; body: string; source: string }> = {
  1: {
    he: "ניסן",
    en: "Nisan",
    body: "Nisan is the first month in the Torah’s count, the month of going out from Egypt. Pesach falls here. Spring, in the land of Israel, is the season it names.",
    source: "Exodus 12:2; Leviticus 23:5.",
  },
  2: {
    he: "אייר",
    en: "Iyar",
    body: "Iyar sits between Pesach and Shavuot. The Omer is counted through it. Lag BaOmer falls here. Some keep it as a quieter stretch of the journey toward Torah.",
    source: "Leviticus 23:15–16. Traditional Omer count.",
  },
  3: {
    he: "סיון",
    en: "Sivan",
    body: "Sivan is the month of Shavuot, the giving of the Torah and the wheat harvest. The Omer ends here.",
    source: "Exodus 19; Leviticus 23:15–21.",
  },
  4: {
    he: "תמוז",
    en: "Tammuz",
    body: "Tammuz turns toward the fast of the Seventeenth, and the Three Weeks of mourning that run toward Tisha B’Av. The days grow long. The season is one of memory.",
    source: "Traditional fast calendar. II Kings 25.",
  },
  5: {
    he: "אב",
    en: "Av",
    body: "Av holds Tisha B’Av, the day the Temples were destroyed. After the fast, many communities let consolation begin. Tu B’Av is a later, quieter joy in some customs.",
    source: "Traditional fast calendar. II Kings 25.",
  },
  6: {
    he: "אלול",
    en: "Elul",
    body: "Elul is the month of return. Many hear the shofar on weekdays, recite Psalm 27, and look toward Rosh Hashanah. It is a season of repair, not of panic. The letters of Elul are read by some as “I am my beloved’s, and my beloved is mine.”",
    source: "Traditional Elul practice. Song of Songs 6:3 is a later reading of the name.",
  },
  7: {
    he: "תשרי",
    en: "Tishrei",
    body: "Tishrei holds the Days of Awe, Sukkot, Shemini Atzeret and Simchat Torah. The year is named from here in ordinary speech, though the Torah counts from Nisan.",
    source: "Leviticus 23. Traditional calendar.",
  },
  8: {
    he: "חשון",
    en: "Cheshvan",
    body: "Cheshvan, sometimes called Marcheshvan, has no festival. After the density of Tishrei, the year grows ordinary again. Rain is asked for in the land of Israel.",
    source: "Traditional calendar. Prayer for rain begins at this season.",
  },
  9: {
    he: "כסלו",
    en: "Kislev",
    body: "Kislev is the month of Chanukah, the festival of lights, beginning on the twenty-fifth. The days are short. A little light is the work of the month.",
    source: "Shabbat 21b. Traditional calendar.",
  },
  10: {
    he: "טבת",
    en: "Tevet",
    body: "Tevet holds the end of Chanukah and the fast of the Tenth of Tevet. Winter is deep. The year is still young.",
    source: "Traditional fast calendar.",
  },
  11: {
    he: "שבט",
    en: "Shevat",
    body: "Shevat holds Tu BiShvat, the new year for trees in rabbinic law. Fruit, and care for the land, are later customs bound to this day.",
    source: "Rosh Hashanah 2a.",
  },
  12: {
    he: "אדר",
    en: "Adar",
    body: "Adar is the month of Purim. The saying is that when Adar enters, joy increases. In a leap year there are two Adars, and Purim falls in Adar II.",
    source: "Esther 9. Ta’anit 29a.",
  },
  13: {
    he: "אדר ב׳",
    en: "Adar II",
    body: "In a leap year a second Adar is added so Pesach stays in the spring. Purim is kept in Adar II. Adar I is quieter.",
    source: "Traditional leap-year calendar. Esther 9.",
  },
};

export function monthGuide(month: number): { he: string; en: string; body: string; source: string } | null {
  return MONTHS[month] ?? null;
}
