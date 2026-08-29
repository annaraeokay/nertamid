export function SourceLine({ children }: { children: string }) {
  return <p className="font-sans text-xs leading-relaxed text-subtle">Source: {children}</p>;
}
