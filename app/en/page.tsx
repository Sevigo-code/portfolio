import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import SetHtmlLang from "@/components/SetHtmlLang";
import { SITE_URL } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Juan Cartagena — Full-stack Developer",
  description:
    "Full-stack developer experienced in .NET, Angular and React. Process automation with n8n & AI, clean architecture and B2B SaaS. Based in Bogotá, Colombia (GMT-5), open to remote work.",
  alternates: {
    canonical: "/en",
    languages: { es: "/", en: "/en" },
  },
  openGraph: {
    title: "Juan Cartagena — Full-stack Developer",
    description:
      "Full-stack dev specialized in .NET, React, and process automation with n8n & AI. Available for freelance and remote work.",
    url: `${SITE_URL}/en`,
    siteName: "Juan Cartagena",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Cartagena — Full-stack Developer",
  },
};

export default function HomeEn() {
  return (
    <>
      <SetHtmlLang lang="en" />
      <HomePage lang="en" />
    </>
  );
}
