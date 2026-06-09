import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import { ArrowRight, Phone } from "lucide-react";

export function CtaBand() {
  return (
    <section className="bg-cardinal py-12">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h2 className="font-display text-[28px] font-bold leading-tight text-blanc">
              Prenez soin de votre coeur
            </h2>
            <p className="mt-2 body-l text-blanc/80">
              Consultez le Dr. Kiavue pour un bilan cardiaque complet.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="outline-anthracite"
              href={siteConfig.rdvUrl}
              className="border-blanc text-blanc hover:bg-blanc hover:text-cardinal"
            >
              Prendre RDV
              <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
            </Button>
            <Button
              variant="ghost"
              href={`tel:${siteConfig.phone}`}
              className="text-blanc hover:text-blanc/80"
            >
              <Phone size={14} strokeWidth={1.2} className="mr-2" />
              {siteConfig.phoneDisplay}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
