import { Listing } from "@/types/listing";

export const filterListings = (sourceListings: Listing[], text: string, category: string) => {
  const normalizedSearch = text.toLowerCase().trim();

  return sourceListings.filter((listing) => {
    const matchesCategory = category === "all" || listing.category === category;
    const matchesText =
      normalizedSearch.length === 0 ||
      listing.title.toLowerCase().includes(normalizedSearch) ||
      listing.location.toLowerCase().includes(normalizedSearch);

    return matchesCategory && matchesText;
  });
};
