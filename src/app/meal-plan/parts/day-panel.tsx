import { days } from "@/src/mocks/days";

export default function DayPanel() {
  const activeDay = 1;

  return (
    <section className="flex gap-2 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]">
      {days.map((day, i) => {
        const isActive = i === activeDay;

        return (
          <button
            key={i}
            className={`
                shrink-0 flex flex-col items-center gap-0.5
                px-3 py-2 rounded-lg border min-w-12
                ${
                  isActive
                    ? "bg-gray-900 border-gray-900"
                    : "border-gray-200 bg-white"
                }
              `}
          >
            <span
              className={`text-xs font-medium ${
                isActive ? "text-white" : "text-gray-500"
              }`}
            >
              {day.d}
            </span>
            <span
              className={`text-[10px] ${
                isActive ? "text-gray-300" : "text-gray-400"
              }`}
            >
              {day.dt}
            </span>
          </button>
        );
      })}
    </section>
  );
}
