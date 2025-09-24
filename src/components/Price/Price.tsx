import { Product } from "@/lib/utils/interface";
import styles from "./Price.module.css";

export default function Price({ product }: { product: Product }) {
  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);
  const discount = (parseFloat(originalPrice) - product.price).toFixed(2);
  return (
    <section className={styles.priceWrapper}>
      <span className={styles.price}>{product.price} :-</span>
      <div className={styles.pricingDetails}>
        <p className={styles.save}>Save {discount} :-</p>
        <span className={styles.originalPrice}>
          Original price: {originalPrice} :-
        </span>
      </div>
    </section>
  );
}
