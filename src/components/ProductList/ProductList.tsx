"use client";
import Image from "next/image";
import { Product } from "@/lib/utils/interface";
import styles from "./ProductList.module.css";
import Link from "next/link";

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  return (
    <div>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <article className={styles.product}>
                <div className={styles.image}>
                  <Image
                    src={product.images[0]}
                    alt={"product image"}
                    width={150}
                    height={150}
                  />
                </div>
                <div className={styles.detailsWrapper}>
                  <div className={styles.details}>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                  <p className={styles.price}>{product.price}</p>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
