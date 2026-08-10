"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import Counters from "@/components/common/Counters";
import HowWeWork from "../Home/HowWeWork";
import Services from "../Home/Services";
import ServicesTabs from "./ServicesTabs";
import { services } from "@/mocks/services";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const ServicesPage = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Breadcrumb
        title="Services"
        description="Innenausbau, Raumausstattung, Trockenbau, Malerarbeiten und Bodenverlegung – alle Services von REEBAU im Überblick."
      />
      <HowWeWork />
      <ServicesTabs />
      <Services isHome={false} data={services} />
      <Counters />
    </>
  );
};

export default ServicesPage;
