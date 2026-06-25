import ListingGrid from "@/components/listing/ListingGrid";
import SearchFilters from "@/components/search/SearchFilters";
import SearchInput from "@/components/ui/SearchInput";
import SectionTitle from "@/components/ui/SectionTitle";
import { listings } from "@/data/listings";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
  }>;
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const params = await searchParams;
  const query = (params.q ?? "").toLowerCase().trim();
  const activeCategory = params.category ?? "";

  const filteredListings = listings.filter((listing) => {
    const matchesQuery =
      query.length === 0 ||
      listing.title.toLowerCase().includes(query) ||
      listing.location.toLowerCase().includes(query);

    const matchesCategory =
      activeCategory.length === 0 || listing.category === activeCategory;

    return matchesQuery && matchesCategory;
  });

  const buildCategoryHref = (category: string) => {
    const queryParams = new URLSearchParams();
    if (params.q) {
      queryParams.set("q", params.q);
    }
    queryParams.set("category", category);
    return `/search?${queryParams.toString()}`;
  };

  return (
    <div className="space-y-7">
      <SectionTitle
        title="Resultados de búsqueda"
        subtitle="Explora propiedades disponibles y filtra por categoría"
      />

      <SearchInput defaultValue={params.q ?? ""} action="/search" />

      <SearchFilters activeCategory={activeCategory} buildCategoryHref={buildCategoryHref} />

      <ListingGrid listings={filteredListings} />
    </div>
  );
};

export default SearchPage;
