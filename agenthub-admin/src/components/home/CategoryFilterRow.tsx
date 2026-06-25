export type CategoryFilter = {
  label: string;
  icon: string;
  value: string;
};

type CategoryFilterRowProps = {
  filters: CategoryFilter[];
  activeCategory: string;
  onCategoryChange: (value: string) => void;
};

export default function CategoryFilterRow({
  filters,
  activeCategory,
  onCategoryChange,
}: CategoryFilterRowProps) {
  return (
    <section
      className="-mx-4 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      aria-label="Filtros por categoría"
    >
      <div className="flex min-w-max gap-2.5">
        {filters.map((filter) => {
          const isActive = activeCategory === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => onCategoryChange(filter.value)}
              aria-pressed={isActive}
              className={`flex min-h-[44px] items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium whitespace-nowrap transition duration-200 ${
                isActive
                  ? "bg-brand text-white shadow-sm"
                  : "bg-background-secondary text-foreground ring-1 ring-inset ring-border-subtle hover:ring-neutral-300"
              }`}
            >
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-base leading-none ${
                  isActive ? "bg-white/20" : "bg-white"
                }`}
                aria-hidden="true"
              >
                {filter.icon}
              </span>
              <span>{filter.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
