"use client";

import { useRef, useState } from "react";
import RequiredMark from "../ui/RequiredMark";

type Props = {
  id: string;
  name: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  isRequired?: boolean;
  rows?: number;
  showLabel?: boolean;
};

export default function Textarea({
  id,
  name,
  placeholder,
  className = "",
  value: externalValue,
  onChange,
  isRequired = false,
  rows = 5,
  showLabel = true,
}: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [internalValue, setInternalValue] = useState("");

  const value = externalValue ?? internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    if (onChange) onChange(newValue);
    else setInternalValue(newValue);

    const el = ref.current;
    if (!el) return;

    el.style.height = "0px";
    el.style.height = el.scrollHeight + "px";
  };

  return (
    <div>
      <label
        htmlFor={id}
        className={showLabel ? "flex text-gray-600 mt-2.5" : "sr-only"}
      >
        {name}
        {isRequired && <RequiredMark />}
      </label>

      <textarea
        ref={ref}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full rounded-md mt-0.5 border border-gray-300 px-3.5 py-1.5 ${className}`}
        rows={rows}
      />
    </div>
  );
}
