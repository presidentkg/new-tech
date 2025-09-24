"use client";

import { CartContext } from "@/app/cart-provider";
import styles from "./Button.module.css";
import { Product, CartItem } from "@/lib/utils/interface";
import { useContext } from "react";

export default function AddToCartButton({ product }: { product: Product }) {
  const { setCart } = useContext(CartContext);

  const handleClick = () => {
    let currentCart: CartItem[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    const cartItem = currentCart.find(
      (item: CartItem) => item.id === product.id
    );

    try {
      if (cartItem) {
        if (cartItem.quantity < product.stock) {
          cartItem.quantity += 1;
          alert(
            `You have added one more ${cartItem.title} to the cart (${cartItem.quantity} in your cart now)`
          );
        } else alert(`You can't add more ${cartItem.title} to the cart`);
      } else {
        const newCartItem: CartItem = { ...product, quantity: 1 };
        currentCart = [...currentCart, newCartItem];
        alert(`You have added ${newCartItem.title} to the cart`);
      }
      localStorage.setItem("cart", JSON.stringify(currentCart));
      setCart(currentCart);
    } catch {
      alert(`Could not add ${product.title} to the cart`);
    }
  };

  return (
    <button
      className={styles.addToCartButton}
      onClick={handleClick}
      disabled={product.stock === 0}
    >
      {product.stock > 0 ? "Add to Cart" : "Out of Stock!"}
    </button>
  );
}
