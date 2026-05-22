import Tag from "@/src/components/ui/Tag";
import { recipes } from "@/src/mocks/recipes";
import { Clock, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex justify-between w-[92%] pt-6 md:w-[95%] lg:w-[92%] md:pt-10 mx-auto">
        <div>
          <h1 className="font-bold text-xl lg:text-2xl">My recipe</h1>
          <p className="text-sm text-gray-500">16 recipes</p>
        </div>
        <button className="flex border border-gray-900 bg-black rounded-lg text-xs text-white items-center px-3 py-1 lg:text-sm lg:px-3.5 lg:py-1.5">
          <Pencil className="mr-2 size-5 text-gray-200" />
          Add recipe
        </button>
      </div>
      <div className="grid grid-cols-2 gap-px md:grid-cols-4 md:w-[95%] pt-4 lg:w-[92%] md:mx-auto">
        {recipes.map((recipe) => {
          return (
            <Link
              href={`my-recipe/edit/1234`}
              key={recipe.id}
              className="bg-mist-50"
            >
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image
                  src="https://placehold.co/1200x800/png"
                  //   src="/mock/potato.png"
                  alt={`picture of ${recipe.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="px-4 py-3">
                <p className="truncate w-min-0">{recipe.name}</p>

                {/* Time */}
                <div className="flex items-center text-gray-500">
                  <Clock className="size-3 mr-1" />
                  <p className="text-xs">
                    Prep:{recipe.cookingTime} min Cook:{recipe.cookingTime} min
                  </p>
                </div>

                {/* tag */}
                <div className="mt-1">
                  <Tag />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
