"use client";

import { motion } from "motion/react";

const contactLinks = [
  { icon: "✉", label: "Email", href: "mailto:juancamilocartagena7@gmail.com" },
  { icon: "◈", label: "LinkedIn", href: "https://www.linkedin.com/in/juan-cartagenam/" },
  { icon: "◆", label: "GitHub", href: "https://github.com/Sevigo-code" },
  { icon: "◉", label: "WhatsApp", href: "https://wa.me/573155401095" },
];

export default function Contact() {
  return (
    <section id="contacto" className="relative z-10 px-6 py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-4 block font-mono text-xs uppercase tracking-[0.1em] text-accent"
        >
          Contacto
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 font-display text-4xl font-800 leading-tight tracking-[-0.04em] md:text-6xl lg:text-7xl"
        >
          ¿Tienes un proyecto?{" "}
          <span
            className="text-text"
            style={{
              textDecoration: "underline",
              textDecorationColor: "var(--color-accent)",
              textDecorationThickness: "3px",
              textUnderlineOffset: "6px",
            }}
          >
            Hablemos.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 max-w-lg font-mono text-sm leading-relaxed text-muted"
        >
          Estoy disponible para freelance, colaboraciones y proyectos
          interesantes. Cuéntame tu idea.
        </motion.p>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-6"
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.02 }}
              whileHover={{
                y: -4,
                borderColor: "var(--color-accent)",
                color: "var(--color-accent)",
                boxShadow: "4px 4px 0 0 var(--color-accent-2)",
              }}
              whileTap={{ y: 0, boxShadow: "0px 0px 0 0 var(--color-accent-2)" }}
              className="flex items-center gap-2 border border-[--color-border] px-5 py-3 font-mono text-sm text-muted"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 + i }}
              >
                {link.icon}
              </motion.span>
              <span>{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
