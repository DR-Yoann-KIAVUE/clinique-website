import { Container } from "@/components/layout/Container";

export function TeamSection() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — Photo */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-card)] bg-perle lg:aspect-auto">
            <img
              src="/images/DrYoannKiavue.png"
              alt="Dr Yoann Kiavue, fondateur de la Clinique Cardiovasculaire Raphaeloise"
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />
          </div>

          {/* Right — Text */}
          <div className="flex flex-col justify-between">
            {/* Top block */}
            <div>
              <span className="eyebrow text-xs text-anthracite">
                Un mot du fondateur
              </span>

              <blockquote className="mt-6 font-display text-[22px] font-bold leading-[1.3] tracking-tight text-anthracite sm:text-[26px] lg:text-[30px]">
                Depuis toujours, on m&apos;a appris que l&apos;une des plus
                grandes reussites est celle qui se mesure en bienfaits pour
                autrui. J&apos;ai eu la chance de devenir cardiologue et de
                faire de cette conviction ma passion a plein temps. Pouvoir vous
                accompagner dans la prise en charge de votre sante est une
                responsabilite qui m&apos;honore chaque jour.
              </blockquote>
            </div>

            {/* Bottom block */}
            <div className="mt-10 flex flex-col gap-6 text-right">
              <p className="body-l text-gris-moyen">
                Cette clinique, c&apos;est ma facon de bouger les lignes, de
                repenser la prise en charge medicale, de preserver ce qui
                fonctionne tout en y ajoutant innovation et creativite. Nous
                avons bati un lieu de soins et de confiance ou chaque personne
                est accueillie pour partager un but commun : ameliorer sa sante.
              </p>
              <p className="body-l text-gris-moyen">
                Cette clinique, reunit cardiologie et prevention, en
                s&apos;engageant a agir sur tous les aspects de l&apos;hygiene
                de vie : du sport a l&apos;alimentation, en passant par le
                sommeil et bien au-dela.
              </p>
              <p className="body-l text-gris-moyen">
                La clinique, ce sont les personnes qui la composent. Parce
                qu&apos;a plusieurs, on va plus loin, et parce que votre sante
                le merite, j&apos;ai souhaite creer une equipe ou chacun puisse
                exprimer le meilleur de ses talents : du monde medical et
                paramedical jusqu&apos;aux expertises en communication,
                pedagogie, et technologie.
              </p>
              <p className="body-l text-gris-moyen">
                Nous serons a vos cotes pour preserver, retrouver ou ameliorer
                votre sante – un etat de complet bien-etre physique, mental et
                social, bien au-dela de l&apos;absence de maladie.
              </p>
              <p className="body-l italic text-gris-moyen">
                Avec mon plus sincere engagement pour chaque battement de votre
                coeur,
              </p>
              <p className="font-display text-sm font-bold text-anthracite">
                Dr Yoann Kiavue
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
