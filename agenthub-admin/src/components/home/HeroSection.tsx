import SearchInput from "@/components/ui/SearchInput";

export default function HeroSection() {
  return (
    <section className="space-y-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200 sm:p-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">Airbnb clone</p>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Find your next stay
        </h1>
        <p className="max-w-2xl text-sm text-stone-600 sm:text-base">
          Discover unique homes, cabins, and beachfront escapes with a mobile-first experience.
        </p>
      </div>
      <SearchInput action="/search" />
    </section>
  );
}
