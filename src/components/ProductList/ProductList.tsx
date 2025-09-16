"use client";

import Image from "next/image";
import { Product } from "@/lib/utils/interface";
import styles from "./ProductList.module.css";
import Link from "next/link";
import StarReview from "../StarReview/StarReviews";
import StockStatus from "../StockStatus/StockStatus";
import Price from "../Price/Price";

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  return (
    <ul className={styles.productList}>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>
            <article className={styles.product}>
              {product.discountPercentage > 0 && (
                <div className={styles.saleBadge}>
                  -{product.discountPercentage}%
                </div>
              )}
              <div className={styles.image}>
                <Image
                  src={product.images[0]}
                  alt={"product image"}
                  width={150}
                  height={150}
                />
              </div>
              <div className={styles.detailsWrapper}>
                <section className={styles.details}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <StarReview rating={product.rating} reviews={product.reviews.length} />
                  <StockStatus stock={product.stock} shippingInfo={product.shippingInformation}/>
                </section>
              </div>
              <div className={styles.price}>
                <Price product={product} />
              </div>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}
