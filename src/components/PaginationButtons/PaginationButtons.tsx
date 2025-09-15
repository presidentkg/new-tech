import styles from "./PaginationButtons.module.css";
import { Dispatch, SetStateAction } from "react";

interface PaginationButtonsProps {
  totalPages: number;
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export default function PaginationButtons({ totalPages, currentPage, setPage }: PaginationButtonsProps) {
  return (
    <ol className={styles.buttons}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => {
        return (
          <li key={pageNumber}>
            <button
              onClick={() => setPage(pageNumber)}
              className={styles.paginationButton}
              style={{
                color: pageNumber === currentPage ? "#fff" : "",
                backgroundColor: pageNumber === currentPage ? "#863aaf" : "",
              }}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}
    </ol>
  );
}
