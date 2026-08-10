import { notFound } from "next/navigation";
import ProjektDetailPage from "@/components/views/ProjektDetail";
import { projekte } from "@/mocks/projekt";
import { slugify } from "@/utils/slugify";

export function generateStaticParams() {
  return projekte.map((item) => ({ slug: slugify(item.title) }));
}

export async function generateMetadata(props: PageProps<"/projekte/[slug]">) {
  const { slug } = await props.params;
  const item = projekte.find((entry) => slugify(entry.title) === slug);

  if (!item) return {};

  return {
    title: item.title,
    description: item.short,
  };
}

export default async function ProjektDetail(
  props: PageProps<"/projekte/[slug]">,
) {
  const { slug } = await props.params;
  const index = projekte.findIndex((entry) => slugify(entry.title) === slug);

  if (index === -1) notFound();

  const item = projekte[index];
  const prevItem = index > 0 ? projekte[index - 1] : null;
  const nextItem = index < projekte.length - 1 ? projekte[index + 1] : null;
  const relatedItems = projekte
    .filter((_, entryIndex) => entryIndex !== index)
    .slice(0, 3);

  return (
    <ProjektDetailPage
      item={item}
      prevItem={prevItem}
      nextItem={nextItem}
      relatedItems={relatedItems}
    />
  );
}
