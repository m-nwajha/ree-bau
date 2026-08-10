"use client";

import { useEffect, useCallback } from "react";
import type { GalleryItem } from "@/@types/gallery";

const GalleryPopup = ({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) => {
  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex - 1 + items.length) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex + 1) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, onClose, goPrev, goNext]);

  if (activeIndex === null) return null;

  const item = items[activeIndex];

  return (
    <>
      <div className="mfp-bg" onClick={onClose} />
      <div className="mfp-wrap mfp-gallery" role="dialog" aria-modal="true">
        <div className="mfp-container">
          <div className="mfp-content">
            <div className="mfp-figure">
              <button className="mfp-close" onClick={onClose} aria-label="Schließen">
                ×
              </button>
              <div className="mfp-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="mfp-bottom-bar">
                <div className="mfp-title">{item.title}</div>
                <div className="mfp-counter">
                  {activeIndex + 1} / {items.length}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="mfp-arrow mfp-arrow-left"
          onClick={goPrev}
          aria-label="Vorheriges Bild"
        />
        <button
          className="mfp-arrow mfp-arrow-right"
          onClick={goNext}
          aria-label="Nächstes Bild"
        />
      </div>
    </>
  );
};

export default GalleryPopup;
