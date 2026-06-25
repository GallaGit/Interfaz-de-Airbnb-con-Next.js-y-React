"use client";

import { useEffect, useState } from "react";
import { listings } from "@/data/listings";
import { filterListings } from "@/lib/filterListings";
import { Listing } from "@/types/listing";

export const useHomeListings = () => {
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

  return {
    searchText,
    activeCategory,
    visibleListings,
    isLoading,
    handleSearchChange,
    handleCategoryChange,
  };
};
