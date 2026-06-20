"use client";

import { FormEvent } from "react";
import { usePathname, useRouter } from "next/navigation";

type SearchInputProps = {
  defaultValue?: string;
  action?: "/search" | "/";
};

export default function SearchInput({
  defaultValue = "",
  action = "/search",
}: SearchInputProps) {
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
      className="flex w-full items-center gap-2 rounded-full border border-stone-300 bg-white p-2 shadow-sm"
    >
      <input
        type="text"
        name="q"
        defaultValue={defaultValue}
        placeholder="Search destinations or stays"
        className="w-full rounded-full px-4 py-2 text-sm outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
      >
        Search
      </button>
    </form>
  );
}
