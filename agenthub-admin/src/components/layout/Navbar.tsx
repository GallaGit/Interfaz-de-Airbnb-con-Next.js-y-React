import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-brand">
          airbnb clone
        </Link>

        <nav className="flex items-center gap-4 text-sm font-medium text-stone-700">
          <Link href="/" className="transition hover:text-stone-900">
            Home
          </Link>
          <Link href="/search" className="transition hover:text-stone-900">
            Search
          </Link>
        </nav>
      </div>
    </header>
  );
}
