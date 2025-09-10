import { getProductsByCategory } from "@/lib/utils/utils";

import styles from "./page.module.css";
import { ProductList } from "@/components/ProductList";

export default async function Home() {
  const smartphones = await getProductsByCategory("smartphones");

  const tablets = await getProductsByCategory("tablets");

  const laptops = await getProductsByCategory("laptops");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.productList}>
          {/* <ProductList products={smartphones} /> */}
          <ProductList products={laptops} />
        </div>
      </main>
    </div>
  );
}
