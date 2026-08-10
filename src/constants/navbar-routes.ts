import type { NavRoute } from "@/@types/navigation";
import { services } from "@/mocks/services";

export const navbarRoutes: NavRoute[] = [
  { title: "Home", href: "/" },
  {
    title: "Services",
    href: "/services",
    subRoutes: [
      ...services.map((service) => ({
        title: service.title,
        href: `/services/${service.slug}`,
      })),
    ],
  },
  { title: "Galerie", href: "/galerie" },
  { title: "Über uns", href: "/ueber-uns" },
  { title: "Kontakt", href: "/kontakt" },
];
