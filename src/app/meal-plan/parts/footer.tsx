"use client";

import ButtonWithIcon from "@/src/components/ui/ButtonWithIcon";
import { ShoppingBasket } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="border-[0.5px] border-gray-200 w-full mt-2.5 mb-1.5" />
      <div className="flex justify-between">
        <p className="text-sm lg:text-base">30 recipes this week</p>
        <ButtonWithIcon
          name="Shopping list"
          icon={ShoppingBasket}
          onClick={() => {}}
          className="px-3 py-1 text-sm lg:text-sm lg:px-3.5 lg:py-1.5"
        />
      </div>
    </>
  );
}
