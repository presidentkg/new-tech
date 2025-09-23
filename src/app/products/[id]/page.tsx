import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./Page.module.css";
import StarReview from "@/components/StarReview/StarReviews";
import PriceTag from "@/components/PriceTag/PriceTag";
import Button from "@/components/Button/Button";
import AddToCartButton from "@/components/Button/AddToCartButton";

interface ProductPageProps {
  params: { id: string };
}

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();

  return data.products.map((product: { id: number }) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id);

  if (!product) {
    return notFound();
  }

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <div className={styles.imageWrapper}>
          {product.discountPercentage > 0 && (
            <div className={styles.saleBadge}>
              -{product.discountPercentage}%
            </div>
          )}
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={500}
            className={styles.image}
          />
        </div>

        <div className={styles.info}>
          <h2 className={styles.title}>{product.title}</h2>
          <PriceTag
            price={product.price}
            discountPercentage={product.discountPercentage}
          />
          <StarReview
            rating={product.rating}
            reviews={product.reviews.length}
          />

          <p className={`${styles.stock} ${product.stock > 0 ? styles.inStock : styles.outOfStock}`}>
            {product.stock > 0 ? "In stock" : "Out of stock"}
          </p>
          <div className={styles.details}>
            <h3>Product Description</h3>
            <p>{product.description}</p>
            <p>Estimated shipping: 2-5 days</p>
          </div>
          <AddToCartButton product={product}/>
        </div>
      </div>
    </div>
  );
}
