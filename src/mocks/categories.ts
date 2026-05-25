type Category = {
  id: number;
  name: string;
  image: string;
  slug: string;
};

export const categories: Category[] = [
  {
    id: 1,
    name: "Japanese",
    slug: "japanese",
    image: "/categories/japanese.jpg",
  },
  {
    id: 2,
    name: "Italian",
    slug: "italian",
    image: "/categories/italian.jpg",
  },
  {
    id: 3,
    name: "Chinese",
    slug: "chinese",
    image: "/categories/chinese.jpg",
  },
  {
    id: 4,
    name: "Korean",
    slug: "korean",
    image: "/categories/korean.jpg",
  },
  {
    id: 5,
    name: "Fast & Easy",
    slug: "easy",
    image: "/categories/easy.jpg",
  },
  {
    id: 6,
    name: "Healthy",
    slug: "healthy",
    image: "/categories/healthy.jpg",
  },
  {
    id: 7,
    name: "Vegetarian",
    slug: "vegetarian",
    image: "/categories/vegetarian.jpg",
  },
  {
    id: 8,
    name: "Dessert",
    slug: "dessert",
    image: "/categories/dessert.jpg",
  },
];
