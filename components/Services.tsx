"use client";

import { motion } from "motion/react";
import type { Dict } from "@/lib/i18n";

type ServicesProps = { t: Dict["services"] };

export default function Services({ t }: ServicesProps) {
  return (
    <section id="servicios" className="relative z-10 px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[900px]">
        <p className="section-label">{t.label}</p>
        <h2 className="section-heading">{t.heading}</h2>

        <div className="services-grid">
          {t.items.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="service-card"
            >
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-meta">
                <div className="service-delivery">
                  {t.deliveryPrefix} {service.delivery}
                </div>
              </div>

              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="services-note">
          {t.notePre}
          <a href="#contacto"> {t.noteLink}</a>
        </p>
      </div>
    </section>
  );
}
