"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section id="sobre-mi" className="relative z-10 px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[900px]">
        <div className="about-grid">
          <div>
            <p className="section-label">Sobre mí</p>
            <h2 className="section-heading">
              Developer que construye <br />
              <span className="heading-accent">productos reales</span>.
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="about-text"
          >
            <p>
              Soy estudiante de <span className="text-accent">Ingeniería de Software</span> en
              Compensar, con experiencia profesional construyendo aplicaciones
              corporativas en SoftwareOne. Trabajé liderando una migración
              Angular 12→16 en producción y desarrollando módulos completos
              end-to-end con .NET y Angular.
            </p>
            <p>
              Actualmente desarrollo de forma independiente un
              <span className="text-accent"> SaaS B2B</span> para el sector
              restaurantero, mientras colaboro con negocios locales en Bogotá
              ayudándoles a construir su presencia digital.
            </p>
            <p>
              Me interesa la arquitectura limpia, los productos bien diseñados,
              y construir cosas que realmente resuelvan problemas.
            </p>

            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">7+</div>
                <div className="stat-label">Meses experiencia corporativa</div>
              </div>
              <div className="stat">
                <div className="stat-number">C1</div>
                <div className="stat-label">Inglés avanzado</div>
              </div>
              <div className="stat">
                <div className="stat-number">3+</div>
                <div className="stat-label">Proyectos en producción</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
