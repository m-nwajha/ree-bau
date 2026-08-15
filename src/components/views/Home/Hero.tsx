"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    title: "Bauliche Exzellenz",
    text: "REEBAU ist ein zuverlässiges Bau- und Trockenbauunternehmen mit Fokus auf Qualität, Professionalität und präzise handwerkliche Umsetzung.",
    image: "/images/image.jpg",
    button: { label: "Jetzt kontaktieren", link: "/kontakt" },
  },
  {
    title: "Qualität. Zuverlässigkeit. Präzision.",
    text: "Bei jedem Projekt stehen Professionalität, Präzision und Liebe zum Detail im Mittelpunkt.",
    image: "/images/image%20(1).jpg",
    button: { label: "Projekt jetzt anfragen", link: "/kontakt" },
  },
];

const Hero = () => {
  return (
    <section className="featured-slider-two">
      <div
        className="parallax"
        style={{ backgroundImage: "url(/images/pattren-4.png)" }}
      />
      <div className="f-2-s-nav">
        <button className="swiper-nav-prev">
          <i className="fa-solid fa-arrow-left" />
        </button>
        <button className="swiper-nav-next">
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
      <div className="container">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{ prevEl: ".swiper-nav-prev", nextEl: ".swiper-nav-next" }}
          autoplay={{ delay: 6000 }}
          loop
          className="swiper-container row f-2-slider"
        >
          {slides.map((item) => (
            <SwiperSlide key={item.title} className="swiper-slide">
              <div className="s-item">
                <div className="s-first">
                  <h1>{item.title}</h1>
                  <p>{item.text}</p>
                  <Link href={item.button.link} className="theme-btn">
                    {item.button.label}
                    <i className="fa-solid fa-angles-right" />
                  </Link>
                </div>
                <div className="s-second">
                  <figure>
                    <img src={item.image} alt={item.title} />
                  </figure>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
