type RoomHostCardProps = {
  hostName: string;
  yearsHosting?: number;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const RoomHostCard = ({ hostName, yearsHosting = 6 }: RoomHostCardProps) => {
  return (
    <section className="flex items-center gap-4 rounded-2xl border border-border-subtle bg-white p-5 shadow-[var(--shadow-card)]">
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-bold text-neutral-600"
        aria-hidden="true"
      >
        {getInitials(hostName)}
      </div>
      <div>
        <p className="text-base font-bold text-foreground">Anfitrión: {hostName}</p>
        <p className="text-sm text-muted">
          {yearsHosting} {yearsHosting === 1 ? "año" : "años"} como anfitrión
        </p>
      </div>
    </section>
  );
};

export default RoomHostCard;
