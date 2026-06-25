import Link from "next/link";

type HomeNavbarProps = {
  searchText: string;
  onSearchChange: (value: string) => void;
};

export default function HomeNavbar({ searchText, onSearchChange }: HomeNavbarProps) {
  return (
    <header className="sticky top-0 z-20 -mx-4 border-b border-border-subtle bg-white/95 px-4 py-3.5 backdrop-blur-md sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between lg:justify-start">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow-sm">
              A
            </div>
            <span className="text-base font-extrabold tracking-tight text-foreground">airbnb</span>
          </Link>

          <div className="lg:hidden">
            <UserAvatar />
          </div>
        </div>

        <div className="flex w-full items-center gap-2 rounded-xl border border-border-subtle bg-background-secondary px-3 py-2.5 shadow-[var(--shadow-card)] transition focus-within:border-brand/40 lg:max-w-md lg:flex-1">
          <span className="text-muted" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
              <path
                d="M20 20l-3.5-3.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <input
            type="text"
            value={searchText}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Empieza a buscar"
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
            aria-label="Buscar alojamientos"
          />
        </div>

        <div className="hidden lg:flex">
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}

function UserAvatar() {
  return (
    <div
      className="flex h-9 w-9 items-center justify-center rounded-full bg-background-secondary text-sm font-semibold text-foreground ring-1 ring-border-subtle"
      aria-label="Avatar de usuario"
    >
      U
    </div>
  );
}
