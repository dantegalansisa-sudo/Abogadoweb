"use client";

import { User } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface TeamCardProps {
  name: string;
  title: string;
  description: string;
  delay?: number;
}

export default function TeamCard({ name, title, description, delay = 0 }: TeamCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="group cursor-default">
        {/* Photo placeholder */}
        <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-b from-cream to-beige">
          <User className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-navy/30" />
        </div>
        {/* Info */}
        <h3 className="font-heading text-xl font-bold text-navy">{name}</h3>
        <p className="mt-1 text-sm font-medium text-gold">{title}</p>
        <p className="mt-3 text-gray-text leading-relaxed">{description}</p>
        {/* Gold line on hover */}
        <div className="mt-4 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
      </div>
    </ScrollReveal>
  );
}
