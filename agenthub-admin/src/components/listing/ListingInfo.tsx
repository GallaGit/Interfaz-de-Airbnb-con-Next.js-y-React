import Badge from "@/components/ui/Badge";
import { Listing } from "@/types/listing";

type ListingInfoProps = {
  listing: Listing;
};

export default function ListingInfo({ listing }: ListingInfoProps) {
  return (
    <section className="space-y-4 rounded-2xl bg-white p-5 shadow-[var(--shadow-card)]">
      <div className="space-y-2">
        <p className="text-sm text-muted">
          Anfitrión: <span className="font-medium text-foreground">{listing.host.name}</span> ·{" "}
          {listing.reviews} reseñas
        </p>
        <p className="leading-relaxed text-foreground">{listing.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge active>{listing.category}</Badge>
        {listing.host.superhost ? <Badge>Superhost</Badge> : null}
      </div>
    </section>
  );
}
