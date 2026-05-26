type Recipe = {
  id: number;
  name: string;
};

export type MealType = "breakfast" | "lunch" | "dinner" | "snack";

type MealSlot = {
  type: MealType;
  recipes: Recipe[];
};

type Meal = {
  meals: MealSlot[];
};

export const meals: Meal[] = [
  // Mon to Sun
  {
    meals: [
      {
        type: "breakfast",
        recipes: [
          {
            id: 1,
            name: "Grilled salmonaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          },
          { id: 2, name: "Rice" },
        ],
      },
      { type: "lunch", recipes: [{ id: 3, name: "Steamed veggie salad" }] },
      {
        type: "dinner",
        recipes: [
          { id: 4, name: "Ginger pork" },
          { id: 5, name: "Rice" },
        ],
      },
      { type: "snack", recipes: [{ id: 6, name: "Protein ball" }] },
    ],
  },
  {
    meals: [
      { type: "breakfast", recipes: [{ id: 7, name: "Avocado toast" }] },
      { type: "lunch", recipes: [] },
      { type: "dinner", recipes: [{ id: 8, name: "Chicken curry" }] },
      { type: "snack", recipes: [] },
    ],
  },
  {
    meals: [
      {
        type: "breakfast",
        recipes: [
          { id: 1, name: "Grilled salmon" },
          { id: 2, name: "Rice" },
        ],
      },
      { type: "lunch", recipes: [{ id: 3, name: "Steamed veggie salad" }] },
      {
        type: "dinner",
        recipes: [
          { id: 4, name: "Ginger pork" },
          { id: 5, name: "Rice" },
        ],
      },
      { type: "snack", recipes: [{ id: 6, name: "Protein ball" }] },
    ],
  },
  {
    meals: [
      {
        type: "breakfast",
        recipes: [
          { id: 1, name: "Grilled salmon" },
          { id: 2, name: "Rice" },
        ],
      },
      { type: "lunch", recipes: [{ id: 3, name: "Steamed veggie salad" }] },
      {
        type: "dinner",
        recipes: [
          { id: 4, name: "Ginger pork" },
          { id: 5, name: "Rice" },
        ],
      },
      { type: "snack", recipes: [{ id: 6, name: "Protein ball" }] },
    ],
  },
  {
    meals: [
      { type: "breakfast", recipes: [{ id: 7, name: "Avocado toast" }] },
      { type: "lunch", recipes: [] },
      { type: "dinner", recipes: [{ id: 8, name: "Chicken curry" }] },
      { type: "snack", recipes: [] },
    ],
  },
  {
    meals: [
      {
        type: "breakfast",
        recipes: [
          { id: 1, name: "Grilled salmon" },
          { id: 2, name: "Rice" },
        ],
      },
      { type: "lunch", recipes: [{ id: 3, name: "Steamed veggie salad" }] },
      {
        type: "dinner",
        recipes: [
          { id: 4, name: "Ginger pork" },
          { id: 5, name: "Rice" },
        ],
      },
      { type: "snack", recipes: [{ id: 6, name: "Protein ball" }] },
    ],
  },
  {
    meals: [
      { type: "breakfast", recipes: [{ id: 7, name: "Avocado toast" }] },
      { type: "lunch", recipes: [] },
      { type: "dinner", recipes: [{ id: 8, name: "Chicken curry" }] },
      { type: "snack", recipes: [] },
    ],
  },
];
