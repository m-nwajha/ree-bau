"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { slugify } from "@/utils/slugify";
import type { ProjektItem } from "@/@types/projekt";
import "./style.css";

const Projekte = ({ data }: { data: ProjektItem[] }) => {
  const visibleItems = data.slice(-5);

  return (
    <section className="gap project-style-one light-bg-color">
      <div className="heading">
        <figure>
          <img src="/images/heading-icon.png" alt="Heading Icon" />
        </figure>
        <span>Projekte</span>
        <h2>Unsere Projekte</h2>
      </div>
      <div className="container">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            576: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="swiper-container project-slider"
        >
          {visibleItems.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="project-post">
                <figure>
                  <img src={item.image} alt={item.title} />
                </figure>
                <div className="project-data">
                  <h3>
                    <Link href={`/projekte/${slugify(item.title)}`}>
                      {item.title}
                    </Link>
                  </h3>
                  <p>{item.short}</p>
                  <Link
                    className="project-icon"
                    href={`/projekte/${slugify(item.title)}`}
                  >
                    <i className="fa-solid fa-angles-right" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination" />
        </Swiper>
      </div>
    </section>
  );
};

export default Projekte;
