import { Product } from "@/lib/utils/interface";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import StockStatus from "../StockStatus/StockStatus";
import Link from "next/link";
import StarReview from "../StarReview/StarReviews";
import Price from "../Price/Price";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className={styles.card}>
      <header className={styles.image}>
        <Image
          src={product.images[0]}
          alt={`${product.title} - ${product.brand}, ${product.category}`}
          width={200}
          height={200}
        />
        <div className={styles.saleBadge}>SALE!</div>
      </header>
      <section className={styles.content}>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <StarReview rating={product.rating} reviews={product.reviews.length} />
      </section>
      <Price product={product} />
      <StockStatus
        stock={product.stock}
        shippingInfo={product.shippingInformation}
      />
    </Link>
  );
}
