import type { MetadataRoute } from "next";

const BASE_URL = "https://www.ccvr.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/equipe",
    "/consultations",
    "/consultations/examens",
    "/vo2max",
    "/kinesitherapie-respiratoire",
    "/prevention",
    "/prevention/podcast",
    "/prevention/association-luciani",
    "/cardiologue",
    "/cardiologue/saint-raphael",
    "/cardiologue/frejus",
    "/cardiologue/puget-sur-argens",
    "/contact",
    "/mentions-legales",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
