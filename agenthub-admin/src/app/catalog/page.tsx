"use client";

import { useMemo, useState } from "react";
import CatalogBackLink from "@/components/catalog/CatalogBackLink";
import CatalogListingsMap from "@/components/catalog/CatalogListingsMap";
import CatalogResultsHeader from "@/components/catalog/CatalogResultsHeader";
import { listings } from "@/data/listings";

type SortOrder = "asc" | "desc";

const CatalogPage = () => {
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
      <CatalogBackLink />

      <CatalogResultsHeader
        resultsCount={sortedListings.length}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />

      <CatalogListingsMap listings={sortedListings} />
    </div>
  );
};

export default CatalogPage;
