"use client";

import Link from "next/link";
import { Settings, LogOut } from "lucide-react";
import { useNav } from "@/src/hooks/useNav";
import { PATHS } from "@/src/constants/paths";
import { useActionState } from "react";
import { logout } from "@/src/lib/actions/auth/logout";

export default function Nav() {
  const { visibleItems, isSettings } = useNav();
  const [_, logoutAction] = useActionState(logout, null);

  return (
    <nav className="flex items-center gap-2 text-xs md:text-base md:gap-4">
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

      <form action={logoutAction}>
        <button type="submit" title="Logout" className="block">
          <LogOut className="text-gray-600 size-5" />
        </button>
      </form>
    </nav>
  );
}
