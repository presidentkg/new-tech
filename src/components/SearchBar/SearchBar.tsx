"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedSearch = search.trim();
    if (trimmedSearch) {
      router.push(`/products?search=${encodeURIComponent(trimmedSearch)}`);
    } else {
      router.push(`/products`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBar}>
      <label htmlFor="search" className={styles.hidden}>
        Search products
      </label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}
