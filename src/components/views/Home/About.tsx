const About = () => {
  return (
    <section className="gap our-goal">
      <div className="heading">
        <figure>
          <img src="/images/heading-icon.png" alt="heading-icon" />
        </figure>
        <span>Über REEBAU</span>
        <h2>Qualität. Zuverlässigkeit. Präzision.</h2>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="data">
              <h4>Maßgeschneiderte Lösungen</h4>
              <p>
                REEBAU bietet individuelle Lösungen, die an die Anforderungen
                und Wünsche des jeweiligen Kunden angepasst werden.
              </p>
            </div>
            <div className="data p2">
              <h4>Erfahrenes Team</h4>
              <ul>
                <li>Präzision</li>
                <li>Zuverlässigkeit</li>
                <li>Hochwertige Ergebnisse</li>
                <li>Teamarbeit</li>
                <li>Erfahrung</li>
                <li>Liebe zum Detail</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="data">
              <figure className="goal-img">
                <img
                  src="/images/image-800x800.jpg"
                  alt="Trockenbau-Projekt von REEBAU"
                />
              </figure>
              {/* <figure className="goal-mov">
                <Image src="/images/logo.png" alt="REEBAU" width={90} height={90} />
              </figure> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
