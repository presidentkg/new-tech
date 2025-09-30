import styles from "./PaginationButtons.module.css";
import { Dispatch, SetStateAction } from "react";

interface PaginationButtonsProps {
  totalPages: number;
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export default function PaginationButtons({
  totalPages,
  currentPage,
  setPage,
}: PaginationButtonsProps) {
  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setPage(page);
  };

  return (
    <div className={styles.paginationWrapper}>
      <button
        className={styles.paginationButton}
        onClick={() => goToPage(1)}
        disabled={currentPage === 1}
      >
        ⏮ First
      </button>

      <button
        className={styles.paginationButton}
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ◀ Prev
      </button>

      <ol className={styles.pageList}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <li key={pageNumber}>
              <button
                onClick={() => goToPage(pageNumber)}
                className={`${styles.paginationButton} ${
                  pageNumber === currentPage ? styles.active : ""
                }`}
              >
                {pageNumber}
              </button>
            </li>
          )
        )}
      </ol>

      <button
        className={styles.paginationButton}
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next ▶
      </button>

      <button
        className={styles.paginationButton}
        onClick={() => goToPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last ⏭
      </button>
    </div>
  );
}
