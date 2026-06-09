import { Container } from "@/components/layout/Container";
import { kpis } from "@/content/site";

export function KpiBar() {
  return (
    <section className="border-y border-separateur bg-perle py-10">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="flex flex-col gap-1 border-l-2 border-cardinal pl-4">
              <span className="font-display text-[32px] font-black leading-none tracking-tight text-anthracite lg:text-[40px]">
                {kpi.value}
              </span>
              <span className="body-m text-gris-moyen">{kpi.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
