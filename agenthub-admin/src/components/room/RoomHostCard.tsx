type RoomHostCardProps = {
  hostName: string;
};

const RoomHostCard = ({ hostName }: RoomHostCardProps) => {
  return (
    <section className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-200 text-sm font-semibold text-stone-700">
        AV
      </div>
      <div>
        <p className="text-sm font-semibold text-stone-900">Anfitrión: {hostName}</p>
        <p className="text-sm text-stone-600">6 años como anfitrión</p>
      </div>
    </section>
  );
};

export default RoomHostCard;
