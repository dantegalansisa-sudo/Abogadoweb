"use client";

import Image from "next/image";
import { GraduationCap, Award, Briefcase, MapPin } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const credentials = [
  { icon: GraduationCap, text: "Universidad Federico Henríquez y Carvajal (UFHEC)" },
  { icon: Award, text: "Licenciatura en Derecho" },
  { icon: MapPin, text: "Natural de Azua de Compostela, República Dominicana" },
  { icon: Briefcase, text: "Especialista en Derecho Inmobiliario y Gestión de Propiedades" },
];

export default function LeadLawyerSection() {
  return (
    <section className="bg-cream py-28 lg:py-36">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-8 lg:flex-row">
        {/* Photo */}
        <ScrollReveal direction="left" className="flex-1">
          <div className="relative">
            <div className="absolute -left-4 -bottom-4 h-full w-full rounded-xl border-2 border-gold/30" />
            <div className="relative max-w-md overflow-hidden rounded-xl">
              <Image
                src="/images/lawyer-portrait.jpeg"
                alt="Lic. Lisaldy de la Cruz — Abogado Principal"
                width={480}
                height={640}
                className="h-auto w-full rounded-xl object-cover"
                priority
              />
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
              Lic. Lisaldy de la Cruz
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="leading-relaxed text-gray-text">
              Egresado de la Universidad Federico Henríquez y Carvajal (UFHEC),
              el Lic. Lisaldy de la Cruz ha construido una sólida carrera
              jurídica desde su natal Azua de Compostela. Su práctica combina el
              ejercicio del derecho con una profunda vocación por el servicio a
              su comunidad, especializándose en derecho inmobiliario, gestión de
              venta y alquiler de propiedades, y asesoría legal integral.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="leading-relaxed text-gray-text">
              Con un enfoque cercano y transparente, el Lic. de la Cruz se ha
              ganado la confianza de cientos de clientes en la región de Azua y
              más allá, ayudándoles a proteger su patrimonio, resolver conflictos
              legales y concretar transacciones inmobiliarias con total seguridad
              jurídica.
            </p>
          </ScrollReveal>

          {/* Quote */}
          <ScrollReveal delay={0.3}>
            <div className="border-l-2 border-gold pl-6 py-2">
              <p className="font-heading text-lg italic text-navy">
                <span className="text-gold">&ldquo;</span>
                La justicia no es solo un derecho, es un compromiso con cada
                persona que deposita su confianza en nosotros.
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
              Experto en Bienes Raíces y Derecho Inmobiliario
            </span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
