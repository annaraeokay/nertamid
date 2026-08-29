export type HolidayCopy = {
  greeting: string;
  note: string;
};

export type HolidayGuide = {
  key: string;
  title: string;
  greeting: string;
  what: string;
  need: string;
  say: string;
  do: string;
  more: string;
  source: string;
  prayerId: string | null;
  learnHref: string | null;
  learnLabel: string | null;
  twoDaysInDiaspora: boolean;
};

const GUIDES: HolidayGuide[] = [
  {
    key: "rosh-hashanah",
    title: "Rosh Hashanah",
    greeting: "Shana Tovah",
    what: "Rosh Hashanah is the Jewish new year and a day of remembering. It is also called Yom HaDin, a day of judgment. In the Torah it is a sacred gathering with rest and the sounding of the shofar. In the diaspora it is kept for two days. In Israel it is also two days.",
    need: "A place to hear the shofar, if you are going to shul. Apples and honey are a widespread custom, not a law. Many bake a round challah. White clothes are a custom in some communities. A machzor, the High Holy Day prayer book, is used in shul.",
    say: "The greeting is Shana Tovah, or L’shanah tovah tikatevu. Many add Avinu Malkeinu. The shofar is not sounded on Shabbat. Shehecheyanu is said at the start.",
    do: "Hear the shofar if you can. Festive meals. Tashlich, the casting of crumbs or bread at water, is a later custom often done on the first day if it is not Shabbat. The work of return begins here and runs through Yom Kippur.",
    more: "Leviticus 23:23–25 sets the day. The two-day practice outside (and in) Israel is longstanding. What is eaten, and whether one goes to water, follow community custom.",
    source: "Leviticus 23:23–25. Traditional machzor. Local custom varies.",
    prayerId: "shehecheyanu",
    learnHref: "https://www.sefaria.org/Leviticus.23.23",
    learnLabel: "Leviticus 23 on Sefaria",
    twoDaysInDiaspora: true,
  },
  {
    key: "yom-kippur",
    title: "Yom Kippur",
    greeting: "Gmar chatimah tovah",
    what: "Yom Kippur is the Day of Atonement. The Torah calls it a Sabbath of Sabbaths, a day of rest and of afflicting the soul. Many fast from food and drink, and spend the day in prayer. Health comes first. Do not fast if a doctor or your practice says not to.",
    need: "A machzor. Many wear white. Leather shoes are avoided in many traditional communities. A simple meal before the fast. Kol Nidrei is the opening of the evening.",
    say: "Gmar chatimah tovah. Kol Nidrei at night. Vidui, the confession, is said more than once. Ne’ilah closes the day. Shehecheyanu is not typically said on Yom Kippur itself in the usual festival way.",
    do: "Fast if it is safe for you. Pray. Ask and be asked for forgiveness before the day, when you can. The fast ends after nightfall, often with a blast of the shofar and then a meal.",
    more: "Leviticus 16 and 23:26–32. Who must fast, and who must not, is a halakhic and medical question. Ask your community if you are unsure.",
    source: "Leviticus 16; 23:26–32. Traditional machzor. Health comes first.",
    prayerId: "shema",
    learnHref: "https://www.sefaria.org/Leviticus.23.26",
    learnLabel: "Leviticus 23 on Sefaria",
    twoDaysInDiaspora: false,
  },
  {
    key: "sukkot",
    title: "Sukkot",
    greeting: "Chag sameach",
    what: "Sukkot is the festival of booths, a week of dwelling under a roof of branches. It remembers the wandering after Egypt, and the harvest. The four species (lulav and etrog) are taken in many communities.",
    need: "A sukkah, or a place at someone else’s. Lulav and etrog if that is your custom. The blessing for sitting in the sukkah, and for the four species.",
    say: "Chag sameach. The blessing leisheiv basukkah when eating in the sukkah, in many communities. Hallel. Ushpizin, the welcoming of ancestors, is a later custom.",
    do: "Eat in the sukkah. Some sleep there. Take the four species by day, except on Shabbat. The last days lead into Shemini Atzeret and Simchat Torah.",
    more: "Leviticus 23:33–43. How the sukkah is built, and who eats there, follow community custom and weather and health.",
    source: "Leviticus 23:33–43. Traditional siddur. Local custom varies.",
    prayerId: "shehecheyanu",
    learnHref: "https://www.sefaria.org/Leviticus.23.33",
    learnLabel: "Leviticus 23 on Sefaria",
    twoDaysInDiaspora: true,
  },
  {
    key: "shemini-atzeret",
    title: "Shemini Atzeret",
    greeting: "Chag sameach",
    what: "Shemini Atzeret is the gathering on the eighth day, after Sukkot. In Israel it is often the same day as Simchat Torah. In the diaspora they are often two days.",
    need: "A siddur or machzor. In shul, the prayer for rain (Geshem) is said in many communities at this season.",
    say: "Chag sameach. Yizkor is said in many communities. The prayer for rain begins.",
    do: "Festival meals. In the diaspora, Simchat Torah with dancing often falls the next day. In Israel they are often joined.",
    more: "Numbers 29:35. Israel and diaspora calendars differ here. Ask your community which day is which.",
    source: "Numbers 29:35. Israel and diaspora calendars differ.",
    prayerId: "shehecheyanu",
    learnHref: "https://www.sefaria.org/Numbers.29.35",
    learnLabel: "Numbers 29 on Sefaria",
    twoDaysInDiaspora: true,
  },
  {
    key: "simchat-torah",
    title: "Simchat Torah",
    greeting: "Chag sameach",
    what: "Simchat Torah is the day the Torah cycle ends and begins again. Many dance with the scrolls. In Israel it often falls with Shemini Atzeret. In the diaspora it is often the next day.",
    need: "A synagogue, if you want the dancing and the readings. A siddur.",
    say: "Chag sameach. The last verses of Deuteronomy and the first of Genesis are read. Hagbah and dancing.",
    do: "Dance with the Torah if that is your community. Children are often called up. It is joy, not spectacle.",
    more: "The day is later than the Torah’s own festivals. Customs of dancing and of who is called to the Torah vary widely.",
    source: "Deuteronomy 31:10–13. Traditional custom. Israel and diaspora calendars differ.",
    prayerId: "shehecheyanu",
    learnHref: "https://www.sefaria.org/Deuteronomy.31.10",
    learnLabel: "Deuteronomy 31 on Sefaria",
    twoDaysInDiaspora: true,
  },
  {
    key: "chanukah",
    title: "Chanukah",
    greeting: "Chag urim sameach",
    what: "Chanukah remembers the rededication of the Temple and the oil that lasted. It is an eight-day festival of lights. It is not a biblical festival. Work is permitted in a way it is not on Shabbat.",
    need: "A chanukiah (nine-branch lamp). Oil or wax. A shamash, the helper flame. Many eat foods fried in oil. A dreidel is a later custom.",
    say: "The blessings for lighting, including Shehecheyanu on the first night. Maoz Tzur is sung in many homes. Chag urim sameach.",
    do: "Light after nightfall, adding one flame each night. Place the chanukiah where it can be seen, following local custom and safety. Do not use the Chanukah lights for other work.",
    more: "Shabbat 21b. Placement, oil versus wax, and when to light if you missed nightfall, follow community custom.",
    source: "Shabbat 21b. Traditional siddur. Local custom varies.",
    prayerId: "shehecheyanu",
    learnHref: "https://www.sefaria.org/Shabbat.21b",
    learnLabel: "Shabbat 21b on Sefaria",
    twoDaysInDiaspora: false,
  },
  {
    key: "purim",
    title: "Purim",
    greeting: "Chag Purim sameach",
    what: "Purim remembers the story of Esther: a plot against the Jews of Persia, and a reversal. It is a day of hearing, giving, and a meal. Walled cities from the time of Joshua may keep Shushan Purim the next day.",
    need: "A megillah reading, in shul or at home. Food to give (mishloach manot). Gifts for the poor (matanot la’evyonim). A festive meal.",
    say: "The megillah is read at night and again by day in many communities. Shehecheyanu is said. The greeting is Chag Purim sameach.",
    do: "Hear the megillah. Give food. Give to the poor. Eat a meal. Costumes and noise at Haman’s name are widespread customs, not the core of the day.",
    more: "Esther 9. Who is obligated in each mitzvah, and when Shushan Purim is kept, follow local practice.",
    source: "Esther 9. Traditional megillah. Local custom varies.",
    prayerId: "shehecheyanu",
    learnHref: "https://www.sefaria.org/Esther.9",
    learnLabel: "Esther 9 on Sefaria",
    twoDaysInDiaspora: false,
  },
  {
    key: "pesach",
    title: "Pesach",
    greeting: "Chag sameach",
    what: "Pesach remembers the going out from Egypt. For seven days in Israel, and eight in the diaspora, chametz is not eaten. The story is told at a seder on the first night (and the second in the diaspora).",
    need: "A hagaddah. Matzah. Maror. Wine or grape juice, four cups in many homes. A seder plate. A cleaned kitchen according to your practice.",
    say: "The hagaddah. The Four Questions. The blessing over matzah. Shehecheyanu at the start. Next year in Jerusalem is a hope, not a travel plan.",
    do: "Tell the story. Eat matzah. Many search for chametz the night before. How strictly chametz is removed, and who leans, follow community custom.",
    more: "Exodus 12–13. Israel keeps seven days, the diaspora eight. Ask your community about kitniyot and other stringencies.",
    source: "Exodus 12–13. Traditional hagaddah. Israel and diaspora calendars differ.",
    prayerId: "shehecheyanu",
    learnHref: "https://www.sefaria.org/Exodus.12",
    learnLabel: "Exodus 12 on Sefaria",
    twoDaysInDiaspora: true,
  },
  {
    key: "shavuot",
    title: "Shavuot",
    greeting: "Chag sameach",
    what: "Shavuot remembers the giving of the Torah, and the wheat harvest. It falls after the counting of the Omer. In Israel it is one day. In the diaspora, two.",
    need: "A siddur. Many stay up to learn. Dairy foods are a widespread custom, not a law. Flowers in shul are a custom in some places.",
    say: "Chag sameach. Akdamut in many Ashkenazi communities. The Book of Ruth is read in many shuls. Shehecheyanu.",
    do: "Learn. Festive meals. Some stay through the night. Dairy is a custom. The date is bound to the Omer count.",
    more: "Exodus 19–20; Leviticus 23:15–21. All-night study is later custom. Dairy is custom, not Torah law.",
    source: "Exodus 19–20; Leviticus 23:15–21. Local custom varies.",
    prayerId: "shehecheyanu",
    learnHref: "https://www.sefaria.org/Exodus.19",
    learnLabel: "Exodus 19 on Sefaria",
    twoDaysInDiaspora: true,
  },
  {
    key: "tisha-bav",
    title: "Tisha B’Av",
    greeting: "A day of mourning",
    what: "Tisha B’Av remembers the destruction of the Temples, and other griefs bound to this date. It is a fast day in many communities. Health comes first.",
    need: "Eicha (Lamentations). A place to sit low, in many traditional customs. The fast begins the evening before.",
    say: "Eicha is read at night. Kinot, dirges, by day in many communities. The greeting is quiet. Some avoid ordinary greetings.",
    do: "Fast if it is safe. Many refrain from leather shoes, bathing for pleasure, and study of joyful texts. The day eases in the afternoon in some customs.",
    more: "II Kings 25; traditional fast. Who fasts is a health and halakhic question.",
    source: "Traditional fast. Eicha. Health comes first.",
    prayerId: null,
    learnHref: "https://www.sefaria.org/Lamentations.1",
    learnLabel: "Eicha on Sefaria",
    twoDaysInDiaspora: false,
  },
  {
    key: "tu-bishvat",
    title: "Tu BiShvat",
    greeting: "Tu BiShvat",
    what: "Tu BiShvat is the new year for trees in rabbinic law, used for tithes of fruit. It has become a day of trees, fruit, and care for the land. It is a minor holiday.",
    need: "Fruits, especially those of the land of Israel, in many customs. A seder of fruits is a later custom.",
    say: "There is no required festival liturgy. Some say Shehecheyanu on a new fruit.",
    do: "Eat fruit. Plant if you can. A Tu BiShvat seder is custom, not law.",
    more: "Rosh Hashanah 2a. The mystical seder is later. Customs vary.",
    source: "Rosh Hashanah 2a. Later custom. Local practice varies.",
    prayerId: "shehecheyanu",
    learnHref: "https://www.sefaria.org/Mishnah_Rosh_Hashanah.1.1",
    learnLabel: "Mishnah Rosh Hashanah on Sefaria",
    twoDaysInDiaspora: false,
  },
  {
    key: "lag-baomer",
    title: "Lag BaOmer",
    greeting: "Lag BaOmer",
    what: "Lag BaOmer is the 33rd day of the Omer. It is bound to later traditions of Rabbi Akiva’s students and of Rabbi Shimon bar Yochai. Haircuts and weddings, paused in many communities during the Omer, resume for some on this day.",
    need: "Nothing is required. Bonfires are a custom in some places, especially in Israel.",
    say: "There is no required festival liturgy. The Omer is still counted.",
    do: "Some light bonfires. Some visit Meron. Weddings and haircuts in communities that wait until this day. Fire safety matters.",
    more: "The day’s meaning is later than the Torah. Customs of joy and of fire vary, and some communities do not mark it this way.",
    source: "Traditional Omer custom. Practice varies widely.",
    prayerId: "omer",
    learnHref: null,
    learnLabel: null,
    twoDaysInDiaspora: false,
  },
  {
    key: "selichot",
    title: "Selichot",
    greeting: "Leil Selichot",
    what: "Selichot are prayers of forgiveness said in the season of return. Ashkenazi communities often begin the Saturday night before Rosh Hashanah. Sephardi communities often say them through Elul.",
    need: "A siddur or selichot booklet. A minyan in many communities, though one may say much of it alone.",
    say: "The Thirteen Attributes. Ashkenazi and Sephardi texts differ. The first night is often later in the evening.",
    do: "Go if your community gathers. Elul is a season of repair, not of panic.",
    more: "Traditional siddur. Ashkenazi and Sephardi custom differ on when to begin.",
    source: "Traditional siddur. Ashkenazi and Sephardi custom differ.",
    prayerId: null,
    learnHref: null,
    learnLabel: null,
    twoDaysInDiaspora: false,
  },
  {
    key: "rosh-chodesh",
    title: "Rosh Chodesh",
    greeting: "Rosh Chodesh",
    what: "Rosh Chodesh is the new month, bound to the new moon. Some months it is one day, some two. Hallel and Ya’aleh v’Yavo are added in many communities. It is not a full festival.",
    need: "A siddur. Nothing else is required. Some keep it as a day of extra prayer or gathering, especially among women in some communities.",
    say: "Hallel (often half-Hallel). Ya’aleh v’Yavo in the Amidah and Birkat Hamazon. The greeting is Chodesh tov.",
    do: "Ordinary work is permitted. Some add a better meal. The moon’s blessing (Kiddush Levanah) is a related, later practice, not the same as Rosh Chodesh itself.",
    more: "Numbers 28:11–15. Whether Hallel is full or half, and who gathers, follow community custom.",
    source: "Numbers 28:11–15. Traditional siddur. Local custom varies.",
    prayerId: null,
    learnHref: "https://www.sefaria.org/Numbers.28.11",
    learnLabel: "Numbers 28 on Sefaria",
    twoDaysInDiaspora: false,
  },
  {
    key: "shabbat",
    title: "Shabbat",
    greeting: "Shabbat shalom",
    what: "Shabbat is the weekly stopping, from candle lighting on Friday until nightfall on Saturday. It remembers creation and the going out from Egypt. What is refrained from follows community custom and traditional law.",
    need: "Candles. Wine or grape juice for kiddush. Bread for hamotzi. A cup, spices, and a multi-wick flame for havdalah. A place to eat and rest.",
    say: "The candle blessing before sunset. Kiddush Friday night. Hamotzi. Havdalah after nightfall. Shabbat shalom.",
    do: "Light on time. Eat. Rest. Close the day with havdalah. Do not begin havdalah until Shabbat has ended in your location.",
    more: "Exodus 20:8–11. Candle lighting here is 18 minutes before sunset, via Hebcal. Customs of electricity, cooking, and carrying vary by community.",
    source: "Exodus 20:8–11. Traditional siddur. Local custom varies.",
    prayerId: "candles",
    learnHref: "https://www.sefaria.org/Exodus.20.8",
    learnLabel: "Exodus 20 on Sefaria",
    twoDaysInDiaspora: false,
  },
  {
    key: "parsha",
    title: "The weekly parashah",
    greeting: "Shabbat shalom",
    what: "Each Shabbat a portion of the Torah is read, in an annual cycle in most communities. Some communities use a triennial cycle. The name on the calendar is this week’s reading.",
    need: "A chumash, or a seat in shul. Nothing is required at home.",
    say: "The blessings before and after the Torah, if you are called. The haftarah is a prophetic reading bound to the portion in many communities.",
    do: "Hear the reading if you can. Study a piece of it. The cycle begins again on Simchat Torah.",
    more: "The weekly division is rabbinic practice. Israel and the diaspora sometimes diverge for a week after a festival.",
    source: "Traditional Torah cycle. Hebcal. Local custom varies.",
    prayerId: null,
    learnHref: "https://www.sefaria.org/texts/Tanakh",
    learnLabel: "Tanakh on Sefaria",
    twoDaysInDiaspora: false,
  },
  {
    key: "fast",
    title: "A fast day",
    greeting: "A fast day",
    what: "The calendar marks several fasts besides Yom Kippur and Tisha B’Av: the Fast of Gedaliah, the Tenth of Tevet, the Fast of Esther, the Seventeenth of Tammuz, and others. They remember griefs and turns in Jewish history. Health comes first.",
    need: "Water and food beforehand if you are fasting. A siddur. Selichot are added in many communities.",
    say: "Aneinu in the Amidah in many communities. Selichot. There is no required greeting.",
    do: "Fast if it is safe and if it is your practice. Some fasts are dawn to nightfall, not the evening before. Ask your community which.",
    more: "Who fasts, and from when until when, depends on the day. Do not fast if a doctor or your practice says not to.",
    source: "Traditional calendar. Health comes first.",
    prayerId: null,
    learnHref: null,
    learnLabel: null,
    twoDaysInDiaspora: false,
  },
  {
    key: "yom-hashoah",
    title: "Yom HaShoah",
    greeting: "Yom HaShoah",
    what: "Yom HaShoah is Holocaust Remembrance Day in the State of Israel’s calendar, observed by many Jews worldwide. It is not a biblical fast. We remember the six million, and we do not look away.",
    need: "Nothing is required. Many light a candle. Many attend a gathering.",
    say: "Names. Kaddish in some gatherings. There is no single required liturgy.",
    do: "Remember. Tell. In Israel a siren stops the street. Elsewhere, a candle, a reading, a quiet hour.",
    more: "A modern memorial date. Some ultra-Orthodox communities mark the Shoah on Tisha B’Av instead. Both are acts of memory.",
    source: "Modern Israeli calendar. Communities differ on the date of memory.",
    prayerId: null,
    learnHref: null,
    learnLabel: null,
    twoDaysInDiaspora: false,
  },
  {
    key: "yom-haatzmaut",
    title: "Yom HaAtzmaut",
    greeting: "Yom HaAtzmaut",
    what: "Yom HaAtzmaut is Israel’s Independence Day. Some Jews say Hallel. Some do not mark it liturgically. It is a modern date, and communities differ.",
    need: "Nothing is required. A siddur if your community says Hallel.",
    say: "Hallel in many Zionist and Israeli communities. Others do not add liturgy.",
    do: "Celebrate or mark the day as your community does. This app does not tell you that one minhag is the only one.",
    more: "Modern Israeli calendar. Liturgical practice is a real disagreement. Customs vary.",
    source: "Modern Israeli calendar. Liturgical custom differs.",
    prayerId: null,
    learnHref: null,
    learnLabel: null,
    twoDaysInDiaspora: false,
  },
];

