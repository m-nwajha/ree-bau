import Link from "next/link";

const items = [
  {
    title: "Projekte abgeschlossen",
    stat: "500+",
    description: "REEBAU gibt 500 abgeschlossene Projekte an.",
    features: ["Präzision", "Zuverlässigkeit"],
    image: "/images/image-320x240.jpg",
  },
  {
    title: "Zufriedene Kunden",
    stat: "95%",
    description: "Das Unternehmen gibt eine Kundenzufriedenheit von 95 % an.",
    features: ["Hochwertige Ergebnisse", "Teamarbeit"],
    image: "/images/image-320x240%20(2).jpg",
  },
  {
    title: "Jahre Erfahrung",
    stat: "10",
    description: "REEBAU verfügt laut Website über 10 Jahre Erfahrung.",
    features: ["Erfahrung", "Liebe zum Detail"],
    image: "/images/image-320x240%20(1).jpg",
  },
];

const WhyUs = () => {
  return (
    <section className="gap no-top pricing-plans">
      <div className="heading">
        <figure>
          <img src="/images/heading-icon.png" alt="heading-icon" />
        </figure>
        <span>Warum REEBAU</span>
        <h2>Zahlen &amp; Fakten</h2>
      </div>
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <div key={item.title} className="col-lg-4 col-md-6 col-sm-12">
              <div className="main-price">
                <div className="price-box">
                  <h3>{item.title}</h3>
                  <div className="price">
                    <h2>{item.stat}</h2>
                  </div>
                  <p>{item.description}</p>
                  <Link href="/kontakt" className="theme-btn">
                    Jetzt kontaktieren
                    <i className="fa-solid fa-angles-right" />
                  </Link>
                </div>
                <div className="features">
                  <ul>
                    {item.features.map((feature) => (
                      <li key={feature}>
                        <i className="fa-solid fa-circle-check" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="price-img">
                  <figure>
                    <img src={item.image} alt={item.title} />
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
