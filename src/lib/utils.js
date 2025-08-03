import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//cn = classname. The function uses tailwind merge
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
