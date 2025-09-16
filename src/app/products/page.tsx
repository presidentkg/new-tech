import { notFound } from "next/navigation";
import { ProductList } from "@/components/ProductList/ProductList";
import { Product } from "@/lib/utils/interface";
import styles from "./ProductsPage.module.css";

interface ProductsPageProps {
  searchParams: { category?: string; search?: string };
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const category = searchParams?.category;
  const search = searchParams?.search;

  let url = "https://dummyjson.com/products";

  if (category) {
    url = `https://dummyjson.com/products/category/${category}`;
  } else if (search) {
    url = `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}`;
  }

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return notFound();

  const data: { products: Product[] } = await res.json();

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>
        {category
          ? `Products in ${category}`
          : search
          ? `Results for "${search}"`
          : "All Products"}
      </h1>
      {data.products.length > 0 ? (
        <ProductList products={data.products} />
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
