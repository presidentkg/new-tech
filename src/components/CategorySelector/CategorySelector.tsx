import Link from "next/link";
import styles from "./CategorySelector.module.css";
import { FaMobileAlt, FaTabletAlt, FaLaptop } from "react-icons/fa";

export default function CategorySelector() {
  return (
    <div className={styles.categories}>
      <Link href="/products?category=iphone" className={styles.category}>
        <FaMobileAlt className={styles.icon} />
        <span>Phones</span>
      </Link>

      <Link href="/products?category=tablet" className={styles.category}>
        <FaTabletAlt className={styles.icon} />
        <span>Tablets</span>
      </Link>

      <Link href="/products?category=laptop" className={styles.category}>
        <FaLaptop className={styles.icon} />
        <span>Laptops</span>
      </Link>
    </div>
  );
}
