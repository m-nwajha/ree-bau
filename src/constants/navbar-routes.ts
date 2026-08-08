import type { NavRoute } from "@/@types/navigation";

export const navbarRoutes: NavRoute[] = [
  { title: "Home", href: "/" },
  {
    title: "Services",
    href: "/services",
    subRoutes: [
      { title: "Bodenleger", href: "/services/bodenleger" },
      { title: "Maler", href: "/services/maler" },
      { title: "Fliesenleger", href: "/services/fliesenleger" },
      { title: "Renovierer", href: "/services/renovierer" },
      { title: "Haustüren", href: "/services/haustueren" },
      { title: "Trockenbau", href: "/services/trockenbau" },
    ],
  },
  { title: "Galerie", href: "/galerie" },
  { title: "Über uns", href: "/ueber-uns" },
  { title: "Kontakt", href: "/kontakt" },
];
