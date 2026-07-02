export type Lang = "es" | "en";

/** Text segment; `hl` renders it highlighted/accented. */
export type Seg = { t: string; hl?: boolean };

export type Job = {
  role: string;
  company: string;
  period: string;
  bullets: Seg[][];
  tags: string[];
  /** Show the LinkedIn profile link in this card's footer. */
  linkedIn?: boolean;
};

export type Service = {
  title: string;
  description: string;
  delivery: string;
  tags: string[];
};

export type Dict = {
  nav: {
    links: { label: string; href: string }[];
    openMenu: string;
    closeMenu: string;
    /** Target and label of the language switcher. */
    switchHref: string;
    switchLabel: string;
    switchAria: string;
  };
  hero: {
    nowLabel: string;
    nowItems: string[];
    timezone: string;
    available: string;
    tagline: Seg[];
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    label: string;
    headingPre: string;
    headingAccent: string;
    paragraphs: Seg[][];
    stats: { number: string; label: string }[];
  };
  stack: { label: string; heading: string };
  experience: {
    label: string;
    heading: string;
    jobs: Job[];
    linkedInLabel: string;
  };
  projects: { label: string; heading: string; prev: string; next: string };
  services: {
    label: string;
    heading: string;
    items: Service[];
    deliveryPrefix: string;
    notePre: string;
    noteLink: string;
  };
  contact: {
    label: string;
    headingPre: string;
    headingAccent: string;
    description: string;
    downloadCv: string;
  };
  footer: { copyright: string; made: string };
};

