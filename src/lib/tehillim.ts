import { withoutNikkud } from "@/lib/hebrew";

export type Tehillah = {
  id: string;
  ref: string;
  hebrew: string;
  english: string;
  phrases: string[];
};

export const TEHILLIM: Tehillah[] = [
  {
    id: "psalm-27",
    ref: "Psalm 27:1",
    hebrew: "ה׳ אוֹרִי וְיִשְׁעִי מִמִּי אִירָא. ה׳ מָעוֹז חַיַּי מִמִּי אֶפְחָד.",
    english: "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?",
    phrases: [
      "The Lord is my light and my salvation",
      "whom shall I fear?",
      "The Lord is the stronghold of my life",
      "of whom shall I be afraid?",
    ],
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
      "maker of heaven and earth",
    ],
  },
  {
    id: "psalm-23",
    ref: "Psalm 23:4",
    hebrew: "גַּם כִּי אֵלֵךְ בְּגֵיא צַלְמָוֶת לֹא אִירָא רָע כִּי אַתָּה עִמָּדִי.",
    english: "Though I walk through a valley of deep darkness, I will fear no evil, for You are with me.",
    phrases: [
      "Though I walk through a valley of deep darkness",
      "I will fear no evil",
      "for You are with me",
    ],
  },
  {
    id: "psalm-46",
    ref: "Psalm 46:2",
    hebrew: "אֱלֹהִים לָנוּ מַחֲסֶה וָעֹז עֶזְרָה בְצָרוֹת נִמְצָא מְאֹד.",
    english: "God is our refuge and strength, a very present help in trouble.",
    phrases: ["God is our refuge and strength", "a very present help in trouble"],
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
      "my refuge and my fortress",
    ],
  },
  {
    id: "psalm-16",
    ref: "Psalm 16:8",
    hebrew: "שִׁוִּיתִי ה׳ לְנֶגְדִּי תָמִיד כִּי מִימִינִי בַּל אֶמּוֹט.",
    english: "I have set the Lord always before me; because He is at my right hand, I will not be shaken.",
    phrases: ["I have set the Lord always before me", "because He is at my right hand", "I will not be shaken"],
  },
  {
    id: "psalm-30",
    ref: "Psalm 30:6",
    hebrew: "בָּעֶרֶב יָלִין בֶּכִי וְלַבֹּקֶר רִנָּה.",
    english: "Weeping may tarry for the night, but joy comes with the morning.",
    phrases: ["Weeping may tarry for the night", "but joy comes with the morning"],
  },
  {
    id: "psalm-34",
    ref: "Psalm 34:9",
    hebrew: "טַעֲמוּ וּרְאוּ כִּי טוֹב ה׳ אַשְׁרֵי הַגֶּבֶר יֶחֱסֶה בּוֹ.",
    english: "Taste and see that the Lord is good; happy is the one who takes refuge in Him.",
    phrases: ["Taste and see that the Lord is good", "happy is the one who takes refuge in Him"],
  },
  {
    id: "psalm-118",
    ref: "Psalm 118:24",
    hebrew: "זֶה הַיּוֹם עָשָׂה ה׳ נָגִילָה וְנִשְׂמְחָה בוֹ.",
    english: "This is the day the Lord has made; let us rejoice and be glad in it.",
    phrases: ["This is the day the Lord has made", "let us rejoice and be glad in it"],
  },
  {
    id: "psalm-126",
    ref: "Psalm 126:5",
    hebrew: "הַזֹּרְעִים בְּדִמְעָה בְּרִנָּה יִקְצֹרוּ.",
    english: "Those who sow in tears will reap with songs of joy.",
    phrases: ["Those who sow in tears", "will reap with songs of joy"],
  },
  {
    id: "psalm-130",
    ref: "Psalm 130:1–2",
    hebrew: "מִמַּעֲמַקִּים קְרָאתִיךָ ה׳. אֲדֹנָי שִׁמְעָה בְקוֹלִי.",
    english: "Out of the depths I call to You, O Lord. Lord, hear my voice.",
    phrases: ["Out of the depths I call to You, O Lord", "Lord, hear my voice"],
  },
  {
    id: "psalm-90",
    ref: "Psalm 90:12",
    hebrew: "לִמְנוֹת יָמֵינוּ כֵּן הוֹדַע וְנָבִא לְבַב חָכְמָה.",
    english: "Teach us to number our days, that we may get a heart of wisdom.",
    phrases: ["Teach us to number our days", "that we may get a heart of wisdom"],
  },
  {
    id: "psalm-92",
    ref: "Psalm 92:2",
    hebrew: "טוֹב לְהֹדוֹת לַה׳ וּלְזַמֵּר לְשִׁמְךָ עֶלְיוֹן.",
    english: "It is good to give thanks to the Lord, to sing praises to Your name, O Most High.",
    phrases: ["It is good to give thanks to the Lord", "to sing praises to Your name, O Most High"],
  },
  {
    id: "psalm-150",
    ref: "Psalm 150:6",
    hebrew: "כֹּל הַנְּשָׁמָה תְּהַלֵּל יָהּ הַלְלוּ יָהּ.",
    english: "Let everything that has breath praise the Lord. Hallelujah.",
    phrases: ["Let everything that has breath praise the Lord", "Hallelujah"],
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
      "O Lord, my rock and my redeemer",
    ],
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
      "from now and forever",
    ],
  },
];

export function tehillahForDay(absDay: number): Tehillah {
  const raw = TEHILLIM[Math.abs(absDay) % TEHILLIM.length];
  return { ...raw, hebrew: withoutNikkud(raw.hebrew) };
}

export function seededShuffle<T>(items: T[], seed: number): T[] {
  const out = [...items];
  let a = seed | 0;
  for (let i = out.length - 1; i > 0; i--) {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    const r = ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    const j = Math.floor(r * (i + 1));
    const tmp = out[i];
    out[i] = out[j];
    out[j] = tmp;
  }
  return out;
}
