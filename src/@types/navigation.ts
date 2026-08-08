export type NavRoute = {
  title: string;
  href: string;
  subRoutes?: NavRoute[];
};
