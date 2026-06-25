import ListingGrid from "@/components/listing/ListingGrid";
import Badge from "@/components/ui/Badge";
import { categories } from "@/data/listings";
import Link from "next/link";

type SearchFiltersProps = {
  activeCategory: string;
  buildCategoryHref: (category: string) => string;
};

const SearchFilters = ({ activeCategory, buildCategoryHref }: SearchFiltersProps) => {
  return (
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
  );
};

export default SearchFilters;
