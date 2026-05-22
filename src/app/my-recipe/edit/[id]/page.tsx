import { Plus } from "lucide-react";
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

export default function Page() {
  return (
    <div className="w-[92%] pt-6 md:w-[95%] lg:w-[92%] md:pt-10 mx-auto">
      <div className="flex flex-row gap-8 items-center justify-between">
        <button className="flex border rounded-md border-gray-500 py-2 px-3 lg:py-2.5 lg:px-3.5">
          <ArrowLeft className="size-4  lg:size-6 text-gray-500" />
          <p className="pl-2">Back</p>
        </button>
        <button className="flex border rounded-md border-gray-500 py-2 px-3 lg:py-2.5 lg:px-3.5">
          <Plus className="size-4  lg:size-6 text-gray-500" />
          <p className="pl-2">Add recipe</p>
        </button>
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
          </SectionWrapper>

          {/* Steps */}
          <SectionWrapper>
            <SectionTitle title="Steps" />
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
}
