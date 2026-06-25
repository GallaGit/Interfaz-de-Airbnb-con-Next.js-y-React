import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border-subtle bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-brand transition hover:text-brand-hover"
        >
          airbnb
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-5 text-sm font-medium text-muted md:flex">
            <Link href="/" className="transition hover:text-foreground">
              Home
            </Link>
            <Link href="/search" className="transition hover:text-foreground">
              Search
            </Link>
            <Link href="/catalog" className="transition hover:text-foreground">
              Catálogo
            </Link>
          </nav>

          <div
            className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow-sm"
            aria-hidden="true"
          >
            U
          </div>
        </div>
      </div>
    </header>
  );
}
