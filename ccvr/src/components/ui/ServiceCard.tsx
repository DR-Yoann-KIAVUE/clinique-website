import { cn } from "@/lib/utils";
import {
  Stethoscope,
  ScanHeart,
  Activity,
  TimerReset,
  ShieldCheck,
  Wind,
  ArrowRight,
  type LucideProps,
} from "lucide-react";
import { type ComponentType } from "react";

const iconMap: Record<string, ComponentType<LucideProps>> = {
  Stethoscope,
  ScanHeart,
  Activity,
  TimerReset,
  ShieldCheck,
  Wind,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const IconComponent = iconMap[icon];

  return (
    <a
      href={href}
      className={cn(
        "group flex flex-col gap-4 rounded-[var(--radius-card)] p-6",
        "bg-[var(--gradient-rosee-cardinale)] border border-transparent",
        "transition-all duration-[180ms] ease-in-out",
        "hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-cardinal"
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-[7px] bg-teinte-chaude">
        {IconComponent && (
          <IconComponent size={24} strokeWidth={1.2} className="text-cardinal" />
        )}
      </div>
      <h3 className="h3">{title}</h3>
      <p className="body-m text-gris-moyen">{description}</p>
      <span className="mt-auto inline-flex items-center gap-2 font-display font-bold text-[10px] uppercase tracking-[0.14em] text-cardinal">
        En savoir plus
        <ArrowRight
          size={14}
          strokeWidth={1.2}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </a>
  );
}
