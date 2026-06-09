import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import { MapPin, Phone, Clock, Car, Navigation } from "lucide-react";

export function LocationSection() {
  return (
    <section className="bg-perle py-16 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className="eyebrow text-xs text-cardinal">Nous trouver</span>
            <h2 className="h2">Acces et informations pratiques</h2>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} strokeWidth={1.2} className="mt-0.5 shrink-0 text-cardinal" />
                <div>
                  <p className="font-medium text-anthracite">Adresse</p>
                  <p className="body-m text-gris-moyen">
                    Clinique Cardiovasculaire Raphaeloise
                    <br />
                    {siteConfig.address.building}
                    <br />
                    {siteConfig.address.short}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} strokeWidth={1.2} className="mt-0.5 shrink-0 text-cardinal" />
                <div>
                  <p className="font-medium text-anthracite">Telephone</p>
                  <a href={`tel:${siteConfig.phone}`} className="body-m text-gris-moyen hover:text-cardinal">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} strokeWidth={1.2} className="mt-0.5 shrink-0 text-cardinal" />
                <div>
                  <p className="font-medium text-anthracite">Horaires</p>
                  <p className="body-m text-gris-moyen">Lundi - Vendredi : 8h30 - 18h30</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Car size={20} strokeWidth={1.2} className="mt-0.5 shrink-0 text-cardinal" />
                <div>
                  <p className="font-medium text-anthracite">Acces</p>
                  <p className="body-m text-gris-moyen">Parking gratuit sur place</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Button
                variant="outline-red"
                href={`https://www.google.com/maps/dir/?api=1&destination=${siteConfig.address.lat},${siteConfig.address.lng}`}
              >
                <Navigation size={14} strokeWidth={1.2} className="mr-2" />
                Itineraire
              </Button>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] bg-separateur lg:aspect-auto lg:min-h-[360px]">
            <div className="absolute inset-0 flex items-center justify-center text-gris-moyen">
              <span className="body-m">Google Maps — a integrer</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
