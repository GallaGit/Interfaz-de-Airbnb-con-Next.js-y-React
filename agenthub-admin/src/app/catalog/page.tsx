"use client";

import { useMemo, useState } from "react";
import StayCard from "@/components/listing/StayCard";
import { listings } from "@/data/listings";

type SortOrder = "asc" | "desc";

export default function CatalogPage() {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const sortedListings = useMemo(() => {
    return [...listings].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.pricePerNight - b.pricePerNight;
      }
      return b.pricePerNight - a.pricePerNight;
    });
  }, [sortOrder]);

  return (
    <div className="space-y-5">
      <header className="flex flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-stone-700">
          {sortedListings.length} resultados encontrados
        </p>

        <label className="flex items-center gap-2 text-sm text-stone-700">
          <span>Ordenar por precio</span>
          <select
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value as SortOrder)}
            className="rounded-lg border border-stone-300 bg-white px-3 py-2 outline-none"
          >
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </label>
      </header>

      <section className="grid grid-cols-1 gap-5 lg:grid-cols-[2fr_1fr]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {sortedListings.map((listing) => (
            <StayCard key={listing.id} listing={listing} />
          ))}
        </div>

        <aside className="min-h-64 rounded-2xl border border-stone-300 bg-stone-200 p-6 text-center text-base font-semibold text-stone-600 lg:sticky lg:top-6">
          Mapa
        </aside>
      </section>
    </div>
  );
}
