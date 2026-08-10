import LegalPage from "@/components/views/Legal";
import { contactInfo } from "@/constants/contact-info";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von REEBAU gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <LegalPage
      title="Impressum"
      description="Angaben gemäß § 5 TMG"
      content={[
        {
          title: "Name des Unternehmens",
          type: "paragraph",
          paragraph: "REEBAU",
        },
        {
          title: "Eingetragener Firmensitz",
          type: "paragraph",
          paragraph: `${contactInfo.address.street}, ${contactInfo.address.zip} ${contactInfo.address.city}`,
        },
        {
          title: "Kontaktinformationen",
          type: "list",
          list: [
            `Telefon: ${contactInfo.phone}`,
            `E-Mail: ${contactInfo.email}`,
            "Webseite: www.ree-bau.de",
          ],
        },
        {
          title: "Geschäfts-ID-Nr.",
          type: "paragraph",
          paragraph: "Bitte geben Sie Ihre Geschäftsnummer ein",
        },
        {
          title: "Umsatzsteuer-Nr.",
          type: "paragraph",
          paragraph: "Bitte geben Sie Ihre Umsatzsteuer-Identifikationsnummer ein",
        },
        {
          title: "Aufsichtsbehörde",
          type: "paragraph",
          paragraph: "Bitte geben Sie Ihre Aufsichtsbehörde ein",
        },
        {
          title: "Haftungsausschluss",
          type: "paragraph",
          paragraph:
            "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.",
        },
      ]}
    />
  );
}
