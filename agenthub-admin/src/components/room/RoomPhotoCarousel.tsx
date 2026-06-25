"use client";

import { useState } from "react";

type RoomPhotoCarouselProps = {
  photos: string[];
};

const RoomPhotoCarousel = ({ photos }: RoomPhotoCarouselProps) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)]" aria-label="Galería de fotos">
      <div className="flex h-72 items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 sm:h-80">
        <span className="text-sm font-semibold text-muted">
          Placeholder foto {currentPhotoIndex + 1}
        </span>
      </div>

      <div className="flex items-center justify-between border-t border-border-subtle p-4">
        <button
          type="button"
          onClick={goToPreviousPhoto}
          className="rounded-xl border border-border-subtle px-4 py-2 text-sm font-medium text-foreground transition hover:bg-background-secondary"
        >
          Anterior
        </button>
        <p className="text-sm font-medium text-muted" aria-live="polite">
          {currentPhotoIndex + 1} / {photos.length}
        </p>
        <button
          type="button"
          onClick={goToNextPhoto}
          className="rounded-xl border border-border-subtle px-4 py-2 text-sm font-medium text-foreground transition hover:bg-background-secondary"
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default RoomPhotoCarousel;
