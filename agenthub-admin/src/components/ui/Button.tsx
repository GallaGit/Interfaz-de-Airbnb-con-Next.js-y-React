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
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition";

  const variantClasses =
    variant === "primary"
      ? "bg-brand text-white hover:bg-red-600"
      : "border border-stone-300 bg-white text-stone-800 hover:border-stone-400";

  return <button className={`${baseClasses} ${variantClasses} ${className}`} {...props} />;
}
