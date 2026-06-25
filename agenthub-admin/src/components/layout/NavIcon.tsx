type NavIconProps = {
  icon: string;
  active: boolean;
};

const NavIcon = ({ icon, active }: NavIconProps) => {
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
};

export default NavIcon;
