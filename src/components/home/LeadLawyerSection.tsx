"use client";

import { User, GraduationCap, Award, Briefcase } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const credentials = [
  { icon: GraduationCap, text: "Universidad Autónoma de Santo Domingo (UASD)" },
  { icon: Award, text: "Maestría en Derecho Penal y Procesal Penal" },
  { icon: Briefcase, text: "Miembro del Colegio de Abogados de la República Dominicana" },
];

export default function LeadLawyerSection() {
  return (
    <section className="bg-cream py-28 lg:py-36">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-8 lg:flex-row">
        {/* Photo */}
        <ScrollReveal direction="left" className="flex-1">
          <div className="relative">
            <div className="absolute -left-4 -bottom-4 h-full w-full rounded-xl border-2 border-gold/30" />
            <div className="relative flex aspect-[3/4] max-w-md items-center justify-center rounded-xl bg-gradient-to-b from-cream to-beige border border-beige-medium">
              <User className="h-24 w-24 text-navy/20" />
            </div>
          </div>
        </ScrollReveal>

        {/* Text */}
        <div className="flex-1 space-y-6">
          <ScrollReveal>
            <div className="h-[2px] w-10 bg-gold" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              Abogado Principal
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Lic. Nombre Apellido
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="leading-relaxed text-gray-text">
              Con más de 15 años de ejercicio profesional, el Lic. Nombre
              Apellido ha liderado NEXIX Legal con un enfoque centrado en la
              excelencia jurídica y el compromiso con cada cliente. Su
              trayectoria abarca desde litigios civiles y penales de alta
              complejidad hasta asesorías corporativas para empresas nacionales e
              internacionales.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="leading-relaxed text-gray-text">
              Reconocido por su capacidad estratégica y su dedicación
              inquebrantable a la justicia, ha logrado resultados favorables en
              más de 2,000 casos, consolidándose como una figura de referencia en
              el ámbito legal dominicano.
            </p>
          </ScrollReveal>

          {/* Quote */}
          <ScrollReveal delay={0.3}>
            <div className="border-l-2 border-gold pl-6 py-2">
              <p className="font-heading text-lg italic text-navy">
                <span className="text-gold">&ldquo;</span>
                La justicia no es solo un derecho, es un compromiso.
                <span className="text-gold">&rdquo;</span>
              </p>
            </div>
          </ScrollReveal>

          {/* Credentials */}
          <ScrollReveal delay={0.35}>
            <div className="space-y-3 pt-2">
              {credentials.map((c) => (
                <div key={c.text} className="flex items-center gap-3">
                  <c.icon className="h-4 w-4 shrink-0 text-gold" />
                  <span className="text-sm text-gray-text">{c.text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Badge */}
          <ScrollReveal delay={0.4}>
            <span className="inline-block rounded-full bg-gold-light px-5 py-2 text-sm font-medium text-navy">
              15+ Años de Experiencia
            </span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
