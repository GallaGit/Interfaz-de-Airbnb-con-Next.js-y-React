"use client";

import CategoryFilterRow from "@/components/home/CategoryFilterRow";
import HomeNavbar from "@/components/home/HomeNavbar";
import ListingsSection from "@/components/home/ListingsSection";
import { categoryFilters } from "@/data/categoryFilters";
import { useHomeListings } from "@/hooks/useHomeListings";

const Home = () => {
  const {
    searchText,
    activeCategory,
    visibleListings,
    isLoading,
    handleSearchChange,
    handleCategoryChange,
  } = useHomeListings();

  return (
    <div className="space-y-6">
      <HomeNavbar searchText={searchText} onSearchChange={handleSearchChange} />

      <CategoryFilterRow
        filters={categoryFilters}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <ListingsSection isLoading={isLoading} listings={visibleListings} />
    </div>
  );
};

export default Home;
