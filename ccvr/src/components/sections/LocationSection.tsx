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

          {/* Google Maps */}
          <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-separateur lg:min-h-[360px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.5!2d6.7688!3d43.4253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce95f8b1a3f7e7%3A0x0!2s87%20Avenue%20Archim%C3%A8de%2C%2083700%20Saint-Rapha%C3%ABl!5e0!3m2!1sfr!2sfr!4v1700000000000"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinique Cardiovasculaire Raphaeloise — Google Maps"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
