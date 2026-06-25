"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavIcon from "@/components/layout/NavIcon";

const navItems = [
  { href: "/", label: "Explorar", icon: "home" },
  { href: "/search", label: "Buscar", icon: "search" },
  { href: "/catalog", label: "Catálogo", icon: "catalog" },
] as const;

const MobileBottomNav = () => {
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
};

export default MobileBottomNav;
