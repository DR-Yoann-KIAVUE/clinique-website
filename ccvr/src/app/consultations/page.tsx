import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import { ArrowRight, Stethoscope, MapPin, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Consultations Cardiologie",
  description:
    "Consultations cardiologiques a Saint-Raphael, Frejus et dans le Var. Equipe specialisee en maladies cardiovasculaires. Ecoute, bienveillance et expertise medicale.",
  alternates: { canonical: "/consultations" },
};

export default function ConsultationsPage() {
  return (
    <>
      <PageHero
        variant="flow"
        title="Consultations Cardiologie"
        subtitle="La Clinique Cardiovasculaire Raphaeloise, situee a Saint-Raphael et facilement accessible depuis Frejus et l'ensemble du Var, est exclusivement specialisee en maladies cardiovasculaires. Notre equipe de cardiologues et d'infirmieres specialisees vous accueille pour des consultations de qualite, fondees sur l'ecoute, la bienveillance et l'expertise medicale."
        accroche="Consultations cardiologiques uniquement — pas d'actes techniques ni d'hospitalisation."
      >
        <Button href={siteConfig.rdvUrl}>
          Prendre rendez-vous
          <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
        </Button>
      </PageHero>

      {/* Prise en charge globale */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="h2">
                Une prise en charge globale de votre sante cardiaque
              </h2>
              <div className="mt-6 flex flex-col gap-4 body-l text-gris-moyen">
                <p>
                  A la CCVR, chaque consultation debute par un temps d&apos;ecoute
                  prolonge. Le Dr Kiavue et le Dr Ceraso prennent le temps de
                  comprendre votre histoire medicale, vos symptomes, votre mode
                  de vie et vos inquietudes avant de proceder a l&apos;examen
                  clinique.
                </p>
                <p>
                  La consultation cardiologique comprend un examen clinique
                  complet, un electrocardiogramme de repos et, si necessaire,
                  une echographie cardiaque realisee sur place. Chaque resultat
                  vous est explique en detail, avec des termes clairs et
                  accessibles.
                </p>
                <p>
                  Notre objectif : que vous repartiez avec une comprehension
                  claire de votre etat de sante cardiaque et un plan de suivi
                  adapte a votre situation.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4 rounded-[var(--radius-card)] bg-perle p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[7px] bg-teinte-chaude">
                  <Stethoscope size={24} strokeWidth={1.2} className="text-cardinal" />
                </div>
                <div>
                  <h3 className="h3">Expertise cardiologique</h3>
                  <p className="body-m mt-2 text-gris-moyen">
                    Deux cardiologues experimentes, une equipe d&apos;infirmieres
                    specialisees et des equipements de pointe dedies a votre
                    diagnostic.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-[var(--radius-card)] bg-perle p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[7px] bg-teinte-chaude">
                  <MapPin size={24} strokeWidth={1.2} className="text-cardinal" />
                </div>
                <div>
                  <h3 className="h3">Saint-Raphael, Frejus, Var</h3>
                  <p className="body-m mt-2 text-gris-moyen">
                    Situee au Pole Epsilon 3 de Saint-Raphael, la clinique est
                    facilement accessible depuis Frejus, Puget-sur-Argens et
                    l&apos;ensemble du Var.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-[var(--radius-card)] bg-perle p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[7px] bg-teinte-chaude">
                  <ShieldCheck size={24} strokeWidth={1.2} className="text-cardinal" />
                </div>
                <div>
                  <h3 className="h3">Prevention avant tout</h3>
                  <p className="body-m mt-2 text-gris-moyen">
                    La CCVR place la prevention cardiovasculaire au coeur de
                    chaque consultation. Anticiper, depister, accompagner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Liste des examens */}
      <section className="bg-perle py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="h2">Nos examens cardiologiques</h2>
            <p className="body-l mt-4 text-gris-moyen">
              La clinique propose une gamme complete d&apos;examens realises sur
              place, du bilan de base aux explorations specialisees.
            </p>
            <div className="mt-8">
              <Button variant="outline-red" href="/consultations/examens">
                Voir tous nos actes
                <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-cardinal py-12">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="font-display text-[28px] font-bold text-blanc">
              Prenez rendez-vous
            </h2>
            <p className="body-l text-blanc/80">
              Consultation cardiologique a Saint-Raphael. Du lundi au vendredi,
              de 8h30 a 18h30.
            </p>
            <Button
              variant="outline-white"
              href={siteConfig.rdvUrl}
            >
              Prendre rendez-vous
              <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
