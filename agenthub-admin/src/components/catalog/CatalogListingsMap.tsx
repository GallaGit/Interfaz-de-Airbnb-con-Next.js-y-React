import MapPlaceholder from "@/components/catalog/MapPlaceholder";
import StayCard from "@/components/listing/StayCard";
import { Listing } from "@/types/listing";

type CatalogListingsMapProps = {
  listings: Listing[];
};

const CatalogListingsMap = ({ listings }: CatalogListingsMapProps) => {
  return (
    <section className="flex flex-col gap-6 lg:grid lg:grid-cols-[2fr_1fr]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2" aria-label="Catálogo de alojamientos">
        {listings.map((listing) => (
          <StayCard key={listing.id} listing={listing} />
        ))}
      </div>

      <MapPlaceholder />
    </section>
  );
};

export default CatalogListingsMap;
