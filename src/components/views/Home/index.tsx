import Hero from "./Hero";
import Services from "./Services";
import HowWeWork from "./HowWeWork";
import About from "./About";
import WhyUs from "./WhyUs";
import Projekte from "./Projekte";
import ContactFaq from "./ContactFaq";
import { services } from "@/mocks/services";
import { projekte } from "@/mocks/projekt";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <WhyUs />
      <Services isHome={true} data={services} />
      <Projekte data={projekte} />
      <HowWeWork />
      <ContactFaq />
    </>
  );
};

export default HomePage;
