"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import MapPlaceholder from "@/components/catalog/MapPlaceholder";
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
    <div className="space-y-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 rounded-xl border border-border-subtle bg-white px-4 py-2.5 text-sm font-medium text-foreground shadow-[var(--shadow-card)] transition hover:border-brand/40 hover:text-brand"
      >
        <span aria-hidden="true">←</span>
        Ir a Home
      </Link>

      {/* Cabecera de resultados */}
      <header className="flex flex-col gap-3 rounded-2xl bg-background-secondary p-5 shadow-[var(--shadow-card)] sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-foreground">
          <span className="text-brand">{sortedListings.length}</span> resultados encontrados
        </p>

        <label className="flex items-center gap-2 text-sm">
          <span className="font-medium text-foreground">Ordenar por precio</span>
          <select
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value as SortOrder)}
            className="rounded-xl border border-border-subtle bg-white px-3 py-2.5 text-foreground outline-none transition focus:border-brand/40"
            aria-label="Ordenar por precio"
          >
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </label>
      </header>

      {/* Lista + mapa: mapa a la derecha en escritorio, debajo en móvil */}
      <section className="flex flex-col gap-6 lg:grid lg:grid-cols-[2fr_1fr]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2" aria-label="Catálogo de alojamientos">
          {sortedListings.map((listing) => (
            <StayCard key={listing.id} listing={listing} />
          ))}
        </div>

        <MapPlaceholder />
      </section>
    </div>
  );
}
