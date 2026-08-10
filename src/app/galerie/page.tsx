import GaleriePage from "@/components/views/Galerie";
import { gallery } from "@/mocks/gallery";

export const metadata = {
  title: "Galerie",
  description: "Ein Einblick in abgeschlossene Projekte von REEBAU.",
};

export default function Galerie() {
  return <GaleriePage data={gallery} />;
}
