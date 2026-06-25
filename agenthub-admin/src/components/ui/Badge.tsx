type BadgeProps = {
  children: React.ReactNode;
  active?: boolean;
};

const Badge = ({ children, active = false }: BadgeProps) => {
  return (
    <span
      className={`inline-flex min-h-[40px] items-center rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition duration-200 ${
        active
          ? "bg-brand text-white shadow-sm"
          : "bg-background-secondary text-foreground ring-1 ring-inset ring-border-subtle hover:ring-neutral-300"
      }`}
    >
      {children}
    </span>
  );
};

export default Badge;
