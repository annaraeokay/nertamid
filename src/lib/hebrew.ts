import { Locale } from "@hebcal/core";

export function withoutNikkud(text: string): string {
  return Locale.hebrewStripNikkud(text);
}
