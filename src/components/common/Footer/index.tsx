import Image from "next/image";
import Link from "next/link";
import { contactInfo, socialLinks } from "@/constants/contact-info";
import "./style.css";

const usefulLinks = [
  { title: "Services", href: "/services" },
  { title: "Kontakt", href: "/kontakt" },
  { title: "Impressum", href: "/impressum" },
  { title: "AGB", href: "/agb" },
  { title: "Datenschutzerklärung", href: "/datenschutz" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-style-one">
      <div className="footer-p-1">
        <div className="container">
          <div className="row">
            <div className="footer-first">
              <div className="footer-logo">
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt="REEBAU"
                    width={70}
                    height={70}
                  />
                </Link>
              </div>
              <div className="contact-info d-flex-all">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3a8 8 0 0 0-8 8v6a3 3 0 0 0 3 3h1v-7H5v-2a7 7 0 0 1 14 0v2h-3v7h1a3 3 0 0 0 3-3v-6a8 8 0 0 0-8-8Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8 13h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H8a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16 13h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1Z"
                    fill="currentColor"
                  />
                </svg>
                <p>
                  Rufen Sie uns jetzt an <span>{contactInfo.phone}</span>
                </p>
              </div>
              <Link href="/kontakt" className="theme-btn">
                Jetzt absenden
                <i className="fa-solid fa-envelope" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-p-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer-col">
                <h3>Über REEBAU</h3>
                <p>
                  REEBAU ist ein zuverlässiges Bau- und Trockenbauunternehmen
                  mit Fokus auf Qualität, Professionalität und präzise
                  handwerkliche Umsetzung.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer-col">
                <h3>Nützliche Links</h3>
                <ul className="footer-links">
                  {usefulLinks.map((link) => (
                    <li key={link.title}>
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer-col">
                <h3>Rückruf anfordern</h3>
                <p>
                  Hinterlassen Sie uns Ihre Telefonnummer und wir melden uns bei
                  Ihnen.
                </p>
                <form>
                  <input
                    type="tel"
                    name="PHONE"
                    placeholder="Ihre Telefonnummer"
                    required
                  />
                  <button type="submit">
                    <i className="fa-solid fa-arrow-up-long" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-p-3 rights">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <p>
                © {year} Ree Bau – Powered By{" "}
                <a
                  href="https://orionlens.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  OrionLens
                </a>
              </p>

              <div className="social-medias">
                {socialLinks.map((item) => (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    key={item.title}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
