import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import { getProductsByCategory } from "@/lib/utils/utils";

import ProductSwiper from "@/components/ProductSwiper/ProductSwiper";

export default async function Home() {
  const smartphones = await getProductsByCategory("smartphones");
  const tablets = await getProductsByCategory("tablets");
  const laptops = await getProductsByCategory("laptops");

  const featuredProducts = [
  ...smartphones.slice(0, 5),
  ...tablets.slice(0, 5),
  ...laptops.slice(0, 5),
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <h2 className={styles.dealTitle}>Deal of the Week:</h2>
        <ProductSwiper products = {featuredProducts} />
      </main>
    </div>
  );
}
