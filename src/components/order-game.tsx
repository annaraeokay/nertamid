"use client";

import { useMemo, useState } from "react";
import { ORDER_PUZZLES, shuffle } from "@/lib/aleph";
import { cn } from "@/lib/cn";

export function OrderGame({ absDay }: { absDay: number }) {
  const puzzle = ORDER_PUZZLES[Math.abs(absDay) % ORDER_PUZZLES.length];
  const bank = useMemo(() => {
    const shuffled = shuffle(puzzle.pieces, absDay * 17 + 3);
    if (shuffled.join("|") === puzzle.pieces.join("|") && shuffled.length > 1) {
      const copy = [...shuffled];
      [copy[0], copy[copy.length - 1]] = [copy[copy.length - 1], copy[0]];
      return copy;
    }
    return shuffled;
  }, [puzzle, absDay]);
  const [placed, setPlaced] = useState<string[]>([]);
  const [shake, setShake] = useState(0);
  const won = placed.length === puzzle.pieces.length;
  const remaining = bank.filter((p) => !placed.includes(p));

  function pick(piece: string) {
    if (won) return;
    if (puzzle.pieces[placed.length] !== piece) {
      setShake((n) => n + 1);
      return;
    }
    setPlaced((cur) => [...cur, piece]);
  }

  return (
    <div className="mt-4 rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]">
      <p className="font-sans text-xs font-medium tracking-widest text-muted uppercase">Put it in order</p>
      <p className="mt-2 font-display text-lg text-fg">{puzzle.title}</p>
      <p className="font-sans text-sm text-muted">{puzzle.hint}</p>
      <p key={shake} className={cn("mt-3 min-h-12 font-sans text-sm leading-relaxed text-fg", shake ? "tile-wrong" : "")}>
        {placed.join(" ")}
        {won ? "" : placed.length ? " …" : "Tap the first piece."}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {remaining.map((piece) => (
          <button
            key={piece}
            type="button"
            onClick={() => pick(piece)}
            className="rounded-lg bg-raised px-3 py-2 font-sans text-sm text-fg shadow-[var(--shadow-border)]"
          >
            {piece}
          </button>
        ))}
      </div>
      {won ? <p className="mt-3 font-sans text-sm text-muted">Restored.</p> : null}
    </div>
  );
}
