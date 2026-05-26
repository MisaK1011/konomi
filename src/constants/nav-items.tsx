import { PATHS } from "./paths";

export type NavItem = {
  href: string;
  label: string;
  match: "prefix" | "exact";
};

export const NAV_ITEMS: NavItem[] = [
  { href: PATHS.myRecipe, label: "My recipe", match: "prefix" },
  { href: PATHS.mealPlan, label: "Plan", match: "exact" },
  { href: PATHS.shoppingList, label: "List", match: "exact" },
];
