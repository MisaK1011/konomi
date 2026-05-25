"use client";

import { useState } from "react";
import { Pencil, Plus } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import Divider from "@/src/components/ui/Divider";
import Textarea from "@/src/components/form/Textarea";
import TextInput from "@/src/components/form/TextInput";
import Select from "@/src/components/form/Select";
import { categories } from "@/src/mocks/category";
import SectionTitle from "@/src/components/my-recipe/SectionTitle";
import SectionWrapper from "@/src/components/my-recipe/SectionWrapper";
import FileInput from "@/src/components/form/FileInput";
import FormWrapper from "@/src/components/my-recipe/FormWrapper";
import { units } from "@/src/mocks/units";
import ButtonWithLeftIcon from "@/src/components/ui/ButtonWithIcon";
import BackButton from "../ui/BackButton";
import { PATHS } from "@/src/constants/paths";

type Ingredient = {
  name: string;
  quantity: string;
  unit: string;
};

type Step = {
  text: string;
};

export default function RecipeForm({ mode }: { mode: "add" | "edit" }) {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { name: "", quantity: "", unit: "" },
  ]);

  const [steps, setSteps] = useState<Step[]>([{ text: "" }]);

  const addIngredient = () => {
    if (ingredients.length > 30) return;
    setIngredients((prev) => [...prev, { name: "", quantity: "", unit: "" }]);
  };

  const addStep = () => {
    if (steps.length > 15) return;
    setSteps((prev) => [...prev, { text: "" }]);
  };

  return (
    <div className="w-[92%] pt-6 md:w-[95%] lg:w-[92%] md:pt-10 mx-auto">
      <div className="flex flex-row gap-8 items-center justify-between">
        <BackButton path={PATHS.myRecipe} />
        <ButtonWithLeftIcon
          name={mode === "add" ? "Add recipe" : "Save changes"}
          icon={mode === "add" ? Plus : Pencil}
          onClick={() => {}}
        />
      </div>

      <div className="mt-2.5 mb-1.5">
        <Divider />
      </div>

      <div className="flex justify-between mt-4">
        <h1 className="font-bold text-xl lg:text-2xl">New recipe</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mt-4">
        <div className="space-y-6">
          {/* Basic Info */}
          <SectionWrapper>
            <SectionTitle title="Basic Info" />
            {/* Recipe name */}
            {/* TODO:length */}
            <FormWrapper>
              <TextInput
                id="description"
                type="text"
                name="Recipe name"
                placeholder="Grilled salmon with lemon"
                isRequired
              />
            </FormWrapper>

            {/* Description */}
            <FormWrapper>
              <Textarea
                id="description"
                name="Description"
                placeholder="A simple and delicious grilled salmon with fresh lemon and herbs."
              ></Textarea>
            </FormWrapper>

            <div className="grid grid-cols-2 items-center gap-3 mt-3">
              <Select
                id="category"
                name="Category"
                value=""
                options={categories.map((category) => ({
                  label: category.name,
                  value: category.slug,
                }))}
              />
              <div>
                <TextInput
                  id="servings"
                  type="text"
                  name="Servings"
                  placeholder="2"
                />
              </div>
              <div>
                <TextInput
                  id="prep-time"
                  type="text"
                  name="Prep time(min)"
                  placeholder="10"
                />
              </div>
              <div>
                <TextInput
                  id="cook-time"
                  type="text"
                  name="Cook time(min)"
                  placeholder="2"
                />
              </div>
            </div>
          </SectionWrapper>

          {/* Cover image */}
          <SectionWrapper>
            <SectionTitle title="Cover Image" />
            <FileInput />
          </SectionWrapper>

          {/* Additional Information */}
          <SectionWrapper>
            <SectionTitle title="Additional Information" />
            <FormWrapper>
              {/* Nutrition */}
              <Textarea
                id="nutrition"
                name="Nutrition"
                placeholder="Approx. 420 kcal per serving, 30g protein, 25g fat."
              ></Textarea>
            </FormWrapper>

            {/* Notes */}
            <FormWrapper>
              <Textarea
                id="notes"
                name="Notes"
                placeholder="Optional: add herbs like dill or parsley for extra flavor."
              ></Textarea>
            </FormWrapper>
          </SectionWrapper>
        </div>

        <div className="space-y-6">
          {/* Ingredients */}
          <SectionWrapper>
            <SectionTitle title="Ingredients" />
            {ingredients.map((ingredient, index) => (
              <FormWrapper key={index} className="grid grid-cols-3 gap-3">
                {/* Name */}
                <TextInput
                  id={`ingredient-name-${index}`}
                  type="text"
                  name="Name"
                  placeholder="Salmon"
                />

                {/* Quantity */}
                <TextInput
                  id={`quantity-${index}`}
                  type="number"
                  name="Quantity"
                  placeholder="2"
                />

                {/* Unit */}
                <Select
                  id={`unit-${index}`}
                  name="Unit"
                  value=""
                  options={units.map((unit) => ({
                    label: unit.value,
                    value: unit.value,
                  }))}
                />
              </FormWrapper>
            ))}
            <button className="border border-gray-300 px-3 py-2 rounded-lg mt-2">
              <Plus
                className="size-4 text-gray-400"
                onClick={() => addIngredient()}
              />
            </button>
          </SectionWrapper>
          {/* Steps */}
          <SectionWrapper>
            <SectionTitle title="Steps" />
            <FormWrapper className="grid grid-cols-3 gap-3">
              {steps.map((step, index) => (
                <div key={index} className="grid gap-2">
                  <span className="inline-flex items-center justify-center bg-gray-800 text-gray-100 rounded-full size-6 text-sm">
                    {index + 1}
                  </span>
                  <FileInput />
                  <Textarea
                    id={`text-${index}`}
                    name="Text"
                    placeholder={
                      index === 0
                        ? "Pat dry the salmon fillet and season both sides with salt, pepper, and olive oil."
                        : ""
                    }
                    showLabel={false}
                  />
                </div>
              ))}
            </FormWrapper>
            <button className="border border-gray-300 px-3 py-2 rounded-lg mt-2">
              <Plus
                className="size-4 text-gray-400"
                onClick={() => addStep()}
              />
            </button>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
}
