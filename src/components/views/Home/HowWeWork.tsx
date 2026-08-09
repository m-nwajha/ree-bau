import Link from "next/link";
import "./style.css";

const items = [
  {
    icon: "fa-solid fa-border-all",
    title: "Trockenbau",
    text: "Montage von nichttragenden Wänden, Decken und Verkleidungen mit hoher Präzision.",
  },
  {
    icon: "fa-solid fa-paint-roller",
    title: "Malerarbeiten",
    text: "Maler- und Grundierarbeiten für Innenräume, sauber und fachgerecht ausgeführt.",
  },
  {
    icon: "fa-solid fa-layer-group",
    title: "Bodenverlegung",
    text: "Verlegung von Laminat, Vinyl und Fertigparkett nach Herstellervorgaben.",
  },
];

const HowWeWork = () => {
  return (
    <section className="gap service-style-one">
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <div key={item.title} className="col-lg-4 col-md-6 col-sm-12 text-center">
              <div className="service-data">
                <div className="svg-icon d-flex-all">
                  <i className={item.icon} />
                </div>
                <h3>
                  <Link href="/services">{item.title}</Link>
                </h3>
                <p>{item.text}</p>
                <Link href="/services" className="icon">
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
