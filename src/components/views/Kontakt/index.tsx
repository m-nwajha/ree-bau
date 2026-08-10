"use client";

import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Breadcrumb from "@/components/common/Breadcrumb";
import ContactFormFields, {
  emptyContactFormValues,
  type ContactFormValues,
} from "@/components/ui/ContactFormFields";
import type { ContactFormField } from "@/constants/contact-form-fields";
import { contactInfo, socialLinks } from "@/constants/contact-info";
import { faqs } from "@/mocks/faq";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${contactInfo.address.street}, ${contactInfo.address.zip} ${contactInfo.address.city}, ${contactInfo.address.country}`,
)}&output=embed`;

const KontaktPage = () => {
  const [values, setValues] = useState<ContactFormValues>(
    emptyContactFormValues,
  );
  const [consent, setConsent] = useState(false);
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
    <>
      <Breadcrumb
        title="Kontakt"
        description="Nehmen Sie Kontakt mit REEBAU auf – wir beraten Sie gerne zu Ihrem Bauprojekt."
      />

      <section className="gap contact-form-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="data">
                <span>Wie können wir helfen?</span>
                <h2>Kontaktieren Sie uns</h2>
                <p>
                  Haben Sie Fragen oder möchten Sie ein Projekt besprechen?
                  Füllen Sie das Formular aus und wir melden uns bei Ihnen.
                </p>

                {submitted ? (
                  <p>
                    Danke für Ihre Nachricht! Wir melden uns bald bei Ihnen.
                  </p>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <ContactFormFields values={values} onChange={handleChange} />
                    <button type="submit" className="theme-btn">
                      Jetzt absenden
                      <i className="fa-solid fa-angles-right" />
                    </button>

                    <div className="form-status" />
                  </form>
                )}
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div className="info">
                <ul className="contact">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="79"
                      height="94"
                      viewBox="0 0 79 94"
                    >
                      <path
                        d="M962.855,575.375a3,3,0,0,1-2.1-.861l-26.263-25.826c-11.03-11.993-13.791-27.653-7.492-42a38.334,38.334,0,0,1,34.959-23.117l1.346.009c15.262,0,27.868,8.452,33.722,22.609,6.152,14.878,3.046,31.554-7.912,42.485-.528.555-24.064,25.75-24.064,25.75a3,3,0,0,1-2.129.951Zm-.9-85.8A31.924,31.924,0,0,0,932.49,509.1c-5.313,12.1-2.954,25.342,6.31,35.419l23.963,23.559c15.027-16.085,20.179-21.585,22.274-23.488l-.164-.165c9.233-9.209,11.825-23.318,6.605-35.944a29.677,29.677,0,0,0-28.177-18.9Z"
                        transform="translate(-922.725 -482.15)"
                      />
                      <path
                        d="M15,6a9,9,0,1,0,9,9,9.01,9.01,0,0,0-9-9m0-6A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z"
                        transform="translate(25 26)"
                      />
                    </svg>
                    <div>
                      <h3>Adresse:</h3>
                      <p>
                        {contactInfo.address.street}, {contactInfo.address.zip}{" "}
                        {contactInfo.address.city}
                      </p>
                    </div>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="62"
                      viewBox="0 0 40 62"
                    >
                      <path
                        d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z"
                        transform="translate(1 1)"
                      />
                      <path
                        d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z"
                        transform="translate(14 48)"
                      />
                    </svg>
                    <div>
                      <h3>Telefon:</h3>
                      <p>{contactInfo.phone}</p>
                    </div>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="102"
                      height="93"
                      viewBox="0 0 102 93"
                    >
                      <path d="M969.85,550.4,927.766,528.2l2.8-5.307,39.229,20.7,37.712-20.677,2.885,5.261Z" transform="translate(-918 -492)" />
                      <path
                        d="M969.562,494.385l48.391,25.361,0,1.818c-.023,17.272-.043,42.814-.012,47.124l.012.024v.709c0,5.426-1.516,9.425-4.508,11.885a10.4,10.4,0,0,1-6.575,2.344l-75.5-.016c-3.557.071-5.965-.931-7.717-2.752-2.4-2.5-3.517-6.391-3.317-11.577l.065-1.194c.116-5.315.029-29.954-.067-46.535l-.011-1.842Zm42.386,28.988-42.411-22.227-43.2,22.238c.189,32.939.239,42.8-.143,46.148l.13.005c-.168,4.351.8,6.309,1.645,7.185a3.342,3.342,0,0,0,2.458.984l76.043-.071a4.65,4.65,0,0,0,3.16-.963c1.517-1.248,2.319-3.754,2.319-7.25h.09C1011.893,566.689,1011.9,557.566,1011.947,523.373Z"
                        transform="translate(-918 -492)"
                      />
                    </svg>
                    <div>
                      <h3>E-Mail:</h3>
                      <p>{contactInfo.email}</p>
                    </div>
                  </li>
                </ul>
                <ul className="social-medias">
                  {socialLinks.map((item) => (
                    <li key={item.title}>
                      <a href={item.href} target="_blank" rel="noreferrer">
                        <p>{item.title}</p>
                        <i
                          className={`fa-brands fa-${item.title.toLowerCase()}`}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-faqs">
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

      <div className="contact-map">
        <iframe
          src={mapSrc}
          width="600"
          height="760"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default KontaktPage;
