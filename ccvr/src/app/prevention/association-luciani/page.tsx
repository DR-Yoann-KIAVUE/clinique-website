import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Dumbbell, MessageCircle, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Association LUCIANI",
  description:
    "Association LUCIANI, fondee par le Dr Kiavue. Sport adapte, information sante et prevention cardiovasculaire. Prevenir, accompagner et former.",
  alternates: { canonical: "/prevention/association-luciani" },
};

export default function AssociationLucianiPage() {
  return (
    <>
      <PageHero
        ticker="ASSOCIATION LUCIANI"
        title="Association LUCIANI"
        subtitle="Informez et Formez-vous."
      />

      {/* Presentation */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow text-xs text-cardinal">
              Notre mission
            </span>
            <h2 className="h2 mt-3">Prevenir, accompagner et former</h2>
            <div className="mt-6 flex flex-col gap-4 body-l text-gris-moyen">
              <p>
                Fondee par le{" "}
                <strong className="text-anthracite">Dr Kiavue Yoann</strong>,
                cardiologue engage dans la sante publique, l&apos;Association
                LUCIANI porte une conviction simple : la prevention
                cardiovasculaire ne doit pas s&apos;arreter aux portes du
                cabinet medical.
              </p>
              <p>
                L&apos;association se deploie autour de deux axes complementaires
                pour accompagner chacun dans la prise en charge de sa sante
                cardiaque, au-dela de la consultation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Axe 1 — Sport & Sante */}
      <section className="bg-perle py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-[7px] bg-teinte-chaude">
                <Dumbbell size={24} strokeWidth={1.2} className="text-cardinal" />
              </div>
              <h2 className="h2 mt-4">Axe 1 — Sport et Sante</h2>
              <div className="mt-6 flex flex-col gap-4 body-l text-gris-moyen">
                <p>
                  L&apos;Association LUCIANI propose des cours de sport encadres
                  par des professionnels qualifies : kinesitherapeutes, coachs
                  en activite physique adaptee (APA) et coachs diplomes.
                </p>
                <p>
                  Ces seances sont proposees{" "}
                  <strong className="text-anthracite">a bas prix</strong> pour
                  rester accessibles au plus grand nombre. L&apos;objectif :
                  permettre a chacun de reprendre une activite physique adaptee
                  en toute securite.
                </p>
                <p>
                  Ce programme s&apos;inscrit dans la continuite de la
                  readaptation cardiaque pour les patients ayant termine leur
                  parcours de soins en milieu hospitalier. Un pont entre
                  l&apos;hopital et la vie active.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] bg-separateur">
              <div className="absolute inset-0 flex items-center justify-center text-gris-moyen">
                <span className="body-m">Photo seances sport LUCIANI</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Axe 2 — Club Prevention */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] bg-separateur">
                <div className="absolute inset-0 flex items-center justify-center text-gris-moyen">
                  <span className="body-m">Photo Club Prevention</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-[7px] bg-teinte-chaude">
                <MessageCircle
                  size={24}
                  strokeWidth={1.2}
                  className="text-cardinal"
                />
              </div>
              <h2 className="h2 mt-4">Axe 2 — Club Prevention</h2>
              <div className="mt-6 flex flex-col gap-4 body-l text-gris-moyen">
                <p>
                  Le Club Prevention est un espace d&apos;information simple et
                  fiable, ouvert a tous. Il rassemble des contenus pedagogiques
                  sur la sante cardiovasculaire : conseils de sante, actualites
                  medicales et actions concretes de prevention.
                </p>
                <p>
                  L&apos;objectif est de donner a chacun les cles pour
                  comprendre sa sante cardiaque et agir au quotidien, sans
                  jargon et sans culpabilisation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Adhesion */}
      <section
        className="py-16 text-blanc lg:py-24"
        style={{ background: "var(--gradient-nuit-cardinale)" }}
      >
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <Heart size={40} strokeWidth={1.2} className="text-cardinal" />
            <h2 className="font-display text-[28px] font-bold text-blanc">
              Rejoindre l&apos;Association LUCIANI
            </h2>
            <p className="body-l text-blanc/70">
              Que vous soyez patient, sportif ou simplement engage pour la
              prevention, rejoignez l&apos;Association LUCIANI et participez a
              nos actions.
            </p>
            <Button
              variant="outline-anthracite"
              href="#"
              className="border-blanc text-blanc hover:bg-blanc hover:text-cardinal"
            >
              Rejoindre l&apos;association
              <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
