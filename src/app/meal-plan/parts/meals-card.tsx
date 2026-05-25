"use client";

import { useState } from "react";
import { X, Plus } from "lucide-react";
import AddRecipeModal from "../../../components/meal-plan/AddRecipeModal";
import { meals } from "../../../mocks/meals";
import { mealColors } from "../../../mocks/meal-colors";
import ButtonWithLeftIcon from "@/src/components/ui/ButtonWithIcon";

export default function MealsCard({ dayIndex }: { dayIndex: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const mealsToday = meals[0].meals;
  return (
    <section className="pt-2">
      <div className="flex flex-col">
        {mealsToday.map((meal) => {
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
                        className={`w-full flex justify-between ${colors.bg} border ${colors.border} rounded-md py-0.5 px-2.5`}
                      >
                        <p className={`truncate min-w-0 ${colors.text}`}>
                          {recipe.name}
                        </p>
                        <button>
                          <X className={`${colors.icon} size-4`} />
                        </button>
                      </div>
                    </div>
                  );
                })}
                <div className="flex">
                  <ButtonWithLeftIcon
                    name="Add recipe"
                    icon={Plus}
                    variant="secondary"
                    onClick={() => setIsOpen(true)}
                    className="border-dashed w-full justify-center"
                    size="medium"
                  />
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
