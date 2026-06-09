// TODO: Replace with official CCVR_logo_couleur.svg when provided
export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-label="CCVR - Clinique Cardiovasculaire Raphaeloise"
      role="img"
    >
      <circle cx="32" cy="32" r="28" fill="#B1121B" opacity="0.9" />
      <ellipse
        cx="32"
        cy="32"
        rx="20"
        ry="14"
        fill="none"
        stroke="#B1121B"
        strokeWidth="1.2"
        transform="rotate(-15 32 32)"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="16"
        ry="10"
        fill="none"
        stroke="#B1121B"
        strokeWidth="0.8"
        opacity="0.6"
        transform="rotate(-15 32 32)"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="12"
        ry="6"
        fill="none"
        stroke="#B1121B"
        strokeWidth="0.5"
        opacity="0.3"
        transform="rotate(-15 32 32)"
      />
    </svg>
  );
}
