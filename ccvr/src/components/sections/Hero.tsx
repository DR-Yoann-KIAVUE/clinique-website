"use client";

import { Button } from "@/components/ui/Button";
import { Threads } from "@/components/ui/Threads";
import { Stars } from "@/components/ui/Stars";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/content/site";
import RotatingText from "@/components/ui/RotatingText";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-blanc pb-16 lg:pb-24">
      {/* Threads background */}
      <Threads
        color={[1, 0, 0]}
        enableMouseInteraction={false}
        className="pointer-events-none absolute inset-0 top-[40%] h-[70%] w-full opacity-60"
      />

      <Container className="relative">
        {/* Trust badge */}
        <div className="flex justify-center pt-16 lg:pt-24">
          <div className="inline-flex items-center gap-3 rounded-full border border-separateur bg-blanc/80 px-4 py-2 shadow-sm backdrop-blur-sm">
            <div className="flex -space-x-2">
              <img
                src="/images/DrYoannKiavue.png"
                alt=""
                className="h-7 w-7 rounded-full border-2 border-blanc object-cover"
              />
              <img
                src="/images/DrSergioCeraso.png"
                alt=""
                className="h-7 w-7 rounded-full border-2 border-blanc object-cover"
              />
              <img
                src="/images/julieFrachette.png"
                alt=""
                className="h-7 w-7 rounded-full border-2 border-blanc object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <Stars rating={5} />
              <span className="text-xs font-medium text-anthracite">
                {siteConfig.reviewCount}+ avis Google
              </span>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="mx-auto mt-8 max-w-4xl text-center lg:mt-10">
          <h1 className="font-display text-[36px] font-black leading-[1.04] tracking-tight text-anthracite sm:text-[48px] lg:text-[60px]">
            Votre sante cardiovasculaire,
            <br />
            <span className="text-cardinal">notre expertise.</span>
          </h1>

          {/* Rotating text */}
          <div className="mx-auto mt-5 flex h-8 items-center justify-center overflow-hidden">
            <RotatingText
              texts={[
                "Prevention cardiovasculaire",
                "Consultation cardiologique",
                "Test VO2max",
                "Echographie cardiaque",
                "Kinesitherapie respiratoire",
                "Suivi personnalise",
              ]}
              rotationInterval={3000}
              staggerDuration={0.02}
              staggerFrom="first"
              mainClassName="font-display text-base font-semibold uppercase tracking-[0.1em] text-gris-moyen sm:text-lg justify-center"
            />
          </div>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-gris-moyen">
            La Clinique Cardiovasculaire Raphaeloise place la prevention,
            le diagnostic et le suivi cardiologique au coeur de chaque
            consultation. Une equipe dediee, un accompagnement sur mesure.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={siteConfig.rdvUrl}>
              Prendre rendez-vous
              <ArrowRight size={14} strokeWidth={1.5} className="ml-2" />
            </Button>
            <Button variant="outline-anthracite" href={`tel:${siteConfig.phone}`}>
              <Phone size={14} strokeWidth={1.5} className="mr-2" />
              {siteConfig.phoneDisplay}
            </Button>
          </div>
        </div>

        {/* Floating badges */}
        <div className="pointer-events-none relative mx-auto mt-12 max-w-5xl lg:mt-16">
          {/* Left badge */}
          <div className="pointer-events-auto absolute -left-4 top-8 z-10 hidden rounded-2xl border border-separateur bg-blanc/90 p-3 shadow-lg backdrop-blur-sm lg:block xl:-left-12">
            <div className="flex items-center gap-3">
              <img
                src="/images/DrYoannKiavue.png"
                alt="Dr Kiavue"
                className="h-11 w-11 rounded-xl object-cover"
              />
              <div>
                <p className="text-xl font-black text-anthracite">15+</p>
                <p className="text-xs text-gris-moyen">Annees d&apos;experience</p>
              </div>
            </div>
          </div>

          {/* Right badge */}
          <div className="pointer-events-auto absolute -right-4 top-8 z-10 hidden rounded-2xl border border-separateur bg-blanc/90 p-3 shadow-lg backdrop-blur-sm lg:block xl:-right-12">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teinte-chaude">
                <span className="text-lg">❤️</span>
              </div>
              <div>
                <p className="text-xl font-black text-anthracite">10 000+</p>
                <p className="text-xs text-gris-moyen">Patients suivis</p>
              </div>
            </div>
          </div>

          {/* 3 image cards */}
          <div className="grid gap-4 sm:grid-cols-3">
            {/* Card 1 — Consultation */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] shadow-lg shadow-anthracite/10 sm:aspect-[3/4]">
              <img
                src="/images/consultation-website-v2.png"
                alt="Consultation cardiologique"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-profond/70 via-noir-profond/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-blanc/70">
                  Cardiologie
                </p>
                <p className="mt-1 font-display text-lg font-bold text-blanc">
                  Consultation &amp; diagnostic
                </p>
              </div>
            </div>

            {/* Card 2 — VO2max */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] shadow-lg shadow-anthracite/10 sm:aspect-[3/4]">
              <img
                src="/images/vo2max-2.png"
                alt="Test VO2max"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-profond/70 via-noir-profond/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-blanc/70">
                  Performance
                </p>
                <p className="mt-1 font-display text-lg font-bold text-blanc">
                  Test VO2max
                </p>
              </div>
            </div>

            {/* Card 3 — Equipe */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] shadow-lg shadow-anthracite/10 sm:aspect-[3/4]">
              <img
                src="/images/clinique.png"
                alt="La clinique CCVR"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-profond/70 via-noir-profond/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-blanc/70">
                  Prevention
                </p>
                <p className="mt-1 font-display text-lg font-bold text-blanc">
                  Accompagnement sur mesure
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
