import { Scale, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";

const practiceAreas = [
  "Derecho Familiar",
  "Derecho Penal",
  "Derecho Laboral",
  "Derecho Inmobiliario",
  "Derecho Civil y Comercial",
  "Derecho Migratorio",
];

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Equipo", href: "#equipo" },
  { label: "Proceso", href: "#proceso" },
  { label: "Preguntas Frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer>
      {/* Gold accent line */}
      <div className="h-[2px] bg-gold/30" />

      <div className="bg-navy-dark">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <a href="#inicio" className="flex items-center gap-2">
                <Scale className="h-6 w-6 text-gold" />
                <span className="font-heading text-lg">
                  <span className="font-bold text-white">De la Cruz</span>{" "}
                  <span className="font-normal text-white/80">& Asociados</span>
                </span>
              </a>
              <p className="mt-4 text-sm leading-relaxed text-white/50">
                Tu Derecho, Nuestra Prioridad. Más de 15 años ofreciendo
                soluciones jurídicas con excelencia y compromiso.
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href="https://instagram.com/nexix.legal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-gold hover:text-white"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="mailto:contacto@nexixlegal.com"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-gold hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                Áreas de Práctica
              </h4>
              <ul className="mt-5 space-y-3">
                {practiceAreas.map((a) => (
                  <li key={a}>
                    <a
                      href="#areas"
                      className="text-sm text-white/50 transition-colors hover:text-gold"
                    >
                      {a}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                Enlaces
              </h4>
              <ul className="mt-5 space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-white/50 transition-colors hover:text-gold"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                Contacto
              </h4>
              <ul className="mt-5 space-y-4">
                <li className="flex gap-3 text-sm text-white/50">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  Azua de Compostela, República Dominicana
                </li>
                <li>
                  <a
                    href="tel:+18092122325"
                    className="flex gap-3 text-sm text-white/50 transition-colors hover:text-gold"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-gold" />
                    (809) 212-2325
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contacto@nexixlegal.com"
                    className="flex gap-3 text-sm text-white/50 transition-colors hover:text-gold"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-gold" />
                    contacto@nexixlegal.com
                  </a>
                </li>
                <li className="flex gap-3 text-sm text-white/50">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  Lun-Vie 8AM-6PM | Sáb con cita previa
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-8 py-6 text-xs text-white/40 sm:flex-row">
            <p>&copy; 2026 De la Cruz & Asociados. Todos los derechos reservados.</p>
            <p>
              Desarrollado por{" "}
              <span className="text-gold">NEXIX Studio</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
