import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="font-bold text-xl lg:text-2xl">Meal plan</h1>
        <p className="text-sm text-gray-500">18 May - 23 May</p>
      </div>
      <div className="flex flex-row gap-8 items-center">
        <button className="border rounded-md border-gray-500 py-2 px-3 lg:py-2.5 lg:px-3.5">
          <ChevronLeft className="size-4  lg:size-6 text-gray-500" />
        </button>
        <p className="text-xs lg:text-sm">Week 4</p>
        <button className="border rounded-md border-gray-500 py-2 px-3 lg:py-2.5 lg:px-3.5">
          <ChevronRight className="size-4 lg:size-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
}
