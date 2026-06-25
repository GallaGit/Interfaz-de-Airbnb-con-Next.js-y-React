import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition duration-200";

  const variantClasses =
    variant === "primary"
      ? "bg-brand text-white shadow-sm hover:bg-brand-hover active:scale-[0.98]"
      : "border border-border-subtle bg-white text-foreground hover:border-neutral-300 hover:bg-background-secondary";

  return <button className={`${baseClasses} ${variantClasses} ${className}`} {...props} />;
};
