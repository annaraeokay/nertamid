"use client";

import { useMemo, useState } from "react";
import { SourceLine } from "@/components/source-line";
import { letterLessonById } from "@/lib/letters";
import { cn } from "@/lib/cn";

type Step = "learn" | "find" | "name";

export function LetterLessonGame({ letterId = "tet" }: { letterId?: string }) {
  const lesson = useMemo(() => letterLessonById(letterId), [letterId]);
  const [step, setStep] = useState<Step>("learn");
  const [findPick, setFindPick] = useState<string | null>(null);
  const [namePick, setNamePick] = useState<string | null>(null);

  const findOptions = useMemo(
    () => [lesson.distractorChars[0], lesson.char, lesson.distractorChars[2], lesson.distractorChars[1]],
    [lesson],
  );
  const nameOptions = useMemo(
    () => [lesson.distractorNames[1], lesson.name, lesson.distractorNames[0], lesson.distractorNames[2]],
    [lesson],
  );

  const findCorrect = findPick === lesson.char;
  const nameCorrect = namePick === lesson.name;

  return (
    <section className="mx-auto w-full max-w-lg px-5">
      <header>
        <p className="font-sans text-xs font-medium tracking-widest text-muted uppercase">Hebrew letters</p>
        <h2 className="mt-2 font-display text-2xl text-fg">
          <span lang="he">{lesson.char}</span>
          <span> · {lesson.name}</span>
        </h2>
        <p className="mt-1 font-sans text-sm leading-relaxed text-muted">
          Learn the letter, then find it, then name it. Other letters can use this same path later.
        </p>
      </header>

      {step === "learn" ? (
        <div className="mt-4 rounded-xl bg-surface px-5 py-5 shadow-[var(--shadow-border)]">
          <p className="text-center font-display text-7xl leading-none text-fg" lang="he" aria-label={lesson.name}>
            {lesson.char}
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-fg">{lesson.pronunciation}</p>
          <p className="mt-3 font-sans text-sm leading-relaxed text-muted">{lesson.about}</p>
          <ul className="mt-4 flex flex-col gap-2">
            {lesson.words.map((w) => (
              <li key={w.hebrew} className="flex items-baseline justify-between gap-3">
                <span className="font-display text-xl text-fg" dir="rtl" lang="he">
                  {w.hebrew}
                </span>
                <span className="font-sans text-sm text-muted">
                  {w.translit} · {w.english}
                </span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setStep("find")}
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-raised px-4 font-sans text-sm text-fg shadow-[var(--shadow-border)]"
          >
            Find {lesson.name}
          </button>
        </div>
      ) : null}

      {step === "find" ? (
        <div className="mt-4 rounded-xl bg-surface px-5 py-5 shadow-[var(--shadow-border)]">
          <p className="font-sans text-sm text-fg">Which of these is {lesson.name}?</p>
          <div className="mt-4 grid grid-cols-2 gap-2" role="group" aria-label={`Choose the letter ${lesson.name}`}>
            {findOptions.map((ch) => {
              const selected = findPick === ch;
              const right = ch === lesson.char;
              return (
                <button
                  key={ch}
                  type="button"
                  onClick={() => setFindPick(ch)}
                  aria-pressed={selected}
                  className={cn(
                    "min-h-16 rounded-lg font-display text-4xl text-fg shadow-[var(--shadow-border)]",
                    selected && right && "bg-accent text-accent-fg",
                    selected && !right && "tile-wrong bg-raised opacity-70",
                    !selected && "bg-raised",
                  )}
                  lang="he"
                >
                  {ch}
                </button>
              );
            })}
          </div>
          {findPick ? (
            <p className="mt-3 font-sans text-sm text-muted" aria-live="polite">
              {findCorrect ? `Yes. This is ${lesson.name}.` : `Not that one. ${lesson.name} is ${lesson.char}.`}
            </p>
          ) : null}
          {findCorrect ? (
            <button
              type="button"
              onClick={() => setStep("name")}
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-raised px-4 font-sans text-sm text-fg shadow-[var(--shadow-border)]"
            >
              Name the letter
            </button>
          ) : null}
        </div>
      ) : null}

      {step === "name" ? (
        <div className="mt-4 rounded-xl bg-surface px-5 py-5 shadow-[var(--shadow-border)]">
          <p className="text-center font-display text-7xl leading-none text-fg" lang="he">
            {lesson.char}
          </p>
          <p className="mt-4 font-sans text-sm text-fg">What is this letter called?</p>
          <div className="mt-4 grid grid-cols-2 gap-2" role="group" aria-label="Choose the letter name">
            {nameOptions.map((n) => {
              const selected = namePick === n;
              const right = n === lesson.name;
              return (
                <button
                  key={n}
                  type="button"
                  onClick={() => setNamePick(n)}
                  aria-pressed={selected}
                  className={cn(
                    "min-h-11 rounded-lg font-sans text-sm text-fg shadow-[var(--shadow-border)]",
                    selected && right && "bg-accent text-accent-fg",
                    selected && !right && "tile-wrong bg-raised opacity-70",
                    !selected && "bg-raised",
                  )}
                >
                  {n}
                </button>
              );
            })}
          </div>
          {namePick ? (
            <p className="mt-3 font-sans text-sm text-muted" aria-live="polite">
              {nameCorrect ? `Yes. ${lesson.char} is ${lesson.name}.` : `This is ${lesson.name}.`}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-4">
        <SourceLine>{lesson.source}</SourceLine>
      </div>
    </section>
  );
}
