"use client";

import { motion } from "motion/react";

export default function Experience() {
  return (
    <section id="experiencia" className="relative z-10 px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[900px]">
        <p className="section-label">Experiencia profesional</p>
        <h2 className="section-heading">Donde he trabajado</h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="experience-card">
            <div className="exp-header">
              <div className="exp-title-block">
                <h3 className="exp-role">Desarrollador de Software</h3>
                <p className="exp-company">SoftwareOne · Bogotá, Colombia</p>
              </div>
              <span className="exp-period">Mar 2025 — Sep 2025</span>
            </div>

            <ul className="exp-bullets">
              <li>
                Lideré la migración del aplicativo core de
                <span className="bullet-highlight"> Angular 12 a 16</span>,
                adoptando standalone components y refactorizando el back-end
                en .NET/C#.
              </li>
              <li>
                Desarrollé un módulo transversal (back-end + front-end) con
                filtros avanzados y mejoras de UX que redujeron la fricción
                de navegación para usuarios finales.
              </li>
              <li>
                Implementé pruebas unitarias aumentando la cobertura y
                facilitando la mantenibilidad del sistema a largo plazo.
              </li>
            </ul>

            <div className="exp-tags">
              <span className="tag">C#</span>
              <span className="tag">.NET</span>
              <span className="tag">Angular</span>
              <span className="tag">SQL Server</span>
              <span className="tag">Azure DevOps</span>
              <span className="tag">Git</span>
            </div>

            <div className="exp-footer">
              <a
                href="https://www.linkedin.com/in/juan-cartagenam/"
                target="_blank"
                rel="noopener noreferrer"
                className="exp-link"
              >
                Ver perfil completo en LinkedIn ↗
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
