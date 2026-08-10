"use client";

import Link from "next/link";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import "./style.css";

type ConsentValue = "accepted" | "declined" | null;

const CookieConsent = () => {
  const [consent, setConsent] = useLocalStorage<ConsentValue>(
    "cookie-consent",
    null,
  );

  if (consent !== null) return null;

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
          onClick={() => setConsent("declined")}
        >
          Ablehnen
        </button>
        <button
          type="button"
          className="cookie-consent-accept"
          onClick={() => setConsent("accepted")}
        >
          Akzeptieren
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
