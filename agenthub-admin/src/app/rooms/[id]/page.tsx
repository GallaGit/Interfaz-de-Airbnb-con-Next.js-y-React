"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { listings } from "@/data/listings";
import RoomAmenitiesSection from "@/components/room/RoomAmenitiesSection";
import RoomBookingPanel from "@/components/room/RoomBookingPanel";
import RoomBreadcrumb from "@/components/room/RoomBreadcrumb";
import RoomDetailLoading from "@/components/room/RoomDetailLoading";
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

const RoomDetailPage = () => {
  const params = useParams<{ id: string }>();
  const [room, setRoom] = useState<Listing | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setRoom(null);

    const timer = setTimeout(() => {
      const selected = listings.find((item) => item.id === params.id) ?? null;
      setRoom(selected);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [params.id]);

  if (isLoading) {
    return <RoomDetailLoading />;
  }

  if (!room) {
    return (
      <section className="rounded-2xl border border-dashed border-border-subtle bg-background-secondary p-10 text-center text-sm text-muted">
        Habitación no encontrada.
      </section>
    );
  }

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

export default RoomDetailPage;
