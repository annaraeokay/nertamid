import { withoutNikkud } from "@/lib/hebrew";

export type Reading = {
  id: string;
  hebrew: string;
  english: string;
  source: string;
};

export const READINGS: Reading[] = [
  {
    id: "psalm-27",
    hebrew: "ה׳ אוֹרִי וְיִשְׁעִי מִמִּי אִירָא. ה׳ מָעוֹז חַיַּי מִמִּי אֶפְחָד.",
    english: "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?",
    source: "Psalm 27:1",
  },
  {
    id: "psalm-121",
    hebrew: "אֶשָּׂא עֵינַי אֶל הֶהָרִים מֵאַיִן יָבֹא עֶזְרִי. עֶזְרִי מֵעִם ה׳ עֹשֵׂה שָׁמַיִם וָאָרֶץ.",
    english: "I lift up my eyes to the mountains: from where will my help come? My help comes from the Lord, maker of heaven and earth.",
    source: "Psalm 121:1–2",
  },
  {
    id: "psalm-23",
    hebrew: "גַּם כִּי אֵלֵךְ בְּגֵיא צַלְמָוֶת לֹא אִירָא רָע כִּי אַתָּה עִמָּדִי.",
    english: "Though I walk through a valley of deep darkness, I will fear no evil, for You are with me.",
    source: "Psalm 23:4",
  },
  {
    id: "psalm-46",
    hebrew: "אֱלֹהִים לָנוּ מַחֲסֶה וָעֹז עֶזְרָה בְצָרוֹת נִמְצָא מְאֹד.",
    english: "God is our refuge and strength, a very present help in trouble.",
    source: "Psalm 46:2",
  },
  {
    id: "narrow-bridge",
    hebrew: "כָּל הָעוֹלָם כֻּלּוֹ גֶּשֶׁר צַר מְאֹד, וְהָעִיקָר לֹא לְפַחֵד כְּלָל.",
    english: "The whole world is a very narrow bridge, and the main thing is not to fear at all.",
    source: "Rebbe Nachman of Breslov",
  },
  {
    id: "hillel",
    hebrew: "אִם אֵין אֲנִי לִי, מִי לִי. וּכְשֶׁאֲנִי לְעַצְמִי, מָה אֲנִי. וְאִם לֹא עַכְשָׁיו, אֵימָתַי.",
    english: "If I am not for myself, who will be for me? When I am only for myself, what am I? And if not now, when?",
    source: "Hillel, Pirkei Avot 1:14",
  },
  {
    id: "sanhedrin",
    hebrew: "כָּל הַמְקַיֵּם נֶפֶשׁ אַחַת, מַעֲלִין עָלָיו כְּאִלּוּ קִיֵּם עוֹלָם מָלֵא.",
    english: "Whoever saves a single life is considered to have saved an entire world.",
    source: "Mishnah Sanhedrin 4:5",
  },
  {
    id: "devarim",
    hebrew: "חִזְקוּ וְאִמְצוּ, אַל תִּירְאוּ וְאַל תַּעַרְצוּ.",
    english: "Be strong and courageous. Do not fear and do not be dismayed.",
    source: "Deuteronomy 31:6",
  },
];

export function readingForDay(absDay: number, psalm27Season: boolean): Reading {
  const raw = psalm27Season ? READINGS[0] : READINGS.slice(1)[Math.abs(absDay) % (READINGS.length - 1)];
  return { ...raw, hebrew: withoutNikkud(raw.hebrew) };
}
