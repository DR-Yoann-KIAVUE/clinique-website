import { Container } from "./Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { siteConfig, footerNav, footerGeoLinks } from "@/content/site";
import { Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="py-12 text-blanc"
      style={{ background: "var(--gradient-nuit-cardinale)" }}
    >
      <Container>
        {/* Top band */}
        <div className="mb-10 border-b border-blanc/10 pb-10">
          <p className="mx-auto max-w-2xl text-center font-display text-lg font-bold text-blanc">
            Contact — Contactez-nous pour un suivi personnalise et une prise en
            charge cardiovasculaire de qualite.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <span className="font-display text-sm font-bold uppercase tracking-[0.1em]">
                CCVR
              </span>
            </div>
            <address className="flex flex-col gap-2 not-italic">
              <span className="body-m text-blanc/70">
                Pole Epsilon III
                <br />
                87 Avenue Archimede
                <br />
                Batiment B, 2eme etage
                <br />
                83700 Saint-Raphael
              </span>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 body-m text-blanc/70 hover:text-blanc"
              >
                <Phone size={14} strokeWidth={1.2} />
                {siteConfig.phoneDisplay}
              </a>
            </address>
          </div>

          {/* Plan du site */}
          <div>
            <h4 className="eyebrow mb-4 text-xs text-blanc/50">
              Plan du site
            </h4>
            <nav
              className="flex flex-col gap-2"
              aria-label="Navigation pied de page"
            >
              {footerNav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="body-m text-blanc/70 transition-colors hover:text-blanc"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Liens geographiques */}
          <div>
            <h4 className="eyebrow mb-4 text-xs text-blanc/50">
              Nous rejoindre
            </h4>
            <nav className="flex flex-col gap-2" aria-label="Liens geographiques">
              {footerGeoLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 body-m text-blanc/70 transition-colors hover:text-blanc"
                >
                  <MapPin size={12} strokeWidth={1.2} className="shrink-0" />
                  {link.label}
                </a>
              ))}
              <a
                href="/consultations/examens"
                className="body-m text-blanc/70 transition-colors hover:text-blanc"
              >
                Nos Actes
              </a>
            </nav>
          </div>

          {/* RDV + legales */}
          <div className="flex flex-col gap-4">
            <Button href={siteConfig.rdvUrl} className="w-full">
              Prendre rendez-vous
              <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
            </Button>
            <a
              href="/mentions-legales"
              className="body-m text-blanc/50 transition-colors hover:text-blanc"
            >
              Mentions legales
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-blanc/10 pt-6 text-center">
          <p className="text-xs text-blanc/40">
            &copy; {new Date().getFullYear()} Dr Yoann Kiavue. Tous droits
            reserves.
          </p>
        </div>
      </Container>
    </footer>
  );
}
