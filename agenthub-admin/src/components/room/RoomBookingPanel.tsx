"use client";

import { useState } from "react";

const MIN_GUESTS = 1;
const MAX_GUESTS = 8;

type RoomBookingPanelProps = {
  pricePerNight: number;
};

const RoomBookingPanel = ({ pricePerNight }: RoomBookingPanelProps) => {
  const [guests, setGuests] = useState(MIN_GUESTS);

  const increaseGuests = () => {
    setGuests((prev) => Math.min(MAX_GUESTS, prev + 1));
  };

  const decreaseGuests = () => {
    setGuests((prev) => Math.max(MIN_GUESTS, prev - 1));
  };

  return (
    <aside className="space-y-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <p className="text-lg font-semibold text-stone-900">
        ${pricePerNight} <span className="text-sm font-normal text-stone-600">por noche</span>
      </p>

      <div className="flex items-center justify-between rounded-xl border border-stone-200 px-3 py-3">
        <p className="text-sm text-stone-700">Huéspedes</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={decreaseGuests}
            className="h-8 w-8 rounded-full border border-stone-300 text-sm text-stone-700"
            aria-label="Disminuir huéspedes"
          >
            -
          </button>
          <span className="min-w-6 text-center text-sm font-medium text-stone-900">{guests}</span>
          <button
            type="button"
            onClick={increaseGuests}
            className="h-8 w-8 rounded-full border border-stone-300 text-sm text-stone-700"
            aria-label="Aumentar huéspedes"
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
  );
};

export default RoomBookingPanel;
