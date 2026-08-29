"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { SourceLine } from "@/components/source-line";
import { cn } from "@/lib/cn";
import { seededShuffle, tehillahForDay } from "@/lib/tehillim";

const STREAK_KEY = "ner-tamid-tehillah";

type Save = {
  lastWinAbs: number | null;
  streak: number;
  wonAbs: number | null;
};

function loadSave(): Save {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return { lastWinAbs: null, streak: 0, wonAbs: null };
    const parsed = JSON.parse(raw) as Partial<Save>;
    return {
      lastWinAbs: typeof parsed.lastWinAbs === "number" ? parsed.lastWinAbs : null,
      streak: typeof parsed.streak === "number" ? parsed.streak : 0,
      wonAbs: typeof parsed.wonAbs === "number" ? parsed.wonAbs : null,
    };
  } catch {
    return { lastWinAbs: null, streak: 0, wonAbs: null };
  }
}

function writeSave(save: Save) {
  localStorage.setItem(STREAK_KEY, JSON.stringify(save));
}

export function TehillahGame({ absDay }: { absDay: number }) {
  const psalm = useMemo(() => tehillahForDay(absDay), [absDay]);
  const bank = useMemo(() => {
    const shuffled = seededShuffle(psalm.phrases, absDay * 1103515245 + 12345);
    if (shuffled.join("|") === psalm.phrases.join("|") && shuffled.length > 1) {
      const swapped = [...shuffled];
      const tmp = swapped[0];
      swapped[0] = swapped[swapped.length - 1];
      swapped[swapped.length - 1] = tmp;
      return swapped;
    }
    return shuffled;
  }, [psalm, absDay]);

  const [placed, setPlaced] = useState<string[]>([]);
  const [shake, setShake] = useState(0);
  const [save, setSave] = useState<Save>({ lastWinAbs: null, streak: 0, wonAbs: null });
  const alreadyWon = save.wonAbs === absDay;
  const won = alreadyWon || placed.length === psalm.phrases.length;

  useEffect(() => {
    setSave(loadSave());
    setPlaced([]);
    setShake(0);
  }, [absDay]);

  useEffect(() => {
    if (!won || alreadyWon) return;
    if (placed.length !== psalm.phrases.length) return;
    const prev = loadSave();
    const streak = prev.lastWinAbs === absDay - 1 ? prev.streak + 1 : 1;
    const next = { lastWinAbs: absDay, streak, wonAbs: absDay };
    writeSave(next);
    setSave(next);
  }, [won, alreadyWon, placed.length, psalm.phrases.length, absDay]);

  const remaining = bank.filter((p) => !placed.includes(p));

  function pick(phrase: string) {
    if (won) return;
    const nextIndex = placed.length;
    if (psalm.phrases[nextIndex] !== phrase) {
      setShake((n) => n + 1);
      return;
    }
    setPlaced((cur) => [...cur, phrase]);
  }

  function undo() {
    if (won && alreadyWon) return;
    if (won) return;
    setPlaced((cur) => cur.slice(0, -1));
  }

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-5 px-5 pb-8 pt-2">
      <header>
        <p className="font-sans text-xs font-medium tracking-widest text-muted uppercase">Daily Tehillah</p>
        <h1 className="mt-2 font-display text-2xl text-fg">Restore the verse</h1>
        <p className="mt-1 font-sans text-sm text-muted">
          Tap the lines in order. A new psalm each day.
        </p>
        <p className="mt-2 font-sans text-sm tabular-nums text-subtle">
          {save.streak > 0 ? `${save.streak} day streak` : "Build a streak"}
          <span> · {psalm.ref}</span>
        </p>
      </header>

      <section
        key={shake}
        className={cn(
          "min-h-36 rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]",
          shake > 0 && "tile-wrong",
        )}
        aria-live="polite"
      >
        {won ? (
          <ol className="flex flex-col gap-2">
            {psalm.phrases.map((line) => (
              <li key={line} className="font-display text-lg leading-snug text-fg">
                {line}
              </li>
            ))}
          </ol>
        ) : placed.length === 0 ? (
          <p className="font-sans text-sm text-subtle">The verse waits here.</p>
        ) : (
          <ol className="flex flex-col gap-2">
            {placed.map((line) => (
              <li key={line} className="font-display text-lg leading-snug text-fg">
                {line}
              </li>
            ))}
          </ol>
        )}
      </section>

      {won ? (
        <article className="rounded-xl bg-raised px-5 py-5 shadow-[var(--shadow-border)]">
          <p className="font-sans text-xs font-medium tracking-widest text-muted uppercase">Complete</p>
          <p className="mt-3 font-display text-xl leading-snug text-fg" dir="rtl" lang="he">
            {psalm.hebrew}
          </p>
          <p className="mt-4 font-sans text-base leading-relaxed text-fg">{psalm.english}</p>
          <p className="mt-3 font-sans text-sm text-muted">{psalm.ref}</p>
          <p className="mt-4 font-display text-base italic text-fg">Come back tomorrow for the next Tehillah.</p>
        </article>
      ) : (
        <div className="flex flex-col gap-2">
          {remaining.map((phrase) => (
            <button
              key={phrase}
              type="button"
              onClick={() => pick(phrase)}
              className="min-h-12 rounded-lg bg-surface px-4 py-3 text-left font-sans text-sm leading-snug text-fg shadow-[var(--shadow-border)] transition-transform duration-150 ease-out active:scale-[0.98]"
            >
              {phrase}
            </button>
          ))}
          {placed.length > 0 ? (
            <Button type="button" variant="ghost" onClick={undo} className="mt-1 self-start">
              Undo
            </Button>
          ) : null}
        </div>
      )}
      <SourceLine>Tehillim as commonly printed. English is a reading aid. A new verse each Hebrew day.</SourceLine>
    </div>
  );
}
