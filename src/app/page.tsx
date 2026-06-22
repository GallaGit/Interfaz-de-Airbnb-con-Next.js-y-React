const listings = [
  {
    id: 1,
    title: "Loft moderno en el centro",
    location: "Madrid, España",
    price: 92,
    rating: 4.92,
    emoji: "🏙️",
  },
  {
    id: 2,
    title: "Cabaña junto al lago",
    location: "Bariloche, Argentina",
    price: 75,
    rating: 4.88,
    emoji: "🏞️",
  },
  {
    id: 3,
    title: "Casa de playa con vistas",
    location: "Tulum, México",
    price: 140,
    rating: 4.97,
    emoji: "🏖️",
  },
  {
    id: 4,
    title: "Apartamento acogedor",
    location: "Barcelona, España",
    price: 68,
    rating: 4.79,
    emoji: "🏠",
  },
  {
    id: 5,
    title: "Chalet en la montaña",
    location: "Los Andes, Chile",
    price: 110,
    rating: 4.91,
    emoji: "🏔️",
  },
  {
    id: 6,
    title: "Estudio céntrico y luminoso",
    location: "Ciudad de México",
    price: 54,
    rating: 4.85,
    emoji: "🌆",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <span className="text-xl font-bold text-rose-500">airbnb</span>
          <div className="flex flex-1 max-w-md items-center rounded-full border border-zinc-300 px-4 py-2 shadow-sm dark:border-zinc-700">
            <input
              type="text"
              placeholder="Buscar destinos"
              className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
            />
            <span className="ml-2 rounded-full bg-rose-500 px-3 py-1 text-xs font-medium text-white">
              Buscar
            </span>
          </div>
          <button className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium dark:border-zinc-700">
            Iniciar sesión
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        <h1 className="mb-8 text-2xl font-semibold">Alojamientos destacados</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <article
              key={listing.id}
              className="group overflow-hidden rounded-2xl border border-zinc-200 transition hover:shadow-lg dark:border-zinc-800"
            >
              <div className="flex h-44 items-center justify-center bg-gradient-to-br from-rose-100 to-amber-100 text-6xl dark:from-zinc-800 dark:to-zinc-700">
                {listing.emoji}
              </div>
              <div className="space-y-1 p-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-medium">{listing.title}</h2>
                  <span className="text-sm">★ {listing.rating}</span>
                </div>
                <p className="text-sm text-zinc-500">{listing.location}</p>
                <p className="pt-1 text-sm">
                  <span className="font-semibold">${listing.price}</span> noche
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="border-t border-zinc-200 px-6 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800">
        Interfaz de Airbnb con Next.js y React
      </footer>
    </div>
  );
}
