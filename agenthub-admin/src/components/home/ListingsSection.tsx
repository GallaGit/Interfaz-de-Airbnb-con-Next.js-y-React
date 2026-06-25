import StayCard from "@/components/listing/StayCard";
import ListingsLoading from "@/components/home/ListingsLoading";
import { Listing } from "@/types/listing";

type ListingsSectionProps = {
  isLoading: boolean;
  listings: Listing[];
};

const ListingsSection = ({ isLoading, listings }: ListingsSectionProps) => {
  if (isLoading) {
    return <ListingsLoading />;
  }

  if (listings.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border-subtle bg-background-secondary p-10 text-center text-sm text-muted">
        No hay resultados para la búsqueda actual.
      </div>
    );
  }

  return (
    <section
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      aria-label="Listado de alojamientos"
    >
      {listings.map((listing) => (
        <StayCard key={listing.id} listing={listing} />
      ))}
    </section>
  );
};

export default ListingsSection;
