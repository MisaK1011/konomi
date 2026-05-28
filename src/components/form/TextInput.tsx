"use client";

import RequiredMark from "./RequiredMark";
import clsx from "clsx";

type Props = {
  id: string;
  name: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  isRequired?: boolean;
  type: "text" | "number" | "password";
};

export default function TextInput({
  id,
  name,
  placeholder,
  className = "",
  isRequired = false,
  type,
}: Props) {
  return (
    <div>
      <label htmlFor={id} className="flex text-gray-600">
        {name}
        {isRequired && <RequiredMark />}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={clsx(
          "w-full rounded-md border border-gray-300 px-3.5 py-1.5 mt-0.5",
          className,
        )}
      />
    </div>
  );
}
