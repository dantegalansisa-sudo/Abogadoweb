"use client";

import { useState, useEffect } from "react";
import { Scale, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Áreas de Práctica", href: "#areas" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <Scale className="h-7 w-7 text-gold" />
          <span className="font-heading text-xl">
            <span className="font-bold text-navy">NEXIX</span>{" "}
            <span className="font-normal text-navy">LEGAL</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-dark transition-colors hover:text-navy"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+18092122325"
            className="flex items-center gap-1.5 text-sm text-gray-text transition-colors hover:text-navy"
          >
            <Phone className="h-4 w-4" />
            (809) 212-2325
          </a>
          <a
            href="https://wa.me/18092122325?text=Hola%20Lic.%20De%20la%20Cruz%2C%20necesito%20asesor%C3%ADa%20legal%20sobre%20un%20caso."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-navy px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-light"
          >
            Consulta Gratuita
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-navy"
          aria-label="Menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Gold accent line */}
      <div className="h-[2px] bg-gold/30" />

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <div className="flex flex-col gap-4 px-8 py-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-dark transition-colors hover:text-navy"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://wa.me/18092122325?text=Hola%20Lic.%20De%20la%20Cruz%2C%20necesito%20asesor%C3%ADa%20legal%20sobre%20un%20caso."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-lg bg-navy px-6 py-3 text-center text-sm font-medium text-white"
              >
                Consulta Gratuita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
