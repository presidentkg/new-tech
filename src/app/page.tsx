import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import { getFeaturedProducts } from "@/lib/utils/utils";

import ProductSwiper from "@/components/ProductSwiper/ProductSwiper";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts(); 

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
