"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import type { GalleryItem } from "@/@types/gallery";

const Gallery = ({ data }: { data: GalleryItem[] }) => {
  const visibleItems = data.slice(-5);

  return (
    <section className="gap project-style-one light-bg-color">
      <div className="heading">
        <figure>
          <img src="/images/heading-icon.png" alt="Heading Icon" />
        </figure>
        <span>Galerie</span>
        <h2>Unsere Arbeiten</h2>
      </div>
      <div className="container">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={3}
          spaceBetween={30}
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
                    <Link href="/galerie">{item.title}</Link>
                  </h3>
                  <Link className="project-icon" href="/galerie">
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

export default Gallery;
