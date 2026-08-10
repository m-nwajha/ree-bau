import LegalPage from "@/components/views/Legal";
import { contactInfo } from "@/constants/contact-info";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von REEBAU.",
};

export default function DatenschutzPage() {
  return (
    <LegalPage
      title="Datenschutzerklärung"
      content={[
        {
          title: "1. Verantwortlicher (Datenkontrolleur)",
          type: "paragraph",
          paragraph: "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
        },
        {
          type: "paragraph",
          paragraph: `REEBAU, ${contactInfo.address.street}, ${contactInfo.address.zip} ${contactInfo.address.city}, ${contactInfo.address.state}, ${contactInfo.address.country}. Telefon: ${contactInfo.phone}, E-Mail: ${contactInfo.email}`,
        },
        {
          title: "2. Erhobene personenbezogene Daten",
          type: "paragraph",
          paragraph:
            "Wir erheben und verarbeiten personenbezogene Daten, die Sie uns über das Kontaktformular oder auf anderem Wege übermitteln. Dazu gehören insbesondere:",
        },
        {
          type: "list",
          list: [
            "Name",
            "E-Mail-Adresse",
            "Telefonnummer (falls angegeben)",
            "Ihre Nachricht bzw. Anfrage",
            "Technische Daten (z. B. IP-Adresse, Datum und Uhrzeit des Websitezugriffs, Browsertyp)",
          ],
        },
        {
          title: "3. Zweck der Datenverarbeitung",
          type: "paragraph",
          paragraph: "Wir verarbeiten Ihre Daten zu folgenden Zwecken:",
        },
        {
          type: "list",
          list: [
            "Beantwortung Ihrer Kontaktanfrage",
            "Kommunikation und Abwicklung unserer angebotenen Dienstleistungen",
            "Vorbereitung und Durchführung vorvertraglicher Maßnahmen",
            "Technische Bereitstellung, Sicherheit und Optimierung unserer Website (Server-Logs)",
          ],
        },
        {
          type: "paragraph",
          paragraph:
            "Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).",
        },
        {
          title: "4. Weitergabe von Daten",
          type: "paragraph",
          paragraph: "Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn:",
        },
        {
          type: "list",
          list: [
            "dies zur Vertragserfüllung notwendig ist,",
            "wir gesetzlich dazu verpflichtet sind,",
            "oder Sie ausdrücklich eingewilligt haben.",
          ],
        },
        {
          type: "paragraph",
          paragraph: "Wir geben Ihre Daten nicht zu Werbezwecken weiter.",
        },
        {
          title: "5. Speicherdauer",
          type: "paragraph",
          paragraph:
            "Wir speichern Ihre personenbezogenen Daten nur so lange, wie es zur Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche Aufbewahrungspflichten es verlangen.",
        },
        {
          title: "6. Ihre Rechte nach DSGVO",
          type: "paragraph",
          paragraph: "Sie haben jederzeit das Recht:",
        },
        {
          type: "list",
          list: [
            "Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten",
            "unrichtige Daten berichtigen zu lassen",
            "die Löschung Ihrer Daten zu verlangen (im Rahmen gesetzlicher Vorgaben)",
            "die Verarbeitung Ihrer Daten einschränken zu lassen",
            "Ihre Daten in einem übertragbaren Format anzufordern",
            "der Verarbeitung Ihrer Daten zu widersprechen",
          ],
        },
        {
          type: "paragraph",
          paragraph: `Bitte richten Sie Ihre Anfrage an: ${contactInfo.email}`,
        },
        {
          title: "7. Kontaktformular",
          type: "paragraph",
          paragraph:
            "Wenn Sie uns über das Kontaktformular kontaktieren, werden die von Ihnen angegebenen Daten ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Eine Weitergabe an Dritte findet nicht statt.",
        },
        {
          title: "8. Nutzung von Social Media",
          type: "paragraph",
          paragraph:
            "Wenn Sie uns über Social-Media-Plattformen (z. B. Instagram, TikTok) kontaktieren oder unseren Accounts folgen, gelten zusätzlich die Datenschutzbestimmungen der jeweiligen Anbieter. Wir verarbeiten Ihre dort übermittelten Daten ausschließlich zur Bearbeitung Ihrer Nachrichten.",
        },
        {
          title: "9. Änderungen dieser Datenschutzerklärung",
          type: "paragraph",
          paragraph:
            "Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, damit sie stets den aktuellen gesetzlichen Anforderungen entspricht oder Änderungen unserer Leistungen berücksichtigt.",
        },
      ]}
    />
  );
}
