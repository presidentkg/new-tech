"use client";

import { CartItem } from "@/lib/utils/interface";
import { CartContextType } from "@/lib/utils/types";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext<CartContextType>({
  cart: [],
  totalQuantity: 0,
  setCart: () => {},
});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) { 
  const [cart, setCart] = useState<CartItem[]>([]);
  
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  const totalQuantity = cart.reduce(
    (total, product) => total + (product.quantity || 0),
    0
  );

  return (
    <CartContext.Provider value={{ cart, totalQuantity, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
