"use client";

import styles from "./PriceTag.module.css";

interface PriceTagProps {
  price: number;
  discountPercentage: number;
}

export default function PriceTag({ price, discountPercentage }: PriceTagProps) {
  const oldPrice = (price / (1 - discountPercentage / 100)).toFixed(2);
  const newPrice = price.toFixed(2);

  return (
    <div className={styles.priceTag}>
      {discountPercentage > 0 && (
        <span className={styles.oldPrice}>${oldPrice}</span>
      )}
      <span className={styles.newPrice}>${newPrice}</span>
      {discountPercentage > 0 && (
        <span className={styles.discount}>-{discountPercentage}%</span>
      )}
    </div>
  );
}
