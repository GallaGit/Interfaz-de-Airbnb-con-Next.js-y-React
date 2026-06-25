"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Explorar", icon: "home" },
  { href: "/search", label: "Buscar", icon: "search" },
  { href: "/catalog", label: "Catálogo", icon: "catalog" },
] as const;

function NavIcon({ icon, active }: { icon: string; active: boolean }) {
  const stroke = active ? "var(--brand)" : "var(--foreground-secondary)";

  if (icon === "home") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z"
          stroke={stroke}
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "search") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke={stroke} strokeWidth="1.75" />
        <path d="M20 20l-3.5-3.5" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke={stroke} strokeWidth="1.75" />
      <path d="M8 10h8M8 14h5" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export default function MobileBottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border-subtle bg-white shadow-[var(--shadow-nav)] lg:hidden"
    >
      <div className="mx-auto flex max-w-6xl items-stretch justify-around px-2 pb-[env(safe-area-inset-bottom)]">
        {navItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-h-[56px] flex-1 flex-col items-center justify-center gap-0.5 px-2 py-2 text-[11px] font-medium transition-colors ${
                active ? "text-brand" : "text-muted"
              }`}
            >
              <NavIcon icon={item.icon} active={active} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
