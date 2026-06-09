"use client";

import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  ticker: string;
  title: string;
  subtitle?: string;
  accroche?: string;
  children?: React.ReactNode;
}

export function PageHero({ ticker, title, subtitle, accroche, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-blanc pb-16 pt-8">
      {/* Ticker band */}
      <div className="mb-10 overflow-hidden border-y border-separateur bg-perle py-3">
        <div
          className={cn(
            "flex gap-12 whitespace-nowrap",
            "motion-safe:animate-[ticker_20s_linear_infinite]"
          )}
        >
          {Array.from({ length: 8 }, (_, i) => (
            <span
              key={i}
              className="font-display text-sm font-black uppercase tracking-[0.1em] text-anthracite/10"
            >
              {ticker}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes ticker {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="h1">{title}</h1>
          {subtitle && (
            <p className="body-l mx-auto mt-6 max-w-2xl text-gris-moyen">
              {subtitle}
            </p>
          )}
          {accroche && (
            <p className="mt-4 text-lg font-medium text-cardinal">
              {accroche}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
