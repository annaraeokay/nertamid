export type ParshaGuide = {
  summary: string;
  from: string;
  source: string;
  href: string;
};

const P: Record<string, ParshaGuide> = {
  bereshit: {
    summary: "Creation, the first human beings, the garden, and the first violence. The world is spoken into being, and then it is given into human hands.",
    from: "Genesis 1:1–6:8",
    source: "Genesis 1:1–6:8.",
    href: "https://www.sefaria.org/Genesis.1.1",
  },
  noach: {
    summary: "The flood, the ark, the covenant of the rainbow, and the tower of Babel. A world washed, and a promise not to destroy it that way again.",
    from: "Genesis 6:9–11:32",
    source: "Genesis 6:9–11:32.",
    href: "https://www.sefaria.org/Genesis.6.9",
  },
  lech: {
    summary: "Abram is told to go. He leaves his land. The first promises of people and land are spoken.",
    from: "Genesis 12:1–17:27",
    source: "Genesis 12:1–17:27.",
    href: "https://www.sefaria.org/Genesis.12.1",
  },
  "lech-lecha": {
    summary: "Abram is told to go. He leaves his land. The first promises of people and land are spoken.",
    from: "Genesis 12:1–17:27",
    source: "Genesis 12:1–17:27.",
    href: "https://www.sefaria.org/Genesis.12.1",
  },
  vayera: {
    summary: "Visitors, the promise of a son, Sodom, and the binding of Isaac. Hospitality and a terrible test sit in the same portion.",
    from: "Genesis 18:1–22:24",
    source: "Genesis 18:1–22:24.",
    href: "https://www.sefaria.org/Genesis.18.1",
  },
  chayei: {
    summary: "Sarah dies. Abraham buys a burial place. Isaac is brought a wife, Rebekah.",
    from: "Genesis 23:1–25:18",
    source: "Genesis 23:1–25:18.",
    href: "https://www.sefaria.org/Genesis.23.1",
  },
  "chayei sara": {
    summary: "Sarah dies. Abraham buys a burial place. Isaac is brought a wife, Rebekah.",
    from: "Genesis 23:1–25:18",
    source: "Genesis 23:1–25:18.",
    href: "https://www.sefaria.org/Genesis.23.1",
  },
  toldot: {
    summary: "Jacob and Esau. The birthright and the blessing. A family split that will take years to mend.",
    from: "Genesis 25:19–28:9",
    source: "Genesis 25:19–28:9.",
    href: "https://www.sefaria.org/Genesis.25.19",
  },
  vayetzei: {
    summary: "Jacob’s ladder, years in Laban’s house, Leah and Rachel, and the births of the tribes.",
    from: "Genesis 28:10–32:3",
    source: "Genesis 28:10–32:3.",
    href: "https://www.sefaria.org/Genesis.28.10",
  },
  vayishlach: {
    summary: "Jacob wrestles. He meets Esau. Dinah. A new name: Israel.",
    from: "Genesis 32:4–36:43",
    source: "Genesis 32:4–36:43.",
    href: "https://www.sefaria.org/Genesis.32.4",
  },
  vayeshev: {
    summary: "Joseph’s coat, the pit, and Egypt. Judah and Tamar. A story of being sold, and of remaining.",
    from: "Genesis 37:1–40:23",
    source: "Genesis 37:1–40:23.",
    href: "https://www.sefaria.org/Genesis.37.1",
  },
  miketz: {
    summary: "Pharaoh’s dreams. Joseph rises. The brothers come down to Egypt for grain.",
    from: "Genesis 41:1–44:17",
    source: "Genesis 41:1–44:17.",
    href: "https://www.sefaria.org/Genesis.41.1",
  },
  vayigash: {
    summary: "Judah steps forward. Joseph reveals himself. The family comes down to Goshen.",
    from: "Genesis 44:18–47:27",
    source: "Genesis 44:18–47:27.",
    href: "https://www.sefaria.org/Genesis.44.18",
  },
  vayechi: {
    summary: "Jacob blesses his sons and dies. Joseph’s last request: carry my bones up from here.",
    from: "Genesis 47:28–50:26",
    source: "Genesis 47:28–50:26.",
    href: "https://www.sefaria.org/Genesis.47.28",
  },
  shemot: {
    summary: "A new king. Moshe at the bush. “I will be what I will be.” The work of going out begins.",
    from: "Exodus 1:1–6:1",
    source: "Exodus 1:1–6:1.",
    href: "https://www.sefaria.org/Exodus.1.1",
  },
  vaera: {
    summary: "The plagues begin. Pharaoh’s heart. Signs in the land of Egypt.",
    from: "Exodus 6:2–9:35",
    source: "Exodus 6:2–9:35.",
    href: "https://www.sefaria.org/Exodus.6.2",
  },
  bo: {
    summary: "The last plagues. Pesach night. The people go out.",
    from: "Exodus 10:1–13:16",
    source: "Exodus 10:1–13:16.",
    href: "https://www.sefaria.org/Exodus.10.1",
  },
  beshalach: {
    summary: "The sea splits. Song. Manna. Amalek. A people learning how to walk free.",
    from: "Exodus 13:17–17:16",
    source: "Exodus 13:17–17:16.",
    href: "https://www.sefaria.org/Exodus.13.17",
  },
  yitro: {
    summary: "Jethro’s counsel. Sinai. The Ten Words.",
    from: "Exodus 18:1–20:23",
    source: "Exodus 18:1–20:23.",
    href: "https://www.sefaria.org/Exodus.18.1",
  },
  mishpatim: {
    summary: "Laws of a just society after Sinai: servants, injury, strangers, sabbath of the land.",
    from: "Exodus 21:1–24:18",
    source: "Exodus 21:1–24:18.",
    href: "https://www.sefaria.org/Exodus.21.1",
  },
  terumah: {
    summary: "Gifts for a sanctuary. The ark, the table, the lamp, so that God may dwell among them.",
    from: "Exodus 25:1–27:19",
    source: "Exodus 25:1–27:19.",
    href: "https://www.sefaria.org/Exodus.25.1",
  },
  tetzaveh: {
    summary: "The priestly garments and the ner tamid, the lamp that is to burn regularly.",
    from: "Exodus 27:20–30:10",
    source: "Exodus 27:20–30:10.",
    href: "https://www.sefaria.org/Exodus.27.20",
  },
  ki: {
    summary: "The golden calf, the broken tablets, and the second chance.",
    from: "Exodus 30:11–34:35",
    source: "Exodus 30:11–34:35.",
    href: "https://www.sefaria.org/Exodus.30.11",
  },
  "ki tisa": {
    summary: "The golden calf, the broken tablets, and the second chance.",
    from: "Exodus 30:11–34:35",
    source: "Exodus 30:11–34:35.",
    href: "https://www.sefaria.org/Exodus.30.11",
  },
  vayakhel: {
    summary: "The people build the mishkan. Shabbat is named again before the work.",
    from: "Exodus 35:1–38:20",
    source: "Exodus 35:1–38:20.",
    href: "https://www.sefaria.org/Exodus.35.1",
  },
  pekudei: {
    summary: "The work is finished. The cloud fills the mishkan.",
    from: "Exodus 38:21–40:38",
    source: "Exodus 38:21–40:38.",
    href: "https://www.sefaria.org/Exodus.38.21",
  },
  vayikra: {
    summary: "Leviticus opens with offerings: how a people draws near.",
    from: "Leviticus 1:1–5:26",
    source: "Leviticus 1:1–5:26.",
    href: "https://www.sefaria.org/Leviticus.1.1",
  },
  tzav: {
    summary: "Instructions to the priests. The fire on the altar is not to go out.",
    from: "Leviticus 6:1–8:36",
    source: "Leviticus 6:1–8:36.",
    href: "https://www.sefaria.org/Leviticus.6.1",
  },
  shemini: {
    summary: "The eighth day. Nadav and Avihu. Food that is permitted and food that is not.",
    from: "Leviticus 9:1–11:47",
    source: "Leviticus 9:1–11:47.",
    href: "https://www.sefaria.org/Leviticus.9.1",
  },
  tazria: {
    summary: "Birth, and the laws of tzara’at. The body and the camp.",
    from: "Leviticus 12:1–13:59",
    source: "Leviticus 12:1–13:59.",
    href: "https://www.sefaria.org/Leviticus.12.1",
  },
  metzora: {
    summary: "The return of the one who was sent out. Houses, too, can be afflicted and healed.",
    from: "Leviticus 14:1–15:33",
    source: "Leviticus 14:1–15:33.",
    href: "https://www.sefaria.org/Leviticus.14.1",
  },
  acharei: {
    summary: "Yom Kippur. The two goats. Laws of intimacy and of the land.",
    from: "Leviticus 16:1–18:30",
    source: "Leviticus 16:1–18:30.",
    href: "https://www.sefaria.org/Leviticus.16.1",
  },
  kedoshim: {
    summary: "You shall be holy. Love your neighbor. Leave the corners of the field.",
    from: "Leviticus 19:1–20:27",
    source: "Leviticus 19:1–20:27.",
    href: "https://www.sefaria.org/Leviticus.19.1",
  },
  emor: {
    summary: "The priests, and the calendar of holy days: Shabbat, Pesach, Shavuot, the Days of Awe, Sukkot.",
    from: "Leviticus 21:1–24:23",
    source: "Leviticus 21:1–24:23.",
    href: "https://www.sefaria.org/Leviticus.21.1",
  },
  behar: {
    summary: "The sabbatical year and the jubilee. The land is not sold forever, for the land is Mine.",
    from: "Leviticus 25:1–26:2",
    source: "Leviticus 25:1–26:2.",
    href: "https://www.sefaria.org/Leviticus.25.1",
  },
  bechukotai: {
    summary: "Blessings if the statutes are kept, and a hard warning if they are not. Vows and valuations.",
    from: "Leviticus 26:3–27:34",
    source: "Leviticus 26:3–27:34.",
    href: "https://www.sefaria.org/Leviticus.26.3",
  },
  bamidbar: {
    summary: "In the wilderness. A census. The camp arranged around the mishkan.",
    from: "Numbers 1:1–4:20",
    source: "Numbers 1:1–4:20.",
    href: "https://www.sefaria.org/Numbers.1.1",
  },
  naso: {
    summary: "The Nazirite, the priestly blessing, and the gifts of the chiefs.",
    from: "Numbers 4:21–7:89",
    source: "Numbers 4:21–7:89.",
    href: "https://www.sefaria.org/Numbers.4.21",
  },
  beha: {
    summary: "The menorah, the second Pesach, and the people wanting meat. Eldad and Medad.",
    from: "Numbers 8:1–12:16",
    source: "Numbers 8:1–12:16.",
    href: "https://www.sefaria.org/Numbers.8.1",
  },
  "behaalotecha": {
    summary: "The menorah, the second Pesach, and the people wanting meat. Eldad and Medad.",
    from: "Numbers 8:1–12:16",
    source: "Numbers 8:1–12:16.",
    href: "https://www.sefaria.org/Numbers.8.1",
  },
  shlach: {
    summary: "The spies. The people refuse the land. Forty years. Tzitzit at the end.",
    from: "Numbers 13:1–15:41",
    source: "Numbers 13:1–15:41.",
    href: "https://www.sefaria.org/Numbers.13.1",
  },
  korach: {
    summary: "Korach’s challenge. The earth opens. Aaron’s staff blossoms.",
    from: "Numbers 16:1–18:32",
    source: "Numbers 16:1–18:32.",
    href: "https://www.sefaria.org/Numbers.16.1",
  },
  chukat: {
    summary: "The red heifer. Miriam dies. Water from the rock. Aaron dies. The bronze serpent.",
    from: "Numbers 19:1–22:1",
    source: "Numbers 19:1–22:1.",
    href: "https://www.sefaria.org/Numbers.19.1",
  },
  balak: {
    summary: "Balaam is hired to curse, and blesses instead. A star out of Jacob. Then Baal Peor.",
    from: "Numbers 22:2–25:9",
    source: "Numbers 22:2–25:9.",
    href: "https://www.sefaria.org/Numbers.22.2",
  },
  pinchas: {
    summary: "Pinchas. A second census. The daughters of Zelophehad. Moshe is told he will not enter. Joshua is named.",
    from: "Numbers 25:10–30:1",
    source: "Numbers 25:10–30:1.",
    href: "https://www.sefaria.org/Numbers.25.10",
  },
  matot: {
    summary: "Vows. War with Midian. The tribes who want to stay east of the Jordan.",
    from: "Numbers 30:2–32:42",
    source: "Numbers 30:2–32:42.",
    href: "https://www.sefaria.org/Numbers.30.2",
  },
  masei: {
    summary: "The journeys listed. Borders of the land. Cities of refuge.",
    from: "Numbers 33:1–36:13",
    source: "Numbers 33:1–36:13.",
    href: "https://www.sefaria.org/Numbers.33.1",
  },
  devarim: {
    summary: "Moshe begins to speak. A retelling of the wilderness, on the edge of the land.",
    from: "Deuteronomy 1:1–3:22",
    source: "Deuteronomy 1:1–3:22.",
    href: "https://www.sefaria.org/Deuteronomy.1.1",
  },
  vaetchanan: {
    summary: "Moshe pleads to enter, and is refused. The Shema. The Ten Words again.",
    from: "Deuteronomy 3:23–7:11",
    source: "Deuteronomy 3:23–7:11.",
    href: "https://www.sefaria.org/Deuteronomy.3.23",
  },
  eikev: {
    summary: "If you listen. Manna remembered. Circumcise the heart. The second paragraph of the Shema.",
    from: "Deuteronomy 7:12–11:25",
    source: "Deuteronomy 7:12–11:25.",
    href: "https://www.sefaria.org/Deuteronomy.7.12",
  },
  reeh: {
    summary: "See, I set before you blessing and curse. A place for God’s name. The poor, the festivals.",
    from: "Deuteronomy 11:26–16:17",
    source: "Deuteronomy 11:26–16:17.",
    href: "https://www.sefaria.org/Deuteronomy.11.26",
  },
  shoftim: {
    summary: "Judges, a king, a prophet, cities of refuge. Justice, justice shall you pursue.",
    from: "Deuteronomy 16:18–21:9",
    source: "Deuteronomy 16:18–21:9.",
    href: "https://www.sefaria.org/Deuteronomy.16.18",
  },
  "ki tetze": {
    summary: "A dense portion of civil and family law: lost property, wages, the stranger, Amalek remembered.",
    from: "Deuteronomy 21:10–25:19",
    source: "Deuteronomy 21:10–25:19.",
    href: "https://www.sefaria.org/Deuteronomy.21.10",
  },
  "ki tavo": {
    summary: "First fruits, the declaration before the priest, blessings and curses on the mountains. A people entering a land they must not forget they were given.",
    from: "Deuteronomy 26:1–29:8",
    source: "Deuteronomy 26:1–29:8.",
    href: "https://www.sefaria.org/Deuteronomy.26.1",
  },
  nitzavim: {
    summary: "You stand this day, all of you. The Torah is not in heaven. Choose life.",
    from: "Deuteronomy 29:9–30:20",
    source: "Deuteronomy 29:9–30:20.",
    href: "https://www.sefaria.org/Deuteronomy.29.9",
  },
  vayeilech: {
    summary: "Moshe goes. Joshua is charged. The Torah is written and given to the Levites to place beside the ark.",
    from: "Deuteronomy 31:1–31:30",
    source: "Deuteronomy 31:1–31:30.",
    href: "https://www.sefaria.org/Deuteronomy.31.1",
  },
  "nitzavim-vayeilech": {
    summary: "You stand this day. Choose life. Then Moshe goes, Joshua is charged, and the Torah is placed beside the ark.",
    from: "Deuteronomy 29:9–31:30",
    source: "Deuteronomy 29:9–31:30.",
    href: "https://www.sefaria.org/Deuteronomy.29.9",
  },
  haazinu: {
    summary: "Moshe’s song: heaven and earth as witnesses. A poem of faithfulness and forgetting, before he dies.",
    from: "Deuteronomy 32:1–32:52",
    source: "Deuteronomy 32:1–32:52.",
    href: "https://www.sefaria.org/Deuteronomy.32.1",
  },
  "vezot haberakhah": {
    summary: "The last blessings of Moshe, tribe by tribe, and his death. The cycle ends looking into the land.",
    from: "Deuteronomy 33:1–34:12",
    source: "Deuteronomy 33:1–34:12.",
    href: "https://www.sefaria.org/Deuteronomy.33.1",
  },
};

function keyOf(name: string): string {
  return name
    .toLowerCase()
    .replace(/^parashat\s+/, "")
    .replace(/[’']/g, "")
    .replace(/[^a-z]+/g, " ")
    .trim()
    .replace(/\s+/g, "-");
}

export function parshaGuide(name: string | null): ParshaGuide | null {
  if (!name) return null;
  const key = keyOf(name);
  if (P[key]) return P[key];
  const first = key.split("-")[0];
  if (P[first]) return P[first];
  return {
    summary: "This week’s Torah reading in the annual cycle used by most communities. Israel and the diaspora sometimes diverge for a week after a festival.",
    from: name,
    source: "Traditional Torah cycle. Hebcal.",
    href: "https://www.sefaria.org/texts/Tanakh",
  };
}
