import { notFound } from "next/navigation";
import { Product } from "@/lib/utils/interface";
import { ProductList } from "@/components/ProductList/ProductList";
import styles from "./AdminPage.module.css";

export default async function AdminPage() {
  const url = "https://dummyjson.com/products?limit=20";
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return notFound();

  const data: { products: Product[] } = await res.json();

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Admin Panel: Products</h1>
      {data.products.length > 0 ? (
        <ProductList products={data.products} />
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
