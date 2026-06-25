import { Listing } from "@/types/listing";
import ListingCard from "./ListingCard";

type ListingGridProps = {
  listings: Listing[];
};

export default function ListingGrid({ listings }: ListingGridProps) {
  if (listings.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border-subtle bg-background-secondary p-10 text-center text-muted">
        No se encontraron propiedades para esta búsqueda.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
