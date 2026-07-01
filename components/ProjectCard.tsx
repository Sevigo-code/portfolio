"use client";

import { motion } from "motion/react";
import { TiltCard } from "./TiltCard";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="group relative overflow-hidden border-b border-border p-6 md:p-8"
      style={
        project.featured
          ? { borderLeft: "3px solid var(--color-accent)" }
          : undefined
      }
    >
      {/* Sliding pixel fill on hover — decorative, must never catch clicks */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 origin-left scale-x-0 bg-bg-2 transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      {/* href lives on TiltCard so the anchor wraps the 3D content; clicks
          anywhere bubble up to the link instead of being swallowed by the
          tilt wrapper. */}
      <TiltCard href={project.href} className="block">
        {/* Number & Category */}
        <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.1em] text-muted">
          <motion.span
            variants={{ hover: { color: "var(--color-accent)" } }}
            transition={{ duration: 0.2 }}
          >
            {project.number}
          </motion.span>
          <span>—</span>
          <span>{project.category}</span>

          {project.href && (
            <motion.span
              className="ml-auto text-base text-muted"
              variants={{
                hover: { x: 6, y: -6, color: "var(--color-accent)", scale: 1.2 },
              }}
              transition={{ duration: 0.25 }}
            >
              ↗
            </motion.span>
          )}
        </div>

        {/* Title */}
        <motion.h3
          className="mb-3 font-display text-2xl font-bold tracking-[-0.04em] md:text-3xl"
          variants={{ hover: { x: 8 } }}
          transition={{ duration: 0.25 }}
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <p className="mb-6 max-w-xl font-mono text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <motion.span
              key={tag.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              whileHover={{ y: -2, scale: 1.05 }}
              className={`font-mono text-[11px] uppercase tracking-[0.1em] px-3 py-1 border ${
                tag.accent
                  ? "border-accent/30 text-accent"
                  : "border-border text-muted"
              }`}
            >
              {tag.label}
            </motion.span>
          ))}
        </div>
      </TiltCard>
    </motion.div>
  );
}

