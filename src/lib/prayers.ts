import { withoutNikkud } from "@/lib/hebrew";

export type PrayerCategory = "daily" | "shabbat" | "food" | "season" | "travel";

export type Prayer = {
  id: string;
  title: string;
  hebrewTitle: string;
  category: PrayerCategory;
  hebrew: string;
  transliteration: string;
  english: string;
  when: string;
  why: string;
  source: string;
  audioSrc: string | null;
};

const RAW: Omit<Prayer, "why">[] = [
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
    audioSrc: null,
  },
  {
    id: "shema",
    title: "Shema",
    hebrewTitle: "שמע",
    category: "daily",
    hebrew:
      "שמע ישראל ה׳ אלהינו ה׳ אחד.\nואהבת את ה׳ אלהיך בכל לבבך ובכל נפשך ובכל מאדך.\nוהיו הדברים האלה אשר אנכי מצוך היום על לבבך.\nושננתם לבניך ודברת בם בשבתך בביתך ובלכתך בדרך ובשכבך ובקומך.\nוקשרתם לאות על ידך והיו לטטפת בין עיניך.\nוכתבתם על מזוזות ביתך ובשעריך.",
    transliteration:
      "Shema Yisrael, Adonai Eloheinu, Adonai echad. Ve’ahavta et Adonai Elohekha, bekhol levavkha, uvkhol nafshekha, uvkhol me’odekha.",
    english:
      "Hear, O Israel: the Lord is our God, the Lord is one. You shall love the Lord your God with all your heart, with all your soul, and with all your might. Take these words that I command you today upon your heart. Teach them to your children. Speak of them when you sit in your house, when you walk on the way, when you lie down, and when you rise. Bind them as a sign on your hand, and let them be frontlets between your eyes. Write them on the doorposts of your house and on your gates.",
    when: "Morning and evening. This is the first paragraph (Deuteronomy 6:4–9). The full Shema in many communities includes two more biblical paragraphs and surrounding blessings. Covering the eyes for the first line is a widespread custom.",
    source: "Deuteronomy 6:4–9. Traditional siddur. Full Shema continues through Deuteronomy 11 and Numbers 15.",
    audioSrc: null,
  },
  {
    id: "ashrei",
    title: "Ashrei",
    hebrewTitle: "אשרי",
    category: "daily",
    hebrew:
      "אשרי יושבי ביתך עוד יהללוך סלה.\nאשרי העם שככה לו אשרי העם שה׳ אלהיו.\nתהלה לדוד ארוממך אלהי המלך ואברכה שמך לעולם ועד.\nבכל יום אברכך ואהללה שמך לעולם ועד.\nגדול ה׳ ומהלל מאד ולגדלתו אין חקר.\nדור לדור ישבח מעשיך וגבורתיך יגידו.\nהדר כבוד הודך ודברי נפלאתיך אשיחה.\nועזוז נוראתיך יאמרו וגדלותך אספרנה.\nזכר רב טובך יביעו וצדקתך ירננו.\nחנון ורחום ה׳ ארך אפים וגדל חסד.\nטוב ה׳ לכל ורחמיו על כל מעשיו.\nיודוך ה׳ כל מעשיך וחסידיך יברכוכה.\nכבוד מלכותך יאמרו וגבורתך ידברו.\nלהודיע לבני האדם גבורתיו וכבוד הדר מלכותו.\nמלכותך מלכות כל עולמים וממשלתך בכל דור ודור.\nסומך ה׳ לכל הנפלים וזוקף לכל הכפופים.\nעיני כל אליך ישברו ואתה נותן להם את אכלם בעתו.\nפותח את ידך ומשביע לכל חי רצון.\nצדיק ה׳ בכל דרכיו וחסיד בכל מעשיו.\nקרוב ה׳ לכל קראיו לכל אשר יקראהו באמת.\nרצון יראיו יעשה ואת שועתם ישמע ויושיעם.\nשומר ה׳ את כל אהביו ואת כל הרשעים ישמיד.\nתהלת ה׳ ידבר פי ויברך כל בשר שם קדשו לעולם ועד.\nואנחנו נברך יה מעתה ועד עולם הללויה.",
    transliteration:
      "Ashrei yoshvei veitekha, od yehalelukha selah.\nAshrei ha’am shekakhah lo, ashrei ha’am she’Adonai Elohav.\nTehillah leDavid. Aromimkha Elohai haMelekh, va’avarkha shimkha le’olam va’ed.\nBekhol yom avarekhekha, va’ahalelah shimkha le’olam va’ed.\nGadol Adonai umehulal me’od, veligdulato ein cheker.\nDor ledor yeshabach ma’asekha, ugvurotekha yagidu.\nHadar kevod hodekha, vedivrei nifle’otekha asichah.\nVe’ezuz nora’otekha yomeru, ugdulat’kha asaperenah.\nZekher rav tuvkha yabi’u, vetzidkatkha yeranenu.\nChanun verachum Adonai, erekh apayim ugdol chased.\nTov Adonai lakol, verachamav al kol ma’asav.\nYodukha Adonai kol ma’asekha, vachasidekha yevarekhukhah.\nKevod malkhutkha yomeru, ugvurat’kha yedaberu.\nLehodi’a livnei ha’adam gevurotav, ukhvod hadar malkhuto.\nMalkhutkha malkhut kol olamim, umemshalt’kha bechol dor vador.\nSomekh Adonai lekhol hanoflim, vezokef lekhol hakefufim.\nEinei khol elekha yesaberu, ve’atah noten lahem et okhlam be’ito.\nPote’ach et yadekha, umasbia lechol chai ratzon.\nTzadik Adonai bechol derakhav, vechasid bechol ma’asav.\nKarov Adonai lekhol kor’av, lekhol asher yikra’uhu ve’emet.\nRetzon yere’av ya’aseh, ve’et shavatam yishma veyoshi’em.\nShomer Adonai et kol ohavav, ve’et kol haresha’im yashmid.\nTehilat Adonai yedaber pi, vivarekh kol basar shem kodsho le’olam va’ed.\nVa’anachnu nevarekh Yah, me’atah ve’ad olam. Halleluyah.",
    english:
      "Happy are those who dwell in Your house; they will praise You yet again. Selah.\nHappy is the people for whom this is so; happy is the people whose God is the Lord.\nA psalm of David. I will exalt You, my God the King, and bless Your name forever and ever.\nEvery day I will bless You, and praise Your name forever and ever.\nGreat is the Lord and highly to be praised; His greatness cannot be fathomed.\nOne generation will praise Your works to another, and tell of Your mighty acts.\nI will speak of the glorious splendor of Your majesty, and of Your wondrous works.\nThey will speak of the power of Your awesome deeds, and I will tell of Your greatness.\nThey will pour out the memory of Your great goodness, and sing of Your righteousness.\nThe Lord is gracious and compassionate, slow to anger and great in kindness.\nThe Lord is good to all, and His mercy is over all His works.\nAll Your works will thank You, Lord, and Your faithful ones will bless You.\nThey will speak of the glory of Your kingship, and tell of Your might,\nto make known to people His mighty acts, and the majestic glory of His kingship.\nYour kingship is a kingship for all ages, and Your dominion for every generation.\nThe Lord supports all who fall, and raises up all who are bent.\nThe eyes of all look to You, and You give them their food in its time.\nYou open Your hand and satisfy every living thing with favor.\nThe Lord is righteous in all His ways, and kind in all His works.\nThe Lord is near to all who call on Him, to all who call on Him in truth.\nHe does the will of those who fear Him; He hears their cry and saves them.\nThe Lord guards all who love Him, and all the wicked He will destroy.\nMy mouth will speak the praise of the Lord, and all flesh will bless His holy name forever and ever.\nAnd we will bless the Lord from now and forever. Hallelujah.",
    when: "Ashrei is recited in many communities three times a day. It is built around the whole of Psalm 145, with opening verses from Psalms 84 and 144, and a closing verse from Psalm 115. Twice daily is a Talmudic teaching; a third recitation is later custom. The traditional siddur omits a nun verse in Psalm 145; some modern editions restore one. This is the common siddur form.",
    source: "Psalms 84:5; 144:15; 145; 115:18. Berakhot 4b. Traditional siddur. The nun verse is absent in most communities.",
    audioSrc: null,
  },
  {
    id: "candles",
    title: "Shabbat candles",
    hebrewTitle: "הדלקת נרות",
    category: "shabbat",
    hebrew: "ברוך אתה ה׳ אלהינו מלך העולם אשר קדשנו במצותיו וצונו להדליק נר של שבת.",
    transliteration:
      "Barukh atah Adonai, Eloheinu melekh ha’olam, asher kidshanu bemitzvotav, vetzivanu lehadlik ner shel Shabbat.",
    english:
      "Blessed are You, Lord our God, King of the universe, who has sanctified us with commandments, and commanded us to kindle the Sabbath light.",
    when: "On Friday before sunset. Many light, then cover the eyes, then say the blessing. On festivals the wording becomes “ner shel yom tov,” and Shehecheyanu is often added. How many candles, and who lights, follow household custom.",
    source: "Traditional siddur. Shabbat 23b. Festival wording differs.",
    audioSrc: null,
  },
  {
    id: "kiddush",
    title: "Kiddush",
    hebrewTitle: "קידוש",
    category: "shabbat",
    hebrew:
      "ברוך אתה ה׳ אלהינו מלך העולם בורא פרי הגפן.\nברוך אתה ה׳ אלהינו מלך העולם אשר קדשנו במצותיו ורצה בנו, ושבת קדשו באהבה וברצון הנחילנו, זכרון למעשה בראשית. כי הוא יום תחלה למקראי קדש, זכר ליציאת מצרים. כי בנו בחרת ואותנו קדשת מכל העמים, ושבת קדשך באהבה וברצון הנחלתנו. ברוך אתה ה׳ מקדש השבת.",
    transliteration:
      "Barukh atah Adonai, Eloheinu melekh ha’olam, borei peri hagafen. … Barukh atah Adonai, mekadesh haShabbat.",
    english:
      "Blessed are You, Lord our God, King of the universe, who creates the fruit of the vine. Blessed are You, Lord our God, King of the universe, who has sanctified us with commandments and taken delight in us, and with love and favor given us the holy Sabbath as a heritage, a remembrance of creation. For it is first among the holy days, a remembrance of the going out from Egypt. You have chosen us and sanctified us from among the peoples, and given us the holy Sabbath in love and favor. Blessed are You, Lord, who sanctifies the Sabbath.",
    when: "Friday night, over wine or grape juice, before the meal. Many also recite Genesis 2:1–3 (Vayechulu) first. Daytime kiddush is shorter. Festival kiddush uses different words. Standing or sitting is a matter of custom.",
    source: "Traditional siddur. Pesachim 106a. Ashkenazi wording given here; Sephardi texts differ in places.",
    audioSrc: null,
  },
  {
    id: "havdalah",
    title: "Havdalah",
    hebrewTitle: "הבדלה",
    category: "shabbat",
    hebrew:
      "ברוך אתה ה׳ אלהינו מלך העולם בורא פרי הגפן.\nברוך אתה ה׳ אלהינו מלך העולם בורא מיני בשמים.\nברוך אתה ה׳ אלהינו מלך העולם בורא מאורי האש.\nברוך אתה ה׳ אלהינו מלך העולם המבדיל בין קדש לחול, בין אור לחשך, בין ישראל לעמים, בין יום השביעי לששת ימי המעשה. ברוך אתה ה׳ המבדיל בין קדש לחול.",
    transliteration:
      "Barukh atah Adonai, Eloheinu melekh ha’olam, borei peri hagafen. Borei minei vesamim. Borei me’orei ha’esh. … Hamavdil bein kodesh lechol.",
    english:
      "Blessed are You, Lord our God, King of the universe, who creates the fruit of the vine. Blessed are You, who creates kinds of spice. Blessed are You, who creates the lights of fire. Blessed are You, Lord our God, King of the universe, who distinguishes between holy and ordinary, between light and dark, between Israel and the nations, between the seventh day and the six days of work. Blessed are You, Lord, who distinguishes between holy and ordinary.",
    when: "After nightfall at the end of Shabbat, when three stars are customarily seen. Wine, spices, and a multi-wick flame are used in many homes. The order and the melody vary. Do not begin until Shabbat has ended in your location.",
    source: "Traditional siddur. Berakhot 51b–52a. Local custom varies.",
    audioSrc: null,
  },
  {
    id: "shehecheyanu",
    title: "Shehecheyanu",
    hebrewTitle: "שהחיינו",
    category: "season",
    hebrew: "ברוך אתה ה׳ אלהינו מלך העולם שהחיינו וקיימנו והגיענו לזמן הזה.",
    transliteration:
      "Barukh atah Adonai, Eloheinu melekh ha’olam, shehecheyanu vekiyemanu vehigianu lazman hazeh.",
    english:
      "Blessed are You, Lord our God, King of the universe, who has given us life, sustained us, and brought us to this time.",
    when: "At the start of a festival, on lighting festival candles, the first night of Chanukah, a first fruit in season, and other firsts. Not typically said on Yom Kippur. Some say it on wearing a new garment. Customs of when it is required differ.",
    source: "Traditional siddur. Berakhot 54a. Local custom varies.",
    audioSrc: null,
  },
  {
    id: "omer",
    title: "Counting the Omer",
    hebrewTitle: "ספירת העומר",
    category: "season",
    hebrew: "ברוך אתה ה׳ אלהינו מלך העולם אשר קדשנו במצותיו וצונו על ספירת העומר.",
    transliteration:
      "Barukh atah Adonai, Eloheinu melekh ha’olam, asher kidshanu bemitzvotav, vetzivanu al sefirat ha’omer.",
    english:
      "Blessed are You, Lord our God, King of the universe, who has sanctified us with commandments, and commanded us concerning the counting of the Omer.",
    when: "Each night of the Omer after nightfall. The words of the count itself change every night. If the night was missed, many count by day without the blessing. This is the blessing, not the full count.",
    source: "Leviticus 23:15–16. Traditional siddur. Menachot 66a.",
    audioSrc: null,
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
    audioSrc: null,
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
    audioSrc: null,
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
    audioSrc: null,
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
    audioSrc: null,
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
    audioSrc: null,
  },
  {
    id: "haderekh",
    title: "Traveler’s Prayer",
    hebrewTitle: "תפלת הדרך",
    category: "travel",
    hebrew:
      "יהי רצון מלפניך ה׳ אלהינו ואלהי אבותינו שתוליכנו לשלום ותצעידנו לשלום ותדריכנו לשלום ותגיענו למחוז חפצנו לחיים ולשמחה ולשלום. ותצילנו מכף כל אויב ואורב ולסטים וחיות רעות בדרך ומכל מיני פורעניות המתרגשות לבוא לעולם. ותשלח ברכה במעשי ידינו ותתננו לחן לחסד ולרחמים בעיניך ובעיני כל רואינו. ותשמע קול תחנונינו כי אל שומע תפלה ותחנון אתה. ברוך אתה ה׳ שומע תפלה.",
    transliteration:
      "Yehi ratzon milfanekha, Adonai Eloheinu veilohei avoteinu, shetolikheinu leshalom. … Barukh atah Adonai, shomei’a tefillah.",
    english:
      "May it be Your will, Lord our God and God of our ancestors, that You lead us in peace, guide our steps in peace, and bring us to our destination in life, joy, and peace. Rescue us from every enemy, ambush, bandit, and wild beast on the way, and from all kinds of disaster that rise in the world. Send blessing on the work of our hands, and grant us grace, kindness, and mercy in Your eyes and in the eyes of all who see us. Hear the voice of our pleading, for You are a God who hears prayer. Blessed are You, Lord, who hears prayer.",
    when: "At the start of a journey, traditionally once the city has been left. Many say it on planes and long road trips. Wording has several versions. It is a prayer, not a substitute for ordinary care on the road.",
    source: "Berakhot 29b–30a. Traditional siddur. Versions differ.",
    audioSrc: null,
  },
];

