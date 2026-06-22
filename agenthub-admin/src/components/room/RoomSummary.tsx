type RoomSummaryProps = {
  title: string;
  rating: number;
  reviews: number;
  location: string;
};

const RoomSummary = ({ title, rating, reviews, location }: RoomSummaryProps) => {
  return (
    <section className="space-y-2 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <h1 className="text-2xl font-bold text-stone-900">{title}</h1>
      <p className="text-sm text-stone-700">
        ★ {rating.toFixed(2)} · {reviews} reseñas · {location}
      </p>
    </section>
  );
};

export default RoomSummary;
