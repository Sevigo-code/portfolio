"use client";

import { motion } from "motion/react";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="proyectos" className="relative z-10 px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-4 block font-mono text-xs uppercase tracking-[0.1em] text-accent"
        >
          Trabajo selecto
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 font-display text-4xl font-bold tracking-[-0.04em] md:text-5xl"
        >
          Proyectos
        </motion.h2>

        {/* Project Cards */}
        <div className="border-t border-border">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

