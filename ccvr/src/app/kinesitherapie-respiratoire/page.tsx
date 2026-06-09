import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { siteConfig, testimonials } from "@/content/site";
import { ArrowRight, Wind, Stethoscope, ShieldCheck, HeartPulse } from "lucide-react";

export const metadata: Metadata = {
  title: "Kinesitherapie respiratoire - Saint-Raphael, Frejus",
  description:
    "Kinesitherapie respiratoire a Saint-Raphael et Frejus. Julie Frachette, kinesitherapeute specialisee. BPCO, asthme, rehabilitation post-COVID, drainage bronchique.",
  alternates: { canonical: "/kinesitherapie-respiratoire" },
};

export default function KinesitherapieRespiratoire() {
  return (
    <>
      <PageHero
        ticker="KINESITHERAPIE RESPIRATOIRE"
        title="Kinesitherapie Respiratoire"
        subtitle="Kinesitherapie respiratoire a la Clinique Cardiovasculaire Raphaeloise : Respirez mieux, vivez mieux."
      />

      {/* Introduction */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow text-xs text-cardinal">
                Un accompagnement expert
              </span>
              <h2 className="h2 mt-3">
                Un accompagnement expert pour vos poumons
              </h2>
              <div className="mt-6 flex flex-col gap-4 body-l text-gris-moyen">
                <p>
                  La kinesitherapie respiratoire est une specialite medicale
                  dediee a la prise en charge des maladies pulmonaires
                  chroniques, des infections respiratoires, de la
                  rehabilitation post-COVID et post-chirurgicale.
                </p>
                <p>
                  Au sein de la CCVR, cette specialite est assuree par{" "}
                  <strong className="text-anthracite">Julie Frachette</strong>,
                  kinesitherapeute diplomee, specialisee en rehabilitation
                  respiratoire. Son approche allie expertise technique et
                  accompagnement personnalise pour chaque patient.
                </p>
              </div>
              <div className="mt-8">
                <Button href={siteConfig.rdvUrl}>
                  Je prends rendez-vous avec Julie Frachette
                  <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] bg-perle">
              <div className="absolute inset-0 flex items-center justify-center text-gris-moyen">
                <span className="body-m">Photo Julie Frachette</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pourquoi consulter ? */}
      <section className="bg-perle py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="h2 mb-4 text-center">
              Pourquoi consulter en kinesitherapie respiratoire ?
            </h2>
            <p className="body-l mb-10 text-center text-gris-moyen">
              La kinesitherapie respiratoire s&apos;adresse aux patients
              souffrant de pathologies respiratoires aiguës ou chroniques.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Wind,
                  title: "BPCO",
                  text: "Prise en charge de la bronchopneumopathie chronique obstructive : desencombrement, renforcement musculaire respiratoire, readaptation a l'effort.",
                },
                {
                  icon: HeartPulse,
                  title: "Asthme",
                  text: "Techniques de controle respiratoire, gestion des crises, renforcement de la capacite pulmonaire.",
                },
                {
                  icon: ShieldCheck,
                  title: "Sequelles COVID",
                  text: "Rehabilitation respiratoire post-COVID : recuperation de la capacite pulmonaire, desaturation a l'effort, fatigue chronique.",
                },
                {
                  icon: Stethoscope,
                  title: "Bronchite chronique",
                  text: "Drainage bronchique, techniques d'expectoration, prevention des surinfections et amelioration de la qualite de vie.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-[var(--radius-card)] bg-blanc p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[7px] bg-teinte-chaude">
                    <item.icon size={24} strokeWidth={1.2} className="text-cardinal" />
                  </div>
                  <div>
                    <h3 className="h3">{item.title}</h3>
                    <p className="body-m mt-2 text-gris-moyen">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Techniques / Soins */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="h2 mb-6 text-center">Nos techniques</h2>
            <div className="flex flex-col gap-4 body-l text-gris-moyen">
              <p>
                Julie Frachette utilise un ensemble de techniques adaptees a
                chaque patient et a chaque pathologie :
              </p>
              <ul className="ml-6 flex flex-col gap-2 list-disc">
                <li>
                  <strong className="text-anthracite">Rehabilitation respiratoire</strong> :
                  programme progressif de reactivation musculaire et
                  cardiovasculaire, adapte au niveau du patient.
                </li>
                <li>
                  <strong className="text-anthracite">Drainage bronchique</strong> :
                  techniques manuelles et instrumentales pour faciliter
                  l&apos;evacuation des secretions et ameliorer la ventilation.
                </li>
                <li>
                  <strong className="text-anthracite">Exercices de ventilation dirigee</strong> :
                  apprentissage de la respiration diaphragmatique, travail de la
                  capacite inspiratoire et expiratoire.
                </li>
                <li>
                  <strong className="text-anthracite">Readaptation a l&apos;effort</strong> :
                  reintroduction progressive de l&apos;activite physique en
                  securite, sous surveillance adaptee.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Temoignages */}
      <section className="bg-perle py-16 lg:py-24">
        <Container>
          <h2 className="h2 mb-8 text-center">Temoignages</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-cardinal py-12">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="font-display text-[28px] font-bold text-blanc">
              Prenez rendez-vous avec Julie Frachette
            </h2>
            <p className="body-l text-blanc/80">
              Kinesitherapie respiratoire a la Clinique Cardiovasculaire
              Raphaeloise, Saint-Raphael.
            </p>
            <Button
              variant="outline-anthracite"
              href={siteConfig.rdvUrl}
              className="border-blanc text-blanc hover:bg-blanc hover:text-cardinal"
            >
              Je prends rendez-vous
              <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
