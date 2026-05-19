"use client";

import { recipes } from "@/src/mocks/recipes";
import { X, Check, Clock, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type AddRecipeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AddRecipeModal({
  isOpen,
  onClose,
}: AddRecipeModalProps) {
  const [selected, setSelected] = useState<number[]>([]);

  if (!isOpen) return null;

  const toggle = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id],
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[90%] max-w-md rounded-xl bg-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-lg font-bold">Add Recipe</h2>
            <p className="text-xs">Breakfast, 19 May</p>
          </div>

          <button onClick={onClose}>
            <X className="size-5 text-gray-500" />
          </button>
        </div>

        <div className="mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full rounded-md border border-gray-300 pl-9 pr-3 py-1.5"
            />
          </div>
          <div className="flex gap-2 mt-1">
            {/* TODO:Most used recipes first */}
            <button className="rounded-md border border-gray-300 px-3 py-1">
              All
            </button>
            <button
              onClick={onClose}
              className="rounded-md border border-gray-300 px-3 py-1"
            >
              My recipes
            </button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-60 mt-4">
          {recipes.map((recipe) => {
            const isSelected = selected.includes(recipe.id);

            return (
              <div
                key={recipe.id}
                onClick={() => toggle(recipe.id)}
                className={`flex justify-between my-2 cursor-pointer rounded-lg px-2 py-2 transition gap-2
    ${isSelected ? "bg-gray-100" : ""}
  `}
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <Image
                    className="size-12 border border-gray-200 rounded-lg"
                    src={recipe.image}
                    width={48}
                    height={48}
                    alt="recipe image"
                  />

                  <div className="min-w-0">
                    <p className="font-medium truncate">{recipe.name}</p>

                    <div className="flex items-center text-gray-500">
                      <Clock className="size-3 mr-1" />
                      <p className="text-xs">{recipe.cookingTime} min</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center shrink-0">
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition
        ${isSelected ? "bg-gray-800 border-black" : "border-gray-400"}
      `}
                  >
                    {isSelected && <Check className="w-3 h-3 text-white" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-[0.5px] border-gray-200 w-full mt-2.5" />

        <div className="flex items-center justify-between">
          <p className="text-sm">0 selected</p>
          <button
            className="mt-4 rounded-md bg-black py-1.5 text-white px-6"
            onClick={onClose}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
