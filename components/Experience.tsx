"use client";

import { motion } from "motion/react";
import type { Dict, Seg } from "@/lib/i18n";

type ExperienceProps = { t: Dict["experience"] };

function Bullet({ segs }: { segs: Seg[] }) {
  return (
    <li>
      {segs.map((seg, i) =>
        seg.hl ? (
          <span key={i} className="bullet-highlight">
            {seg.t}
          </span>
        ) : (
          <span key={i}>{seg.t}</span>
        )
      )}
    </li>
  );
}

export default function Experience({ t }: ExperienceProps) {
  return (
    <section id="experiencia" className="relative z-10 px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[900px]">
        <p className="section-label">{t.label}</p>
        <h2 className="section-heading">{t.heading}</h2>

        <div className="mt-12 flex flex-col gap-8">
          {t.jobs.map((job, jobIndex) => (
            <motion.div
              key={job.company + job.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: jobIndex * 0.1 }}
            >
              <div className="experience-card">
                <div className="exp-header">
                  <div className="exp-title-block">
                    <h3 className="exp-role">{job.role}</h3>
                    <p className="exp-company">{job.company}</p>
                  </div>
                  <span className="exp-period">{job.period}</span>
                </div>

                <ul className="exp-bullets">
                  {job.bullets.map((segs, i) => (
                    <Bullet key={i} segs={segs} />
                  ))}
                </ul>

                <div className="exp-tags">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {job.linkedIn && (
                  <div className="exp-footer">
                    <a
                      href="https://www.linkedin.com/in/juan-cartagenam/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="exp-link"
                    >
                      {t.linkedInLabel}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
