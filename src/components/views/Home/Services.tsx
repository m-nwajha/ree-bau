import Link from "next/link";
import type { Service } from "@/@types/service";
import "./style.css";

const Services = ({ data, isHome }: { data: Service[]; isHome?: boolean }) => {
  const visibleItems = isHome ? data.slice(-5) : data;

  return (
    <section className="service-style-two">
      <div className="heading">
        <figure>
          <img src="/images/heading-icon.png" alt="heading-icon" />
        </figure>
        <span>Services</span>
        <h2>Was wir bieten</h2>
      </div>
      <div className="container">
        <div className="row g-0">
          {visibleItems.map((item) => (
            <div key={item.slug} className="col-lg-4 col-md-6 col-sm-12">
              <Link href={item.link}>
                <div className="service-two-box">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="service-two-icon d-flex-all justify-content-start">
                    <i
                      className={`${item.icon} service-main-icon`}
                      style={{ marginLeft: "17px" }}
                    />
                    <span>
                      <i className="fa-solid fa-arrow-up-long" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {isHome && (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-two-box last d-flex-all">
                <Link href="/services">
                  Alle Services ansehen
                  <span className="d-flex-all d-inline-flex">
                    <i className="fa-solid fa-angles-right" />
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