const PRAYER_WHY: Record<string, string> = {
  "modeh-ani":
    "These are often the first words of the day. Many communities say them before washing the hands because the traditional wording has no Divine Name. Sephardi wording differs slightly.",
  shema:
    "The Shema is a declaration of God’s oneness, and a command to love and teach. Covering the eyes for the first line is a widespread custom. This is the first biblical paragraph, not the whole recitation.",
  ashrei:
    "Ashrei is built on Psalm 145. The Talmud praises one who recites it three times a day. The traditional siddur has no nun verse; some modern editions restore one. Twice daily is a Talmudic teaching; a third recitation is later custom.",
  candles:
    "Kindling Shabbat light is a rabbinic mitzvah in traditional law. Many light, cover the eyes, then say the blessing. Who lights, and how many candles, follow household custom.",
  kiddush:
    "Kiddush sanctifies the day over wine or grape juice. Friday night has a longer text than daytime. Festival kiddush uses different words. Standing or sitting is a matter of custom.",
  havdalah:
    "Havdalah separates holy time from ordinary time. Wine, spices, and a multi-wick flame are used in many homes. Do not begin until Shabbat has ended in your location.",
  shehecheyanu:
    "Shehecheyanu marks firsts: a festival, a first fruit, a new garment in some communities. It is not typically said on Yom Kippur. When it is required is a matter of custom and law.",
  omer:
    "The Omer is counted from the second night of Pesach until Shavuot. The blessing is said at night if the count has not been missed. The day’s number comes from the calendar, not from this blessing alone.",
  hamotzi:
    "Hamotzi is said over bread from the five grains. Washing the hands first is traditional in many communities. Cake uses a different blessing (mezonot).",
  hagafen:
    "This blessing is said over wine and grape juice. It also opens kiddush and havdalah. Other drinks use shehakol.",
  haetz:
    "Said over fruit that grows on trees. Wine has its own blessing. What counts as a tree versus the ground is a halakhic question.",
  haadama:
    "Said over vegetables and produce of the ground. If bread is being eaten, hamotzi often covers the rest of the meal.",
  shehakol:
    "A general blessing for foods and drinks that do not have a more specific one. When unsure, many communities use this blessing.",
  haderekh:
    "A Talmudic prayer for the road. Many say it once the city has been left, including on planes. It is a prayer, not a substitute for ordinary care.",
};

export const PRAYERS: Prayer[] = RAW.map((p) => ({
  ...p,
  hebrew: withoutNikkud(p.hebrew),
  why: PRAYER_WHY[p.id] ?? "Customs of when and how this is said vary by community.",
}));

export const PRAYER_CATEGORIES: { id: PrayerCategory; label: string }[] = [
  { id: "daily", label: "Daily" },
  { id: "shabbat", label: "Shabbat" },
  { id: "food", label: "Food" },
  { id: "season", label: "Season" },
  { id: "travel", label: "Travel" },
];

export function prayerById(id: string): Prayer | undefined {
  return PRAYERS.find((p) => p.id === id);
}
