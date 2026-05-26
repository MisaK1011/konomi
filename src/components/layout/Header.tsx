"use client";

import { Soup } from "lucide-react";
import Nav from "./Nav";
import { useNav } from "@/src/hooks/useNav";

export default function Header() {
  const { isHome } = useNav();

  return (
    <header className="flex justify-between px-1.5 py-2 md:px-5 md:py-4 bg-white">
      <h1 className="text-md font-bold flex md:text-base">
        <Soup className="mr-2" /> Konomi
      </h1>

      {!isHome && <Nav />}
    </header>
  );
}
