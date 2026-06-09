import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  // Activer si deploiement sur hebergement statique (OVH mutualise).
  // Desactive par defaut pour conserver SSR/ISR.

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      { source: "/les-equipes", destination: "/equipe", permanent: true },
      {
        source: "/consultation-cardiologie",
        destination: "/consultations",
        permanent: true,
      },
      {
        source: "/les-actes",
        destination: "/consultations/examens",
        permanent: true,
      },
      {
        source: "/test-vo2-max-saint-raphael",
        destination: "/vo2max",
        permanent: true,
      },
      {
        source: "/kinesitherapie-respiratoire-frejus-saint-raphael",
        destination: "/kinesitherapie-respiratoire",
        permanent: true,
      },
      {
        source: "/prevention-cardiovasculaire",
        destination: "/prevention",
        permanent: true,
      },
      {
        source: "/podcast-drykcardio",
        destination: "/prevention/podcast",
        permanent: true,
      },
      {
        source: "/association-luciani",
        destination: "/prevention/association-luciani",
        permanent: true,
      },
      {
        source: "/cardiologue-saint-raphael",
        destination: "/cardiologue/saint-raphael",
        permanent: true,
      },
      {
        source: "/cardiologue-frejus",
        destination: "/cardiologue/frejus",
        permanent: true,
      },
      {
        source: "/cardiologue-puget-sur-argens",
        destination: "/cardiologue/puget-sur-argens",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
