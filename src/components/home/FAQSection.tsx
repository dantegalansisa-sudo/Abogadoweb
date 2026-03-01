"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";

const faqs = [
  {
    question: "¿Cuánto cuesta la consulta inicial?",
    answer:
      "La primera consulta es GRATUITA. Evaluamos tu caso sin compromiso y te explicamos tus opciones legales antes de tomar cualquier decisión.",
  },
  {
    question: "¿Cómo se cobran los honorarios?",
    answer:
      "Trabajamos con diferentes modalidades según el tipo de caso: honorarios fijos, por hora o porcentaje sobre resultados. Todo se acuerda por escrito antes de iniciar.",
  },
  {
    question: "¿Cuánto tiempo toma resolver un caso?",
    answer:
      "Cada caso es diferente. En la consulta inicial te damos un estimado realista de tiempos. Nos comprometemos a mantenerte informado en cada etapa.",
  },
  {
    question: "¿Atienden casos fuera de Santo Domingo?",
    answer:
      "Sí, atendemos casos en toda la República Dominicana. Para clientes fuera de Santo Domingo, ofrecemos consultas virtuales por videollamada.",
  },
  {
    question: "¿Qué documentos necesito para mi primera consulta?",
    answer:
      "Cualquier documento relacionado con tu caso: contratos, notificaciones, certificados, correos, etc. Si no tienes documentos, no te preocupes — podemos iniciar con tu relato verbal.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-beige-medium/50">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="pr-4 font-heading text-lg font-semibold text-navy">
          {question}
        </span>
        <span className="shrink-0 text-gold transition-transform duration-300">
          {open ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 leading-relaxed text-gray-text">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <div className="mx-auto mb-4 h-[2px] w-10 bg-gold" />
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Preguntas Frecuentes
            </h2>
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <ScrollReveal>
          <div>
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
