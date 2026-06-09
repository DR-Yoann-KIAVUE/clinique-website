import { Container } from "@/components/layout/Container";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Stars } from "@/components/ui/Stars";
import { testimonials, siteConfig } from "@/content/site";

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        {/* CCVR Label layout */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_10fr_1fr]">
          <div className="hidden border-r-2 border-cardinal lg:block" aria-hidden="true" />

          <div>
            <div className="mb-10 text-center">
              <span className="eyebrow text-xs text-cardinal">Avis patients</span>
              <div className="mt-3 flex items-center justify-center gap-3">
                <Stars rating={siteConfig.reviewRating} />
                <span className="body-m text-gris-moyen">
                  {siteConfig.reviewCount} avis
                </span>
              </div>
              <h2 className="h2 mt-3">Ce que disent nos patients</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <TestimonialCard
                  key={t.name}
                  name={t.name}
                  rating={t.rating}
                  text={t.text}
                  date={t.date}
                />
              ))}
            </div>
          </div>

          <div className="hidden border-l border-separateur lg:block" aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}
