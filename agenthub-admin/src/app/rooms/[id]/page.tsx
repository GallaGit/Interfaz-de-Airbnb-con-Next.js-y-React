import BookingCard from "@/components/room/BookingCard";
import RoomAmenities from "@/components/room/RoomAmenities";
import RoomGallery from "@/components/room/RoomGallery";
import RoomHeader from "@/components/room/RoomHeader";
import ListingInfo from "@/components/listing/ListingInfo";
import { listings } from "@/data/listings";
import { notFound } from "next/navigation";

type RoomDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
  const routeParams = await params;
  const listing = listings.find((item) => item.id === routeParams.id);

  if (!listing) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <RoomHeader listing={listing} />
      <RoomGallery images={listing.images} title={listing.title} />

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <ListingInfo listing={listing} />
          <RoomAmenities amenities={listing.amenities} />
        </div>
        <BookingCard pricePerNight={listing.pricePerNight} />
      </section>
    </div>
  );
}
