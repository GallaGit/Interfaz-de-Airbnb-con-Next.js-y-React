import ListingGrid from "@/components/listing/ListingGrid";
import SectionTitle from "@/components/ui/SectionTitle";
import { Listing } from "@/types/listing";

type FeaturedListingsProps = {
  listings: Listing[];
};

export default function FeaturedListings({ listings }: FeaturedListingsProps) {
  return (
    <section className="space-y-4">
      <SectionTitle
        title="Featured stays"
        subtitle="A curated set of properties with great ratings and amenities"
      />
      <ListingGrid listings={listings} />
    </section>
  );
}
