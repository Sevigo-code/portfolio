"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import type { Project } from "@/lib/projects";
import type { Dict } from "@/lib/i18n";
import ProjectCard from "./ProjectCard";

type ProjectsProps = {
  t: Dict["projects"];
  projects: Project[];
};

export default function Projects({ t, projects }: ProjectsProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scrollByCard = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-slide]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

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
          {t.label}
        </motion.span>

        {/* Heading + arrows */}
        <div className="mb-12 flex items-end justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl font-bold tracking-[-0.04em] md:text-5xl"
          >
            {t.heading}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex gap-3"
          >
            <button
              type="button"
              aria-label={t.prev}
              disabled={!canPrev}
              onClick={() => scrollByCard(-1)}
              className="flex h-11 w-11 items-center justify-center border border-border font-mono text-base text-muted transition-colors duration-200 enabled:hover:border-accent enabled:hover:text-accent disabled:opacity-30"
            >
              ←
            </button>
            <button
              type="button"
              aria-label={t.next}
              disabled={!canNext}
              onClick={() => scrollByCard(1)}
              className="flex h-11 w-11 items-center justify-center border border-border font-mono text-base text-muted transition-colors duration-200 enabled:hover:border-accent enabled:hover:text-accent disabled:opacity-30"
            >
              →
            </button>
          </motion.div>
        </div>

        {/* Carousel track */}
        <div
          ref={trackRef}
          onScroll={updateArrows}
          className="flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              data-slide
              className="w-[86%] shrink-0 snap-start sm:w-[480px] md:w-[560px]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
