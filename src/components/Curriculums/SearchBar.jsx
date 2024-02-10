
import { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const [filters, setFilters] = useState({
    sort: '',
    search: ''
  });

  const handleChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={styles.searchbar}>
      <div className={styles.containerInput}>
        <input
          className={styles.input}
          name="search"
          type="text"
          placeholder="Buscar..."
          value={filters.search}
          onChange={handleChange}
        />
        <svg
          className={styles.icn}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      <div className={styles.containerLeft}>
        <label className={styles.txtSemiBold16}>Ordenar por:</label>
        <select
          className={styles.selector}
          name="sort"
          value={filters.sort}
          onChange={handleSelect}
        >
          <option>Más recientes</option>
          <option>Más vistos</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;