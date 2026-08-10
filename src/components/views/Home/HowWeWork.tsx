import Link from "next/link";
import "./style.css";

type HowWeWorkItem = {
  icon: string;
  title: string;
  text: string;
  link: string;
};

const items: HowWeWorkItem[] = [
  {
    icon: "fa-solid fa-border-all",
    title: "Trockenbau",
    text: "Montage von nichttragenden Wänden, Decken und Verkleidungen mit hoher Präzision.",
    link: "/services",
  },
  {
    icon: "fa-solid fa-paint-roller",
    title: "Malerarbeiten",
    text: "Maler- und Grundierarbeiten für Innenräume, sauber und fachgerecht ausgeführt.",
    link: "/services",
  },
  {
    icon: "fa-solid fa-layer-group",
    title: "Bodenverlegung",
    text: "Verlegung von Laminat, Vinyl und Fertigparkett nach Herstellervorgaben.",
    link: "/services",
  },
];

const HowWeWork = ({ data }: { data?: HowWeWorkItem[] }) => {
  const list = data ?? items;

  return (
    <section className="gap service-style-one">
      <div className="container">
        <div className="row">
          {list.map((item) => (
            <div key={item.title} className="col-lg-4 col-md-6 col-sm-12 text-center p-3">
              <div className="service-data">
                <div className="svg-icon d-flex-all">
                  <i className={item.icon} />
                </div>
                <h3>
                  <Link href={item.link}>{item.title}</Link>
                </h3>
                <p>{item.text}</p>
                <Link href={item.link} className="icon">
                  <i className="fa-solid fa-angles-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
