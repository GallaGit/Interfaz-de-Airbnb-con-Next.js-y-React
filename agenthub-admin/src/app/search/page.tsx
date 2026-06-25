import ListingGrid from "@/components/listing/ListingGrid";
import Badge from "@/components/ui/Badge";
import SearchInput from "@/components/ui/SearchInput";
import SectionTitle from "@/components/ui/SectionTitle";
import { categories, listings } from "@/data/listings";
import Link from "next/link";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
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

      <section className="space-y-3">
        <p className="text-sm font-semibold text-foreground">Filtros</p>
        <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex min-w-max gap-2.5">
            <Link href="/search" className="inline-flex shrink-0">
              <Badge active={activeCategory.length === 0}>Todos</Badge>
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={buildCategoryHref(category)}
                className="inline-flex shrink-0"
              >
                <Badge active={category === activeCategory}>{category}</Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ListingGrid listings={filteredListings} />
    </div>
  );
}
