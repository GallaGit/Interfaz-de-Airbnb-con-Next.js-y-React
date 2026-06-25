import Link from "next/link";

type RoomBreadcrumbProps = {
  roomTitle: string;
};

const RoomBreadcrumb = ({ roomTitle }: RoomBreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm">
      <Link
        href="/catalog"
        className="inline-flex items-center gap-1.5 font-medium text-muted transition hover:text-brand"
      >
        <span aria-hidden="true">←</span>
        Volver al catálogo
      </Link>
      <span className="text-border-subtle" aria-hidden="true">
        /
      </span>
      <span className="truncate font-semibold text-foreground" aria-current="page">
        {roomTitle}
      </span>
    </nav>
  );
};

export default RoomBreadcrumb;
