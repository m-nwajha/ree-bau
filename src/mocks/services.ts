import type { Service } from "@/@types/service";

export const services: Service[] = [
  {
    slug: "innenausbau",
    title: "Innenausbau",
    text: "REEBAU unterstützt Kunden beim Innenausbau mit praxisorientierter und sorgfältiger Handwerksarbeit.",
    icon: "fa-solid fa-house-chimney-window",
    link: "/services/innenausbau",
  },
  {
    slug: "raumausstattung",
    title: "Raumausstattung",
    text: "Räume werden sowohl optisch als auch funktional gestaltet – individuell nach Kundenwunsch.",
    icon: "fa-solid fa-couch",
    link: "/services/raumausstattung",
  },
  {
    slug: "trockenbau",
    title: "Trockenbau",
    text: "Montage von nichttragenden Wänden, Decken und Verkleidungen mit hoher Präzision.",
    icon: "fa-solid fa-border-all",
    link: "/services/trockenbau",
  },
  {
    slug: "malerarbeiten",
    title: "Malerarbeiten",
    text: "Maler- und Grundierarbeiten für Innenräume, sauber und fachgerecht ausgeführt.",
    icon: "fa-solid fa-paint-roller",
    link: "/services/malerarbeiten",
  },
  {
    slug: "bodenverlegung",
    title: "Bodenverlegung",
    text: "Verlegung von Laminat, Vinyl und Fertigparkett nach Herstellervorgaben.",
    icon: "fa-solid fa-layer-group",
    link: "/services/bodenverlegung",
  },
];
