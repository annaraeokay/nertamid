"use client";

import { Atmosphere } from "@/components/atmosphere";
import { Flame } from "@/components/flame";
import type { VisualState } from "@/lib/visual";

export function Stage({
  visual,
  still = false,
}: {
  visual: VisualState;
  still?: boolean;
}) {
  return (
    <div
      className="stage"
      data-mood={visual.mood}
      data-daypart={visual.daypart}
      data-motif={visual.motif}
    >
      <Atmosphere motif={visual.motif} lights={visual.lights} erev={visual.erev} />
      <Flame mood={visual.mood} erev={visual.erev} lights={visual.lights} still={still} />
    </div>
  );
}
