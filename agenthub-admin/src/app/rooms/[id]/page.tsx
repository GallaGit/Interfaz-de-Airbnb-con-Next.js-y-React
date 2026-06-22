"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { listings } from "@/data/listings";
import RoomAmenitiesSection from "@/components/room/RoomAmenitiesSection";
import RoomBookingPanel from "@/components/room/RoomBookingPanel";
import RoomBreadcrumb from "@/components/room/RoomBreadcrumb";
import RoomHostCard from "@/components/room/RoomHostCard";
import RoomPhotoCarousel from "@/components/room/RoomPhotoCarousel";
import RoomSummary from "@/components/room/RoomSummary";
import { Listing } from "@/types/listing";

const RoomDetailPage = () => {
  const params = useParams<{ id: string }>();
  const [room, setRoom] = useState<Listing | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const selected = listings.find((item) => item.id === params.id) ?? null;
      setRoom(selected);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [params.id]);

  if (isLoading) {
    return (
      <section className="rounded-2xl border border-stone-200 bg-white p-8 text-center text-sm text-stone-600">
        Cargando detalle de habitación...
      </section>
    );
  }

  if (!room) {
    return (
      <section className="rounded-2xl border border-dashed border-stone-300 bg-white p-8 text-center text-sm text-stone-600">
        Habitación no encontrada.
      </section>
    );
  }

  const photos = room.images.length > 0 ? room.images : ["placeholder-1", "placeholder-2"];

  return (
    <div className="space-y-6">
      <RoomBreadcrumb roomTitle={room.title} />
      <RoomPhotoCarousel photos={photos} />
      <RoomSummary
        title={room.title}
        rating={room.rating}
        reviews={room.reviews}
        location={room.location}
      />
      <RoomHostCard hostName={room.host.name} />
      <RoomAmenitiesSection amenities={room.amenities} />
      <RoomBookingPanel pricePerNight={room.pricePerNight} />
    </div>
  );
};

export default RoomDetailPage;
