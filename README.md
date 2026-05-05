# portfolio

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


