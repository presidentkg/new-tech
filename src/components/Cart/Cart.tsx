"use client"
import React, { useState, useEffect } from "react";
import { CartItem as CartItemType } from "@/lib/utils/interface";
import CartItem from './CartItem';
import styles from './Cart.module.css';

export default function Cart(){
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart)
            setCartItems(JSON.parse(storedCart));
    }, []);

    const totalOriginalPrice = cartItems.reduce((sum, item) => {
        return sum + ((item.price / (1 - item.discountPercentage / 100)) * item.quantity)
    }, 0);

    const totalPrice = cartItems.reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);

    const totalDiscount = totalOriginalPrice - totalPrice;

    const handleUpdateQuantity = (id: number, newQuantity: number) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id)
                return { ...item, quantity: newQuantity };
            return item;
        })
        setCartItems(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const handleRemoveItem = (id : number) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }


    return(
        <div className={styles.cart}>
            <section className={styles.items}>
                <h1>Your cart</h1>
                <div className={`${styles.cartGrid} ${styles.categories}`}>
                    <p></p>
                    <p></p>
                    <p>Amount</p>
                    <p>Price</p>
                    <p>Total price</p>
                    <p>Remove</p>
                </div>
                {cartItems.length > 0 ? (
                    cartItems.map((item : CartItemType) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            updateQuantity={handleUpdateQuantity}
                            removeItem={handleRemoveItem}
                        />
                    ))
                ) : (
                    <p>Your cart is empty</p>
                )}
            </section>
            <section className={styles.checkout}>
                <div className={styles.checkoutWrapper}>
                    <div className={styles.priceWrapper}>
                        <p>Subtotal:</p>
                        <p>{totalOriginalPrice.toFixed(2)}</p>
                    </div>
                    <div className={styles.priceWrapper}>
                        <p>Total discount:</p>
                        <p>-{totalDiscount.toFixed(2)}</p>
                    </div>
                    <div className={`${styles.priceWrapper} ${styles.totalPrice}`}>
                        <h2>Total:</h2>
                        <h2>{totalPrice.toFixed(2)}</h2>
                    </div>
                    <button className={styles.btnCheckout}>
                        Go to checkout
                    </button>
                </div>
            </section>
        </div>
    )
}