"use client";

import ScrollReveal from "../ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Consulta Inicial",
    description:
      "Cuéntanos tu caso sin compromiso. Evaluamos tu situación y te explicamos tus opciones legales.",
  },
  {
    number: "02",
    title: "Estrategia Legal",
    description:
      "Diseñamos una estrategia personalizada para tu caso. Te presentamos el plan de acción, tiempos y costos.",
  },
  {
    number: "03",
    title: "Representación",
    description:
      "Nuestro equipo trabaja en tu caso con dedicación. Te mantenemos informado en cada etapa del proceso.",
  },
  {
    number: "04",
    title: "Resolución",
    description:
      "Buscamos la mejor resolución posible para tu caso. Tu satisfacción y tus derechos son nuestra medida de éxito.",
  },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <div className="mx-auto mb-4 h-[2px] w-10 bg-gold" />
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Nuestro Proceso
            </h2>
            <p className="mt-4 text-gray-text">
              Trabajar con nosotros es simple y transparente
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connector line (desktop) */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] hidden h-[1px] bg-gold/30 lg:block" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15}>
              <div className="relative text-center">
                <p className="font-heading text-5xl font-bold text-gold/40">
                  {step.number}
                </p>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
