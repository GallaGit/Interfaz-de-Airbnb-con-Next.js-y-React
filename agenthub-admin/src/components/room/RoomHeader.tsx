import { Listing } from "@/types/listing";

type RoomHeaderProps = {
  listing: Listing;
};

export default function RoomHeader({ listing }: RoomHeaderProps) {
  return (
    <section className="space-y-2">
      <h1 className="text-3xl font-bold tracking-tight text-stone-900">{listing.title}</h1>
      <p className="text-sm text-stone-600">
        {listing.location} · ★ {listing.rating} ({listing.reviews} reviews)
      </p>
    </section>
  );
}
