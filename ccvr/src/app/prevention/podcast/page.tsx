import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Headphones, Music, Radio } from "lucide-react";

export const metadata: Metadata = {
  title: "Podcast Dryk.Cardio",
  description:
    "Dryk.Cardio, le podcast de prevention cardiovasculaire du Dr Kiavue. Comprendre, prevenir et proteger votre coeur. Disponible sur Spotify, Deezer, Apple Podcast.",
  alternates: { canonical: "/prevention/podcast" },
};

const platforms = [
  { name: "Spotify", href: "#" },
  { name: "Deezer", href: "#" },
  { name: "Apple Podcast", href: "#" },
  { name: "Amazon Music", href: "#" },
];

const episodes = [
  {
    title: "Comprendre votre tension arterielle",
    duration: "12 min",
    description:
      "Qu'est-ce que la tension arterielle ? Comment la mesurer, comment l'interpreter et quand consulter.",
  },
  {
    title: "VO2max : pourquoi c'est le marqueur de votre longevite",
    duration: "15 min",
    description:
      "Le Dr Kiavue explique pourquoi le VO2max est aujourd'hui considere comme l'un des meilleurs predicteurs de longevite.",
  },
  {
    title: "Cholesterol : demeler le vrai du faux",
    duration: "18 min",
    description:
      "HDL, LDL, statines... Le Dr Kiavue repond aux questions les plus frequentes sur le cholesterol.",
  },
  {
    title: "L'activite physique apres un infarctus",
    duration: "14 min",
    description:
      "Reprendre le sport apres un accident cardiaque : quand, comment, avec quelles precautions.",
  },
];

export default function PodcastPage() {
  return (
    <>
      <PageHero
        ticker="PODCAST DRYK.CARDIO"
        title="Podcast Dryk.Cardio"
        subtitle="Votre rendez-vous audio pour comprendre, prevenir et proteger votre coeur."
      />

      {/* Presentation */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow text-xs text-cardinal">
                Prevention audio
              </span>
              <h2 className="h2 mt-3">
                Le podcast de prevention cardiovasculaire a ecouter partout, a
                tout moment
              </h2>
              <div className="mt-6 flex flex-col gap-4 body-l text-gris-moyen">
                <p>
                  Cree par le{" "}
                  <strong className="text-anthracite">Dr Kiavue Yoann</strong>,
                  cardiologue fondateur de la CCVR, Dryk.Cardio a pour mission
                  de rendre accessibles les enjeux de sante du coeur, sans
                  jargon, sans culpabilisation.
                </p>
                <p>
                  Chaque episode propose des conseils pratiques et de
                  l&apos;information claire pour que chaque auditeur puisse agir
                  concretement sur sa sante cardiovasculaire.
                </p>
              </div>
              <div className="mt-8">
                <Button href="#">
                  <Headphones size={14} strokeWidth={1.2} className="mr-2" />
                  J&apos;ecoute Dryk.Cardio
                </Button>
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-[var(--radius-card)] bg-perle">
              <div
                className="absolute inset-0"
                style={{ background: "var(--gradient-monochrome-sang)" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-blanc">
                <Radio size={48} strokeWidth={1.2} className="text-blanc/60" />
                <span className="font-display text-2xl font-black uppercase tracking-wider">
                  Dryk.Cardio
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Plateformes */}
      <section className="border-y border-separateur bg-perle py-10">
        <Container>
          <h2 className="h3 mb-6 text-center">Disponible sur</h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                className="flex items-center gap-2 rounded-[var(--radius-btn)] border border-separateur bg-blanc px-6 py-3 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-anthracite transition-all hover:-translate-y-px hover:border-cardinal hover:shadow-sm"
              >
                <Music size={16} strokeWidth={1.2} className="text-cardinal" />
                {p.name}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Episodes */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="h2 mb-8 text-center">Episodes recents</h2>
            <div className="flex flex-col gap-4">
              {episodes.map((ep) => (
                <article
                  key={ep.title}
                  className="flex flex-col gap-2 rounded-[var(--radius-card)] border border-separateur bg-blanc p-6 transition-all hover:border-cardinal hover:shadow-sm"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="h3">{ep.title}</h3>
                    <span className="shrink-0 text-xs text-gris-moyen">
                      {ep.duration}
                    </span>
                  </div>
                  <p className="body-m text-gris-moyen">{ep.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
