import Image from "next/image";
import Link from "next/link";
import { Listing } from "@/types/listing";

type ListingCardProps = {
  listing: Listing;
};

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Link
      href={`/rooms/${listing.id}`}
      className="group block overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:border-stone-300 hover:shadow-md"
    >
      <article>
        <Image
          src={listing.image}
          alt={listing.title}
          width={900}
          height={600}
          unoptimized
          className="h-48 w-full object-cover transition group-hover:opacity-95"
        />

        <div className="space-y-2 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-stone-900">{listing.location}</p>
              <h3 className="text-base font-semibold text-stone-800">{listing.title}</h3>
            </div>
            <p className="text-sm font-semibold text-stone-700">★ {listing.rating}</p>
          </div>

          <p className="text-sm text-stone-600">
            <span className="font-semibold text-stone-900">${listing.pricePerNight}</span> night
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ListingCard;
