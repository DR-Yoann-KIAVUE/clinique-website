import type { Metadata } from "next";
import { Inter, Exo_2 } from "next/font/google";
// import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { medicalClinicSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  display: "swap",
});

// Termina: local font — uncomment when woff2 files are placed in src/fonts/
// Expects: termina-black.woff2, termina-heavy.woff2, termina-bold.woff2,
//          termina-demi.woff2, termina-medium.woff2
// const termina = localFont({
//   src: [
//     { path: "../fonts/termina-black.woff2", weight: "900", style: "normal" },
//     { path: "../fonts/termina-bold.woff2", weight: "700", style: "normal" },
//     { path: "../fonts/termina-medium.woff2", weight: "500", style: "normal" },
//   ],
//   variable: "--font-termina",
//   display: "swap",
// });
// When Termina is available, add `${termina.variable}` to the html className below.
// Until then, Exo 2 serves as the fallback for --font-display (see globals.css @theme).

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ccvr.fr"),
  title: {
    default:
      "CCVR | Clinique Cardiovasculaire Raphaeloise - Cardiologue Saint-Raphael",
    template: "%s | CCVR - Clinique Cardiovasculaire Raphaeloise",
  },
  description:
    "Cabinet de cardiologie a Saint-Raphael. Dr. Yoann Kiavue, cardiologue specialise en prevention cardiovasculaire, examens cardiaques et VO2max.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "CCVR - Clinique Cardiovasculaire Raphaeloise",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${exo2.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-anthracite bg-blanc">
        <JsonLd data={medicalClinicSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
