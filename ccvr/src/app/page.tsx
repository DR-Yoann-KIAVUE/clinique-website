import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Vo2Section } from "@/components/sections/Vo2Section";
import { TeamSection } from "@/components/sections/TeamSection";
import { PreventionStat } from "@/components/sections/PreventionStat";
import { KpiBar } from "@/components/sections/KpiBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { LocationSection } from "@/components/sections/LocationSection";
export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Vo2Section />
      <KpiBar />
      <TeamSection />
      <PreventionStat />
      <Testimonials />
      <LocationSection />
    </>
  );
}
