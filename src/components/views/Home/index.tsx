import Hero from "./Hero";
import Services from "./Services";
import HowWeWork from "./HowWeWork";
import About from "./About";
import WhyUs from "./WhyUs";
import Gallery from "./Gallery";
import ContactFaq from "./ContactFaq";
import { services } from "@/mocks/services";
import { gallery } from "@/mocks/gallery";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <WhyUs />
      <Services isHome={true} data={services} />
      <Gallery data={gallery} />
      <HowWeWork />
      <ContactFaq />
    </>
  );
};

export default HomePage;
