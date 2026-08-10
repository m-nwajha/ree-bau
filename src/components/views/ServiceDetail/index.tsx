"use client";

import Breadcrumb from "@/components/common/Breadcrumb";
import type { Service } from "@/@types/service";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import { faqs } from "@/mocks/faq";

const ServiceDetailPage = ({ service }: { service: Service }) => {
  return (
    <>
      <Breadcrumb title={service.title} description={service.text} />

      <section className="about-first service-detail-first detail-page pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="who-we-are">
                <p>{service.text}</p>
              </div>
            </div>
            <div className="col-lg-12 my-2">
              <div className="who-we-are">
                <figure>
                  <Image
                    width={1200}
                    height={600}
                    className="img-fluid w-100 rounded"
                    style={{ maxHeight: "500px", objectFit: "cover" }}
                    src={service.image}
                    alt={service.title}
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <h3>Leistungen im Überblick</h3>
              <div className="innovation">
                <ul className="justify-content-start">
                  {service.checklist.map((item) => (
                    <li key={item} style={{height: "unset", padding: '2rem'}}>
                      <i className="fa-solid fa-check" />
                      <p className="m-0">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-faqs gap">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>Häufig gestellte Fragen</span>
          <h2>Antworten auf Ihre Fragen</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="acc2">
                <Accordion defaultActiveKey="contact-acc-0" alwaysOpen>
                  {faqs.map((item, key) => (
                    <Accordion.Item
                      key={item.title}
                      eventKey={`contact-acc-${key}`}
                    >
                      <Accordion.Header>{item.title}</Accordion.Header>
                      <Accordion.Body>
                        <p>{item.text}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
