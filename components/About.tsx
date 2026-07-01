"use client";

import { motion } from "motion/react";
import { RevealText } from "./RevealText";
import type { Dict } from "@/lib/i18n";

type AboutProps = { t: Dict["about"] };

export default function About({ t }: AboutProps) {
  return (
    <section id="sobre-mi" className="relative z-10 px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[900px]">
        <div className="about-grid">
          <div>
            <p className="section-label">{t.label}</p>
            <h2 className="section-heading">
              {t.headingPre} <br />
              <span className="heading-accent">{t.headingAccent}</span>.
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="about-text"
          >
            {t.paragraphs.map((p) => (
              <RevealText key={p.slice(0, 24)} className="about-paragraph">
                {p}
              </RevealText>
            ))}

            <div className="about-stats">
              {t.stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
