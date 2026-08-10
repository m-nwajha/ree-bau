import Breadcrumb from "@/components/common/Breadcrumb";
import Counters from "@/components/common/Counters";
import HowWeWork from "../Home/HowWeWork";
import ServicesTabs from "./ServicesTabs";
import { services } from "@/mocks/services";
import ContactFaq from "../Home/ContactFaq";

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        title="Services"
        description="Innenausbau, Raumausstattung, Trockenbau, Malerarbeiten und Bodenverlegung – alle Services von REEBAU im Überblick."
      />
      <HowWeWork data={services} />
      <Counters />
      <ContactFaq />
    </>
  );
};

export default ServicesPage;
