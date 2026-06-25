import RoomAmenitiesSection from "@/components/room/RoomAmenitiesSection";
import RoomBookingPanel from "@/components/room/RoomBookingPanel";
import RoomBreadcrumb from "@/components/room/RoomBreadcrumb";
import RoomHostCard from "@/components/room/RoomHostCard";
import RoomPhotoCarousel from "@/components/room/RoomPhotoCarousel";
import RoomSummary from "@/components/room/RoomSummary";
import { Listing } from "@/types/listing";

const PHOTO_PLACEHOLDERS = [
  "placeholder-1",
  "placeholder-2",
  "placeholder-3",
  "placeholder-4",
  "placeholder-5",
];

type RoomDetailViewProps = {
  room: Listing;
};

const RoomDetailView = ({ room }: RoomDetailViewProps) => {
  return (
    <div className="space-y-6">
      <RoomBreadcrumb roomTitle={room.title} />

      <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
        <div className="space-y-6">
          <RoomPhotoCarousel photos={PHOTO_PLACEHOLDERS} />
          <RoomSummary
            title={room.title}
            rating={room.rating}
            reviews={room.reviews}
            location={room.location}
          />
          <RoomHostCard hostName={room.host.name} />
          <RoomAmenitiesSection amenities={room.amenities} />
        </div>

        <RoomBookingPanel pricePerNight={room.pricePerNight} />
      </div>
    </div>
  );
};

export default RoomDetailView;
