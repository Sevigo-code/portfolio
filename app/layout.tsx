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
  title: "Juan Cartagena — Full-stack Developer",
  description:
    "Desarrollador full-stack con experiencia en .NET, Angular y React. Especializado en arquitectura limpia, SaaS B2B y soluciones escalables. Bogotá, Colombia.",
  openGraph: {
    title: "Juan Cartagena — Full-stack Developer",
    description:
      "Full-stack dev especializado en .NET, React y arquitectura limpia. Disponible para proyectos freelance.",
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
        <div className="bg" aria-hidden />
        <PixelSpriteLayer />
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
