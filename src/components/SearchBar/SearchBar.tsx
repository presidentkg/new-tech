import Form from "next/form";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <Form action="/search-results/" className={styles.searchBar}>
      <label htmlFor="search" className={styles.hidden}>
        Search
      </label>
      <input
        name="query"
        id="search"
        type="text"
        placeholder="Search..."
        className={styles.input}
      />
      <button className={styles.button} type="submit">
        Go
      </button>
    </Form>
  );
}
