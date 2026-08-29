"use client";

import { useMemo, useState } from "react";
import { pickN, shuffle, WORD_PAIRS } from "@/lib/aleph";
import { cn } from "@/lib/cn";

export function MatchGame({ absDay }: { absDay: number }) {
  const pairs = useMemo(() => pickN(WORD_PAIRS, 4, absDay + 3), [absDay]);
  const english = useMemo(() => shuffle(pairs.map((p) => p.english), absDay + 9), [pairs, absDay]);
  const [left, setLeft] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [wrong, setWrong] = useState(0);

  function pickHebrew(hebrew: string) {
    if (matched.includes(hebrew)) return;
    setLeft(hebrew);
  }

  function pickEnglish(en: string) {
    if (!left) return;
    const pair = pairs.find((p) => p.hebrew === left);
    if (pair?.english === en) {
      setMatched((m) => [...m, left]);
      setLeft(null);
    } else {
      setWrong((n) => n + 1);
      setLeft(null);
    }
  }

  const done = matched.length === pairs.length;

  return (
    <div className="mt-4 rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]">
      <p className="font-sans text-xs font-medium tracking-widest text-muted uppercase">Match the word</p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <ul className="flex flex-col gap-2">
          {pairs.map((p) => (
            <li key={p.hebrew}>
              <button
                type="button"
                disabled={matched.includes(p.hebrew)}
                onClick={() => pickHebrew(p.hebrew)}
                className={cn(
                  "h-11 w-full rounded-lg font-display text-lg shadow-[var(--shadow-border)]",
                  matched.includes(p.hebrew)
                    ? "bg-accent text-accent-fg"
                    : left === p.hebrew
                      ? "bg-raised text-fg"
                      : "bg-bg text-fg",
                )}
                lang="he"
              >
                {p.hebrew}
              </button>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2">
          {english.map((en) => {
            const taken = pairs.some((p) => p.english === en && matched.includes(p.hebrew));
            return (
              <li key={en}>
                <button
                  type="button"
                  disabled={taken || !left}
                  onClick={() => pickEnglish(en)}
                  className={cn(
                    "h-11 w-full rounded-lg font-sans text-sm shadow-[var(--shadow-border)]",
                    taken ? "bg-accent text-accent-fg" : "bg-bg text-fg",
                  )}
                >
                  {en}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="mt-3 font-sans text-sm text-muted">
        {done ? "Complete." : left ? "Now the English." : "Choose a Hebrew word."}
        {wrong ? ` · ${wrong} miss` : null}
      </p>
    </div>
  );
}

