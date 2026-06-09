import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact et Rendez-vous",
  description:
    "Contactez la Clinique Cardiovasculaire Raphaeloise. Telephone, adresse, horaires et prise de rendez-vous. Pole Epsilon 3, Saint-Raphael.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="wave"
        title="Contact"
        subtitle="Une question, contactez-nous !"
      />

      <section className="pb-16 lg:pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Coordonnees */}
            <div>
              <span className="eyebrow mb-4 block text-xs text-cardinal">
                Secretariat
              </span>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-3">
                  <Phone
                    size={20}
                    strokeWidth={1.2}
                    className="mt-0.5 shrink-0 text-cardinal"
                  />
                  <div>
                    <p className="font-medium text-anthracite">Telephone</p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="body-l text-cardinal hover:text-rouge-profond"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    strokeWidth={1.2}
                    className="mt-0.5 shrink-0 text-cardinal"
                  />
                  <div>
                    <p className="font-medium text-anthracite">Adresse</p>
                    <address className="body-l not-italic text-gris-moyen">
                      Clinique Cardiovasculaire Raphaeloise
                      <br />
                      Pole Epsilon 3, Pole medical
                      <br />
                      87 Avenue Archimede, Batiment B, 2eme etage
                      <br />
                      83700 Saint-Raphael
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    size={20}
                    strokeWidth={1.2}
                    className="mt-0.5 shrink-0 text-cardinal"
                  />
                  <div>
                    <p className="font-medium text-anthracite">Horaires</p>
                    <p className="body-l text-gris-moyen">
                      Lundi — Vendredi : 8h30 - 18h30
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={siteConfig.rdvUrl}>
                  Prendre rendez-vous
                  <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
                </Button>
                <Button
                  variant="outline-anthracite"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${siteConfig.address.lat},${siteConfig.address.lng}`}
                >
                  <MapPin size={14} strokeWidth={1.2} className="mr-2" />
                  Itineraire
                </Button>
              </div>
            </div>

            {/* Google Maps */}
            <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-separateur lg:min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.5!2d6.7688!3d43.4253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce95f8b1a3f7e7%3A0x0!2s87%20Avenue%20Archim%C3%A8de%2C%2083700%20Saint-Rapha%C3%ABl!5e0!3m2!1sfr!2sfr!4v1700000000000"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinique Cardiovasculaire Raphaeloise — Google Maps"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Formulaire placeholder */}
      <section className="bg-perle py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="h2 mb-4 text-center">
              Envoyez-nous un message
            </h2>
            <p className="body-l mb-8 text-center text-gris-moyen">
              Pour toute question ou demande d&apos;information, remplissez le
              formulaire ci-dessous. Nous vous repondrons dans les meilleurs
              delais.
            </p>

            <form className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="nom"
                    className="mb-1 block text-[9.5px] font-semibold uppercase tracking-[0.08em] text-anthracite"
                  >
                    Nom <span className="text-cardinal">*</span>
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    className="w-full rounded-[var(--radius-btn)] border-[1.5px] border-separateur bg-blanc px-4 py-3 text-sm text-anthracite transition-all focus:border-anthracite focus:shadow-[0_0_0_3px_rgba(177,18,27,0.1)] focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="prenom"
                    className="mb-1 block text-[9.5px] font-semibold uppercase tracking-[0.08em] text-anthracite"
                  >
                    Prenom <span className="text-cardinal">*</span>
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    required
                    className="w-full rounded-[var(--radius-btn)] border-[1.5px] border-separateur bg-blanc px-4 py-3 text-sm text-anthracite transition-all focus:border-anthracite focus:shadow-[0_0_0_3px_rgba(177,18,27,0.1)] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-[9.5px] font-semibold uppercase tracking-[0.08em] text-anthracite"
                >
                  Email <span className="text-cardinal">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-[var(--radius-btn)] border-[1.5px] border-separateur bg-blanc px-4 py-3 text-sm text-anthracite transition-all focus:border-anthracite focus:shadow-[0_0_0_3px_rgba(177,18,27,0.1)] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="telephone"
                  className="mb-1 block text-[9.5px] font-semibold uppercase tracking-[0.08em] text-anthracite"
                >
                  Telephone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  className="w-full rounded-[var(--radius-btn)] border-[1.5px] border-separateur bg-blanc px-4 py-3 text-sm text-anthracite transition-all focus:border-anthracite focus:shadow-[0_0_0_3px_rgba(177,18,27,0.1)] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-[9.5px] font-semibold uppercase tracking-[0.08em] text-anthracite"
                >
                  Message <span className="text-cardinal">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-[var(--radius-btn)] border-[1.5px] border-separateur bg-blanc px-4 py-3 text-sm text-anthracite transition-all focus:border-anthracite focus:shadow-[0_0_0_3px_rgba(177,18,27,0.1)] focus:outline-none"
                />
              </div>

              <p className="text-[11px] text-gris-moyen">
                En soumettant ce formulaire, vous acceptez que vos donnees soient
                traitees conformement a notre politique de confidentialite (RGPD).
              </p>

              <div>
                <Button type="submit">
                  Envoyer
                  <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
