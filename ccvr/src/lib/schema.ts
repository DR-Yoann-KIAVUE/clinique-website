import { siteConfig } from "@/content/site";

export function medicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: siteConfig.name,
    alternateName: siteConfig.acronym,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.zip,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.lat,
      longitude: siteConfig.address.lng,
    },
    openingHoursSpecification: siteConfig.openingHours.map((oh) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: oh.days,
      opens: oh.opens,
      closes: oh.closes,
    })),
    medicalSpecialty: "Cardiovascular",
    image: `${siteConfig.url}/images/og-image.jpg`,
  };
}

export function physicianSchema(physician: {
  name: string;
  title: string;
  description: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: physician.name,
    jobTitle: physician.title,
    description: physician.description,
    image: physician.image,
    worksFor: {
      "@type": "MedicalClinic",
      name: siteConfig.name,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.zip,
      addressCountry: "FR",
    },
    telephone: siteConfig.phone,
    medicalSpecialty: "Cardiovascular",
  };
}