function matchKey(title: string, kind?: string): string {
  const t = title.toLowerCase();
  if (kind === "parsha" || t.startsWith("parashat")) return "parsha";
  if (kind === "candles" || kind === "havdalah" || t === "shabbat" || t.includes("candle lighting")) return "shabbat";
  if (t.includes("rosh hashana") || t.includes("rosh hashanah")) return "rosh-hashanah";
  if (t.includes("yom kippur")) return "yom-kippur";
  if (t.includes("simchat torah")) return "simchat-torah";
  if (t.includes("shmini atzeret") || t.includes("shemini atzeret")) return "shemini-atzeret";
  if (t.includes("sukkot")) return "sukkot";
  if (t.includes("chanukah") || t.includes("hanukkah")) return "chanukah";
  if (t.includes("pesach") || t.includes("passover")) return "pesach";
  if (t.includes("shavuot")) return "shavuot";
  if (t.includes("purim")) return "purim";
  if (t.includes("tisha") || t.includes("tish'a") || t.includes("tish’a")) return "tisha-bav";
  if (t.includes("tu bi") || t.includes("tu bishvat") || t.includes("tu b'shvat") || t.includes("tu b’shvat")) return "tu-bishvat";
  if (t.includes("lag baomer") || t.includes("lag ba'omer") || t.includes("lag ba’omer")) return "lag-baomer";
  if (t.includes("selichot")) return "selichot";
  if (t.includes("rosh chodesh")) return "rosh-chodesh";
  if (t.includes("yom hashoah")) return "yom-hashoah";
  if (t.includes("yom haatzma") || t.includes("yom ha'atzma") || t.includes("yom ha’atzma")) return "yom-haatzmaut";
  if (t.includes("fast") || t.includes("tzom") || t.includes("asara") || t.includes("ta'anit") || t.includes("ta’anit") || t.includes("gedaliah") || t.includes("esther")) return "fast";
  if (t.includes("erev")) return matchKey(t.replace(/erev\s+/, ""), kind);
  return "";
}

export function holidayGuide(title: string, kind?: string): HolidayGuide | null {
  const key = matchKey(title, kind);
  if (!key) return null;
  return GUIDES.find((g) => g.key === key) ?? null;
}

export function holidayCopy(title: string): HolidayCopy {
  const guide = holidayGuide(title);
  if (guide) {
    const first = guide.what.split(". ")[0];
    return { greeting: guide.greeting, note: first.endsWith(".") ? first : `${first}.` };
  }
  if (title.toLowerCase().includes("erev")) {
    return { greeting: "Light candles tonight", note: "The holy day begins at sundown." };
  }
  return { greeting: title, note: "A day set apart." };
}

export function whenLabel(daysUntil: number, weekday: string): string {
  if (daysUntil <= 0) return "Today";
  if (daysUntil === 1) return "Tomorrow";
  if (daysUntil < 7) return weekday;
  return `in ${daysUntil} days`;
}
