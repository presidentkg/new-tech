import { Product } from "@/lib/utils/interface";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import StockStatus from "../StockStatus/StockStatus";
import Link from "next/link";
import StarReview from "../StarReview/StarReviews";
import Price from "../Price/Price";

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
            <Price product={product} />
            <StockStatus stock={product.stock} shippingInfo={product.shippingInformation} />
        </Link>
    )
}