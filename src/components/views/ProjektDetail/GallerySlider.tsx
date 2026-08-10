"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { getYouTubeVideoId } from "@/utils/youtube";
import type { ProjektSlide } from "@/@types/projekt";

const GallerySlider = ({
  slides,
  title,
}: {
  slides: ProjektSlide[];
  title: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="gap no-top project-detail-slider">
      <div className="container-fluid g-0">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="p-d-slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              {slide.type === "image" ? (
                <figure>
                  <img className="w-100" src={slide.src} alt={title} />
                </figure>
              ) : (
                <iframe
                  className="w-100"
                  // Only load the video while its slide is active, so
                  // switching slides actually stops playback instead of
                  // leaving it running off-screen.
                  src={
                    index === activeIndex
                      ? `https://www.youtube.com/embed/${getYouTubeVideoId(slide.videoId)}`
                      : undefined
                  }
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </SwiperSlide>
          ))}
          <div className="swiper-pagination" />
        </Swiper>
      </div>
    </div>
  );
};

export default GallerySlider;
