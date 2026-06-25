import Link from "next/link";
import { Listing } from "@/types/listing";

type StayCardProps = {
  listing: Listing;
};

const StayCard = ({ listing }: StayCardProps) => {
  return (
    <Link
      href={`/rooms/${listing.id}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
    >
      <article>
        {/* Placeholder de foto */}
        <div className="flex h-52 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 text-sm font-semibold text-muted transition duration-300 group-hover:from-neutral-200 group-hover:to-neutral-300 sm:h-56">
          Placeholder foto
        </div>

        <div className="space-y-2 p-4">
          <h2 className="line-clamp-2 text-base font-bold tracking-tight text-foreground">
            {listing.title}
          </h2>

          <p className="text-sm text-foreground">
            <span className="text-lg font-extrabold text-brand">${listing.pricePerNight}</span>
            <span className="text-muted"> por noche</span>
          </p>

          <p className="flex items-center gap-1 text-sm font-semibold text-foreground">
            <span className="text-brand" aria-hidden="true">
              ★
            </span>
            <span>{listing.rating.toFixed(2)}</span>
          </p>
        </div>
      </article>
    </Link>
  );
};

export default StayCard;
