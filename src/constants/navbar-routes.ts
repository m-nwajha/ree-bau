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
  { title: "Projekte", href: "/projekte" },
  { title: "Über uns", href: "/ueber-uns" },
  { title: "Kontakt", href: "/kontakt" },
];
