import type { Metadata } from "next";
import { Syne, Silkscreen } from "next/font/google";
import "./globals.css";
import PixelSpriteLayer from "@/components/PixelSpriteLayer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://juancartagena.dev"),
  title: "Juan Cartagena — Full-stack Developer",
  description:
    "Desarrollador full-stack con experiencia en .NET, Angular y React. Automatización de procesos con n8n e IA, arquitectura limpia y SaaS B2B. Bogotá, Colombia.",
  alternates: {
    canonical: "/",
    languages: { es: "/", en: "/en" },
  },
  openGraph: {
    title: "Juan Cartagena — Full-stack Developer",
    description:
      "Full-stack dev especializado en .NET, React y automatización con n8n e IA. Disponible para proyectos freelance.",
    url: "https://juancartagena.dev",
    siteName: "Juan Cartagena",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Cartagena — Full-stack Developer",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Juan Cartagena",
  url: "https://juancartagena.dev",
  jobTitle: "Full-stack Developer",
  knowsAbout: [
    ".NET",
    "C#",
    "Angular",
    "React",
    "Next.js",
    "n8n",
    "Process Automation",
    "AI Agents",
    "SQL Server",
  ],
  knowsLanguage: ["es", "en"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressCountry: "CO",
  },
  sameAs: [
    "https://www.linkedin.com/in/juan-cartagenam/",
    "https://github.com/Sevigo-code",
  ],
};

function NoiseOverlay() {
  return (
    <svg
      className="noise-overlay"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.80"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" fill="transparent" />
    </svg>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${silkscreen.variable}`}
    >
      <body className="min-h-screen text-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div className="bg" aria-hidden />
        <PixelSpriteLayer />
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
