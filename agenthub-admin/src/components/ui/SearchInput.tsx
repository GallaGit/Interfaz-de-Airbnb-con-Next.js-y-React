"use client";

import { FormEvent } from "react";
import { usePathname, useRouter } from "next/navigation";

type SearchInputProps = {
  defaultValue?: string;
  action?: "/search" | "/";
};

const SearchInput = ({
  defaultValue = "",
  action = "/search",
}: SearchInputProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = (formData.get("q") ?? "").toString().trim();
    const searchPath = action || pathname;

    if (query.length > 0) {
      router.push(`${searchPath}?q=${encodeURIComponent(query)}`);
      return;
    }

    router.push(searchPath);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center gap-2 rounded-xl border border-border-subtle bg-white p-1.5 shadow-[var(--shadow-card)] transition focus-within:border-brand/40 focus-within:shadow-[var(--shadow-card-hover)]"
    >
      <span className="pl-3 text-muted" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
          <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      </span>
      <input
        type="text"
        name="q"
        defaultValue={defaultValue}
        placeholder="Busca destinos o alojamientos"
        className="w-full rounded-xl bg-transparent px-2 py-2.5 text-sm text-foreground outline-none placeholder:text-muted"
      />
      <button
        type="submit"
        className="shrink-0 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-brand-hover active:scale-[0.98]"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchInput;
