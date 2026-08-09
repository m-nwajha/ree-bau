"use client";

import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { contactInfo } from "@/constants/contact-info";
import { services } from "@/mocks/services";

const faqs = [
  {
    title: "Welche Leistungen bietet REEBAU an?",
    text: "REEBAU bietet Innenausbau, Raumausstattung, Trockenbau, Malerarbeiten und Bodenverlegung für private und gewerbliche Bauprojekte.",
  },
  {
    title: "Worauf ist REEBAU spezialisiert?",
    text: "Das Unternehmen ist besonders auf Trockenbau spezialisiert und bietet ergänzende Leistungen für unterschiedliche Bauprojekte an.",
  },
  {
    title: "Wie viele Jahre Erfahrung hat REEBAU?",
    text: "REEBAU verfügt laut Website über 10 Jahre Erfahrung.",
  },
  {
    title: "Wie kann ich REEBAU kontaktieren?",
    text: `Rufen Sie uns an unter ${contactInfo.phone} oder schreiben Sie uns über das Kontaktformular.`,
  },
];

const ContactFaq = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to a real backend/email service once available.
    setSubmitted(true);
  };

  return (
    <section className="contact-form-one">
      <div className="heading">
        <figure>
          <img src="/images/heading-icon.png" alt="heading-icon" />
        </figure>
        <span>Kontakt</span>
        <h2>Fragen &amp; Kontakt</h2>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="acc2">
              <Accordion defaultActiveKey="contact-acc-0" alwaysOpen>
                {faqs.map((item, key) => (
                  <Accordion.Item key={item.title} eventKey={`contact-acc-${key}`}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>
                      <p>{item.text}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="c-form-2">
              <div
                className="parallax"
                style={{ backgroundImage: "url(/images/pattren.png)" }}
              />

              {submitted ? (
                <p>Danke für Ihre Nachricht! Wir melden uns bald bei Ihnen.</p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-0">
                    <div className="col-md-6">
                      <label htmlFor="cf-name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cf-name"
                        placeholder="Name eingeben"
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="cf-phone">Telefonnummer</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="cf-phone"
                        placeholder="Telefonnummer eingeben"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col-md-6">
                      <label htmlFor="cf-email">E-Mail</label>
                      <input
                        type="email"
                        className="form-control"
                        id="cf-email"
                        placeholder="E-Mail eingeben"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="cf-service">Services</label>
                      <div className="select-wrapper">
                        <select
                          className="form-control"
                          id="cf-service"
                          name="service"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                        >
                          <option value="">Services</option>
                          {services.map((item) => (
                            <option key={item.slug} value={item.slug}>
                              {item.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0">
                    <label htmlFor="cf-message">Nachricht</label>
                    <textarea
                      id="cf-message"
                      placeholder="Beschreiben Sie Ihr Anliegen"
                      name="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="theme-btn">
                    Jetzt absenden
                    <i className="fa-solid fa-angles-right" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFaq;
