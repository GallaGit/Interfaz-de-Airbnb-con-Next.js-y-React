type RoomAmenitiesSectionProps = {
  amenities: string[];
};

const RoomAmenitiesSection = ({ amenities }: RoomAmenitiesSectionProps) => {
  return (
    <section className="space-y-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-stone-900">Servicios</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {amenities.map((amenity) => (
          <div
            key={amenity}
            className="flex items-center gap-2 rounded-xl bg-stone-100 px-3 py-2 text-sm text-stone-700"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs text-stone-600">
              •
            </span>
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomAmenitiesSection;
