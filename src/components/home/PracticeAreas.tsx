"use client";

import {
  Heart,
  Shield,
  Briefcase,
  Building,
  FileText,
  Globe,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

interface PracticeArea {
  icon: LucideIcon;
  title: string;
  description: string;
  services: string[];
}

const areas: PracticeArea[] = [
  {
    icon: Heart,
    title: "Derecho Familiar",
    description:
      "Acompañamos a nuestras familias en los momentos más importantes y difíciles. Divorcios, pensiones alimenticias, custodia de menores, adopciones, violencia intrafamiliar y acuerdos prenupciales. Buscamos siempre el bienestar de la familia, especialmente de los menores involucrados.",
    services: [
      "Divorcios",
      "Custodia",
      "Pensión alimenticia",
      "Adopción",
      "Acuerdos prenupciales",
    ],
  },
  {
    icon: Shield,
    title: "Derecho Penal",
    description:
      "Defendemos tus derechos en procedimientos penales con estrategias sólidas y una defensa agresiva pero ética. Representación en delitos menores y mayores, fianzas, apelaciones y procesos ante tribunales. Tu libertad y reputación son nuestra prioridad.",
    services: [
      "Defensa criminal",
      "Fianzas",
      "Apelaciones",
      "Delitos financieros",
      "Asesoría preventiva",
    ],
  },
  {
    icon: Briefcase,
    title: "Derecho Laboral",
    description:
      "Protegemos los derechos de empleados y empleadores. Despidos injustificados, acoso laboral, contratos, prestaciones, demandas laborales y negociación colectiva. Conocemos el Código de Trabajo a profundidad para garantizar tus derechos.",
    services: [
      "Despido injustificado",
      "Acoso laboral",
      "Contratos",
      "Prestaciones",
      "Demandas",
    ],
  },
  {
    icon: Building,
    title: "Derecho Inmobiliario",
    description:
      "Asesoría completa en transacciones inmobiliarias. Compraventa de propiedades, contratos de alquiler, títulos de propiedad, deslinde, saneamiento y resolución de disputas sobre terrenos. Protegemos tu inversión más importante.",
    services: [
      "Compraventa",
      "Títulos",
      "Deslinde",
      "Contratos de alquiler",
      "Disputas de propiedad",
    ],
  },
  {
    icon: FileText,
    title: "Derecho Civil y Comercial",
    description:
      "Representación en litigios civiles, contratos comerciales, cobro de deudas, constitución de empresas, propiedad intelectual y resolución de conflictos. Soluciones legales para personas y empresas.",
    services: [
      "Contratos",
      "Cobro de deudas",
      "Constitución de empresas",
      "Litigios",
      "Mediación",
    ],
  },
  {
    icon: Globe,
    title: "Derecho Migratorio",
    description:
      "Asesoría en trámites migratorios, visas, residencias, naturalización y permisos de trabajo. Facilitamos los procesos legales para que puedas establecerte con tranquilidad.",
    services: [
      "Visas",
      "Residencias",
      "Naturalización",
      "Permisos de trabajo",
      "Deportación",
    ],
  },
];

function AreaCard({
  area,
  index,
}: {
  area: PracticeArea;
  index: number;
}) {
  const isReversed = index % 2 !== 0;

  return (
    <ScrollReveal>
      <div className="overflow-hidden rounded-2xl bg-white p-8 shadow-sm border border-beige-medium/50 sm:p-12">
        <div
          className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-12 ${
            isReversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Icon */}
          <div className="flex shrink-0 items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gold-light">
              <area.icon className="h-10 w-10 text-gold" />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <h3 className="font-heading text-2xl font-bold text-navy">
              {area.title}
            </h3>
            <p className="leading-relaxed text-gray-text">{area.description}</p>

            {/* Service tags */}
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {area.services.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-beige px-4 py-1.5 text-xs font-medium text-navy"
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href="https://wa.me/18090000000?text=Hola%20NEXIX%20Legal%2C%20necesito%20asesor%C3%ADa%20legal%20sobre%20un%20caso."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block pt-2 text-sm font-medium text-navy transition-colors hover:text-gold"
            >
              Consultar sobre este caso →
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function PracticeAreas() {
  return (
    <section id="areas" className="bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <div className="mx-auto mb-4 h-[2px] w-10 bg-gold" />
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Áreas de Práctica
            </h2>
            <p className="mt-4 text-gray-text">
              Experiencia legal en las áreas que más importan
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="space-y-8">
          {areas.map((area, i) => (
            <AreaCard key={area.title} area={area} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
