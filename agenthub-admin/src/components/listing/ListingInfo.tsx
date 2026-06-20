import Badge from "@/components/ui/Badge";
import { Listing } from "@/types/listing";

type ListingInfoProps = {
  listing: Listing;
};

export default function ListingInfo({ listing }: ListingInfoProps) {
  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm text-stone-600">
          Hosted by {listing.host.name} · {listing.reviews} reviews
        </p>
        <p className="text-stone-700">{listing.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge active>{listing.category}</Badge>
        {listing.host.superhost ? <Badge>Superhost</Badge> : null}
      </div>
    </section>
  );
}
