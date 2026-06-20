import Button from "@/components/ui/Button";

type BookingCardProps = {
  pricePerNight: number;
};

export default function BookingCard({ pricePerNight }: BookingCardProps) {
  return (
    <aside className="space-y-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <p className="text-lg font-semibold text-stone-900">
        ${pricePerNight} <span className="text-sm font-normal text-stone-600">night</span>
      </p>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="rounded-xl border border-stone-200 px-3 py-2">
          <p className="text-xs uppercase tracking-wide text-stone-500">Check in</p>
          <p>Any date</p>
        </div>
        <div className="rounded-xl border border-stone-200 px-3 py-2">
          <p className="text-xs uppercase tracking-wide text-stone-500">Check out</p>
          <p>Any date</p>
        </div>
      </div>

      <Button className="w-full">Reserve</Button>
      <p className="text-center text-xs text-stone-500">You will not be charged yet.</p>
    </aside>
  );
}
