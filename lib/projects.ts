import type { Lang } from "./i18n";

export type ProjectTag = {
  label: string;
  accent?: boolean;
};

export type Project = {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: ProjectTag[];
  featured?: boolean;
  href?: string;
};

const es: Project[] = [
  {
    id: "n8n-telesentinel",
    number: "01",
    category: "Automatización / n8n + IA",
    title: "Automatización de operaciones en Telesentinel",
    description:
      "Flujos de automatización en n8n para una empresa de seguridad electrónica: integración entre sistemas internos y APIs de terceros, alertas y notificaciones en tiempo real, reportes automáticos y agentes con IA para procesos operativos. Proyecto interno corriendo en producción.",
    tags: [
      { label: "n8n", accent: true },
      { label: "IA / LLMs", accent: true },
      { label: "APIs REST" },
      { label: "Webhooks" },
      { label: "SQL Server" },
    ],
    featured: true,
  },
  {
    id: "restaurant-manager",
    number: "02",
    category: "SaaS B2B / Restaurantes",
    title: "Sistema de gestión para restaurantes",
    description:
      "SaaS administrativo para pequeños restaurantes: gestión de inventario de ingredientes, cálculo de costos de recetas, análisis de rentabilidad y registro de preparaciones. Arquitectura limpia escalable, validado con un cliente, en camino a MVP comercial.",
    tags: [
      { label: "ASP.NET Core 8", accent: true },
      { label: "React 18", accent: true },
      { label: "Entity Framework" },
      { label: "SQL Server" },
      { label: "Recharts" },
      { label: "Clean Architecture" },
    ],
    featured: true,
  },
  {
    id: "cartas-sin-marcar",
    number: "03",
    category: "Plataforma web",
    title: "Cartas Sin Marcar",
    description:
      "Plataforma de cartas anónimas con estética dark vintage. Integración con Spotify para adjuntar canciones, RLS con Supabase, dominio propio en cartassinmarcar.co.",
    tags: [
      { label: "Next.js", accent: true },
      { label: "Supabase", accent: true },
      { label: "Spotify API" },
      { label: "Vercel" },
      { label: "RLS Policies" },
    ],
    href: "https://cartassinmarcar.co",
  },
  {
    id: "presencia-digital",
    number: "04",
    category: "Freelance / Servicios digitales",
    title: "Presencia digital local",
    description:
      "Estrategia de visibilidad para negocios locales en Bogotá: Google Business Profile, WhatsApp Business y modelo de cobro por resultados. Clientes: un tatuador y una barbería.",
    tags: [
      { label: "Google Maps", accent: true },
      { label: "WhatsApp Business", accent: true },
      { label: "SEO local" },
      { label: "Consultoría" },
    ],
  },
];

const en: Project[] = [
  {
    id: "n8n-telesentinel",
    number: "01",
    category: "Automation / n8n + AI",
    title: "Operations automation at Telesentinel",
    description:
      "Automation flows built with n8n for an electronic security company: integrations between internal systems and third-party APIs, real-time alerts and notifications, automated reporting, and AI agents for operational processes. Internal project running in production.",
    tags: [
      { label: "n8n", accent: true },
      { label: "AI / LLMs", accent: true },
      { label: "REST APIs" },
      { label: "Webhooks" },
      { label: "SQL Server" },
    ],
    featured: true,
  },
  {
    id: "restaurant-manager",
    number: "02",
    category: "B2B SaaS / Restaurants",
    title: "Restaurant management system",
    description:
      "Admin SaaS for small restaurants: ingredient inventory management, recipe costing, profitability analysis and prep tracking. Scalable clean architecture, validated with a client, on its way to a commercial MVP.",
    tags: [
      { label: "ASP.NET Core 8", accent: true },
      { label: "React 18", accent: true },
      { label: "Entity Framework" },
      { label: "SQL Server" },
      { label: "Recharts" },
      { label: "Clean Architecture" },
    ],
    featured: true,
  },
  {
    id: "cartas-sin-marcar",
    number: "03",
    category: "Web platform",
    title: "Cartas Sin Marcar",
    description:
      "Anonymous letters platform with a dark vintage aesthetic. Spotify integration to attach songs, RLS with Supabase, custom domain at cartassinmarcar.co.",
    tags: [
      { label: "Next.js", accent: true },
      { label: "Supabase", accent: true },
      { label: "Spotify API" },
      { label: "Vercel" },
      { label: "RLS Policies" },
    ],
    href: "https://cartassinmarcar.co",
  },
  {
    id: "presencia-digital",
    number: "04",
    category: "Freelance / Digital services",
    title: "Local digital presence",
    description:
      "Local visibility strategy for businesses in Bogotá: Google Business Profile, WhatsApp Business and a pay-for-results model. Clients: a tattoo artist and a barbershop.",
    tags: [
      { label: "Google Maps", accent: true },
      { label: "WhatsApp Business", accent: true },
      { label: "Local SEO" },
      { label: "Consulting" },
    ],
  },
];

const byLang: Record<Lang, Project[]> = { es, en };

export function getProjects(lang: Lang): Project[] {
  return byLang[lang];
}
