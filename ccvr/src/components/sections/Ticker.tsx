"use client";

import { cn } from "@/lib/utils";

const text = "CONNAISSEZ-VOUS VOTRE VO2MAX ?";

export function Ticker() {
  const items = Array.from({ length: 12 }, (_, i) => (
    <span
      key={i}
      className="shrink-0 flex items-center gap-12 font-display text-xs font-medium uppercase tracking-[0.15em] text-cardinal/50"
    >
      {text}
      <span aria-hidden="true">&bull;</span>
    </span>
  ));

  return (
    <section className="overflow-hidden py-4">
      <div
        className={cn(
          "flex w-max gap-12",
          "motion-safe:animate-[ticker_25s_linear_infinite]"
        )}
      >
        {items}
        {items}
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
