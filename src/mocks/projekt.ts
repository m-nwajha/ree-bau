import type { ProjektItem } from "@/@types/projekt";

export const projekte: ProjektItem[] = [
  {
    id: "wohnraumgestaltung",
    title: "Wohnraumgestaltung",
    short:
      "Individuelle Gestaltung von Wohnräumen mit hochwertigen Materialien und durchdachten Details.",
    content:
      "Bei diesem Projekt haben wir einen Wohnraum individuell nach den Vorstellungen unserer Kunden gestaltet. Von der Planung bis zur Umsetzung wurde auf hochwertige Materialien und eine saubere, präzise Verarbeitung geachtet. Das Ergebnis ist ein Raum, der Funktionalität und Wohnkomfort miteinander verbindet.",
    image: "/images/image-455x455%20(2).jpg",
    gallery: [
      { type: "image", src: "/images/image-455x455%20(2).jpg" },
      { type: "image", src: "/images/image-455x455%20(1).jpg" },
    ],
  },
  {
    id: "raumausstattung",
    title: "Raumausstattung",
    short:
      "Optische und funktionale Aufwertung von Räumen ganz nach den Wünschen unserer Kunden.",
    content:
      "In diesem Projekt haben wir Räume sowohl optisch als auch funktional aufgewertet. Individuelle Lösungen wurden gemeinsam mit den Kunden entwickelt und mit handwerklicher Sorgfalt umgesetzt. So entstand ein stimmiges Gesamtbild, das den Wünschen der Bewohner entspricht.",
    image: "/images/image-455x455%20(3).jpg",
    gallery: [
      { type: "image", src: "/images/image-455x455%20(3).jpg" },
      { type: "image", src: "/images/image-480x640.jpg" },
    ],
  },
  {
    id: "oberflaechenveredelung",
    title: "Oberflächenveredelung",
    short:
      "Präzise Veredelung von Oberflächen für ein hochwertiges und langlebiges Ergebnis.",
    content:
      "Dieses Projekt umfasste die präzise Veredelung verschiedener Oberflächen im Innenbereich. Durch sorgfältige Vorbereitung und fachgerechte Ausführung wurde ein hochwertiges und langlebiges Ergebnis erzielt. Der Fokus lag dabei stets auf einer sauberen, gleichmäßigen Verarbeitung.",
    image: "/images/image-455x455%20(4).jpg",
    gallery: [
      { type: "image", src: "/images/image-455x455%20(4).jpg" },
      { type: "image", src: "/images/image-480x640%20(1).jpg" },
    ],
  },
  {
    id: "deckenbeleuchtung",
    title: "Deckenbeleuchtung",
    short:
      "Moderne Deckenlösungen mit integrierter Beleuchtung für eine stimmungsvolle Raumatmosphäre.",
    content:
      "Für dieses Projekt wurde eine moderne Deckenlösung mit integrierter Beleuchtung realisiert. Die Kombination aus durchdachter Konstruktion und stimmungsvoller Beleuchtung schafft eine angenehme Raumatmosphäre. Auch hier stand eine saubere und präzise Umsetzung im Vordergrund.",
    image: "/images/image-455x455%20(5).jpg",
    gallery: [
      { type: "image", src: "/images/image-455x455%20(5).jpg" },
      { type: "image", src: "/images/image-320x240%20(3).jpg" },
    ],
  },
  {
    id: "innenausbau",
    title: "Innenausbau",
    short:
      "Sorgfältiger Innenausbau für funktionale und ansprechend gestaltete Wohn- und Arbeitsbereiche.",
    content:
      "Im Rahmen dieses Projekts wurde der Innenausbau eines Wohn- und Arbeitsbereichs umgesetzt. Ziel war es, funktionale und zugleich ansprechend gestaltete Räume zu schaffen. Von der ersten Planung bis zur finalen Umsetzung wurde auf Präzision und saubere Handwerksarbeit geachtet.",
    image: "/images/image-480x480.jpg",
    gallery: [
      { type: "image", src: "/images/image-480x480.jpg" },
      { type: "image", src: "/images/image-800x800.jpg" },
      // Placeholder/test video slide (theme demo clip, same one already
      // accepted on the Services page) — swap for a real REEBAU project
      // video before shipping.
      { type: "video", videoId: "https://www.youtube.com/watch?v=XW56I0CJW6g" },
    ],
  },
];
