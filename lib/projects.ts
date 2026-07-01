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

export const projects: Project[] = [
  {
    id: "restaurant-manager",
    number: "01",
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
    href: "https://github.com/Sevigo-code/restaurant-mvp",
  },
  {
    id: "cartas-sin-marcar",
    number: "02",
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
    number: "03",
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

