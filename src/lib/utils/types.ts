import { CartItem } from "./interface";

export type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type ProductCategory = "iphone" | "tablet" | "laptop";

export type CartContextType = {
  cart: CartItem[];
  totalQuantity: number;
  setCart: (cart: CartItem[]) => void;
};
