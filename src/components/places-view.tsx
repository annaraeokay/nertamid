"use client";

import { ArrowUpRight } from "lucide-react";
import { SaveButton } from "@/components/save-button";
import { SourceLine } from "@/components/source-line";
import { CHICAGO, MIKVAOT, NATIONAL, SYNAGOGUES, type Resource } from "@/lib/resources";
import { isChicagoland, type City } from "@/lib/locations";

export function PlacesView({ city }: { city: City }) {
  const local = isChicagoland(city.id);

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-5 px-5 pb-8 pt-2">
      <header>
        <h1 className="font-display text-2xl text-fg">Community</h1>
        <p className="mt-1 font-sans text-sm leading-relaxed text-muted">
          Official doors, not a map of Jewish homes. If you need people, start here.
        </p>
      </header>

      {local ? (
        <>
          <ResourceGroup title="Chicago and Skokie" items={CHICAGO} />
          <ResourceGroup title="Synagogues" items={SYNAGOGUES} />
          <ResourceGroup title="Mikvaot" items={MIKVAOT} />
        </>
      ) : (
        <p className="rounded-xl bg-surface px-4 py-4 font-sans text-sm leading-relaxed text-muted shadow-[var(--shadow-border)]">
          Local listings for {city.name} are not in this version yet. Use the national finders below rather than a guessed map.
        </p>
      )}

      <ResourceGroup title="Everywhere" items={NATIONAL} />
      <SourceLine>Public institution sites only. Confirm hours and access before you go.</SourceLine>
    </div>
  );
}

function ResourceGroup({ title, items }: { title: string; items: Resource[] }) {
  return (
    <section className="rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]">
      <h2 className="font-display text-lg text-fg">{title}</h2>
      <ul className="mt-3 flex flex-col gap-2">
        {items.map((r) => (
          <li key={r.id} className="flex items-stretch gap-1">
            <a
              href={r.href}
              target="_blank"
              rel="noreferrer"
              className="flex min-w-0 flex-1 items-start justify-between gap-3 rounded-lg bg-raised px-4 py-3"
            >
              <span className="min-w-0">
                <span className="block font-sans text-sm font-medium text-fg">{r.name}</span>
                <span className="mt-1 block font-sans text-sm leading-relaxed text-muted">{r.blurb}</span>
                {r.phone ? (
                  <span className="mt-1 block font-sans text-xs tabular-nums text-subtle">{r.phone}</span>
                ) : null}
              </span>
              <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted" />
            </a>
            <SaveButton
              item={{ id: `resource:${r.id}`, kind: "resource", title: r.name, subtitle: r.blurb }}
              className="self-center"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
