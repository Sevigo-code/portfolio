"use client";

import { motion } from "motion/react";
import RotatingBadge from "./RotatingBadge";
import { MagneticButton } from "./MagneticButton";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center overflow-hidden px-6 pt-24 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-12">
        {/* Left content */}
        <div className="max-w-2xl">
          {/* Currently panel — top-left, above the eyebrow */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0 }}
            className="currently-panel"
          >
            <div className="label">// CURRENTLY</div>
            <div className="status-box">
              <div className="status-item active">
                <span className="dot active" />
                <span>Building SaaS restaurantero</span>
              </div>
              <div className="status-item">
                <span className="dot" />
                <span>Open to freelance</span>
              </div>
              <div className="status-item">
                <span className="dot" />
                <span>English C1 · Remote ready</span>
              </div>
            </div>
            <div className="timezone">GMT-5 · ONLINE</div>
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-8 flex items-center gap-4"
          >
            <motion.span
              className="h-px w-12 bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-accent">
              <motion.span
                className="inline-block h-2 w-2 bg-accent"
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              />
              Disponible
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-6xl font-800 leading-[0.95] tracking-[-0.04em] md:text-8xl"
          >
            <motion.span
              className="inline-block"
              whileHover={{ x: 4, color: "var(--color-accent)" }}
              transition={{ duration: 0.2 }}
            >
              Juan
            </motion.span>
            <br />
            <span className="glitch text-ghost">Cartagena</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="tagline mt-8"
          >
            <span className="highlight">Desarrollador full-stack</span> con experiencia
            en .NET, Angular y React construyendo soluciones escalables con
            <span className="highlight"> arquitectura limpia</span>. Actualmente
            desarrollando un <span className="highlight">SaaS B2B</span> para el sector
            restaurantero.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex items-center gap-4"
          >
            <MagneticButton href="#proyectos" variant="primary">
              Ver proyectos →
            </MagneticButton>
            <MagneticButton href="#contacto" variant="ghost">
              Hablemos
            </MagneticButton>
          </motion.div>
        </div>

      </div>

      {/* Badge — absolute, centered on the right */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="hero-badge hidden md:flex"
      >
        <RotatingBadge />
      </motion.div>
    </section>
  );
}
