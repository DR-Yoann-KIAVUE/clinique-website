import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Vo2Section } from "@/components/sections/Vo2Section";
import { TeamSection } from "@/components/sections/TeamSection";
import { PreventionStat } from "@/components/sections/PreventionStat";
import { KpiBar } from "@/components/sections/KpiBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { LocationSection } from "@/components/sections/LocationSection";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <ServicesGrid />
      <Vo2Section />
      <KpiBar />
      <TeamSection />
      <PreventionStat />
      <Testimonials />
      <LocationSection />
      <CtaBand />
    </>
  );
}
