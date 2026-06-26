"use client";

import { Button } from "@/components/ui/Button";
import { WavyLines } from "@/components/ui/WavyLines";
import { TiltCard } from "@/components/ui/TiltCard";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/content/site";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-blanc pb-8 pt-12 lg:pb-12 lg:pt-20">
      <WavyLines />
      <Container className="relative">
        {/* Top — centered text */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-[32px] font-black leading-[1.08] tracking-tight text-anthracite sm:text-[42px] lg:text-[50px]">
            Votre sante au coeur
            <br />
            de notre priorite
          </h1>
          <p className="body-l mx-auto mt-5 max-w-lg text-gris-moyen">
            Faire reculer la mortalite cardiovasculaire en redefinissant la
            sante. Prevention, diagnostic et suivi cardiologique a
            Saint-Raphael.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={siteConfig.rdvUrl}>
              Prendre rendez-vous
            </Button>
            <Button variant="outline-anthracite" href="/consultations">
              Nos consultations
            </Button>
          </div>
        </div>

        {/* Bottom — 3-column bento grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {/* Card 1 — image */}
          <TiltCard>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-perle shadow-lg shadow-anthracite/5">
              <img
                src="/images/vo2max-2.png"
                alt="Test VO2max a la Clinique Cardiovasculaire Raphaeloise"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ transform: "translateZ(40px)" }}
              >
                <a
                  href="/vo2max"
                  className="rounded-full bg-blanc/90 px-5 py-2.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-anthracite shadow-lg backdrop-blur-sm transition-all hover:bg-blanc"
                >
                  Test VO2max
                </a>
              </div>
            </div>
          </TiltCard>

          {/* Card 2 — image */}
          <TiltCard>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-separateur shadow-lg shadow-anthracite/5">
              <img
                src="/images/consultation-website-v2.png"
                alt="Consultation cardiologique — auscultation au stethoscope"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ transform: "translateZ(40px)" }}
              >
                <a
                  href="/consultations"
                  className="rounded-full bg-blanc/90 px-5 py-2.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-anthracite shadow-lg backdrop-blur-sm transition-all hover:bg-blanc"
                >
                  Consultations
                </a>
              </div>
            </div>
          </TiltCard>

          {/* Card 3 — feature card */}
          <TiltCard className="col-span-2 lg:col-span-1">
            <div className="flex h-full flex-col justify-between rounded-[var(--radius-card)] bg-teinte-chaude p-6 shadow-lg shadow-anthracite/5 lg:aspect-[4/5] lg:p-8">
              <div>
                <h2 className="font-display text-[22px] font-bold leading-tight text-anthracite lg:text-[26px]">
                  Prevention
                  <br />
                  Cardiovasculaire
                </h2>
                <p className="body-m mt-3 text-gris-moyen">
                  8 infarctus sur 10 pourraient etre evites. Notre equipe vous
                  accompagne avec des bilans de risque et un suivi personnalise.
                </p>
              </div>
              <div className="mt-5">
                <a
                  href="/prevention"
                  className="inline-flex items-center gap-2 rounded-[var(--radius-btn)] bg-cardinal px-5 py-2.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-blanc transition-all duration-150 hover:-translate-y-px hover:bg-rouge-profond hover:shadow-sm"
                >
                  En savoir plus
                  <ArrowRight size={12} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </TiltCard>
        </div>
      </Container>
    </section>
  );
}
