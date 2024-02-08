import { dataToDonate } from "@/constants";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { TDataToDonate } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tryCatch = async <T>(Promise: Promise<T>) => {
  try {
    const data: any = await Promise;
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};

type TGetProductToDonate = (id: number) => TDataToDonate | null;
export const getProductToDonate: TGetProductToDonate = (id) => {
  const product = dataToDonate.find((item) => item.id === id);

  if (!product) return null;

  return product;
};
