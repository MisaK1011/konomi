"use client";

import clsx from "clsx";
import { Eye, EyeOff } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  id: string;
  label: string;
  placeholder?: string;
  className?: string;
  type: "text" | "email" | "password";
  register: UseFormRegisterReturn;
  error?: string;
  showPassword?: boolean;
  onTogglePassword?: () => void;
};

export default function TextInput({
  id,
  label,
  placeholder,
  className = "",
  type,
  register,
  error,
  showPassword,
  onTogglePassword,
}: Props) {
  return (
    <div>
      <label
        className={clsx(
          "block text-xs font-medium text-gray-500 mb-1.5",
          error && "text-rose-500",
        )}
        htmlFor={id}
      >
        {label}
      </label>
      <div className={type === "password" ? "relative" : ""}>
        <input
          id={id}
          className={clsx(
            clsx(
              "w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-bg-default text-text-default",
              className,
              error && "border-rose-500 focus:border-rose-500",
              type === "password" && "relative",
            ),
          )}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          {...register}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        )}
      </div>

      {error && <p className="block text-rose-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
