import Link from "next/link";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProjektCard from "@/components/ui/ProjektCard";
import ContactFaq from "@/components/views/Home/ContactFaq";
import GallerySlider from "./GallerySlider";
import { slugify } from "@/utils/slugify";
import type { ProjektItem } from "@/@types/projekt";
import "./style.css";

const projectFacts = [
  {
    label: "Bereich",
    value: "Innenausbau, Trockenbau, Malerarbeiten & Bodenverlegung",
    icon: "fa-solid fa-house-chimney-window",
  },
  {
    label: "Auftraggeber",
    value: "Privat- und Gewerbekunden",
    icon: "fa-solid fa-handshake",
  },
  {
    label: "Ausführung",
    value: "Individuelle Planung & Umsetzung nach Absprache",
    icon: "fa-solid fa-ruler-combined",
  },
  {
    label: "Qualität",
    value: "Handwerkliche Präzision & saubere Verarbeitung",
    icon: "fa-solid fa-medal",
  },
];

const ProjektDetailPage = ({
  item,
  prevItem,
  nextItem,
  relatedItems,
}: {
  item: ProjektItem;
  prevItem: ProjektItem | null;
  nextItem: ProjektItem | null;
  relatedItems: ProjektItem[];
}) => {
  return (
    <>
      <Breadcrumb title={item.title} description={item.short} />

      <section className="gap detail-page">
        <div className="container">
          <ul className="next-prev-projects">
            {prevItem && (
              <li className="prev">
                <Link href={`/projekte/${slugify(prevItem.title)}`}>
                  <i className="fa-solid fa-arrow-left-long" />
                </Link>
              </li>
            )}
            {nextItem && (
              <li className="next">
                <Link href={`/projekte/${slugify(nextItem.title)}`}>
                  <i className="fa-solid fa-arrow-right-long" />
                </Link>
              </li>
            )}
          </ul>

          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="pr-dat">
                <div className="heading-style-2">
                  <div className="container p-0">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="data">
                          <span>Project Overview</span>
                          <h2>{item.title}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p>{item.content}</p>

                <div className="row space">
                  {projectFacts.map((fact) => (
                    <div key={fact.label} className="col-lg-6 col-md-6 col-sm-12">
                      <div className="project-d-detail">
                        <div className="data">
                          <h3>{fact.label}</h3>
                          <p>{fact.value}</p>
                        </div>
                        <div className="d-flex-all icon">
                          <i className={`${fact.icon} project-fact-icon`} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GallerySlider
        slides={
          item.gallery && item.gallery.length > 0
            ? item.gallery
            : [{ type: "image", src: item.image }]
        }
        title={item.title}
      />

      {relatedItems.length > 0 && (
        <section className="gap project-style-one">
          <div className="heading">
            <figure>
              <img src="/images/heading-icon.png" alt="Heading Icon" />
            </figure>
            <span>Projekte</span>
            <h2>Weitere Projekte</h2>
          </div>
          <div className="container">
            <div className="row">
              {relatedItems.map((related) => (
                <div key={related.id} className="col-lg-4 col-md-6 col-sm-12">
                  <ProjektCard item={related} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactFaq />
    </>
  );
};

export default ProjektDetailPage;
