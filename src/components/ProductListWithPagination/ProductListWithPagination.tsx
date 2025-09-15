"use client";

import styles from "./ProductListWithPagination.module.css";
import { Product } from "@/lib/utils/interface";
import { ProductList } from "../ProductList/ProductList";
import { useState } from "react";
import PaginationButtons from "../PaginationButtons/PaginationButtons";

type ProductListWithPaginationProps = {
  products: Product[];
};

export default function ProductListWithPagination({ products }: ProductListWithPaginationProps) {
  const [page, setPage] = useState(1);

  const limit = 10;
  const start = (page - 1) * limit;
  const visibleProducts = products.slice(start, start + limit);
  const totalPages = Math.ceil(products.length / limit);

  return (
    <section className={styles.productListWithPagination}>
      <ProductList products={visibleProducts} />
      <PaginationButtons totalPages={totalPages} currentPage={page} setPage={setPage} />
    </section>
  );
}
