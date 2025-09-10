import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./Page.module.css";

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
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={500}
            className={styles.image}
          />
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.stock}>
            {product.stock > 0 ? "In stock" : "Out of stock"}
          </p>
          <button className={styles.buyButton}>Add to Cart</button>
        </div>
      </div>

      <div className={styles.details}>
        <h2>Product Description</h2>
        <p>{product.description}</p>
        <p>Rating: {product.rating}</p>
        <p>Estimated shipping: 2-5 days</p>
      </div>
    </div>
  );
}
