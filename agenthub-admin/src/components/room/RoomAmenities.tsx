type RoomAmenitiesProps = {
  amenities: string[];
};

export default function RoomAmenities({ amenities }: RoomAmenitiesProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-stone-900">Amenities</h2>
      <ul className="grid grid-cols-1 gap-2 text-sm text-stone-700 sm:grid-cols-2">
        {amenities.map((amenity) => (
          <li key={amenity} className="rounded-xl bg-stone-100 px-3 py-2">
            {amenity}
          </li>
        ))}
      </ul>
    </section>
  );
}
