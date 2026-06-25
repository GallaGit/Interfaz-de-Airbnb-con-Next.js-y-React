import Link from "next/link";

const CatalogBackLink = () => {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-1.5 rounded-xl border border-border-subtle bg-white px-4 py-2.5 text-sm font-medium text-foreground shadow-[var(--shadow-card)] transition hover:border-brand/40 hover:text-brand"
    >
      <span aria-hidden="true">←</span>
      Ir a Home
    </Link>
  );
};

export default CatalogBackLink;
