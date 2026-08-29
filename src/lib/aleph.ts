export type HebrewLetter = {
  char: string;
  name: string;
};

export const LETTERS: HebrewLetter[] = [
  { char: "א", name: "Alef" },
  { char: "ב", name: "Bet" },
  { char: "ג", name: "Gimel" },
  { char: "ד", name: "Dalet" },
  { char: "ה", name: "He" },
  { char: "ו", name: "Vav" },
  { char: "ז", name: "Zayin" },
  { char: "ח", name: "Chet" },
  { char: "ט", name: "Tet" },
  { char: "י", name: "Yod" },
  { char: "כ", name: "Kaf" },
  { char: "ל", name: "Lamed" },
  { char: "מ", name: "Mem" },
  { char: "נ", name: "Nun" },
  { char: "ס", name: "Samekh" },
  { char: "ע", name: "Ayin" },
  { char: "פ", name: "Pe" },
  { char: "צ", name: "Tsadi" },
  { char: "ק", name: "Qof" },
  { char: "ר", name: "Resh" },
  { char: "ש", name: "Shin" },
  { char: "ת", name: "Tav" },
];

export type WordPair = {
  hebrew: string;
  english: string;
};

export const WORD_PAIRS: WordPair[] = [
  { hebrew: "שלום", english: "peace" },
  { hebrew: "אור", english: "light" },
  { hebrew: "שבת", english: "Sabbath" },
  { hebrew: "תורה", english: "Torah" },
  { hebrew: "חסד", english: "kindness" },
  { hebrew: "נר", english: "lamp" },
  { hebrew: "חיים", english: "life" },
  { hebrew: "בית", english: "house" },
  { hebrew: "מים", english: "water" },
  { hebrew: "לחם", english: "bread" },
];

export type OrderPuzzle = {
  id: string;
  title: string;
  hint: string;
  pieces: string[];
};

export const ORDER_PUZZLES: OrderPuzzle[] = [
  {
    id: "modeh",
    title: "Modeh Ani",
    hint: "The waking prayer, in English.",
    pieces: ["I thank You", "living King", "You restored my soul", "Great is Your faithfulness"],
  },
  {
    id: "shema-line",
    title: "Shema",
    hint: "The first line.",
    pieces: ["Hear, O Israel", "the Lord is our God", "the Lord is one"],
  },
  {
    id: "hamotzi",
    title: "Hamotzi",
    hint: "The blessing over bread, in English.",
    pieces: ["Blessed are You", "Lord our God", "who brings forth bread", "from the earth"],
  },
];

export function mulberry(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function pickN<T>(items: T[], n: number, seed: number): T[] {
  const rand = mulberry(seed);
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

export function shuffle<T>(items: T[], seed: number): T[] {
  return pickN(items, items.length, seed);
}
