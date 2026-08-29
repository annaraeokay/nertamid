"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { LETTERS, pickN, shuffle } from "@/lib/aleph";
import { cn } from "@/lib/cn";

export function LetterGame({ absDay }: { absDay: number }) {
  const round = useMemo(() => {
    const letter = pickN(LETTERS, 1, absDay + 11)[0];
    const distractors = pickN(
      LETTERS.filter((l) => l.name !== letter.name),
      3,
      absDay + 29,
    );
    return { letter, options: shuffle([letter, ...distractors], absDay + 47) };
  }, [absDay]);
  const [choice, setChoice] = useState<string | null>(null);
  const correct = choice === round.letter.name;

  return (
    <div className="mt-4 rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]">
      <p className="font-sans text-xs font-medium tracking-widest text-muted uppercase">Hebrew letters</p>
      <p className="mt-4 text-center font-display text-6xl text-fg" lang="he">
        {round.letter.char}
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {round.options.map((opt) => {
          const selected = choice === opt.name;
          const right = opt.name === round.letter.name;
          return (
            <Button
              key={opt.name}
              type="button"
              variant="outline"
              onClick={() => setChoice(opt.name)}
              className={cn(
                selected && right && "bg-accent text-accent-fg",
                selected && !right && "opacity-60",
              )}
            >
              {opt.name}
            </Button>
          );
        })}
      </div>
      {choice ? (
        <p className="mt-3 font-sans text-sm text-muted">{correct ? "Yes." : `This is ${round.letter.name}.`}</p>
      ) : null}
    </div>
  );
}
