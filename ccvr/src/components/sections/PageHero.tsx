import { Container } from "@/components/layout/Container";
import { PageWavyLines } from "@/components/ui/PageWavyLines";

interface PageHeroProps {
  ticker?: string;
  title: string;
  subtitle?: string;
  accroche?: string;
  variant?: "arch" | "wave" | "flow" | "rise";
  children?: React.ReactNode;
}

export function PageHero({ title, subtitle, accroche, variant = "arch", children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 lg:pt-16">
      <PageWavyLines variant={variant} />

      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="h1">{title}</h1>
          {subtitle && (
            <p className="body-l mx-auto mt-6 max-w-2xl text-gris-moyen">
              {subtitle}
            </p>
          )}
          {accroche && (
            <p className="mt-4 text-lg font-medium text-cardinal">
              {accroche}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
