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

function TeamCategory({
  title,
  members,
}: {
  title: string;
  members: ReadonlyArray<{
    name: string;
    title: string;
    description: string;
    image: string;
  }>;
}) {
  return (
    <div>
      <h2 className="h2 mb-8">{title}</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
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
  );
}

export default function EquipePage() {
  return (
    <>
      <PageHero
        ticker="LES EQUIPES"
        title="Les Equipes"
        subtitle="Nous croyons que notre equipe est notre atout le plus precieux. Chaque jour, avec bonne humeur et bienveillance, nous mettons tout en oeuvre pour offrir a nos patients un accompagnement humain et de qualite."
      />

      <section className="pb-16 lg:pb-24">
        <Container>
          <div className="flex flex-col gap-16">
            <TeamCategory
              title="Equipe Medicale — Cardiologues"
              members={teamMembers.cardiologues}
            />
            <TeamCategory
              title="Kinesitherapie"
              members={teamMembers.kinesitherapeutes}
            />
            <TeamCategory
              title="Infirmieres specialisees"
              members={teamMembers.infirmieres}
            />
            <TeamCategory
              title="Secretariat"
              members={teamMembers.secretariat}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
