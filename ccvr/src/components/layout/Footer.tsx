"use client";

import { Container } from "./Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { siteConfig, footerNav, footerGeoLinks } from "@/content/site";
import { Phone, MapPin, ArrowRight } from "lucide-react";

function FooterWaves() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.07]">
      <svg
        viewBox="0 0 1600 900"
        fill="none"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {[
          { d: "M-200,200 C200,100 600,300 1000,150 C1400,0 1600,200 1800,100", o: 0.8, w: 2.5 },
          { d: "M-200,280 C200,180 600,380 1000,230 C1400,80 1600,280 1800,180", o: 0.6, w: 2 },
          { d: "M-200,360 C200,260 600,460 1000,310 C1400,160 1600,360 1800,260", o: 0.5, w: 2 },
          { d: "M-200,440 C200,340 600,540 1000,390 C1400,240 1600,440 1800,340", o: 0.4, w: 1.5 },
          { d: "M-200,520 C200,420 600,620 1000,470 C1400,320 1600,520 1800,420", o: 0.35, w: 1.5 },
          { d: "M-200,600 C200,500 600,700 1000,550 C1400,400 1600,600 1800,500", o: 0.3, w: 1 },
          { d: "M-200,680 C200,580 600,780 1000,630 C1400,480 1600,680 1800,580", o: 0.25, w: 1 },
          { d: "M-200,760 C200,660 600,860 1000,710 C1400,560 1600,760 1800,660", o: 0.2, w: 1 },
        ].map((line, i) => (
          <path
            key={i}
            d={line.d}
            stroke="#FFFFFF"
            strokeWidth={line.w}
            strokeLinecap="round"
            opacity={line.o}
            className="motion-safe:animate-[footerSway_8s_ease-in-out_infinite]"
            style={{ animationDelay: `${i * -1}s` }}
          />
        ))}
      </svg>

      <style>{`
        @keyframes footerSway {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-noir-profond">
      {/* Main card */}
      <div className="px-4 pt-10 sm:px-6 lg:px-8">
        <div
          className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[20px]"
          style={{
            background:
              "linear-gradient(135deg, #B1121B 0%, #8E0D15 40%, #6B0910 100%)",
          }}
        >
          <FooterWaves />

          <div className="relative px-8 py-12 lg:px-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1fr_auto]">
              {/* Brand + Contact */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <Logo className="h-10 w-10" />
                  <span className="font-display text-sm font-bold uppercase tracking-[0.1em] text-blanc">
                    CCVR
                  </span>
                </div>
                <p className="eyebrow text-xs text-blanc/80">Contact</p>
                <p className="body-m text-blanc/70">
                  Contactez-nous pour un suivi personnalise et une prise en
                  charge cardiovasculaire de qualite.
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-sm text-blanc/80 hover:text-blanc"
                >
                  <Phone size={14} strokeWidth={1.2} />
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              {/* Navigation */}
              <div>
                <p className="mb-4 font-display text-sm font-bold text-blanc">
                  Navigation
                </p>
                <nav className="flex flex-col gap-2.5" aria-label="Navigation pied de page">
                  {footerNav.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-sm text-blanc/70 transition-colors hover:text-blanc"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Geo links + extras */}
              <div>
                <p className="mb-4 font-display text-sm font-bold text-blanc">
                  Nous rejoindre
                </p>
                <nav className="flex flex-col gap-2.5" aria-label="Liens geographiques">
                  {footerGeoLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-blanc/70 transition-colors hover:text-blanc"
                    >
                      <MapPin size={12} strokeWidth={1.2} className="shrink-0" />
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="/consultations/examens"
                    className="text-sm text-blanc/70 transition-colors hover:text-blanc"
                  >
                    Nos Actes
                  </a>
                  <a
                    href="/mentions-legales"
                    className="text-sm text-blanc/50 transition-colors hover:text-blanc"
                  >
                    Mentions legales
                  </a>
                </nav>
              </div>

              {/* Adresse + RDV */}
              <div className="flex flex-col gap-5">
                <div>
                  <p className="mb-2 font-display text-sm font-bold text-blanc">
                    Adresse
                  </p>
                  <address className="text-sm not-italic leading-relaxed text-blanc/70">
                    Pole Epsilon III
                    <br />
                    87 Avenue Archimede
                    <br />
                    Batiment B, 2eme etage
                    <br />
                    83700 Saint-Raphael
                  </address>
                </div>
                <Button
                  href={siteConfig.rdvUrl}
                  variant="outline-white"
                >
                  Prendre rendez-vous
                  <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <Container>
        <div className="flex items-center justify-between py-6">
          <a
            href="/mentions-legales"
            className="text-xs text-blanc/30 transition-colors hover:text-blanc/60"
          >
            Mentions legales
          </a>
          <p className="text-xs text-blanc/30">
            &copy; {new Date().getFullYear()} Dr Yoann Kiavue. Tous droits reserves.
          </p>
        </div>
      </Container>
    </footer>
  );
}
