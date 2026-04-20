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
    category: "SaaS / Restaurantes",
    title: "Restaurant Manager",
    description:
      "MVP full-stack de gestión para restaurantes: menús, mesas, pedidos y reportes. Arquitectura limpia, pensada para escalar como SaaS con modelo de suscripción.",
    tags: [
      { label: "ASP.NET Core 8", accent: true },
      { label: "React 18", accent: true },
      { label: "SQL Server" },
      { label: "Entity Framework" },
      { label: "Clean Arch" },
    ],
    featured: true,
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
      "Estrategia de visibilidad para negocios locales en Bogotá: Google Business Profile, WhatsApp Business y modelo de cobro por resultados. Clientes: tattoo artist y barbería.",
    tags: [
      { label: "Google Maps", accent: true },
      { label: "WhatsApp Business", accent: true },
      { label: "SEO local" },
      { label: "Consultoría" },
    ],
  },
  {
    id: "proximo-saas",
    number: "04",
    category: "En construcción",
    title: "Próximo proyecto SaaS",
    description:
      "Nuevo producto web en desarrollo. Stack moderno, enfocado en mercado latinoamericano. Próximamente.",
    tags: [
      { label: "Next.js" },
      { label: "Prisma" },
      { label: "Supabase" },
    ],
  },
];
