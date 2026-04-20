# Juan Cartagena — Developer Portfolio

Portafolio personal de Juan Cartagena, desarrollador full-stack freelance en Bogotá, Colombia. Estética dark experimental con animaciones fluidas.

## Stack técnico

- **Next.js 15** (App Router, SSG)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (design tokens con `@theme inline`)
- **Motion** (animaciones y transiciones)
- **Google Fonts** (Syne + Space Mono via `next/font`)

## Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build de producción
npm run build

# Servir build de producción
npm start
```

## Estructura del proyecto

```
portfolio/
├── app/
│   ├── layout.tsx          # Layout principal, fuentes, metadata SEO
│   ├── page.tsx            # Página principal (composición de secciones)
│   └── globals.css         # Design tokens, estilos globales
├── components/
│   ├── Nav.tsx             # Navegación fija con backdrop-blur
│   ├── Hero.tsx            # Sección hero con nombre y tagline
│   ├── RotatingBadge.tsx   # Badge SVG giratorio
│   ├── Stack.tsx           # Grilla de tecnologías
│   ├── Projects.tsx        # Listado de proyectos
│   ├── ProjectCard.tsx     # Card individual de proyecto
│   ├── Contact.tsx         # Sección de contacto
│   └── Footer.tsx          # Footer
├── lib/
│   ├── projects.ts         # Data y tipos de proyectos
│   └── stack.ts            # Data y tipos del stack técnico
└── public/                 # Assets estáticos
```

## Editar proyectos

Edita el archivo `lib/projects.ts` para agregar, modificar o eliminar proyectos. Cada proyecto tiene la siguiente estructura:

```ts
{
  id: "mi-proyecto",
  number: "01",
  category: "SaaS / Web",
  title: "Mi Proyecto",
  description: "Descripción del proyecto.",
  tags: [
    { label: "Next.js", accent: true },
    { label: "Supabase" },
  ],
  featured: true,   // opcional: borde accent a la izquierda
  href: "https://...", // opcional: link externo
}
```

## Deploy en Vercel

**Via GitHub:**
1. Push del repo a GitHub
2. Importar el repo en [vercel.com/new](https://vercel.com/new)
3. Deploy automático en cada push

**Via CLI:**
```bash
npm i -g vercel
vercel
```
