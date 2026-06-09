import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { cities, siteConfig } from "@/content/site";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Cardiologue - Zones desservies",
  description:
    "Trouvez votre cardiologue a Saint-Raphael, Frejus et Puget-sur-Argens. Dr. Yoann Kiavue, Clinique Cardiovasculaire Raphaeloise.",
  alternates: { canonical: "/cardiologue" },
};

export default function CardiologuePage() {
  return (
    <>
      <PageHero
        variant="flow"
        title="Votre cardiologue a proximite"
        subtitle="La Clinique Cardiovasculaire Raphaeloise est facilement accessible depuis Saint-Raphael, Frejus et Puget-sur-Argens."
      />

      <section className="pb-16 lg:pb-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <a
                key={city.slug}
                href={`/cardiologue/${city.slug}`}
                className="group flex flex-col gap-4 rounded-[var(--radius-card)] border border-separateur bg-blanc p-6 transition-all duration-[180ms] hover:-translate-y-[3px] hover:border-cardinal hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[7px] bg-teinte-chaude">
                  <MapPin
                    size={24}
                    strokeWidth={1.2}
                    className="text-cardinal"
                  />
                </div>
                <h2 className="h2">{city.title}</h2>
                <p className="body-m text-gris-moyen">
                  {city.heroSubtitle}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 font-display font-bold text-[10px] uppercase tracking-[0.14em] text-cardinal">
                  En savoir plus
                  <ArrowRight
                    size={14}
                    strokeWidth={1.2}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12 rounded-[var(--radius-card)] bg-perle p-8 text-center">
            <p className="body-l text-gris-moyen">
              <strong className="text-anthracite">Adresse :</strong>{" "}
              {siteConfig.address.full}
            </p>
            <p className="body-m mt-2 text-gris-moyen">
              Telephone :{" "}
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-cardinal hover:text-rouge-profond"
              >
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
