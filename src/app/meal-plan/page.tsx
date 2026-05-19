import MealsTable from "./parts/meals-table";
import DayPanel from "./parts/day-panel";
import Footer from "./parts/footer";
import Header from "./parts/header";
import Indicator from "./parts/indicator";
import MealsCard from "./parts/meals-card";

export default function Page() {
  return (
    <div>
      {/* display size ~md */}
      <div className="md:hidden">
        <div className="mx-auto w-[92%] pt-6">
          <Header />
          <Indicator />
          <DayPanel />
          <MealsCard dayIndex={1} />
          <Footer />
        </div>
      </div>
      {/* display size md~ */}
      <div className="hidden md:block">
        <div className="mx-auto md:w-[95%] lg:w-[92%] pt-10">
          <Header />
          <Indicator />
          <MealsTable />
          <Footer />
        </div>
      </div>
    </div>
  );
}
