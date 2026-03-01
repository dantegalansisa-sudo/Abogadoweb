"use client";

import ScrollReveal from "../ui/ScrollReveal";

const stats = [
  { number: "15+", label: "Años de Experiencia" },
  { number: "2,000+", label: "Casos Resueltos" },
  { number: "98%", label: "Casos Ganados" },
  { number: "500+", label: "Clientes Satisfechos" },
];

export default function StatsBar() {
  return (
    <section className="bg-navy py-10">
      <div className="mx-auto max-w-6xl px-8">
        <div className="flex flex-wrap items-center justify-center gap-y-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {i > 0 && (
                <div className="mx-8 hidden h-12 w-[1px] bg-gold/40 lg:block" />
              )}
              <ScrollReveal delay={i * 0.1}>
                <div className="min-w-[140px] text-center">
                  <p className="font-heading text-3xl font-bold text-white">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-sm text-gold/80">{stat.label}</p>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
