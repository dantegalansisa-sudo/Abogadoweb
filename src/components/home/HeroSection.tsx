"use client";

import Image from "next/image";
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
              Bufete de Abogados — Azua de Compostela
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="font-heading text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Defendemos Tus Derechos con Excelencia y Compromiso
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="max-w-xl text-lg leading-relaxed text-gray-text">
              Asesoría jurídica personalizada en derecho inmobiliario, civil,
              penal, laboral y familiar. Especialistas en compraventa y alquiler
              de propiedades en Azua y toda la República Dominicana.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/18092122325?text=Hola%20Lic.%20De%20la%20Cruz%2C%20necesito%20asesor%C3%ADa%20legal%20sobre%20un%20caso."
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
              📞 (809) 212-2325 — Consulta inicial gratuita
            </p>
          </ScrollReveal>
        </div>

        {/* Right column */}
        <ScrollReveal delay={0.3} direction="right" className="flex-[45]">
          <div className="relative">
            {/* Gold frame decoration */}
            <div className="absolute -right-4 -bottom-4 h-full w-full rounded-xl border-2 border-gold/30" />
            <Image
              src="/images/bufett.jpg"
              alt="Bufete de abogados — apretón de manos profesional"
              width={600}
              height={450}
              className="relative rounded-xl object-cover aspect-[4/3]"
              priority
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
