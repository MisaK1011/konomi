"use client";

import Link from "next/link";
import { Settings } from "lucide-react";
import { useNav } from "@/src/hooks/useNav";
import { PATHS } from "@/src/constants/paths";

export default function Nav() {
  const { visibleItems, isSettings } = useNav();

  return (
    <nav className="flex items-center gap-2 text-xs">
      {visibleItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="border border-gray-400 px-1.5 py-1 rounded-lg"
        >
          {item.label}
        </Link>
      ))}

      {!isSettings && (
        <Link href={PATHS.settings}>
          <Settings className="text-gray-600 size-5" />
        </Link>
      )}
    </nav>
  );
}
