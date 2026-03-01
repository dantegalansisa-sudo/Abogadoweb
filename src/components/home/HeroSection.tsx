"use client";

import { Scale } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function HeroSection() {
  return (
    <section id="inicio" className="bg-cream pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-8 lg:flex-row lg:gap-16">
        {/* Left column */}
        <div className="flex-[55] space-y-6">
          <ScrollReveal>
            {/* Gold decorative line */}
            <div className="h-[2px] w-10 bg-gold" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              Bufete de Abogados
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="font-heading text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Defendemos Tus Derechos con Excelencia y Compromiso
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="max-w-xl text-lg leading-relaxed text-gray-text">
              Más de 15 años de experiencia en derecho civil, penal, laboral,
              inmobiliario y familiar. Ofrecemos asesoría jurídica personalizada
              con los más altos estándares de ética profesional.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/18090000000?text=Hola%20NEXIX%20Legal%2C%20necesito%20asesor%C3%ADa%20legal%20sobre%20un%20caso."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-navy px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-navy-light"
              >
                Agenda Tu Consulta
              </a>
              <a
                href="#nosotros"
                className="rounded-lg border border-navy px-8 py-4 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
              >
                Conócenos
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p className="text-sm text-gray-light">
              📞 (809) 000-0000 — Consulta inicial gratuita
            </p>
          </ScrollReveal>
        </div>

        {/* Right column */}
        <ScrollReveal delay={0.3} direction="right" className="flex-[45]">
          <div className="relative">
            {/* Gold frame decoration */}
            <div className="absolute -right-4 -bottom-4 h-full w-full rounded-xl border-2 border-gold/30" />
            {/* Image placeholder */}
            <div className="relative flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-b from-cream to-beige border border-beige-medium">
              <Scale className="h-20 w-20 text-navy/20" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
