"use client";

import { motion } from "motion/react";

const links = [
  { label: "Stack", href: "#stack" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 border-b border-[--color-border] bg-[rgba(10,10,15,0.7)] backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="font-display text-lg font-bold tracking-[-0.04em] text-text"
        >
          JC
          <motion.span
            className="inline-block text-accent"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            .
          </motion.span>
        </motion.a>

        <ul className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.1em] text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative inline-block transition-colors duration-200 hover:text-accent"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
