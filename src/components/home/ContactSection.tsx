"use client";

import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Azua de Compostela, República Dominicana",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "(809) 212-2325",
    href: "tel:+18092122325",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contacto@nexixlegal.com",
    href: "mailto:contacto@nexixlegal.com",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun-Vie 8:00 AM - 6:00 PM | Sábados con cita previa",
  },
];

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-cream py-28 lg:py-36">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-8 lg:flex-row">
        {/* Info */}
        <div className="flex-1 space-y-6">
          <ScrollReveal>
            <div className="h-[2px] w-10 bg-gold" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Contáctanos
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="leading-relaxed text-gray-text">
              Estamos listos para ayudarte. Comunícate con nosotros y agenda tu
              consulta gratuita.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-5 pt-2">
              {contactInfo.map((item) => {
                const content = (
                  <div className="flex gap-4">
                    <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <p className="text-sm font-medium text-navy">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-sm text-gray-text">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block transition-colors hover:text-navy"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <a
              href="https://wa.me/18092122325?text=Hola%20Lic.%20De%20la%20Cruz%2C%20necesito%20asesor%C3%ADa%20legal%20sobre%20un%20caso."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Escribir por WhatsApp
            </a>
          </ScrollReveal>
        </div>

        {/* Map placeholder */}
        <ScrollReveal direction="right" className="flex-1">
          <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-beige border border-beige-medium">
            <div className="text-center">
              <MapPin className="mx-auto h-12 w-12 text-navy/20" />
              <p className="mt-3 text-sm text-gray-light">
                Google Maps — Azua de Compostela, RD
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
