import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>Loading product details…</p>
    </div>
  );
}