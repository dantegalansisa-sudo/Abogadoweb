"use client";

import ScrollReveal from "../ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="bg-navy py-24">
      <div className="mx-auto max-w-3xl px-8 text-center">
        <ScrollReveal>
          <div className="mx-auto mb-6 h-[2px] w-10 bg-gold" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            ¿Necesitas Asesoría Legal?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-4 text-lg text-white/60">
            Tu primera consulta es gratuita. Cuéntanos tu caso y te orientamos.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <a
            href="https://wa.me/18092122325?text=Hola%20Lic.%20De%20la%20Cruz%2C%20necesito%20asesor%C3%ADa%20legal%20sobre%20un%20caso."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 text-sm font-medium text-navy transition-colors hover:bg-cream"
          >
            Agenda Tu Consulta Gratuita
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
