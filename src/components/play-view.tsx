"use client";

import { LetterLessonGame } from "@/components/tet-game";
import { TehillahGame } from "@/components/tehillah-game";

export function PlayView({ absDay }: { absDay: number }) {
  return (
    <div className="flex flex-col gap-10 pb-8">
      <TehillahGame absDay={absDay} />
      <LetterLessonGame letterId="tet" />
    </div>
  );
}
