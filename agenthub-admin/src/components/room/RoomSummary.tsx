type RoomSummaryProps = {
  title: string;
  rating: number;
  reviews: number;
  location: string;
};

const RoomSummary = ({ title, rating, reviews, location }: RoomSummaryProps) => {
  return (
    <header className="space-y-2">
      <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">{title}</h1>
      <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm">
        <span className="inline-flex items-center gap-0.5 font-semibold text-foreground">
          <span className="text-brand" aria-hidden="true">
            ★
          </span>
          {rating.toFixed(2)}
        </span>
        <span className="text-muted" aria-hidden="true">
          ·
        </span>
        <span className="text-muted">{reviews} reseñas</span>
        <span className="text-muted" aria-hidden="true">
          ·
        </span>
        <span className="font-medium text-foreground">{location}</span>
      </p>
    </header>
  );
};

export default RoomSummary;
