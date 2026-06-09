"use client";

import { cn } from "@/lib/utils";

const text = "CONNAISSEZ-VOUS VOTRE VO2MAX ?";

export function Ticker() {
  return (
    <section className="overflow-hidden border-y border-separateur bg-perle py-4">
      <div
        className={cn(
          "flex gap-16 whitespace-nowrap",
          "motion-safe:animate-[ticker_20s_linear_infinite]"
        )}
      >
        {Array.from({ length: 8 }, (_, i) => (
          <span
            key={i}
            className="flex items-center gap-16 font-display text-sm font-black uppercase tracking-[0.1em] text-anthracite/30"
          >
            {text}
            <span className="text-cardinal" aria-hidden="true">
              &bull;
            </span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
