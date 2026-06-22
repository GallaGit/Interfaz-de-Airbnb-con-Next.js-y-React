import Link from "next/link";
import { Listing } from "@/types/listing";

type StayCardProps = {
  listing: Listing;
};

const StayCard = ({ listing }: StayCardProps) => {
  return (
    <Link
      href={`/rooms/${listing.id}`}
      className="group block overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:border-stone-300 hover:shadow-md"
    >
      <article>
        <div className="flex h-44 items-center justify-center bg-gradient-to-br from-stone-200 to-stone-300 text-sm font-semibold text-stone-600 transition group-hover:from-stone-300 group-hover:to-stone-400">
          Placeholder foto
        </div>

        <div className="space-y-1 p-4">
          <h2 className="text-base font-semibold text-stone-900">{listing.title}</h2>
          <p className="text-sm text-stone-600">{listing.location}</p>
          <p className="text-sm text-stone-800">
            <span className="font-semibold">${listing.pricePerNight}</span> por noche
          </p>
          <p className="text-sm text-stone-700">★ {listing.rating.toFixed(2)}</p>
        </div>
      </article>
    </Link>
  );
};

export default StayCard;
