"use client";

import { useState } from "react";
import { Product } from "@/lib/utils/interface";
import { ProductList } from "@/components/ProductList/ProductList";
import styles from "./ProductFilter.module.css";

interface ProductFilterProps {
  products: Product[];
}

export default function ProductFilter({ products }: ProductFilterProps) {
  const [sortOption, setSortOption] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      case "rating":
        return (b.rating ?? 0) - (a.rating ?? 0);
      default:
        return 0;
    }
  });

  return (
    <div>
      <div className={styles.controls}>
        <label htmlFor="sort" className={styles.label}>
          Sort by:
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className={styles.select}
        >
          <option value="default">Default</option>
          <option value="price-asc">Price (Lowest first)</option>
          <option value="price-desc">Price (Highest first)</option>
          <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
          <option value="rating">Rating (High → Low)</option>
        </select>
      </div>

      <ProductList products={sortedProducts} />
    </div>
  );
}
