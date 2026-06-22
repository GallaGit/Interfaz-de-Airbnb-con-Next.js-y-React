"use client";

import { useState } from "react";

type RoomPhotoCarouselProps = {
  photos: string[];
};

const RoomPhotoCarousel = ({ photos }: RoomPhotoCarouselProps) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <section className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      <div className="flex h-72 items-center justify-center bg-gradient-to-br from-stone-200 to-stone-300 text-sm font-semibold text-stone-600">
        Foto {currentPhotoIndex + 1}
      </div>
      <div className="flex items-center justify-between border-t border-stone-200 p-3">
        <button
          type="button"
          onClick={goToPreviousPhoto}
          className="rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-700"
        >
          Anterior
        </button>
        <p className="text-sm text-stone-600">
          {currentPhotoIndex + 1} / {photos.length}
        </p>
        <button
          type="button"
          onClick={goToNextPhoto}
          className="rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-700"
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default RoomPhotoCarousel;
