import { Product } from "@/lib/utils/interface";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import StockStatus from "../StockStatus/StockStatus";
import Link from "next/link";

export default function ProductCard({product} : {product: Product}) {
    const originalPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);
    const discount = (parseFloat(originalPrice) - product.price).toFixed(2);
    return (
        <Link href={`/products/${product.id}`} className={styles.card}>
            <header className={styles.image}>
                <Image
                    src={product.images[0]}
                    alt={"product image"}
                    width={150}
                    height={150}
                />
                <div className={styles.saleBadge}>SALE!</div>
            </header>
            <section>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </section>
            <footer className={styles.priceWrapper}>
                <p className={styles.price}>{product.price} :-</p>
                <div className={styles.pricingDetails}>
                    <p className={styles.save}>Save {discount} :-</p>
                    <p className={styles.originalPrice}>Original price: {originalPrice} :-</p> 
                </div>
            </footer>
            <StockStatus stock={product.stock} />
        </Link>
    )
}