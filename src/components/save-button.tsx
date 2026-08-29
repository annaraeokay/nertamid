"use client";

import { Bookmark } from "lucide-react";
import { cn } from "@/lib/cn";
import { useAppStore, type Favorite } from "@/store/app-store";

export function SaveButton({ item, className }: { item: Favorite; className?: string }) {
  const toggle = useAppStore((s) => s.toggleFavorite);
  const saved = useAppStore((s) => s.favorites.some((f) => f.id === item.id));

  return (
    <button
      type="button"
      onClick={() => toggle(item)}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${item.title} from saved` : `Save ${item.title}`}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-md text-muted hover:bg-raised hover:text-fg",
        saved && "text-fg",
        className,
      )}
    >
      <Bookmark className="size-4" fill={saved ? "currentColor" : "none"} />
    </button>
  );
}
