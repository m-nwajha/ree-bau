import LegalPage from "@/components/views/Legal";
import { contactInfo } from "@/constants/contact-info";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen von REEBAU.",
};

export default function AgbPage() {
  return (
    <LegalPage
      title="Allgemeine Geschäftsbedingungen"
      content={[
        {
          title: "1. Geltungsbereich",
          type: "paragraph",
          paragraph:
            "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen REEBAU und ihren Kunden über die Erbringung von Bauleistungen in den Bereichen Innenausbau, Raumausstattung, Trockenbau, Malerarbeiten und Bodenverlegung.",
        },
        {
          title: "2. Vertragspartner",
          type: "paragraph",
          paragraph: `Vertragspartner ist: REEBAU, ${contactInfo.address.street}, ${contactInfo.address.zip} ${contactInfo.address.city}. Telefon: ${contactInfo.phone}, E-Mail: ${contactInfo.email}`,
        },
        {
          title: "3. Vertragsschluss",
          type: "paragraph",
          paragraph:
            "Ein Vertrag kommt durch die Auftragsbestätigung von REEBAU nach Abstimmung mit dem Kunden zustande. Angebote sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich bezeichnet werden.",
        },
        {
          title: "4. Leistungsumfang",
          type: "paragraph",
          paragraph:
            "Der Umfang der zu erbringenden Leistungen ergibt sich aus der jeweiligen Auftragsbestätigung bzw. dem individuell vereinbarten Angebot. Änderungen und Ergänzungen des Leistungsumfangs bedürfen der Zustimmung beider Vertragsparteien.",
        },
        {
          title: "5. Preise und Zahlungsbedingungen",
          type: "paragraph",
          paragraph:
            "Die Preise richten sich nach dem individuellen Angebot und verstehen sich, sofern nicht anders angegeben, inklusive der gesetzlichen Umsatzsteuer. Rechnungen sind, sofern nicht anders vereinbart, innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zahlbar.",
        },
        {
          title: "6. Termine und Fristen",
          type: "paragraph",
          paragraph:
            "Vereinbarte Ausführungstermine werden nach bestem Wissen eingehalten. Verzögerungen durch höhere Gewalt, Witterungseinflüsse oder sonstige Umstände, die REEBAU nicht zu vertreten hat, verlängern die vereinbarten Fristen entsprechend.",
        },
        {
          title: "7. Mitwirkungspflichten des Kunden",
          type: "paragraph",
          paragraph:
            "Der Kunde stellt sicher, dass die für die Ausführung der Arbeiten erforderlichen Voraussetzungen – etwa Zugang zum Objekt sowie notwendige Vorarbeiten – rechtzeitig geschaffen werden. Verzögerungen, die hierdurch entstehen, gehen nicht zulasten von REEBAU.",
        },
        {
          title: "8. Gewährleistung",
          type: "paragraph",
          paragraph:
            "Es gelten die gesetzlichen Gewährleistungsbestimmungen. Mängel sind unverzüglich nach ihrer Feststellung in Textform anzuzeigen, damit REEBAU die Möglichkeit zur Nacherfüllung erhält.",
        },
        {
          title: "9. Haftung",
          type: "paragraph",
          paragraph:
            "REEBAU haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach den Vorschriften des Produkthaftungsgesetzes. Für leichte Fahrlässigkeit haftet REEBAU nur bei der Verletzung wesentlicher Vertragspflichten, begrenzt auf den vorhersehbaren, vertragstypischen Schaden.",
        },
        {
          title: "10. Kündigung",
          type: "paragraph",
          paragraph:
            "Beide Vertragsparteien können den Vertrag aus wichtigem Grund kündigen. Ein wichtiger Grund liegt insbesondere vor, wenn eine Partei ihre vertraglichen Pflichten trotz angemessener Fristsetzung wiederholt nicht erfüllt.",
        },
        {
          title: "11. Schlussbestimmungen",
          type: "paragraph",
          paragraph:
            "Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt. Individuelle vertragliche Vereinbarungen mit dem Kunden gehen diesen AGB im Zweifel vor.",
        },
      ]}
    />
  );
}
