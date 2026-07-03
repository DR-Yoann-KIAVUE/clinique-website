"use client";

import { Button } from "@/components/ui/Button";
import { Threads } from "@/components/ui/Threads";
import { Stars } from "@/components/ui/Stars";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/content/site";
import RotatingText from "@/components/ui/RotatingText";
import {
  ArrowRight,
  MapPin,
  Phone,
  Stethoscope,
  Activity,
  ShieldCheck,
} from "lucide-react";

const pillars = [
  {
    icon: Stethoscope,
    label: "Consultations",
    desc: "Bilan cardiaque complet",
    href: "/consultations",
  },
  {
    icon: Activity,
    label: "Test VO2max",
    desc: "Performance & longevite",
    href: "/vo2max",
  },
  {
    icon: ShieldCheck,
    label: "Prevention",
    desc: "Anticiper pour proteger",
    href: "/prevention",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-blanc">
      {/* Threads background */}
      <Threads
        color={[1, 0, 0]}
        enableMouseInteraction={false}
        className="pointer-events-none absolute inset-0 top-[30%] h-[85%] w-full opacity-80"
      />

      {/* Main hero content */}
      <Container className="relative">
        <div className="grid items-start gap-10 pb-12 pt-16 lg:grid-cols-2 lg:gap-16 lg:pb-20 lg:pt-28">
          {/* Left — Content */}
          <div>
            <div className="flex items-center gap-2 text-gris-moyen">
              <MapPin size={14} strokeWidth={1.5} className="text-cardinal" />
              <span className="text-xs font-medium uppercase tracking-[0.1em]">
                Saint-Raphael — Var
              </span>
            </div>

            <h1 className="mt-6 font-display text-[36px] font-black leading-[1.04] tracking-tight text-anthracite sm:text-[46px] lg:text-[54px]">
              Votre sante
              <br />
              cardiovasculaire,
              <br />
              <span className="text-cardinal">notre expertise.</span>
            </h1>

            <div className="mt-6 h-8 overflow-hidden">
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
                mainClassName="font-display text-base font-semibold uppercase tracking-[0.1em] text-gris-moyen sm:text-lg"
              />
            </div>

            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-gris-moyen">
              La Clinique Cardiovasculaire Raphaeloise place la prevention,
              le diagnostic et le suivi cardiologique au coeur de chaque
              consultation. Une equipe dediee, un accompagnement sur mesure.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={siteConfig.rdvUrl}>
                Prendre rendez-vous
                <ArrowRight size={14} strokeWidth={1.5} className="ml-2" />
              </Button>
              <Button variant="outline-anthracite" href={`tel:${siteConfig.phone}`}>
                <Phone size={14} strokeWidth={1.5} className="mr-2" />
                {siteConfig.phoneDisplay}
              </Button>
            </div>

            {/* Trust bar */}
            <div className="mt-8 flex items-center gap-4 border-t border-separateur pt-6">
              <div className="flex items-center gap-2">
                <Stars rating={5} />
                <span className="text-xs font-medium text-anthracite">
                  4.9/5
                </span>
              </div>
              <span className="text-xs text-gris-moyen">
                {siteConfig.reviewCount} avis Google
              </span>
              <span className="hidden text-separateur sm:inline">|</span>
              <span className="hidden text-xs text-gris-moyen sm:inline">
                15+ ans d&apos;experience
              </span>
            </div>
          </div>

          {/* Right — Image composition */}
          <div className="relative hidden lg:block">
            {/* Main image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-card)] shadow-2xl shadow-anthracite/10">
              <img
                src="/images/consultation-website-v2.png"
                alt="Consultation cardiologique a la CCVR"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Floating secondary image */}
            <div className="absolute -bottom-8 -left-12 aspect-[4/3] w-[55%] overflow-hidden rounded-[var(--radius-card)] border-4 border-blanc shadow-xl shadow-anthracite/10">
              <img
                src="/images/vo2max-2.png"
                alt="Test VO2max"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

          </div>
        </div>
      </Container>

      {/* Bottom pillars */}
      <div className="relative border-t border-separateur bg-blanc/80 backdrop-blur-sm">
        <Container>
          <div className="grid grid-cols-3 divide-x divide-separateur">
            {pillars.map((pillar) => (
              <a
                key={pillar.label}
                href={pillar.href}
                className="group flex items-center gap-4 px-4 py-5 transition-colors hover:bg-perle lg:px-8 lg:py-7"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[7px] bg-teinte-chaude transition-colors group-hover:bg-cardinal/10 lg:h-12 lg:w-12">
                  <pillar.icon
                    size={20}
                    strokeWidth={1.3}
                    className="text-cardinal"
                  />
                </div>
                <div className="min-w-0">
                  <span className="block font-display text-[10px] font-bold uppercase tracking-[0.12em] text-anthracite lg:text-xs">
                    {pillar.label}
                  </span>
                  <span className="mt-0.5 hidden text-xs text-gris-moyen lg:block">
                    {pillar.desc}
                  </span>
                </div>
                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  className="ml-auto shrink-0 text-cardinal opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1"
                />
              </a>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
