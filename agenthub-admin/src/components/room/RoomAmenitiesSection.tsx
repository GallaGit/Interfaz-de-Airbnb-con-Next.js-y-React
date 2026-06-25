import { getAmenityIcon } from "@/lib/amenityIcons";

type RoomAmenitiesSectionProps = {
  amenities: string[];
};

const RoomAmenitiesSection = ({ amenities }: RoomAmenitiesSectionProps) => {
  return (
    <section className="space-y-4 rounded-2xl border border-border-subtle bg-white p-5 shadow-[var(--shadow-card)]">
      <h2 className="text-lg font-extrabold tracking-tight text-foreground">Servicios</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {amenities.map((amenity) => (
          <div key={amenity} className="flex items-center gap-3 rounded-xl bg-background-secondary px-4 py-3">
            <span className="flex h-8 w-8 items-center justify-center text-lg" aria-hidden="true">
              {getAmenityIcon(amenity)}
            </span>
            <span className="text-sm font-medium text-foreground">{amenity}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomAmenitiesSection;
