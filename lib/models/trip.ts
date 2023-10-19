import { TripCategory } from "lib/types";

export interface TripInterface {
  category: TripCategory;
  image: string;
  title: string;
  description: string;
  duration: number;
  totalDestination: number;
  price: number;
}

export const tripData: TripInterface[] = [
  {
    category: TripCategory.Short,
    image: "short.webp",
    title: "Short Trip",
    description:
      "Tour the villages around Borobudur and visit 2 photo spot tourist destinations with a duration of around 2 hours.",
    duration: 2,
    totalDestination: 2,
    price: 400_000,
  },
  {
    category: TripCategory.Medium,
    image: "medium.webp",
    title: "Medium Trip",
    description:
      "Tour the villages around Borobudur and visit 3 choices of tourist destinations + photo spots with a duration of around 3 hours.",
    duration: 3,
    totalDestination: 3,
    price: 550_000,
  },
  {
    category: TripCategory.Long,
    image: "long.webp",
    title: "Long Trip",
    description:
      "Tour the villages around Borobudur and visit 4 tourist destinations + photo spots with a duration of around 4 hours.",
    duration: 4,
    totalDestination: 4,
    price: 700_000,
  },
  {
    category: TripCategory.OneDay,
    image: "one-day.webp",
    title: "One Day",
    description:
      "Tour the villages around Borobudur and visit 5 choices of tourist destinations + lunch + photo spot with a duration of around 9 hours.",
    duration: 8,
    totalDestination: 5,
    price: 1_200_000,
  },
  {
    category: TripCategory.Sunrise1,
    image: "sunrise1.webp",
    title: "Sunrise 1",
    description:
      "Enjoy the beauty of the sunrise at Punthuk Setumbu and visit 1 choice of other tourist destinations + photo spots with a duration of around 4 hours or a maximum of 8 o'clock.",
    duration: 3,
    totalDestination: 1,
    price: 600_000,
  },
  {
    category: TripCategory.Sunrise2,
    image: "sunrise2.webp",
    title: "Sunrise 2",
    description:
      "Enjoy the beauty of the sunrise at Enam Langit and visit 1 choice of other tourist destinations + photo spot with a duration of around 4 hours or a maximum of 8 o'clock",
    duration: 3,
    totalDestination: 1,
    price: 650_000,
  },
];
