"use client";

import Image from "next/image";
import { Scale, Handshake, Trophy } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const values = [
  { icon: Scale, label: "Ética Profesional" },
  { icon: Handshake, label: "Trato Personalizado" },
  { icon: Trophy, label: "Resultados Comprobados" },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-white py-28 lg:py-36">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-8 lg:flex-row">
        {/* Image */}
        <ScrollReveal direction="left" className="flex-1">
          <div className="relative">
            <div className="absolute -left-4 -bottom-4 h-full w-full rounded-xl border-2 border-gold/30" />
            <Image
              src="/images/bufett1.jpg"
              alt="Abogado en tribunal — balanza de la justicia"
              width={600}
              height={450}
              className="relative rounded-xl object-cover aspect-[4/3]"
            />
          </div>
        </ScrollReveal>

        {/* Text */}
        <div className="flex-1 space-y-6">
          <ScrollReveal>
            <div className="h-[2px] w-10 bg-gold" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              Sobre Nosotros
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Un Bufete Comprometido con la Justicia
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="leading-relaxed text-gray-text">
              En NEXIX Legal entendemos que cada caso es único. Desde Azua de
              Compostela, nuestro equipo combina experiencia legal con un trato
              humano y cercano. Nos especializamos en derecho inmobiliario,
              gestión de propiedades y asesoría jurídica integral, siempre con
              transparencia y ética profesional como pilares fundamentales.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="leading-relaxed text-gray-text">
              Hemos representado con éxito a cientos de clientes en la región
              de Azua y toda la República Dominicana, desde compraventa de
              propiedades hasta litigios civiles y familiares. Tu tranquilidad
              es nuestro objetivo.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap gap-6 pt-2">
              {values.map((v) => (
                <div key={v.label} className="flex items-center gap-2">
                  <v.icon className="h-5 w-5 text-gold" />
                  <span className="text-sm font-medium text-navy">
                    {v.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <a
              href="#equipo"
              className="inline-block rounded-lg border border-navy px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Conoce Nuestra Historia →
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
