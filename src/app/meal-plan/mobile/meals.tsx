"use client";

import { useState } from "react";
import { X, Plus } from "lucide-react";
import AddRecipeModal from "../../components/modal/AddRecipeModal";

type Recipe = {
  id: number;
  name: string;
};

type Meal = {
  type: "breakfast" | "lunch" | "dinner" | "snack";
  recipes: Recipe[];
};

const meals: Meal[] = [
  {
    type: "breakfast",
    recipes: [
      {
        id: 1,
        name: "Grilled salmonaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      },
      { id: 2, name: "Rice" },
    ],
  },
  {
    type: "lunch",
    recipes: [{ id: 3, name: "Steamed veggie salad" }],
  },
  {
    type: "dinner",
    recipes: [
      { id: 4, name: "Ginger pork" },
      { id: 5, name: "Rice" },
    ],
  },
  {
    type: "snack",
    recipes: [{ id: 6, name: "Protein ball" }],
  },
];

const mealColors = {
  breakfast: {
    dot: "bg-amber-300",
    text: "text-amber-600",
    bg: "bg-amber-300/20",
    border: "border-amber-300",
    icon: "text-amber-500",
  },
  lunch: {
    dot: "bg-green-300",
    text: "text-green-700",
    bg: "bg-green-300/20",
    border: "border-green-300",
    icon: "text-green-500",
  },
  dinner: {
    dot: "bg-blue-300",
    text: "text-blue-600",
    bg: "bg-blue-300/20",
    border: "border-blue-300",
    icon: "text-blue-500",
  },
  snack: {
    dot: "bg-pink-300",
    text: "text-pink-500",
    bg: "bg-pink-300/20",
    border: "border-pink-300",
    icon: "text-pink-500",
  },
};

export default function Meals() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="pt-2">
      <div className="flex flex-col">
        {meals.map((meal) => {
          const colors = mealColors[meal.type];

          return (
            <div
              className="w-full bg-white px-2.5 py-2 rounded-md mt-3 border-gray-200"
              key={meal.type}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`inline-block w-2 h-2 rounded-full ${colors.dot}`}
                />
                <h2 className="text-md font-bold capitalize">{meal.type}</h2>
              </div>

              <div className="flex flex-col gap-1.5 mt-1">
                {meal.recipes.map((recipe) => {
                  return (
                    <div className="flex" key={recipe.id}>
                      <div
                        className={`w-full flex justify-between ${colors.bg} border ${colors.border} rounded-md py-1 px-2.5`}
                      >
                        <p className={`truncate min-w-0 ${colors.text}`}>
                          {recipe.name}
                        </p>
                        <button>
                          <X className="text-gray-400 size-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
                <div className="flex">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="w-full flex border items-center justify-center border-gray-200 rounded-md py-1 px-1.5"
                  >
                    <Plus className="size-4 text-gray-500 mr-1.5" />
                    <p>Add recipe</p>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <AddRecipeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
