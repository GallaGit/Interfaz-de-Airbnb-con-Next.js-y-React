"use client";

import { useEffect, useState } from "react";
import { listings } from "@/data/listings";
import StayCard from "@/components/listing/StayCard";
import { Listing } from "@/types/listing";

type CategoryFilter = {
  label: string;
  icon: string;
  value: string;
};

const categoryFilters: CategoryFilter[] = [
  { label: "Todos", icon: "O", value: "all" },
  { label: "Playa", icon: "P", value: "Beach" },
  { label: "Mansiones", icon: "M", value: "Design" },
  { label: "Tendencias", icon: "T", value: "City" },
  { label: "Cabanas", icon: "C", value: "Cabin" },
  { label: "Montana", icon: "N", value: "Mountain" },
];

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [allListings, setAllListings] = useState<Listing[]>([]);
  const [visibleListings, setVisibleListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const filterListings = (
    sourceListings: Listing[],
    text: string,
    category: string,
  ) => {
    const normalizedSearch = text.toLowerCase().trim();

    return sourceListings.filter((listing) => {
      const matchesCategory =
        category === "all" || listing.category === category;

      const matchesText =
        normalizedSearch.length === 0 ||
        listing.title.toLowerCase().includes(normalizedSearch) ||
        listing.location.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesText;
    });
  };

  const handleSearchChange = (value: string) => {
    setSearchText(value);
    setVisibleListings(filterListings(allListings, value, activeCategory));
  };

  const handleCategoryChange = (value: string) => {
    setActiveCategory(value);
    setVisibleListings(filterListings(allListings, searchText, value));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const loadedListings = listings;
      setAllListings(loadedListings);
      setVisibleListings(loadedListings);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <header className="rounded-3xl border border-stone-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
              A
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-stone-800">
              Airbnb Clone
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-stone-300 px-3 py-2 sm:min-w-80">
            <span className="text-stone-500" aria-hidden="true">
              Q
            </span>
            <input
              type="text"
              value={searchText}
              onChange={(event) => handleSearchChange(event.target.value)}
              placeholder="Empieza a buscar"
              className="w-full bg-transparent text-sm outline-none"
              aria-label="Buscar alojamientos"
            />
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-sm text-stone-700"
              aria-label="Menu de usuario"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-sm text-stone-700"
              aria-label="Perfil"
            >
              U
            </button>
          </div>
        </div>
      </header>

      <section className="overflow-x-auto pb-1">
        <div className="flex min-w-max gap-3">
          {categoryFilters.map((filter) => {
            const isActive = activeCategory === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => handleCategoryChange(filter.value)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-red-500 bg-red-50 text-red-600"
                    : "border-stone-300 bg-white text-stone-700"
                }`}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-100 text-xs text-stone-700">
                  {filter.icon}
                </span>
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {isLoading ? (
        <section className="rounded-2xl border border-stone-200 bg-white p-8 text-center text-sm text-stone-600">
          Cargando alojamientos...
        </section>
      ) : (
        <section>
          {visibleListings.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-8 text-center text-sm text-stone-600">
              No hay resultados para la busqueda actual.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleListings.map((listing) => (
                <StayCard key={listing.id} listing={listing} />
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
