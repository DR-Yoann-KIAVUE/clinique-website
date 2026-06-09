import { Star } from "lucide-react";

export function Stars({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} sur ${max} etoiles`}>
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          size={14}
          strokeWidth={1.2}
          className={
            i < rating
              ? "fill-cardinal text-cardinal"
              : "fill-none text-separateur"
          }
        />
      ))}
    </div>
  );
}
