function waitForVoices(): Promise<SpeechSynthesisVoice[]> {
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

function delay(ms: number) {
  return new Promise((r) => window.setTimeout(r, ms));
}

export function speechAvailable(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function hebrewForSpeech(hebrew: string): string {
  return hebrew.replaceAll("ה׳", "אדוני").replaceAll("׳", "");
}

function phrasesOf(text: string): string[] {
  return text
    .split(/\n+|(?<=[.,;])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export type SpeechHandle = {
  stop: () => void;
  done: Promise<void>;
};

export async function speakPrayer(opts: { hebrew: string; transliteration: string }): Promise<SpeechHandle> {
  const voices = await waitForVoices();
  const hebrewVoice =
    voices.find((v) => v.lang.toLowerCase().startsWith("he")) ??
    voices.find((v) => /hebrew|ivrit/i.test(`${v.lang} ${v.name}`));
  const en =
    voices.find((v) => v.lang.toLowerCase().startsWith("en") && v.localService) ??
    voices.find((v) => v.lang.toLowerCase().startsWith("en"));

  const useHebrew = Boolean(hebrewVoice);
  const raw = useHebrew ? hebrewForSpeech(opts.hebrew) : opts.transliteration.replaceAll("\n", ". ");
  const phrases = phrasesOf(raw);
  const chunks = phrases.length > 0 ? phrases : [raw];

  let stopped = false;
  window.speechSynthesis.cancel();
  await delay(50);

  const handle: SpeechHandle = {
    stop() {
      stopped = true;
      window.speechSynthesis.cancel();
    },
    done: Promise.resolve(),
  };

  handle.done = new Promise<void>((resolve, reject) => {
    const speakAt = (i: number) => {
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
      utter.rate = 0.64;
      utter.pitch = first ? 1.04 : last ? 0.86 : 0.96;
      utter.volume = 1;
      utter.onerror = () => {
        if (!stopped) reject(new Error("speech failed"));
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

export function stopSpeech() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
}
