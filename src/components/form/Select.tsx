"use client";

import RequiredMark from "../ui/RequiredMark";

type Option = {
  label: string;
  value: string;
};

type Props = {
  id: string;
  name: string;
  options: Option[];
  placeholder?: string;
  className?: string;
  value?: string;
  isRequired?: boolean;
};

export default function Select({
  id,
  name,
  options,
  placeholder = "Select...",
  className = "",
  value,
  isRequired = false,
}: Props) {
  return (
    <div>
      <label htmlFor={id} className="flex text-gray-600">
        {name}
        {isRequired && <RequiredMark />}
      </label>

      <select
        id={id}
        value={value ?? ""}
        className={`block mt-0.5 w-full rounded-md border border-gray-300 px-3 py-1.5 bg-white ${className}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
