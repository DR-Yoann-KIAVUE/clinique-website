import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import { examens, siteConfig } from "@/content/site";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos examens cardiaques",
  description:
    "Electrocardiogramme, echographie cardiaque, epreuve d'effort, Holter ECG, controle pacemaker et plus. Tous les examens cardiologiques de la CCVR a Saint-Raphael.",
  alternates: { canonical: "/consultations/examens" },
};

export default function ExamensPage() {
  return (
    <>
      <PageHero
        variant="rise"
        title="Clinique Cardiovasculaire Raphaeloise"
        subtitle="Nous proposons une gamme complete d'examens, tels que l'electrocardiogramme et l'echographie cardiaque, avec une priorite sur la prevention."
      >
        <div className="flex flex-col items-center gap-4">
          <p className="body-m text-gris-moyen">
            Dr Yoann Kiavue — Cardiologue
          </p>
          <Button href={siteConfig.rdvCardioUrl}>
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

      {/* Scroll stack des actes */}
      <section className="pb-16 lg:pb-24">
        <Container>
          <h2 className="h2 mb-10 text-center">Nos actes</h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {examens.map((examen, i) => (
              <div
                key={examen.title}
                className="sticky rounded-[var(--radius-card)] border border-separateur bg-blanc p-6 shadow-sm transition-shadow hover:shadow-md lg:p-8"
                style={{ top: `${80 + i * 8}px` }}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teinte-chaude font-display text-sm font-bold text-cardinal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="h3">{examen.title}</h3>
                    <p className="body-m mt-2 text-gris-moyen">
                      {examen.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SEO text */}
      <section className="bg-perle py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="h2 mb-6">
              Votre centre d&apos;examens cardiologiques a Saint-Raphael
            </h2>
            <div className="flex flex-col gap-4 body-l text-gris-moyen">
              <p>
                La Clinique Cardiovasculaire Raphaeloise, fondee par le Dr Yoann
                Kiavue, est un centre de reference en cardiologie a
                Saint-Raphael. Situee au Pole Epsilon 3, elle propose
                l&apos;ensemble des examens cardiologiques non invasifs dans un
                environnement medical moderne.
              </p>
              <p>
                L&apos;equipe de la CCVR — cardiologues, infirmieres specialisees
                et assistante medicale — vous accompagne a chaque etape de votre
                parcours de soins, du depistage a la prevention, en passant par
                le diagnostic et le suivi.
              </p>
            </div>
            <div className="mt-8">
              <Button href={siteConfig.rdvCardioUrl}>
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
