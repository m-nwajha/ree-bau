import ProjektePage from "@/components/views/Projekte";
import { projekte } from "@/mocks/projekt";

export const metadata = {
  title: "Projekte",
  description: "Ein Einblick in abgeschlossene Projekte von REEBAU.",
};

export default function Projekte() {
  return <ProjektePage data={projekte} />;
}
