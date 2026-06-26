import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import {
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Cigarette,
  Droplet,
  Gauge,
  Mic,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Prevention Cardiovasculaire",
  description:
    "Prevention cardiovasculaire a la CCVR. 8 infarctus sur 10 pourraient etre evites. Decouvrez nos actions : bilans de risque, podcast Dryk.Cardio, Association Luciani.",
  alternates: { canonical: "/prevention" },
};

export default function PreventionPage() {
  return (
    <>
      <PageHero
        variant="flow"
        title="Prevention"
        subtitle="Prevention cardiovasculaire : ce que propose notre clinique."
        accroche="Anticipez aujourd'hui pour proteger votre coeur demain."
      />

      {/* Chiffre choc */}
      <section
        className="py-16 text-blanc lg:py-24"
        style={{ background: "var(--gradient-nuit-cardinale)" }}
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-display text-[64px] font-black leading-none text-blanc lg:text-[80px]">
              8/10
            </span>
            <p className="body-l mt-6 text-blanc/70">
              Les maladies cardiovasculaires restent la premiere cause de
              mortalite dans le monde. Pourtant,{" "}
              <strong className="text-blanc">
                8 infarctus sur 10 pourraient etre evites
              </strong>{" "}
              grace a une prevention active.
            </p>
            <p className="body-l mt-4 text-blanc/70">
              La CCVR place la prevention cardiovasculaire au rang de priorite
              de sante publique.
            </p>
            <div className="mt-8">
              <Button
                variant="outline-white"
                href="#actions"
              >
                Decouvrez notre approche globale
                <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Pourquoi la prevention */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="h2 mb-6 text-center">
              Pourquoi la prevention cardiovasculaire est essentielle ?
            </h2>
            <p className="body-l mb-10 text-center text-gris-moyen">
              Une vie plus longue, plus active, plus sereine. La prevention
              cardiovasculaire permet d&apos;identifier et de maitriser les
              facteurs de risque avant qu&apos;ils ne deviennent des maladies.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Gauge,
                  title: "Hypertension",
                  text: "Premier facteur de risque cardiovasculaire. Un suivi regulier permet de la detecter et de la maitriser efficacement.",
                },
                {
                  icon: Droplet,
                  title: "Cholesterol",
                  text: "Un bilan lipidique regulier permet de depister l'hypercholesterolemie et de prevenir l'atherosclerose.",
                },
                {
                  icon: Cigarette,
                  title: "Tabagisme",
                  text: "Le tabac multiplie par 2 a 4 le risque d'infarctus. L'arret du tabac reduit ce risque des les premieres semaines.",
                },
                {
                  icon: HeartPulse,
                  title: "Sedentarite",
                  text: "L'inactivite physique est un facteur de risque majeur. 30 minutes d'activite par jour reduisent significativement le risque.",
                },
                {
                  icon: ShieldCheck,
                  title: "Diabete",
                  text: "Le diabete de type 2 double le risque cardiovasculaire. Un depistage precoce et un suivi adapte sont essentiels.",
                },
                {
                  icon: Users,
                  title: "Antecedents familiaux",
                  text: "Des antecedents cardiovasculaires familiaux augmentent votre risque. Un bilan de prevention s'impose.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 rounded-[var(--radius-card)] bg-perle p-6"
                >
                  <item.icon
                    size={24}
                    strokeWidth={1.2}
                    className="text-cardinal"
                  />
                  <h3 className="h3">{item.title}</h3>
                  <p className="body-m text-gris-moyen">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Actions de prevention */}
      <section id="actions" className="bg-perle py-16 lg:py-24">
        <Container>
          <h2 className="h2 mb-10 text-center">
            Nos actions de prevention
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Podcast */}
            <a
              href="/prevention/podcast"
              className="group flex flex-col gap-4 rounded-[var(--radius-card)] border border-transparent bg-blanc p-8 shadow-sm transition-all duration-[180ms] hover:-translate-y-[3px] hover:border-cardinal hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[7px] bg-teinte-chaude">
                <Mic size={24} strokeWidth={1.2} className="text-cardinal" />
              </div>
              <h3 className="h2">Podcast Dryk.Cardio</h3>
              <p className="body-l text-gris-moyen">
                Le podcast de prevention cardiovasculaire du Dr Kiavue. Des
                conseils pratiques et de l&apos;information claire pour comprendre,
                prevenir et proteger votre coeur.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 font-display font-bold text-[10px] uppercase tracking-[0.14em] text-cardinal">
                Ecouter le podcast
                <ArrowRight
                  size={14}
                  strokeWidth={1.2}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </a>

            {/* Association */}
            <a
              href="/prevention/association-luciani"
              className="group flex flex-col gap-4 rounded-[var(--radius-card)] border border-transparent bg-blanc p-8 shadow-sm transition-all duration-[180ms] hover:-translate-y-[3px] hover:border-cardinal hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[7px] bg-teinte-chaude">
                <Users size={24} strokeWidth={1.2} className="text-cardinal" />
              </div>
              <h3 className="h2">Association LUCIANI</h3>
              <p className="body-l text-gris-moyen">
                Fondee par le Dr Kiavue, l&apos;Association LUCIANI a pour
                mission de prevenir, accompagner et former. Sport adapte,
                information sante et prevention pour tous.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 font-display font-bold text-[10px] uppercase tracking-[0.14em] text-cardinal">
                Decouvrir l&apos;association
                <ArrowRight
                  size={14}
                  strokeWidth={1.2}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </a>
          </div>
        </Container>
      </section>

    </>
  );
}
