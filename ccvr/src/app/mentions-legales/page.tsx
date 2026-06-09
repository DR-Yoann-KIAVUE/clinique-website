import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Mentions legales",
  description:
    "Mentions legales de la Clinique Cardiovasculaire Raphaeloise (CCVR). Editeur, hebergeur, propriete intellectuelle et protection des donnees.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero variant="rise" title="Mentions legales" />

      <section className="pb-16 lg:pb-24">
        <Container>
          <div className="mx-auto max-w-3xl">

          <div className="flex flex-col gap-8 body-l text-gris-moyen">
            <div>
              <h2 className="h2 mb-3">Editeur du site</h2>
              <p>
                {siteConfig.name}
                <br />
                {siteConfig.address.full}
                <br />
                Telephone :{" "}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-cardinal hover:text-rouge-profond"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p className="mt-2">
                Directeur de la publication : Dr Yoann Kiavue
              </p>
            </div>

            <div>
              <h2 className="h2 mb-3">Activite</h2>
              <p>
                Cabinet de cardiologie — Profession reglementee. Le Dr Yoann
                Kiavue est inscrit au Conseil National de l&apos;Ordre des
                Medecins.
              </p>
            </div>

            <div>
              <h2 className="h2 mb-3">Hebergement</h2>
              <p>
                Le site est heberge par :
                <br />
                <em>[Nom de l&apos;hebergeur a completer]</em>
                <br />
                <em>[Adresse de l&apos;hebergeur a completer]</em>
              </p>
            </div>

            <div>
              <h2 className="h2 mb-3">Propriete intellectuelle</h2>
              <p>
                L&apos;ensemble des contenus du site (textes, images,
                photographies, logos, icones, sons, logiciels, etc.) est la
                propriete exclusive de la {siteConfig.name} ou de ses
                partenaires. Toute reproduction, representation, modification,
                publication ou adaptation de tout ou partie des elements du site
                est interdite sans autorisation ecrite prealable.
              </p>
            </div>

            <div>
              <h2 className="h2 mb-3">Protection des donnees personnelles</h2>
              <p>
                Conformement au Reglement General sur la Protection des Donnees
                (RGPD) et a la loi Informatique et Libertes, vous disposez d&apos;un
                droit d&apos;acces, de rectification, de suppression et de
                portabilite de vos donnees personnelles.
              </p>
              <p className="mt-2">
                Pour exercer ces droits, contactez-nous a l&apos;adresse :{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-cardinal hover:text-rouge-profond"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="h2 mb-3">Cookies</h2>
              <p>
                Ce site peut utiliser des cookies a des fins de mesure
                d&apos;audience et d&apos;amelioration de l&apos;experience utilisateur. Vous
                pouvez configurer votre navigateur pour refuser les cookies.
              </p>
            </div>

            <div>
              <h2 className="h2 mb-3">Credits</h2>
              <p>
                Conception et developpement du site :{" "}
                <em>[A completer]</em>
              </p>
              <p className="mt-2">
                Charte graphique : Russell Papenberg
              </p>
            </div>

            <p className="mt-4 text-sm text-gris-moyen">
              &copy; {new Date().getFullYear()} Dr Yoann Kiavue — Tous droits
              reserves.
            </p>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}
