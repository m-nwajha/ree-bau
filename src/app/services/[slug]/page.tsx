import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/views/ServiceDetail";
import { services } from "@/mocks/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = services.find((item) => item.slug === slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.text,
  };
}

export default async function ServiceDetail(
  props: PageProps<"/services/[slug]">,
) {
  const { slug } = await props.params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
