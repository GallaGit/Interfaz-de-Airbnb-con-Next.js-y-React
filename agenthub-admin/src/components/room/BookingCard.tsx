import Button from "@/components/ui/Button";

type BookingCardProps = {
  pricePerNight: number;
};

const BookingCard = ({ pricePerNight }: BookingCardProps) => {
  return (
    <aside className="space-y-4 rounded-2xl bg-white p-5 shadow-[var(--shadow-card)]">
      <p className="text-foreground">
        <span className="text-2xl font-extrabold text-brand">${pricePerNight}</span>
        <span className="text-sm font-medium text-muted"> por noche</span>
      </p>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="rounded-xl border border-border-subtle bg-background-secondary px-3 py-3">
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">Check in</p>
          <p className="font-medium text-foreground">Cualquier fecha</p>
        </div>
        <div className="rounded-xl border border-border-subtle bg-background-secondary px-3 py-3">
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">Check out</p>
          <p className="font-medium text-foreground">Cualquier fecha</p>
        </div>
      </div>

      <Button className="w-full">Reservar</Button>
      <p className="text-center text-xs text-muted">No se te cobrará todavía.</p>
    </aside>
  );
};

export default BookingCard;
