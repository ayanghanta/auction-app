import styles from "./SearchBar.module.css";
function SearchBar() {
  return (
    <input
      type="text"
      className={styles.searchBar}
      placeholder="search for item..."
    />
  );
}

export default SearchBar;
