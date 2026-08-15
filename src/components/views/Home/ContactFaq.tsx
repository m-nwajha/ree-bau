"use client";

import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import ContactFormFields, {
  emptyContactFormValues,
  type ContactFormValues,
} from "@/components/ui/ContactFormFields";
import type { ContactFormField } from "@/constants/contact-form-fields";
import { faqs } from "@/mocks/faq";

const ContactFaq = () => {
  const [values, setValues] = useState<ContactFormValues>(
    emptyContactFormValues,
  );
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name: ContactFormField["name"], value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

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
        <h2>Fragen &amp; Beratun</h2>
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
                  <ContactFormFields values={values} onChange={handleChange} />
                  <button type="submit" className="theme-btn">
                    Anfrage senden
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
