"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Container } from "@/components/layout/Container";

const stats = [
  {
    target: 15,
    suffix: "+",
    label: "Annees d'experience en cardiologie et prevention cardiovasculaire",
    bg: "bg-[#faf5f5]",
  },
  {
    target: 10000,
    suffix: "+",
    format: true,
    label: "Patients suivis depuis la creation de la clinique",
    bg: "bg-[#faf5f5]",
  },
  {
    target: 4.9,
    suffix: "/5",
    decimals: 1,
    label: "Note Google sur 511 avis patients verifies",
    bg: "bg-[#faf5f5]",
  },
  {
    target: 48,
    suffix: "h",
    label: "Delai moyen de rendez-vous pour une consultation",
    bg: "bg-[#faf5f5]",
  },
];

function formatNumber(n: number, decimals = 0, format = false): string {
  const val = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
  if (format) {
    return Math.round(n).toLocaleString("fr-FR").replace(/\u202F/g, " ");
  }
  return val;
}

function CountUp({
  target,
  suffix,
  decimals = 0,
  format = false,
  running,
}: {
  target: number;
  suffix: string;
  decimals?: number;
  format?: boolean;
  running: boolean;
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    const duration = 1200;
    let start: number | null = null;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // ease-out quart
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(eased * target);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [target]);

  useEffect(() => {
    if (running) {
      animate();
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [running, animate]);

  return (
    <>
      {formatNumber(value, decimals, format)}
      {suffix}
    </>
  );
}

export function KpiBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-blanc py-16 lg:py-24">
      <Container>
        <h2 className="mx-auto mb-12 max-w-xl text-center font-display text-[28px] font-black leading-[1.1] tracking-tight text-anthracite sm:text-[36px] lg:text-[42px]">
          Des chiffres qui <em className="italic">parlent</em>
        </h2>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`flex flex-col justify-between rounded-[var(--radius-card)] p-5 lg:aspect-[4/4] lg:p-6 ${stat.bg}`}
            >
              <span className="font-display text-[28px] font-black leading-none tracking-tight sm:text-[34px] lg:text-[40px]">
                <CountUp
                  target={stat.target}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  format={stat.format}
                  running={visible}
                />
              </span>
              <p className="mt-auto pt-8 text-sm leading-snug opacity-60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
