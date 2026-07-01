"use client";

import { motion } from "motion/react";

const services = [
  {
    title: "Landing pages y sitios web",
    description:
      "Páginas web profesionales para negocios locales y emprendedores. Diseño personalizado, código desde cero, listas para Google.",
    delivery: "1-2 semanas",
    tags: ["Next.js", "React", "Diseño custom"],
  },
  {
    title: "Aplicaciones web a medida",
    description:
      "Sistemas completos para automatizar procesos: dashboards administrativos, plataformas B2B, MVPs con arquitectura escalable.",
    delivery: "4-8 semanas",
    tags: ["ASP.NET Core", "React / Angular", "Clean Architecture"],
  },
  {
    title: "Presencia digital local",
    description:
      "Google Business Profile + WhatsApp Business + optimización local para que tu negocio aparezca cuando tus clientes te buscan.",
    delivery: "3-5 días",
    tags: ["Google Maps", "WhatsApp Business", "SEO local"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative z-10 px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[900px]">
        <p className="section-label">Servicios</p>
        <h2 className="section-heading">Lo que ofrezco</h2>

        <div className="services-grid">
          {services.map((service, i) => (
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
                <div className="service-delivery">Entrega en {service.delivery}</div>
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
          ¿Proyecto diferente o necesitas algo más específico?
          <a href="#contacto"> Cuéntame tu idea.</a>
        </p>
      </div>
    </section>
  );
}

