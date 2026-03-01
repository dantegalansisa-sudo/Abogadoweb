"use client";

import ScrollReveal from "../ui/ScrollReveal";
import TeamCard from "../ui/TeamCard";

const team = [
  {
    name: "Lic. Nombre Apellido",
    title: "Abogado Principal — Derecho Penal y Civil",
    description:
      "Más de 15 años de experiencia litigando en tribunales civiles y penales.",
  },
  {
    name: "Lic. Nombre Apellido",
    title: "Especialista en Derecho Familiar",
    description:
      "Dedicada a proteger los derechos de las familias con sensibilidad y firmeza.",
  },
  {
    name: "Lic. Nombre Apellido",
    title: "Especialista en Derecho Inmobiliario y Comercial",
    description:
      "Experto en transacciones inmobiliarias y constitución de empresas.",
  },
];

export default function TeamSection() {
  return (
    <section id="equipo" className="bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <div className="mx-auto mb-4 h-[2px] w-10 bg-gold" />
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Nuestro Equipo
            </h2>
            <p className="mt-4 text-gray-text">
              Profesionales comprometidos con tu caso
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <TeamCard
              key={i}
              name={member.name}
              title={member.title}
              description={member.description}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
