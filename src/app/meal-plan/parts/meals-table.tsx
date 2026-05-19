import { Plus, X } from "lucide-react";
import { days } from "@/src/mocks/days";
import { meals, MealType } from "@/src/mocks/meals";
import { mealColors } from "@/src/mocks/meal-colors";

const todayIndex = 1;

export default function MealsTable() {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr>
              <th className="w-16 pb-2" />
              {days.map((day, i) => (
                <th
                  key={i}
                  className="pb-2 text-center text-xs lg:text-sm font-medium border-b border-gray-200"
                >
                  <span className="block text-sm lg:text-md font-semibold">
                    {day.d}
                  </span>
                  <span className="block text-[10px] lg:text-[12px] font-normal">
                    {day.dt}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {(["breakfast", "lunch", "dinner", "snack"] as MealType[]).map(
              (mealType) => {
                const mealColor = mealColors[mealType];
                return (
                  <tr key={mealType}>
                    <td className="pr-3 py-2 text-right align-top border-r border-gray-300">
                      <span className="text-xs font-semibold text-gray-500 capitalize">
                        {mealType}
                      </span>
                    </td>

                    {meals.map((day, dayIndex) => {
                      const slot = day.meals.find((m) => m.type === mealType);
                      const recipes = slot?.recipes ?? [];
                      const isToday = dayIndex === todayIndex;
                      return (
                        <td
                          key={dayIndex}
                          className={`p-1.5 align-top border border-gray-200 ${isToday ? "bg-mist-50" : ""}`}
                        >
                          <div className="flex flex-col gap-1 min-h-8">
                            {recipes.map((recipe) => (
                              <div
                                key={recipe.id}
                                className={`flex items-center justify-between gap-1 px-1.5 py-1 rounded-md border text-[11px] lg:text-[12px] ${mealColor.bg} ${mealColor.text} ${mealColor.border}`}
                              >
                                <span className="truncate min-w-0 flex-1">
                                  {recipe.name}
                                </span>
                                <button>
                                  <X className={`size-3 ${mealColor.icon}`} />
                                </button>
                              </div>
                            ))}
                            <button className="flex items-center justify-center w-full min-h-7 border border-dashed border-gray-300 rounded-md text-gray-300 hover:border-gray-400 transition-colors">
                              <Plus className="size-3" />
                            </button>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
