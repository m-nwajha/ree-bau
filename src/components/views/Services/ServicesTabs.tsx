"use client";

import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { services } from "@/mocks/services";

const ServicesTabs = () => {
  return (
    <section className="gap no-top construction-services">
      <div className="container">
        <Tab.Container id="services-tab-content" defaultActiveKey={services[0].slug}>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="services-nav">
                <h2>Unsere Services</h2>
                <Nav variant="pills" className="nav nav-pills mb-3">
                  {services.map((service) => (
                    <Nav.Item key={service.slug}>
                      <Nav.Link eventKey={service.slug}>{service.title}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>
            </div>
            <div className="col-lg-8">
              <Tab.Content>
                {services.map((service) => (
                  <Tab.Pane key={service.slug} eventKey={service.slug} title={service.title}>
                    <figure>
                      <img className="w-100" src={service.image} alt={service.title} />
                      <figcaption>
                        <h3>{service.title}</h3>
                        <p>{service.text}</p>
                      </figcaption>
                    </figure>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </section>
  );
};

export default ServicesTabs;
