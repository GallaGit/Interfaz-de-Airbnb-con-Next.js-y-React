type RoomAmenitiesProps = {
  amenities: string[];
};

export default function RoomAmenities({ amenities }: RoomAmenitiesProps) {
  return (
    <section className="space-y-3 rounded-2xl bg-white p-5 shadow-[var(--shadow-card)]">
      <h2 className="text-xl font-extrabold tracking-tight text-foreground">Amenidades</h2>
      <ul className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
        {amenities.map((amenity) => (
          <li
            key={amenity}
            className="rounded-xl bg-background-secondary px-3.5 py-2.5 font-medium text-foreground"
          >
            {amenity}
          </li>
        ))}
      </ul>
    </section>
  );
}
