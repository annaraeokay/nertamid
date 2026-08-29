import type { Motif } from "@/lib/visual";

export function Atmosphere({
  motif,
  lights = 0,
  erev = 0,
}: {
  motif: Motif;
  lights?: number;
  erev?: number;
}) {
  const night = Math.min(8, Math.max(0, lights)) / 8;
  return (
    <div className="atmosphere" aria-hidden="true">
      {motif === "moon" ? (
        <svg viewBox="0 0 200 200" className="atmosphere-svg">
          <circle cx="100" cy="100" r="62" fill="none" stroke="rgb(242 238 230 / 0.14)" strokeWidth="0.6" />
          <circle cx="108" cy="96" r="54" fill="none" stroke="rgb(242 238 230 / 0.08)" strokeWidth="0.5" />
        </svg>
      ) : null}
      {motif === "year" ? (
        <svg viewBox="0 0 200 200" className="atmosphere-svg">
          <circle cx="100" cy="108" r="78" fill="none" stroke="rgb(228 196 128 / 0.16)" strokeWidth="0.7" />
        </svg>
      ) : null}
      {motif === "braid" ? (
        <svg viewBox="0 0 200 220" className="atmosphere-svg atmosphere-braid">
          <path d="M100 40 C 78 80, 122 110, 100 150 C 80 178, 112 196, 100 214" fill="none" stroke="rgb(240 214 148 / 0.28)" strokeWidth="1.1" />
          <path d="M92 44 C 118 86, 76 118, 104 154 C 122 176, 90 198, 108 216" fill="none" stroke="rgb(232 200 120 / 0.2)" strokeWidth="1" />
          <path d="M108 42 C 86 88, 128 116, 96 156 C 78 180, 118 198, 94 214" fill="none" stroke="rgb(255 246 216 / 0.18)" strokeWidth="0.9" />
        </svg>
      ) : null}
      {motif === "sukkah" ? (
        <svg viewBox="0 0 220 180" className="atmosphere-svg">
          <path d="M20 40 L 200 52" fill="none" stroke="rgb(226 208 164 / 0.16)" strokeWidth="0.7" />
          <path d="M16 58 L 204 46" fill="none" stroke="rgb(226 208 164 / 0.1)" strokeWidth="0.6" />
          <path d="M24 72 L 196 66" fill="none" stroke="rgb(226 208 164 / 0.12)" strokeWidth="0.6" />
          <path d="M70 20 L 64 160" fill="none" stroke="rgb(226 208 164 / 0.08)" strokeWidth="0.5" />
          <path d="M150 18 L 158 162" fill="none" stroke="rgb(226 208 164 / 0.08)" strokeWidth="0.5" />
        </svg>
      ) : null}
      {motif === "open" ? <div className="atmosphere-open" /> : null}
      {motif === "manuscript" ? (
        <svg viewBox="0 0 180 160" className="atmosphere-svg">
          <path d="M36 40 H 144" stroke="rgb(246 236 212 / 0.16)" strokeWidth="0.6" />
          <path d="M36 58 H 144" stroke="rgb(246 236 212 / 0.1)" strokeWidth="0.5" />
          <path d="M36 76 H 128" stroke="rgb(246 236 212 / 0.1)" strokeWidth="0.5" />
          <path d="M36 94 H 144" stroke="rgb(246 236 212 / 0.08)" strokeWidth="0.5" />
          <path d="M36 112 H 110" stroke="rgb(246 236 212 / 0.08)" strokeWidth="0.5" />
          <rect x="28" y="28" width="124" height="108" fill="none" stroke="rgb(246 236 212 / 0.1)" strokeWidth="0.5" />
        </svg>
      ) : null}
      {motif === "quiet" ? <div className="atmosphere-quiet" /> : null}
      {motif === "rings" ? (
        <svg viewBox="0 0 200 200" className="atmosphere-svg">
          <circle cx="100" cy="112" r={36 + night * 22} fill="none" stroke={`rgb(240 216 140 / ${0.08 + night * 0.16})`} strokeWidth="0.8" />
          {night > 0.2 ? <circle cx="100" cy="112" r={52 + night * 18} fill="none" stroke={`rgb(240 216 140 / ${0.06 + night * 0.12})`} strokeWidth="0.6" /> : null}
          {night > 0.55 ? <circle cx="100" cy="112" r={70 + night * 10} fill="none" stroke={`rgb(255 236 180 / ${0.05 + night * 0.1})`} strokeWidth="0.5" /> : null}
        </svg>
      ) : null}
      {motif === "omer" ? (
        <svg viewBox="0 0 200 40" className="atmosphere-omer">
          {Array.from({ length: 7 }).map((_, i) => (
            <circle key={i} cx={20 + i * 26} cy="20" r="2.2" fill="rgb(242 238 230 / 0.28)" />
          ))}
        </svg>
      ) : null}
      {erev > 0.08 && motif === "none" ? <div className="atmosphere-gather" style={{ opacity: erev * 0.55 }} /> : null}
    </div>
  );
}
