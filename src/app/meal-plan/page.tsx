import DayPanel from "./mobile/day-panel";
import Footer from "./mobile/footer";
import Header from "./mobile/header";
import Indicator from "./mobile/indicator";
import Meals from "./mobile/meals";

export default function Page() {
  return (
    <div>
      {/* display size ~md */}
      <div className="md:hidden">
        <div className="mx-auto w-[92%] pt-6">
          <Header />
          <Indicator />
          <DayPanel />
          <Meals />
          <Footer />
        </div>
      </div>
    </div>
  );
}
