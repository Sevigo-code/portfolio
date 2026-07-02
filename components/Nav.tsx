"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";
import type { Dict, Lang } from "@/lib/i18n";

type NavProps = { t: Dict["nav"]; lang: Lang };

function LangToggle({ lang, aria }: { lang: Lang; aria: string }) {
  const seg = (code: Lang, href: string) => {
    const active = lang === code;
    return (
      <a
        href={href}
        aria-current={active ? "true" : undefined}
        className={`px-2.5 py-1.5 transition-colors duration-200 ${
          active
            ? "bg-accent font-bold text-bg"
            : "text-muted hover:text-accent"
        }`}
      >
        {code.toUpperCase()}
      </a>
    );
  };

  return (
    <div
      aria-label={aria}
      className="flex items-center border border-[rgba(200,242,97,0.4)] font-mono text-[11px] uppercase tracking-[0.1em]"
    >
      {seg("es", "/")}
      {seg("en", "/en")}
    </div>
  );
}

export default function Nav({ t, lang }: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-[rgba(10,10,15,0.7)] backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => setOpen(false)}
        >
          <Logo size="sm" linked={true} />
        </motion.div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-[0.1em] text-muted">
          {t.links.map((link) => (
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
          <li>
            <LangToggle lang={lang} aria={t.switchAria} />
          </li>
        </ul>

        {/* Mobile: lang switch + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <LangToggle lang={lang} aria={t.switchAria} />
          <button
            type="button"
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] border border-border"
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
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute right-4 top-full mt-2 w-56 border border-border bg-[rgba(10,10,15,0.95)] backdrop-blur-xl shadow-[4px_4px_0_0_rgba(200,242,97,0.15)]"
          >
            <ul className="flex flex-col py-2">
              {t.links.map((link) => (
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
