import Breadcrumb from "@/components/common/Breadcrumb";
import ProjektCard from "@/components/ui/ProjektCard";
import type { ProjektItem } from "@/@types/projekt";
import "./style.css";

const ProjektePage = ({ data }: { data: ProjektItem[] }) => {
  return (
    <>
      <Breadcrumb
        title="Projekte"
        description="Ein Einblick in abgeschlossene Projekte von REEBAU."
      />

      <section id="project-page" className="gap project-style-one addition">
        <div className="container">
          <div className="row project-slider">
            {data.map((item) => (
              <div key={item.id} className="col-lg-6">
                <ProjektCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjektePage;
