"use client";

import { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import GalleryPopup from "@/components/ui/GalleryPopup";
import type { GalleryItem } from "@/@types/gallery";

const GaleriePage = ({ data }: { data: GalleryItem[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <Breadcrumb
        title="Galerie"
        description="Ein Einblick in abgeschlossene Projekte von REEBAU."
      />

      <section className="gap project-style-one addition">
        <div className="container">
          <div className="row project-slider">
            {data.map((item, index) => (
              <div key={item.id} className="col-lg-6">
                <div
                  className="project-post"
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setActiveIndex(index);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <figure>
                    <img className="w-100" src={item.image} alt={item.title} />
                  </figure>
                  <div className="project-data">
                    <h3>{item.title}</h3>
                    <span className="project-icon">
                      <i className="fa-solid fa-magnifying-glass" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GalleryPopup
        items={data}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
};

export default GaleriePage;
