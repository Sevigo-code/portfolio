"use client";

import { motion } from "motion/react";
import { stack } from "@/lib/stack";

export default function Stack() {
  return (
    <section id="stack" className="relative z-10 px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-4 block font-mono text-xs uppercase tracking-[0.1em] text-accent"
        >
          Tecnologías
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="cursor-blink mb-12 font-display text-4xl font-bold tracking-[-0.04em] md:text-5xl"
        >
          Mi stack
        </motion.h2>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.04 } },
          }}
          className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] border-t border-l border-border"
        >
          {stack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 12 },
                show: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{
                backgroundColor: "rgba(200, 242, 97, 0.05)",
                y: -4,
                boxShadow: "0 0 0 1px var(--color-accent)",
              }}
              className="flex flex-col items-center justify-center gap-2 border-r border-b border-border px-4 py-8"
            >
              <motion.span
                className="text-2xl"
                whileHover={{ rotate: [0, -10, 10, -6, 6, 0], scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                {tech.icon}
              </motion.span>
              <span className="font-mono text-xs text-muted">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

