"use client";

import Select from "@/src/components/form/Select";
import TextInput from "@/src/components/form/TextInput";
import ButtonWithIcon from "@/src/components/ui/ButtonWithIcon";
import { shoppingItems } from "@/src/mocks/shoppingItems";
import { units } from "@/src/mocks/units";
import { Plus } from "lucide-react";
import ShoppingListItem from "./shoppingListItem";
import Textarea from "@/src/components/form/Textarea";

export default function Page() {
  const total = shoppingItems.length;
  const done = shoppingItems.filter((i) => i.checked).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <div className="w-[92%] pt-6 md:w-[95%] lg:w-[92%] md:pt-10 mx-auto">
      {/* Summary */}
      <div className="bg-[#eceae2] border border-gray-200 rounded-xl p-4 mb-3 flex items-center justify-between gap-3">
        <div className="flex-1">
          <h2 className="font-semibold mb-0.5">Week 1 · May 12–18</h2>
          <p className="text-sm text-gray-500 mb-2">
            {done} of {total} items checked
          </p>
          <div className="w-full h-1.5 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-500 rounded-full transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
        <div className="flex gap-4 shrink-0">
          <div className="text-center">
            <span className="block text-lg font-semibold">{total - done}</span>
            <span className="text-[10px] text-gray-400">Remaining</span>
          </div>
          <div className="text-center">
            <span className="block text-lg font-semibold">{done}</span>
            <span className="text-[10px] text-gray-400">Done</span>
          </div>
        </div>
      </div>

      {/* Add Item Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
        <section className="grid gap-2 bg-mist-50 border border-gray-200 rounded-xl p-4">
          {/* Ingredient */}
          <TextInput
            type="text"
            id="ingredient"
            name="Ingredient"
            placeholder="Salmon"
          />
          {/* Amount */}
          <TextInput type="number" id="amount" name="Amount" placeholder="2" />
          {/* Unit */}
          <Select
            id={`unit`}
            name="Unit"
            options={units.map((unit) => ({
              label: unit.value,
              value: unit.value,
            }))}
          />
          <div className="flex justify-end">
            <ButtonWithIcon
              name="Add"
              icon={Plus}
              onClick={() => {}}
              className="mt-2"
            />
          </div>
        </section>

        {/* Shopping List */}
        <section className="grid gap-2 bg-mist-50 border border-gray-200 rounded-xl p-4 flex-1 min-w-0">
          {shoppingItems.map((item) => (
            <ShoppingListItem key={item.id} item={item} />
          ))}
        </section>

        {/* Note */}
        <section className="bg-mist-50 border border-gray-200 rounded-xl px-4 pb-4">
          <Textarea
            id="notes"
            name="Notes"
            placeholder="Skin off salmon."
          ></Textarea>
        </section>
      </div>
    </div>
  );
}
