export type LetterWord = {
  hebrew: string;
  translit: string;
  english: string;
};

export type LetterLesson = {
  id: string;
  char: string;
  name: string;
  pronunciation: string;
  about: string;
  words: LetterWord[];
  distractorNames: string[];
  distractorChars: string[];
  source: string;
};

export const LETTER_LESSONS: LetterLesson[] = [
  {
    id: "tet",
    char: "ט",
    name: "Tet",
    pronunciation: "A hard t, as in “tall.” In modern Israeli Hebrew it sounds like tav. Some Ashkenazi traditions keep a distinction.",
    about:
      "Tet is the ninth letter. Its name is tet. It often carries the sense of “good” in Hebrew words. This is letter recognition, not a full grammar lesson.",
    words: [
      { hebrew: "טוב", translit: "tov", english: "good" },
      { hebrew: "טל", translit: "tal", english: "dew" },
      { hebrew: "טבע", translit: "teva", english: "nature" },
    ],
    distractorNames: ["Tav", "Dalet", "Chet"],
    distractorChars: ["ת", "ד", "ח"],
    source: "Standard Hebrew alphabet. Pronunciation notes follow common teaching, not a posek.",
  },
];

export function letterLessonById(id: string): LetterLesson {
  return LETTER_LESSONS.find((l) => l.id === id) ?? LETTER_LESSONS[0];
}
