import Breadcrumb from "@/components/common/Breadcrumb";
import Counters from "@/components/common/Counters";
import Projekte from "../Home/Projekte";
import { projekte } from "@/mocks/projekt";
import './style.css'


const steps = [
  {
    num: "1",
    title: "Beratung",
    text: "Wir besprechen Ihre Anforderungen und Vorstellungen in einem persönlichen Gespräch.",
  },
  {
    num: "2",
    title: "Planung",
    text: "Gemeinsam entwickeln wir einen detaillierten Plan für die Umsetzung Ihres Projekts.",
  },
  {
    num: "3",
    title: "Umsetzung",
    text: "Unser erfahrenes Team setzt die Arbeiten präzise und zuverlässig um.",
  },
  {
    num: "4",
    title: "Übergabe",
    text: "Nach Abschluss erfolgt eine sorgfältige Abnahme und Übergabe.",
  },
];

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        title="Über uns"
        description="REEBAU ist ein zuverlässiges Bau- und Trockenbauunternehmen mit Fokus auf Qualität, Professionalität und präzise handwerkliche Umsetzung."
      />

      <section className="gap about-first">
        <div className="container">
          <div className="row">
            <h2>Qualität. Zuverlässigkeit. Präzision.</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="who-we-are">
                <div>
                  <h3>Wer wir sind</h3>
                  <p>
                    REEBAU ist ein zuverlässiges Bau- und
                    Trockenbauunternehmen mit Fokus auf Qualität,
                    Professionalität und präzise handwerkliche Umsetzung. Das
                    Unternehmen bietet individuelle Lösungen sowohl für
                    private als auch gewerbliche Bauprojekte.
                  </p>
                </div>
                <figure>
                  <img
                    className="w-100"
                    src="/images/image-320x514.jpg"
                    alt="REEBAU bei der Arbeit"
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="who-we-are space">
                <div>
                  <h3>Warum REEBAU?</h3>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-dot" /> Langlebigkeit
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-dot" /> Sauberkeit
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-dot" /> Präzision
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-dot" /> Makellose
                      Ergebnisse
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-dot" /> Persönliche
                      Begleitung während der Umsetzung
                    </li>
                  </ul>
                </div>
                <figure>
                  <img
                    className="w-100"
                    src="/images/image-480x640%20(1).jpg"
                    alt="REEBAU Team"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Counters />

      <section className="gap about-how-it-works light-bg-color">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>Ablauf</span>
          <h2>So arbeiten wir</h2>
        </div>
        <div className="container">
          <figure style={{ position: "relative", zIndex: 9 }}>
            <img
              className="w-100"
              src="/images/image.jpg"
              alt="REEBAU Projektablauf"
            />
          </figure>
        </div>
        <div className="container">
          <div className="row g-0">
            {steps.map((step) => (
              <div key={step.title} className="col-lg-3 col-md-6 col-sm-12">
                <div className="plans">
                  <div className="y-box d-flex-all">{step.num}.</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Projekte data={projekte} />
      <section className="gap about-key-benefits">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="data">
                <figure>
                  <img
                    className="w-100"
                    src="/images/image-455x455%20(1).jpg"
                    alt="REEBAU Projekt"
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="data">
                <h2>Ihre Vorteile</h2>
                <ul>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Individuelle Lösungen, angepasst an Ihre Wünsche</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Erfahrenes Team von Trockenbau-Spezialisten</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Saubere und zuverlässige Ausführung</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>
                      Persönliche Begleitung während der gesamten Umsetzung
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
