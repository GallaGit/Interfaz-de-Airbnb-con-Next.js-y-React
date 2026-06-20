type BadgeProps = {
  children: React.ReactNode;
  active?: boolean;
};

export default function Badge({ children, active = false }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
        active
          ? "bg-brand text-white"
          : "bg-stone-100 text-stone-700 ring-1 ring-inset ring-stone-200"
      }`}
    >
      {children}
    </span>
  );
}
