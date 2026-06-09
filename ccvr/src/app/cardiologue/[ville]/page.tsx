import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import { cities, siteConfig } from "@/content/site";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Navigation } from "lucide-react";

type Props = {
  params: Promise<{ ville: string }>;
};

export function generateStaticParams() {
  return cities.map((city) => ({ ville: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ville } = await params;
  const city = cities.find((c) => c.slug === ville);
  if (!city) return {};
  return {
    title: city.title,
    description: city.metaDescription,
    alternates: { canonical: `/cardiologue/${city.slug}` },
  };
}

export default async function CardiologueVillePage({ params }: Props) {
  const { ville } = await params;
  const city = cities.find((c) => c.slug === ville);
  if (!city) notFound();

  return (
    <>
      <PageHero
        ticker={`CARDIOLOGUE ${city.name.toUpperCase()}`}
        title={city.heroTitle}
        subtitle={city.heroSubtitle}
      >
        <div className="flex flex-col items-center gap-4">
          <p className="body-m text-gris-moyen">
            Dr Yoann Kiavue — Cardiologue
          </p>
          <Button href={siteConfig.rdvUrl}>
            Prendre rendez-vous
            <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
          </Button>
          <div className="flex items-center gap-2">
            <Stars rating={siteConfig.reviewRating} />
            <span className="body-m text-gris-moyen">
              {siteConfig.reviewCount} avis
            </span>
          </div>
        </div>
      </PageHero>

      {/* Localisation */}
      <section className="bg-perle py-12">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <h2 className="h2">Rendez-nous visite !</h2>
            <div className="flex items-start gap-2 text-gris-moyen">
              <MapPin
                size={18}
                strokeWidth={1.2}
                className="mt-0.5 shrink-0 text-cardinal"
              />
              <address className="body-l not-italic">
                87 Avenue Archimede
                <br />
                Pole Epsilon 3, Batiment B, 2eme etage
                <br />
                83700 Saint-Raphael
              </address>
            </div>
            <Button
              variant="outline-red"
              href={`https://www.google.com/maps/dir/?api=1&destination=${siteConfig.address.lat},${siteConfig.address.lng}`}
            >
              <Navigation size={14} strokeWidth={1.2} className="mr-2" />
              Itineraire depuis {city.name}
            </Button>
          </div>
        </Container>
      </section>

      {/* Content blocks */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col gap-10">
              {city.blocks.map((block) => (
                <div key={block.title}>
                  <h2 className="h2 mb-3">{block.title}</h2>
                  <p className="body-l text-gris-moyen">{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SEO text */}
      <section className="bg-perle py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="body-l text-gris-moyen">{city.seoText}</p>
            <div className="mt-8">
              <Button href={siteConfig.rdvUrl}>
                Prendre rendez-vous
                <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
