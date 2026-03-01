"use client";

import { Clock, Eye, Users, Award } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const reasons = [
  {
    icon: Clock,
    title: "Respuesta Inmediata",
    description:
      "Sabemos que los problemas legales no esperan. Respondemos a tu consulta en menos de 24 horas y agendamos tu primera cita lo antes posible.",
  },
  {
    icon: Eye,
    title: "Transparencia Total",
    description:
      "Sin letra pequeña ni sorpresas. Te explicamos cada paso del proceso, los costos involucrados y las posibilidades reales de tu caso desde el inicio.",
  },
  {
    icon: Users,
    title: "Equipo Multidisciplinario",
    description:
      "Contamos con abogados especializados en diferentes áreas del derecho, lo que nos permite abordar tu caso desde múltiples ángulos legales.",
  },
  {
    icon: Award,
    title: "Trayectoria Comprobada",
    description:
      "Con más de 2,000 casos resueltos y un 98% de éxito, nuestra trayectoria habla por sí sola. Resultados reales para personas reales.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <div className="mx-auto mb-4 h-[2px] w-10 bg-gold" />
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              ¿Por Qué Elegirnos?
            </h2>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 0.1}>
              <div className="rounded-xl border border-beige-medium/50 p-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cream">
                  <r.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy">
                  {r.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-text">
                  {r.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
