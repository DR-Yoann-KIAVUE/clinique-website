"use client";

import { cn } from "@/lib/utils";

const questions = [
  "Connaissez-vous votre VO2max ?",
  "Avez-vous fait un bilan cardiaque cette annee ?",
  "Savez-vous si votre coeur est adapte a votre sport ?",
  "Connaissez-vous vos facteurs de risque cardiovasculaire ?",
  "Votre tension arterielle est-elle dans les normes ?",
  "Combien de pas faites-vous par jour ?",
  "Dormez-vous suffisamment pour proteger votre coeur ?",
  "Un de vos proches a-t-il eu un accident cardiaque avant 60 ans ?",
  "Savez-vous que 8 infarctus sur 10 pourraient etre evites ?",
  "Quel age a votre coeur ?",
];

export function Ticker() {
  const items = questions.map((q, i) => (
    <span
      key={i}
      className="shrink-0 flex items-center gap-12 font-display text-xs font-medium uppercase tracking-[0.15em] text-cardinal/50"
    >
      {q}
      <span aria-hidden="true">&bull;</span>
    </span>
  ));

  return (
    <section className="overflow-hidden py-4">
      <div
        className={cn(
          "flex w-max gap-12",
          "motion-safe:animate-[ticker_60s_linear_infinite]"
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
