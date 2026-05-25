import { clsx } from "clsx";
import { LucideIcon } from "lucide-react";

type ButtonWithIconLeftProps = {
  name?: string;
  icon: LucideIcon;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string;
  size?: "small" | "medium" | "large";
};

export default function ButtonWithIcon({
  name,
  icon: Icon,
  onClick,
  type = "button",
  variant = "primary",
  className,
  size = "large",
}: ButtonWithIconLeftProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "flex items-center rounded-lg border",
        {
          "py-0.5 px-1": size === "small",
          "py-1 px-1.5": size === "medium",
          "py-2 px-3 lg:py-2.5 lg:px-3.5": size === "large",
        },
        {
          "border-gray-900 bg-black text-white ": variant === "primary",
          "border-gray-500 text-text-default": variant === "secondary",
        },
        className,
      )}
    >
      <Icon
        className={clsx("mr-2 size-4 lg:size-6", {
          "text-gray-300": variant === "primary",
          "text-gray-500": variant === "secondary",
        })}
      />

      {name}
    </button>
  );
}