const es: Dict = {
  nav: {
    links: [
      { label: "Sobre mí", href: "#sobre-mi" },
      { label: "Stack", href: "#stack" },
      { label: "Experiencia", href: "#experiencia" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Servicios", href: "#servicios" },
      { label: "Contacto", href: "#contacto" },
    ],
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchHref: "/en",
    switchLabel: "EN",
    switchAria: "Switch to English",
  },
  hero: {
    nowLabel: "// AHORA",
    nowItems: [
      "Automatizando operaciones con n8n + IA",
      "Desarrollando SaaS restaurantero",
      "Abierto a freelance",
      "Inglés C1 · Listo para remoto",
    ],
    timezone: "GMT-5 · EN LÍNEA",
    available: "Disponible",
    tagline: [
      { t: "Desarrollador full-stack", hl: true },
      { t: " con experiencia en .NET, Angular y React. Diseño " },
      { t: "automatizaciones con n8n e IA", hl: true },
      { t: " que optimizan operaciones, y actualmente desarrollo un " },
      { t: "SaaS B2B", hl: true },
      { t: " para el sector restaurantero." },
    ],
    ctaProjects: "Ver proyectos →",
    ctaContact: "Hablemos",
  },
  about: {
    label: "Sobre mí",
    headingPre: "Desarrollador que construye",
    headingAccent: "productos reales",
    paragraphs: [
      [
        { t: "Estudiante de Ingeniería de Software en los últimos semestres de la carrera. Actualmente trabajo en " },
        { t: "Telesentinel", hl: true },
        { t: ", donde diseño " },
        { t: "automatizaciones con n8n e IA", hl: true },
        { t: " para optimizar procesos operativos. Anteriormente, en " },
        { t: "SoftwareOne", hl: true },
        { t: ", lideré la migración de una aplicación corporativa de " },
        { t: "Angular 12 a 16", hl: true },
        { t: " en producción y desarrollé módulos end-to-end con .NET y Angular." },
      ],
      [
        { t: "En paralelo, desarrollo de manera independiente un " },
        { t: "SaaS B2B", hl: true },
        { t: " para la gestión de restaurantes y asesoro a negocios locales de Bogotá en la construcción de su " },
        { t: "presencia digital", hl: true },
        { t: "." },
      ],
      [
        { t: "Me especializo en " },
        { t: "arquitectura limpia", hl: true },
        { t: " y " },
        { t: "automatización de procesos", hl: true },
        { t: ", con un enfoque en construir soluciones eficientes que generen valor real." },
      ],
    ],
    stats: [
      { number: "4+", label: "Años de experiencia" },
      { number: "C1", label: "Inglés avanzado" },
      { number: "10+", label: "Proyectos en producción" },
    ],
  },
  stack: { label: "Tecnologías", heading: "Mi stack" },
  experience: {
    label: "Experiencia profesional",
    heading: "Donde he trabajado",
    linkedInLabel: "Ver perfil completo en LinkedIn ↗",
    jobs: [
      {
        role: "Desarrollador de Software",
        company: "Telesentinel · Bogotá, Colombia",
        period: "Oct 2025 — Presente",
        bullets: [
          [
            { t: "Diseño y opero flujos de automatización en " },
            { t: "n8n", hl: true },
            { t: " que integran sistemas internos y APIs de terceros, eliminando procesos manuales del área de operaciones." },
          ],
          [
            { t: "Implementé " },
            { t: "alertas, notificaciones y reportes automáticos", hl: true },
            { t: " que entregan información operativa a los equipos sin intervención humana." },
          ],
          [
            { t: "Desarrollo " },
            { t: "agentes con IA", hl: true },
            { t: " sobre n8n para clasificar eventos, responder automáticamente y apoyar decisiones repetitivas." },
          ],
        ],
        tags: ["n8n", "IA / LLMs", "APIs REST", "SQL Server", "Automatización"],
      },
      {
        role: "Desarrollador de Software",
        company: "SoftwareOne · Bogotá, Colombia",
        period: "Mar 2025 — Sep 2025",
        bullets: [
          [
            { t: "Lideré la migración del aplicativo core de " },
            { t: "Angular 12 a 16", hl: true },
            { t: ", adoptando standalone components y refactorizando el back-end en .NET/C#." },
          ],
          [
            { t: "Desarrollé un módulo transversal (back-end + front-end) con filtros avanzados y mejoras de UX que redujeron la fricción de navegación para usuarios finales." },
          ],
          [
            { t: "Implementé pruebas unitarias aumentando la cobertura y facilitando la mantenibilidad del sistema a largo plazo." },
          ],
        ],
        tags: ["C#", ".NET", "Angular", "SQL Server", "Azure DevOps", "Git"],
        linkedIn: true,
      },
    ],
  },
  projects: {
    label: "Trabajo selecto",
    heading: "Proyectos",
    prev: "Proyecto anterior",
    next: "Proyecto siguiente",
  },
  services: {
    label: "Servicios",
    heading: "Lo que ofrezco",
    deliveryPrefix: "Entrega en",
    notePre: "¿Proyecto diferente o necesitas algo más específico?",
    noteLink: "Cuéntame tu idea.",
    items: [
      {
        title: "Automatización de procesos con n8n e IA",
        description:
          "Flujos que conectan tus sistemas (CRM, facturación, WhatsApp, hojas de cálculo) y eliminan trabajo manual: alertas, reportes automáticos y agentes con IA.",
        delivery: "1-3 semanas",
        tags: ["n8n", "IA / LLMs", "Integraciones API"],
      },
      {
        title: "Landing pages y sitios web",
        description:
          "Páginas web profesionales para negocios locales y emprendedores. Diseño personalizado, código desde cero, listas para Google.",
        delivery: "1-2 semanas",
        tags: ["Next.js", "React", "Diseño custom"],
      },
      {
        title: "Aplicaciones web a medida",
        description:
          "Sistemas completos para automatizar procesos: dashboards administrativos, plataformas B2B, MVPs con arquitectura escalable.",
        delivery: "4-8 semanas",
        tags: ["ASP.NET Core", "React / Angular", "Clean Architecture"],
      },
      {
        title: "Presencia digital local",
        description:
          "Google Business Profile + WhatsApp Business + optimización local para que tu negocio aparezca cuando tus clientes te buscan.",
        delivery: "3-5 días",
        tags: ["Google Maps", "WhatsApp Business", "SEO local"],
      },
    ],
  },
  contact: {
    label: "Contacto",
    headingPre: "¿Tienes un proyecto?",
    headingAccent: "Hablemos.",
    description:
      "Estoy disponible para freelance, colaboraciones y proyectos interesantes. Cuéntame tu idea.",
    downloadCv: "Descargar CV",
  },
  footer: {
    copyright: "© 2026 Juan Cartagena — Bogotá, Colombia",
    made: "Hecho con mucho café ☕",
  },
};

const en: Dict = {
  nav: {
    links: [
      { label: "About", href: "#sobre-mi" },
      { label: "Stack", href: "#stack" },
      { label: "Experience", href: "#experiencia" },
      { label: "Projects", href: "#proyectos" },
      { label: "Services", href: "#servicios" },
      { label: "Contact", href: "#contacto" },
    ],
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchHref: "/",
    switchLabel: "ES",
    switchAria: "Cambiar a español",
  },
  hero: {
    nowLabel: "// NOW",
    nowItems: [
      "Automating operations with n8n + AI",
      "Building a restaurant SaaS",
      "Open to freelance",
      "English C1 · Remote-ready",
    ],
    timezone: "GMT-5 · ONLINE",
    available: "Available",
    tagline: [
      { t: "Full-stack developer", hl: true },
      { t: " experienced in .NET, Angular and React. I design " },
      { t: "n8n and AI-driven automations", hl: true },
      { t: " that streamline operations, and I'm currently building a " },
      { t: "B2B SaaS", hl: true },
      { t: " for the restaurant industry." },
    ],
    ctaProjects: "See projects →",
    ctaContact: "Let's talk",
  },
  about: {
    label: "About me",
    headingPre: "A developer who builds",
    headingAccent: "real products",
    paragraphs: [
      [
        { t: "Software Engineering student in my final semesters. I currently work at " },
        { t: "Telesentinel", hl: true },
        { t: ", where I design " },
        { t: "n8n and AI automations", hl: true },
        { t: " that streamline operational processes. Previously, at " },
        { t: "SoftwareOne", hl: true },
        { t: ", I led the production migration of a corporate application from " },
        { t: "Angular 12 to 16", hl: true },
        { t: " and delivered end-to-end modules with .NET and Angular." },
      ],
      [
        { t: "In parallel, I'm independently building a " },
        { t: "B2B SaaS", hl: true },
        { t: " for restaurant management and advising local businesses in Bogotá on building their " },
        { t: "digital presence", hl: true },
        { t: "." },
      ],
      [
        { t: "I specialize in " },
        { t: "clean architecture", hl: true },
        { t: " and " },
        { t: "process automation", hl: true },
        { t: ", with a focus on building efficient solutions that deliver real value." },
      ],
    ],
    stats: [
      { number: "4+", label: "Years of experience" },
      { number: "C1", label: "Advanced English" },
      { number: "10+", label: "Projects in production" },
    ],
  },
  stack: { label: "Technologies", heading: "My stack" },
  experience: {
    label: "Professional experience",
    heading: "Where I've worked",
    linkedInLabel: "See full profile on LinkedIn ↗",
    jobs: [
      {
        role: "Software Developer",
        company: "Telesentinel · Bogotá, Colombia",
        period: "Oct 2025 — Present",
        bullets: [
          [
            { t: "I design and operate automation flows in " },
            { t: "n8n", hl: true },
            { t: " that integrate internal systems and third-party APIs, removing manual work from the operations team." },
          ],
          [
            { t: "Implemented " },
            { t: "automated alerts, notifications and reports", hl: true },
            { t: " that deliver operational information to teams without human intervention." },
          ],
          [
            { t: "I build " },
            { t: "AI agents", hl: true },
            { t: " on top of n8n to classify events, respond automatically and support repetitive decisions." },
          ],
        ],
        tags: ["n8n", "AI / LLMs", "REST APIs", "SQL Server", "Automation"],
      },
      {
        role: "Software Developer",
        company: "SoftwareOne · Bogotá, Colombia",
        period: "Mar 2025 — Sep 2025",
        bullets: [
          [
            { t: "Led the migration of the core application from " },
            { t: "Angular 12 to 16", hl: true },
            { t: ", adopting standalone components and refactoring the .NET/C# back-end." },
          ],
          [
            { t: "Built a cross-cutting module (back-end + front-end) with advanced filters and UX improvements that reduced navigation friction for end users." },
          ],
          [
            { t: "Implemented unit tests, increasing coverage and improving long-term maintainability." },
          ],
        ],
        tags: ["C#", ".NET", "Angular", "SQL Server", "Azure DevOps", "Git"],
        linkedIn: true,
      },
    ],
  },
  projects: {
    label: "Selected work",
    heading: "Projects",
    prev: "Previous project",
    next: "Next project",
  },
  services: {
    label: "Services",
    heading: "What I offer",
    deliveryPrefix: "Delivered in",
    notePre: "Different project or need something more specific?",
    noteLink: "Tell me your idea.",
    items: [
      {
        title: "Process automation with n8n & AI",
        description:
          "Flows that connect your systems (CRM, invoicing, WhatsApp, spreadsheets) and remove manual work: alerts, automated reports and AI agents.",
        delivery: "1-3 weeks",
        tags: ["n8n", "AI / LLMs", "API integrations"],
      },
      {
        title: "Landing pages & websites",
        description:
          "Professional websites for local businesses and entrepreneurs. Custom design, hand-written code, ready for Google.",
        delivery: "1-2 weeks",
        tags: ["Next.js", "React", "Custom design"],
      },
      {
        title: "Custom web applications",
        description:
          "Complete systems to automate processes: admin dashboards, B2B platforms, MVPs with scalable architecture.",
        delivery: "4-8 weeks",
        tags: ["ASP.NET Core", "React / Angular", "Clean Architecture"],
      },
      {
        title: "Local digital presence",
        description:
          "Google Business Profile + WhatsApp Business + local optimization so your business shows up when customers search for you.",
        delivery: "3-5 days",
        tags: ["Google Maps", "WhatsApp Business", "Local SEO"],
      },
    ],
  },
  contact: {
    label: "Contact",
    headingPre: "Have a project?",
    headingAccent: "Let's talk.",
    description:
      "I'm available for freelance work, collaborations and interesting projects. Tell me your idea.",
    downloadCv: "Download CV",
  },
  footer: {
    copyright: "© 2026 Juan Cartagena — Bogotá, Colombia",
    made: "Made with lots of coffee ☕",
  },
};

const dicts: Record<Lang, Dict> = { es, en };

export function getDict(lang: Lang): Dict {
  return dicts[lang];
}

export const SITE_URL = "https://juancartagena.dev";
