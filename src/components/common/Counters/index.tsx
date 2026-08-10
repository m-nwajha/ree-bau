const stats = [
  { value: "500+", label: "Projekte abgeschlossen" },
  { value: "95%", label: "Zufriedene Kunden" },
  { value: "10", label: "Jahre Erfahrung" },
];

const Counters = () => {
  return (
    <section className="gap counter-style-one">
      <div className="container">
        <div className="row">
          {stats.map((stat) => (
            <div key={stat.label} className="col-lg-4 col-md-6 col-sm-12">
              <div className="counter-data">
                <div className="count">{stat.value}</div>
                <h4>{stat.label}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counters;
