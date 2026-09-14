"use client";

import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { services } from "@/content/site";

export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <ScrollReveal className="mb-10 text-center">
          <span className="eyebrow text-xs text-cardinal">Nos services</span>
          <h2 className="h2 mt-3">Une prise en charge complete</h2>
          <p className="body-l mx-auto mt-4 max-w-2xl text-gris-moyen">
            De la consultation initiale au suivi personnalise, la CCVR vous
            propose une gamme complete d&apos;examens et de soins
            cardiologiques.
          </p>
        </ScrollReveal>
        <ScrollReveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ScrollRevealItem key={service.title}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  );
}
