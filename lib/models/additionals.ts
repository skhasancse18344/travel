import { AdditionalItem } from "lib/types";

export interface AdditionalInterface {
  item: AdditionalItem;
  title: string;
  device?: string;
  receive: string[];
  price: number;
  hasCharge?: boolean;
}

export const additionalsData: AdditionalInterface[] = [
  {
    item: AdditionalItem.Balloon,
    title: "Balloon",
    receive: ["1 Balloon"],
    price: 10_000,
  },
  {
    item: AdditionalItem.Flare,
    title: "Smoke Bomb",
    receive: ["1 Smoke Bomb"],
    price: 15_000,
  },
  {
    item: AdditionalItem.Happy,
    title: "Happy Documentation Package",
    device: "Camera iPhone 3 Lens",
    receive: ["Video Reels", "Bonus Photo"],
    price: 350_000,
  },
  {
    item: AdditionalItem.Vacation,
    title: "Vacation Documentation Package",
    device: "Camera Profesional",
    receive: ["1 Min Video", "100 Edited Photo"],
    price: 600_000,
  },
  {
    item: AdditionalItem.Holiday,
    title: "Holiday Documentation Packag",
    device: "Camera iPhone + Drone",
    receive: ["1 Min Video", "100 Edited Photo"],
    price: 900_000,
  },
  {
    item: AdditionalItem.Corporate,
    title: "Corporate Documentation Package",
    device: "Camera Profesional",
    receive: ["1-3 Min Video", "50-100 Edited Photo"],
    price: 1_000_000,
  },
  {
    item: AdditionalItem.Vip,
    title: "VIP Documentation Package",
    device: "Camera Profesional + Drone",
    receive: ["1-8 Min Video", "Unlimited Photo"],
    price: 1_500_000,
    hasCharge: true,
  },
];
