import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { Button } from "@/components/ui/Button";
import { teamMembers, siteConfig } from "@/content/site";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Les Equipes",
  description:
    "Decouvrez l'equipe de la Clinique Cardiovasculaire Raphaeloise : cardiologues, kinesitherapeute, infirmieres specialisees et secretariat. Une equipe dediee a votre sante.",
  alternates: { canonical: "/equipe" },
};

const otherMembers = [
  ...teamMembers.kinesitherapeutes,
  ...teamMembers.infirmieres,
  ...teamMembers.secretariat,
];

export default function EquipePage() {
  return (
    <>
      <PageHero
        variant="wave"
        title="Les Equipes"
        subtitle="Nous croyons que notre equipe est notre atout le plus precieux. Chaque jour, avec bonne humeur et bienveillance, nous mettons tout en oeuvre pour offrir a nos patients un accompagnement humain et de qualite."
      />

      <section className="pb-16 lg:pb-24">
        <Container>
          <div className="flex flex-col gap-16">
            {/* Cardiologues — 2 colonnes */}
            <div>
              <h2 className="h2 mb-8">Equipe Medicale — Cardiologues</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers.cardiologues.map((member) => (
                  <div key={member.name} className="flex flex-col gap-4">
                    <DoctorCard
                      name={member.name}
                      title={member.title}
                      description={member.description}
                      image={member.image}
                    />
                    <Button href={siteConfig.rdvUrl} size="sm" className="w-full">
                      Je prends rendez-vous
                      <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Reste de l'equipe — 3 colonnes */}
            <div>
              <h2 className="h2 mb-8">L&apos;equipe au complet</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {otherMembers.map((member) => (
                  <DoctorCard
                    key={member.name}
                    name={member.name}
                    title={member.title}
                    description={member.description}
                    image={member.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
