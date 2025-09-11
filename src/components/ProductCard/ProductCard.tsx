import { Product } from "@/lib/utils/interface";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import StockStatus from "../StockStatus/StockStatus";

export default function ProductCard({product} : {product: Product}) {
    const originalPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);
    const discount = (parseFloat(originalPrice) - product.price).toFixed(2);
    return (
        <section className={styles.card}>
            <div className={styles.image}>
                <Image
                    src={product.images[0]}
                    alt={"product image"}
                    width={150}
                    height={150}
                />
                <div className={styles.saleBadge}>SALE!</div>
            </div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className={styles.priceWrapper}>
                <p className={styles.price}>{product.price} :-</p>
                <div className={styles.pricingDetails}>
                    <p className={styles.save}>Save {discount} :-</p>
                    <p className={styles.originalPrice}>Original price: {originalPrice} :-</p> 
                </div>
            </div>
            <StockStatus stock={product.stock} />
        </section>
    )
}