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
    <aside
      className="space-y-4 rounded-2xl border border-border-subtle bg-white p-5 shadow-[var(--shadow-card)] lg:sticky lg:top-6"
      aria-label="Tarjeta de reserva"
    >
      <p className="text-foreground">
        <span className="text-2xl font-extrabold text-brand">${pricePerNight}</span>
        <span className="text-sm font-medium text-muted"> por noche</span>
      </p>

      <div className="flex items-center justify-between rounded-xl border border-border-subtle bg-background-secondary px-4 py-3.5">
        <p className="text-sm font-medium text-foreground">Huéspedes</p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={decreaseGuests}
            disabled={guests <= MIN_GUESTS}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle bg-white text-sm font-semibold text-foreground transition hover:border-brand/40 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Disminuir huéspedes"
          >
            −
          </button>
          <span className="min-w-6 text-center text-sm font-bold text-foreground" aria-live="polite">
            {guests}
          </span>
          <button
            type="button"
            onClick={increaseGuests}
            disabled={guests >= MAX_GUESTS}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle bg-white text-sm font-semibold text-foreground transition hover:border-brand/40 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Aumentar huéspedes"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        className="w-full rounded-xl bg-brand px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-brand-hover active:scale-[0.98]"
      >
        Reservar ahora
      </button>
    </aside>
  );
};

export default RoomBookingPanel;
