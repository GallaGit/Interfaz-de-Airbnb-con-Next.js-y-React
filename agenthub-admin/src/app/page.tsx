"use client";

import { useEffect, useState } from "react";
import { listings } from "@/data/listings";
import StayCard from "@/components/listing/StayCard";
import CategoryFilterRow, { CategoryFilter } from "@/components/home/CategoryFilterRow";
import HomeNavbar from "@/components/home/HomeNavbar";
import ListingsLoading from "@/components/home/ListingsLoading";
import { Listing } from "@/types/listing";

const categoryFilters: CategoryFilter[] = [
  { label: "Todos", icon: "🏠", value: "all" },
  { label: "Playa", icon: "🏖️", value: "Beach" },
  { label: "Mansiones", icon: "🏛️", value: "Design" },
  { label: "Tendencias", icon: "🔥", value: "City" },
  { label: "Cabañas", icon: "🌲", value: "Cabin" },
  { label: "Montaña", icon: "⛰️", value: "Mountain" },
];

function filterListings(sourceListings: Listing[], text: string, category: string) {
  const normalizedSearch = text.toLowerCase().trim();

  return sourceListings.filter((listing) => {
    const matchesCategory = category === "all" || listing.category === category;
    const matchesText =
      normalizedSearch.length === 0 ||
      listing.title.toLowerCase().includes(normalizedSearch) ||
      listing.location.toLowerCase().includes(normalizedSearch);

    return matchesCategory && matchesText;
  });
}

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [allListings, setAllListings] = useState<Listing[]>([]);
  const [visibleListings, setVisibleListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
      setAllListings(listings);
      setVisibleListings(listings);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <HomeNavbar searchText={searchText} onSearchChange={handleSearchChange} />

      <CategoryFilterRow
        filters={categoryFilters}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {isLoading ? (
        <ListingsLoading />
      ) : visibleListings.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border-subtle bg-background-secondary p-10 text-center text-sm text-muted">
          No hay resultados para la búsqueda actual.
        </div>
      ) : (
        <section
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          aria-label="Listado de alojamientos"
        >
          {visibleListings.map((listing) => (
            <StayCard key={listing.id} listing={listing} />
          ))}
        </section>
      )}
    </div>
  );
}
