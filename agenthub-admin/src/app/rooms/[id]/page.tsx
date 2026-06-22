"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { listings } from "@/data/listings";
import { Listing } from "@/types/listing";

const MIN_GUESTS = 1;
const MAX_GUESTS = 8;

export default function RoomDetailPage() {
  const params = useParams<{ id: string }>();
  const [room, setRoom] = useState<Listing | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      const selected = listings.find((item) => item.id === params.id) ?? null;
      setRoom(selected);
      setCurrentPhotoIndex(0);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [params.id]);

  if (isLoading) {
    return (
      <section className="rounded-2xl border border-stone-200 bg-white p-8 text-center text-sm text-stone-600">
        Cargando detalle de habitacion...
      </section>
    );
  }

  if (!room) {
    return (
      <section className="rounded-2xl border border-dashed border-stone-300 bg-white p-8 text-center text-sm text-stone-600">
        Habitacion no encontrada.
      </section>
    );
  }

  const photos = room.images.length > 0 ? room.images : ["placeholder-1", "placeholder-2"];

  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => {
      if (prevIndex === 0) {
        return photos.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const increaseGuests = () => {
    setGuests((prev) => Math.min(MAX_GUESTS, prev + 1));
  };

  const decreaseGuests = () => {
    setGuests((prev) => Math.max(MIN_GUESTS, prev - 1));
  };

  return (
    <div className="space-y-6">
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

      <section className="space-y-2 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        <h1 className="text-2xl font-bold text-stone-900">{room.title}</h1>
        <p className="text-sm text-stone-700">
          ★ {room.rating.toFixed(2)} · {room.reviews} reseñas · {room.location}
        </p>
      </section>

      <section className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-200 text-sm font-semibold text-stone-700">
          AV
        </div>
        <div>
          <p className="text-sm font-semibold text-stone-900">Anfitrion: {room.host.name}</p>
          <p className="text-sm text-stone-600">6 años como anfitrion</p>
        </div>
      </section>

      <section className="space-y-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-stone-900">Servicios</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {room.amenities.map((amenity) => (
            <div
              key={amenity}
              className="flex items-center gap-2 rounded-xl bg-stone-100 px-3 py-2 text-sm text-stone-700"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs text-stone-600">
                •
              </span>
              <span>{amenity}</span>
            </div>
          ))}
        </div>
      </section>

      <aside className="space-y-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        <p className="text-lg font-semibold text-stone-900">
          ${room.pricePerNight} <span className="text-sm font-normal text-stone-600">por noche</span>
        </p>

        <div className="flex items-center justify-between rounded-xl border border-stone-200 px-3 py-3">
          <p className="text-sm text-stone-700">Huespedes</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={decreaseGuests}
              className="h-8 w-8 rounded-full border border-stone-300 text-sm text-stone-700"
              aria-label="Disminuir huespedes"
            >
              -
            </button>
            <span className="min-w-6 text-center text-sm font-medium text-stone-900">{guests}</span>
            <button
              type="button"
              onClick={increaseGuests}
              className="h-8 w-8 rounded-full border border-stone-300 text-sm text-stone-700"
              aria-label="Aumentar huespedes"
            >
              +
            </button>
          </div>
        </div>

        <button
          type="button"
          className="w-full rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
        >
          Reservar ahora
        </button>
      </aside>
    </div>
  );
}
