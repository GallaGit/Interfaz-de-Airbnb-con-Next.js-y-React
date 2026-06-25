import { Listing } from "@/types/listing";

type RoomHeaderProps = {
  listing: Listing;
};

const RoomHeader = ({ listing }: RoomHeaderProps) => {
  return (
    <section className="space-y-2">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground">{listing.title}</h1>
      <p className="text-sm text-muted">
        {listing.location} · <span className="font-semibold text-brand">★ {listing.rating}</span> (
        {listing.reviews} reseñas)
      </p>
    </section>
  );
};

export default RoomHeader;
