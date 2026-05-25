export type ShoppingItem = {
  id: number;
  name: string;
  amount: string;
  unit: string;
  checked: boolean;
  source: "manual" | "auto";
};

export const shoppingItems: ShoppingItem[] = [
  {
    id: 1,
    name: "Broccoliaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    amount: "1",
    unit: "piece",
    checked: false,
    source: "manual",
  },
  {
    id: 2,
    name: "Butterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
    amount: "50",
    unit: "g",
    checked: true,
    source: "manual",
  },
  {
    id: 3,
    name: "Chicken thigh",
    amount: "500",
    unit: "g",
    checked: false,
    source: "manual",
  },
  {
    id: 4,
    name: "Eggs",
    amount: "6",
    unit: "piece",
    checked: false,
    source: "manual",
  },
  {
    id: 5,
    name: "Garlic",
    amount: "4",
    unit: "clove",
    checked: true,
    source: "manual",
  },
  {
    id: 6,
    name: "Lemon",
    amount: "2",
    unit: "piece",
    checked: false,
    source: "auto",
  },
  {
    id: 7,
    name: "Olive oil",
    amount: "4",
    unit: "tbsp",
    checked: false,
    source: "auto",
  },
  {
    id: 8,
    name: "Onion",
    amount: "3",
    unit: "piece",
    checked: false,
    source: "auto",
  },
  {
    id: 9,
    name: "Salmon fillet",
    amount: "4",
    unit: "piece",
    checked: false,
    source: "auto",
  },
  {
    id: 10,
    name: "Soy sauce",
    amount: "3",
    unit: "tbsp",
    checked: false,
    source: "auto",
  },
  {
    id: 11,
    name: "Hummus",
    amount: "1",
    unit: "pack",
    checked: false,
    source: "auto",
  },
  {
    id: 12,
    name: "Yogurt",
    amount: "2",
    unit: "cup",
    checked: false,
    source: "auto",
  },
];
