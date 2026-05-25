import { Check, Trash2 } from "lucide-react";
import { type ShoppingItem } from "@/src/mocks/shoppingItems";

export default function shoppingListItem({ item }: { item: ShoppingItem }) {
  return (
    <div
      className={`flex items-start gap-2.5 px-3.5 py-2.5 border-b border-gray-200 last:border-none hover:bg-gray-100 transition-colors`}
    >
      <button
        className={`mt-0.5 w-4.5 h-4.5 rounded-full border-[1.5px] flex items-center justify-center shrink-0${
          item.checked
            ? "border-text-default bg-text-default"
            : "bg-white border-gray-400"
        }`}
      >
        {item.checked && <Check className="size-3 text-white" />}
      </button>
      <div className="flex-1 min-w-0">
        <p
          className={`text-sm font-medium break-all ${
            item.checked ? "line-through text-gray-400" : "text-text-default"
          }`}
        >
          {item.name}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">
          {item.amount} {item.unit}
        </p>
      </div>

      {item.source === "manual" && (
        <button
          className="text-red-400 shrink-0 p-0.5 w-3 h-3"
          aria-label="Delete"
        >
          <Trash2 className="size-4" />
        </button>
      )}
    </div>
  );
}
