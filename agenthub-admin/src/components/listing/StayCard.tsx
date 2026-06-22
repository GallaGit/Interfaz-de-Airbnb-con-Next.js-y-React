import Link from "next/link";
import { Listing } from "@/types/listing";

type StayCardProps = {
  listing: Listing;
};

export default function StayCard({ listing }: StayCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      <div className="flex h-44 items-center justify-center bg-gradient-to-br from-stone-200 to-stone-300 text-sm font-semibold text-stone-600">
        Placeholder foto
      </div>

      <div className="space-y-1 p-4">
        <h2 className="text-base font-semibold text-stone-900">{listing.title}</h2>
        <p className="text-sm text-stone-600">{listing.location}</p>
        <p className="text-sm text-stone-800">
          <span className="font-semibold">${listing.pricePerNight}</span> por noche
        </p>
        <p className="text-sm text-stone-700">★ {listing.rating.toFixed(2)}</p>

        <Link
          href={`/rooms/${listing.id}`}
          className="inline-flex rounded-full border border-stone-300 px-3 py-1 text-xs font-medium text-stone-700 transition hover:border-stone-500"
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
