import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/content/site";

export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="mb-10 text-center">
          <span className="eyebrow text-xs text-cardinal">Nos services</span>
          <h2 className="h2 mt-3">Une prise en charge complete</h2>
          <p className="body-l mx-auto mt-4 max-w-2xl text-gris-moyen">
            De la consultation initiale au suivi personnalise, la CCVR vous
            propose une gamme complete d&apos;examens et de soins
            cardiologiques.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
