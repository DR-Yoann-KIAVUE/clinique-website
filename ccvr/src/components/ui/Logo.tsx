export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img
      src="/images/CCVR_logo_couleur.svg"
      alt="CCVR - Clinique Cardiovasculaire Raphaeloise"
      className={className}
    />
  );
}
