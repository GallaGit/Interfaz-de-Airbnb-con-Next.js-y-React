import Link from "next/link";

type RoomBreadcrumbProps = {
  roomTitle: string;
};

const RoomBreadcrumb = ({ roomTitle }: RoomBreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm">
      <Link
        href="/catalog"
        className="inline-flex items-center gap-1 font-medium text-stone-600 transition hover:text-stone-900"
      >
        <span aria-hidden="true">←</span>
        Volver al catálogo
      </Link>
      <span className="text-stone-400" aria-hidden="true">
        /
      </span>
      <span className="truncate font-medium text-stone-900" aria-current="page">
        {roomTitle}
      </span>
    </nav>
  );
};

export default RoomBreadcrumb;
