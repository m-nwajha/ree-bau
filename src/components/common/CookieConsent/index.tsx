"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "./style.css";

const COOKIE_CONSENT_KEY = "roi_bau_cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setTimeout(() => {
        setVisible(true);
      }, 0);
    }
  }, []);

  const handleChoice = (choice: "accepted" | "declined") => {
    localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-label="Cookie-Hinweis">
      <p>
        Wir verwenden Cookies, um unsere Website technisch bereitzustellen
        und zu verbessern. Weitere Informationen finden Sie in unserer{" "}
        <Link href="/datenschutz">Datenschutzerklärung</Link>.
      </p>
      <div className="cookie-consent-actions">
        <button
          type="button"
          className="cookie-consent-decline"
          onClick={() => handleChoice("declined")}
        >
          Ablehnen
        </button>
        <button
          type="button"
          className="cookie-consent-accept"
          onClick={() => handleChoice("accepted")}
        >
          Akzeptieren
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
