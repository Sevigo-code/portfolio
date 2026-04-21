"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Stack", href: "#stack" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

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
          onClick={() => setOpen(false)}
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

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-[0.1em] text-muted">
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

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-9 w-9 flex-col items-center justify-center gap-[5px] border border-[--color-border]"
        >
          <span
            className={`block h-[2px] w-4 bg-text transition-transform duration-200 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-4 bg-text transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-4 bg-text transition-transform duration-200 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute right-4 top-full mt-2 w-56 border border-[--color-border] bg-[rgba(10,10,15,0.95)] backdrop-blur-xl shadow-[4px_4px_0_0_rgba(200,242,97,0.15)]"
          >
            <ul className="flex flex-col py-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted transition-colors hover:text-accent hover:bg-[rgba(200,242,97,0.05)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
