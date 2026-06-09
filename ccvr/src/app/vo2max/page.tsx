import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import {
  ArrowRight,
  Activity,
  HeartPulse,
  TrendingUp,
  Users,
  Timer,
  ClipboardList,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Test VO2max - Saint-Raphael",
  description:
    "Test VO2max a Saint-Raphael. Gold standard de l'evaluation cardiorespiratoire a l'effort. Bilan de longevite et performance. Clinique Cardiovasculaire Raphaeloise.",
  alternates: { canonical: "/vo2max" },
};

export default function Vo2maxPage() {
  return (
    <>
      <PageHero
        variant="arch"
        title="Test de VO2max"
        subtitle="Test VO2max a Saint-Raphael — Base de la longevite et bilan cardiorespiratoire a l'effort."
      />

      {/* Definition */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow text-xs text-cardinal">
                Comprendre le test
              </span>
              <h2 className="h2 mt-3">Qu&apos;est-ce que le test VO2max ?</h2>
              <div className="mt-6 flex flex-col gap-4 body-l text-gris-moyen">
                <p>
                  Le test VO2max est le <strong className="text-anthracite">gold standard</strong> de
                  l&apos;evaluation cardiorespiratoire a l&apos;effort. Il mesure
                  votre consommation maximale d&apos;oxygene — c&apos;est-a-dire la
                  capacite maximale de votre organisme a transporter et utiliser
                  l&apos;oxygene pendant un effort intense.
                </p>
                <p>
                  Realise au sein de la Clinique Cardiovasculaire Raphaeloise
                  sous surveillance medicale, le test mesure en temps reel vos
                  echanges gazeux, votre frequence cardiaque et votre tolerance
                  a l&apos;exercice.
                </p>
              </div>
              <div className="mt-8">
                <Button href={siteConfig.rdvUrl}>
                  Je fais mon test de VO2max
                  <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] bg-perle">
              <img
                src="/images/vo2max-siteweb-v2.png"
                alt="Test VO2max a la Clinique Cardiovasculaire Raphaeloise"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Science & longevite + Deroulement — two columns */}
      <section className="bg-blanc py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — Science */}
            <div>
              <span className="eyebrow text-xs text-cardinal">
                Science et longevite
              </span>
              <h2 className="h2 mt-3">
                VO2max et longevite : ce que dit la science
              </h2>
              <div className="mt-6 flex flex-col gap-4 body-l text-gris-moyen">
                <p>
                  Au-dela de la performance sportive, le VO2max est aujourd&apos;hui
                  reconnu comme l&apos;un des marqueurs les plus puissants de
                  longevite. Les etudes scientifiques demontrent qu&apos;un VO2max
                  eleve est associe a une reduction significative du risque de
                  mortalite toutes causes confondues.
                </p>
                <p>
                  Un VO2max dans le quartile superieur pour votre age et votre
                  sexe est associe a une esperance de vie prolongee de plusieurs
                  annees. Inversement, un VO2max faible constitue un facteur de
                  risque cardiovasculaire independant, au meme titre que
                  l&apos;hypertension ou le diabete.
                </p>
                <p>
                  C&apos;est pourquoi la CCVR integre le test VO2max dans sa
                  demarche de prevention cardiovasculaire : connaitre votre VO2max,
                  c&apos;est disposer d&apos;un indicateur fiable pour agir sur votre
                  sante a long terme.
                </p>
              </div>
            </div>

            {/* Right — Deroulement */}
            <div>
              <h2 className="h2 mb-8">Deroulement du test</h2>
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: ClipboardList,
                    title: "Preparation",
                    text: "Un questionnaire medical prealable est rempli. Venez en tenue de sport, a jeun depuis 2 heures minimum. Evitez le cafe et le tabac le jour du test.",
                  },
                  {
                    icon: Activity,
                    title: "Effort progressif",
                    text: "Le test se deroule sur velo ergometrique ou tapis roulant. L'intensite augmente progressivement par paliers jusqu'a votre capacite maximale.",
                  },
                  {
                    icon: HeartPulse,
                    title: "Surveillance medicale",
                    text: "Tout au long du test, votre frequence cardiaque, votre tension arterielle, votre electrocardiogramme et vos echanges gazeux sont surveilles en continu par le cardiologue.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Resultats et interpretation",
                    text: "Les resultats sont analyses et commentes avec vous immediatement apres le test. Vous repartez avec un rapport detaille et des recommandations personnalisees.",
                  },
                ].map((step, i) => (
                  <div key={step.title} className="flex gap-4 rounded-[var(--radius-card)] bg-perle p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[7px] bg-teinte-chaude">
                      <step.icon size={20} strokeWidth={1.2} className="text-cardinal" />
                    </div>
                    <div>
                      <h3 className="h3 text-[18px]">
                        <span className="text-cardinal">{i + 1}.</span>{" "}
                        {step.title}
                      </h3>
                      <p className="body-m mt-1 text-gris-moyen">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pour qui ? */}
      <section className="bg-perle py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="h2 mb-8">Pour qui ?</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: Activity,
                  title: "Sportifs",
                  text: "Optimiser vos performances et definir vos zones d'entrainement avec precision.",
                },
                {
                  icon: HeartPulse,
                  title: "Patients cardiaques",
                  text: "Evaluer votre capacite fonctionnelle et adapter votre rehabilitation cardiaque.",
                },
                {
                  icon: Users,
                  title: "Prevention generale",
                  text: "Connaitre votre etat de sante cardiorespiratoire et agir sur votre longevite.",
                },
              ].map((profile) => (
                <div
                  key={profile.title}
                  className="flex flex-col items-center gap-3 rounded-[var(--radius-card)] bg-blanc p-6 text-center shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[7px] bg-teinte-chaude">
                    <profile.icon size={24} strokeWidth={1.2} className="text-cardinal" />
                  </div>
                  <h3 className="h3">{profile.title}</h3>
                  <p className="body-m text-gris-moyen">{profile.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Tarifs / CTA */}
      <section className="bg-cardinal py-12">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Timer size={32} strokeWidth={1.2} className="text-blanc/60" />
            <h2 className="font-display text-[28px] font-bold text-blanc">
              Pret a connaitre votre VO2max ?
            </h2>
            <p className="body-l text-blanc/80">
              Contactez-nous pour connaitre les tarifs et planifier votre test.
            </p>
            <Button
              variant="outline-white"
              href={siteConfig.rdvUrl}
            >
              Je fais mon test de VO2max
              <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
