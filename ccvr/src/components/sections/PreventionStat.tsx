import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function PreventionStat() {
  return (
    <section
      className="py-16 text-blanc lg:py-24"
      style={{ background: "var(--gradient-nuit-cardinale)" }}
    >
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <span className="eyebrow text-xs text-blanc/50">Prevention</span>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-[64px] font-black leading-none tracking-tight text-blanc lg:text-[80px]">
              8/10
            </span>
          </div>
          <p className="body-l max-w-lg text-blanc/70">
            maladies cardiovasculaires pourraient etre evitees grace a la
            prevention. Ne laissez pas votre coeur au hasard.
          </p>
          <Button variant="outline-red" href="/prevention">
            Decouvrir nos actions de prevention
            <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
