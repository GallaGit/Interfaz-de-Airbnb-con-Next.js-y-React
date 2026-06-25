type SortOrder = "asc" | "desc";

type CatalogResultsHeaderProps = {
  resultsCount: number;
  sortOrder: SortOrder;
  onSortChange: (order: SortOrder) => void;
};

const CatalogResultsHeader = ({
  resultsCount,
  sortOrder,
  onSortChange,
}: CatalogResultsHeaderProps) => {
  return (
    <header className="flex flex-col gap-3 rounded-2xl bg-background-secondary p-5 shadow-[var(--shadow-card)] sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm font-semibold text-foreground">
        <span className="text-brand">{resultsCount}</span> resultados encontrados
      </p>

      <label className="flex items-center gap-2 text-sm">
        <span className="font-medium text-foreground">Ordenar por precio</span>
        <select
          value={sortOrder}
          onChange={(event) => onSortChange(event.target.value as SortOrder)}
          className="rounded-xl border border-border-subtle bg-white px-3 py-2.5 text-foreground outline-none transition focus:border-brand/40"
          aria-label="Ordenar por precio"
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </label>
    </header>
  );
};

export default CatalogResultsHeader;
