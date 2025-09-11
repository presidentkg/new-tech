"use client";

import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "./StarReview.module.css";
import { StarReviewProps } from "../../lib/utils/interface"


export default function StarReview({ rating, reviews }: StarReviewProps) {
  const filledStars = Math.round(rating);
  const totalStars = 5;

  return (
    <div className={styles.starReview}>
      {Array.from({ length: totalStars }, (_, i) =>
        i < filledStars ? (
          <FaStar key={i} className={styles.filled} />
        ) : (
          <FaRegStar key={i} className={styles.empty} />
        )
      )}
      <span className={styles.reviews}>({reviews})</span>
    </div>
  );
}
