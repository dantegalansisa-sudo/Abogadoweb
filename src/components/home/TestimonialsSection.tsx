"use client";

import { Star } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const testimonials = [
  {
    quote:
      "Estaba pasando por un divorcio muy difícil y el equipo de NEXIX Legal me acompañó con profesionalismo y empatía. Lograron un acuerdo justo para mí y mis hijos. Eternamente agradecida.",
    name: "Carmen M.",
    area: "Derecho Familiar",
  },
  {
    quote:
      "Me despidieron sin justificación y no sabía qué hacer. NEXIX Legal tomó mi caso y en menos de 3 meses recibí todas mis prestaciones completas. Profesionales de verdad.",
    name: "Roberto S.",
    area: "Derecho Laboral",
  },
  {
    quote:
      "Compré un terreno con problemas de título y estuve a punto de perder mi inversión. Gracias a NEXIX Legal, todo se resolvió legalmente. Recomendadísimos.",
    name: "José L.",
    area: "Derecho Inmobiliario",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <div className="mx-auto mb-4 h-[2px] w-10 bg-gold" />
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Lo Que Dicen Nuestros Clientes
            </h2>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15}>
              <div className="rounded-2xl border border-beige-medium/50 bg-white p-10 shadow-sm">
                {/* Gold quote mark */}
                <span className="font-heading text-5xl leading-none text-gold/40">
                  &ldquo;
                </span>
                <p className="mt-2 leading-relaxed text-gray-text">
                  {t.quote}
                </p>

                {/* Stars */}
                <div className="mt-5 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="mt-4">
                  <p className="font-medium text-navy">— {t.name}</p>
                  <span className="mt-1 inline-block rounded-full bg-beige px-3 py-1 text-xs font-medium text-navy">
                    {t.area}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
