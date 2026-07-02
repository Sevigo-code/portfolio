"use client";

import { motion } from "motion/react";
import type { Dict } from "@/lib/i18n";

const contactLinks = [
  { icon: "✉", label: "Email", href: "mailto:juancamilocartagena7@gmail.com" },
  { icon: "◈", label: "LinkedIn", href: "https://www.linkedin.com/in/juan-cartagenam/" },
  { icon: "◆", label: "GitHub", href: "https://github.com/Sevigo-code" },
  { icon: "◉", label: "WhatsApp", href: "https://wa.me/573155401095" },
];

type ContactProps = { t: Dict["contact"] };

export default function Contact({ t }: ContactProps) {
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
          {t.label}
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 font-display text-4xl font-extrabold leading-tight tracking-[-0.04em] md:text-6xl lg:text-7xl"
        >
          {t.headingPre}{" "}
          <span
            className="text-text"
            style={{
              textDecoration: "underline",
              textDecorationColor: "var(--color-accent)",
              textDecorationThickness: "3px",
              textUnderlineOffset: "6px",
            }}
          >
            {t.headingAccent}
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 max-w-lg font-sans text-[0.95rem] leading-relaxed text-text-soft"
        >
          {t.description}
        </motion.p>

        {/* CV download */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-12"
        >
          <motion.a
            href="/juan-cartagena-cv.pdf"
            download
            whileHover={{
              y: -3,
              borderColor: "var(--color-accent)",
              color: "var(--color-accent)",
              boxShadow: "4px 4px 0 0 var(--color-accent-2)",
            }}
            whileTap={{ y: 0, boxShadow: "0px 0px 0 0 var(--color-accent-2)" }}
            className="inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.1em] text-muted"
          >
            <span>↓</span>
            <span>{t.downloadCv}</span>
          </motion.a>
        </motion.div>

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
              className="flex items-center gap-2 border border-border px-5 py-3 font-mono text-sm text-muted"
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
