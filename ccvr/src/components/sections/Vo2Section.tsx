import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Activity, ArrowRight } from "lucide-react";

export function Vo2Section() {
  return (
    <section className="py-16 lg:py-24" style={{ background: "var(--gradient-rosee-cardinale)" }}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-[7px] bg-teinte-chaude">
              <Activity size={24} strokeWidth={1.2} className="text-cardinal" />
            </div>
            <span className="eyebrow text-xs text-cardinal">
              Test d&apos;effort
            </span>
            <h2 className="h2">
              Test VO2max : mesurez votre capacite cardiorespiratoire
            </h2>
            <p className="body-l text-gris-moyen">
              Le test VO2max est l&apos;examen de reference pour evaluer votre
              capacite aerobique maximale. Utilise par les sportifs et prescrit
              en prevention cardiovasculaire, il permet d&apos;adapter
              precisement votre entrainement et votre suivi medical.
            </p>
            <div>
              <Button href="/vo2max">
                Decouvrir le test VO2max
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
  );
}
