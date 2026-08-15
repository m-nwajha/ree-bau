import type { FaqItem } from "@/@types/faq";
import { contactInfo } from "@/constants/contact-info";

export const faqs: FaqItem[] = [
  {
    title: "Welche Leistungen bietet REEBAU an?",
    text: "REEBAU bietet Innenausbau, Raumausstattung, Trockenbau, Malerarbeiten und Bodenverlegung für private und gewerbliche Bauprojekte.",
  },
  {
    title: "Wofür steht REEBAU im Innenausba",
    text: "Das Unternehmen ist besonders auf Trockenbau spezialisiert und bietet ergänzende Leistungen für unterschiedliche Bauprojekte an.",
  },
  {
    title: "Wie lange ist REEBAU schon erfahren?.",
    text: "REEBAU verfügt laut Website über 10 Jahre Erfahrung.",
  },
  {
    title: "Wie kann ich REEBAU kontaktieren?",
    text: `Rufen Sie uns an unter ${contactInfo.phone} oder schreiben Sie uns über das Kontaktformular.`,
  },
];
