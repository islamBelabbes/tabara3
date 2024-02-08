import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
