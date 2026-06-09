import { Stars } from "./Stars";

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  date: string;
}

export function TestimonialCard({ name, rating, text, date }: TestimonialCardProps) {
  return (
    <figure className="flex flex-col gap-4 rounded-[var(--radius-card)] bg-blanc p-6 shadow-sm">
      <span className="font-display text-[40px] font-black leading-none text-anthracite select-none">
        &ldquo;
      </span>
      <blockquote className="text-[11px] font-light italic leading-relaxed text-anthracite">
        {text}
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-perle text-sm font-bold text-anthracite">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium text-anthracite">{name}</p>
          <div className="flex items-center gap-2">
            <Stars rating={rating} />
            <span className="text-[11px] text-gris-moyen">{date}</span>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
