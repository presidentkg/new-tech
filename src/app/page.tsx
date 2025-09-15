import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import { getProductsByCategory } from "@/lib/utils/utils";
import ProductListWithPagination from "@/components/ProductListWithPagination/ProductListWithPagination";

export default async function Home() {
  const smartphones = await getProductsByCategory("smartphones");
  const tablets = await getProductsByCategory("tablets");
  const laptops = await getProductsByCategory("laptops");

  const allProducts = [
    ...laptops,
    ...smartphones,
    ...tablets,
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <ProductListWithPagination products={allProducts} />
      </main>
    </div>
  );
}
