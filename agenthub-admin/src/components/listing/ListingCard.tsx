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
      className="group block overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
    >
      <article>
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={listing.image}
            alt={listing.title}
            width={900}
            height={600}
            unoptimized
            className="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.02] sm:h-56"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur">
            {listing.category}
          </span>
        </div>

        <div className="space-y-1.5 p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-medium text-muted">{listing.location}</p>
              <h3 className="line-clamp-1 text-base font-bold tracking-tight text-foreground">
                {listing.title}
              </h3>
            </div>
            <p className="flex shrink-0 items-center gap-0.5 text-sm font-semibold text-foreground">
              <span className="text-brand" aria-hidden="true">
                ★
              </span>
              {listing.rating}
            </p>
          </div>

          <p className="text-sm text-foreground">
            <span className="text-base font-bold text-brand">${listing.pricePerNight}</span>
            <span className="text-muted"> por noche</span>
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ListingCard;
