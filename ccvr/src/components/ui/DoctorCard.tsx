interface DoctorCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
}

export function DoctorCard({ name, title, description, image }: DoctorCardProps) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] bg-blanc shadow-sm">
      <div
        className="relative h-72 bg-cover bg-top"
        style={{
          backgroundImage: image
            ? `url(${image})`
            : "var(--gradient-monochrome-sang)",
        }}
      />

      <div className="p-6">
        <h3 className="h3 text-anthracite">{name}</h3>
        <p className="mt-1 text-sm font-medium text-cardinal">{title}</p>
        <p className="body-m mt-3 text-gris-moyen">{description}</p>
      </div>
    </div>
  );
}
