import SearchInput from "@/components/ui/SearchInput";

const HeroSection = () => {
  return (
    <section className="space-y-6 rounded-2xl bg-background-secondary p-6 shadow-[var(--shadow-card)] sm:p-8">
      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wider text-brand uppercase">Airbnb clone</p>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Encuentra tu próxima estancia
        </h1>
        <p className="max-w-2xl text-sm text-muted sm:text-base">
          Descubre hogares únicos, cabañas y escapes frente al mar con una experiencia mobile-first.
        </p>
      </div>
      <SearchInput action="/search" />
    </section>
  );
};

export default HeroSection;
