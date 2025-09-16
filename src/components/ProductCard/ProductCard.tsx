import { Product } from "@/lib/utils/interface";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import StockStatus from "../StockStatus/StockStatus";
import Link from "next/link";
import StarReview from "../StarReview/StarReviews";

export default function ProductCard({product} : {product: Product}) {
    const originalPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);
    const discount = (parseFloat(originalPrice) - product.price).toFixed(2);
    return (
        <Link href={`/products/${product.id}`} className={styles.card}>
            <header className={styles.image}>
                <Image
                    src={product.images[0]}
                    alt={"product image"}
                    width={200}
                    height={200}
                />
                <div className={styles.saleBadge}>SALE!</div>
            </header>
            <section className={styles.content}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <StarReview rating={product.rating} reviews={product.reviews.length} />
            </section>
            <footer className={styles.priceWrapper}>
                <span className={styles.price}>{product.price} :-</span>
                <div className={styles.pricingDetails}>
                    <p className={styles.save}>Save {discount} :-</p>
                    <span className={styles.originalPrice}>Original price: {originalPrice} :-</span> 
                </div>
            </footer>
            <StockStatus stock={product.stock} />
        </Link>
    )
}