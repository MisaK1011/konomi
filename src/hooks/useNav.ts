import { usePathname } from "next/navigation";
import { type NavItem, NAV_ITEMS } from "../constants/nav-items";
import { PATHS } from "../constants/paths";

export function useNav() {
  const pathname = usePathname();

  const isHidden = (item: NavItem) => {
    const hiddenNav =
      item.match === "prefix"
        ? pathname.startsWith(item.href)
        : pathname === item.href;
    return hiddenNav;
  };

  const visibleItems = NAV_ITEMS.filter((item) => !isHidden(item));

  const isHome = pathname === PATHS.home || pathname === "";

  const isSettings = pathname === PATHS.settings;

  return {
    pathname,
    visibleItems,
    isHome,
    isSettings,
  };
}
