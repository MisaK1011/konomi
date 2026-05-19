import { ShoppingBasket } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="border-[0.5px] border-gray-200 w-full mt-2.5 mb-1.5" />
      <div className="flex justify-between">
        <p className="text-xs lg:text-sm">30 recipes this week</p>
        <button className="flex border border-gray-900 bg-black rounded-lg text-xs text-white items-center px-3 py-1 lg:text-sm lg:px-3.5 lg:py-1.5">
          <ShoppingBasket className="mr-2 size-5 text-gray-500" />
          Weekly Shopping list
        </button>
      </div>
    </>
  );
}
