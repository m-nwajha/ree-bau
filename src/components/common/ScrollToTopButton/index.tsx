"use client";

import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsActive(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      id="scrollTop"
      className={`scrollTopStick${isActive ? " active" : ""}`}
      aria-label="Nach oben scrollen"
      style={{backgroundColor: '#e65e2452'}}
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-arrow-up" style={{mixBlendMode: 'normal', color: 'black'}} />
    </button>
  );
};

export default ScrollToTopButton;
