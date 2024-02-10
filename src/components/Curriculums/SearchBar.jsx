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
        <div className={styles.Container}>
            <form className={styles.searchbarContainer}>
                <input className={styles.searchInput}
                    name='Search'
                    type="text"
                    placeholder= "Buscar..."
                    value={Search}
                    onChange={handleChange}/>
                        <span className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

    </span>
            </form>
            <div className={styles.selecContainer}>
                <h2>Ordenar por:</h2>
                <select className={styles.Selector}>
                    <option>Mas recientes</option>
                    <option>Mas vistos</option>
                </select>
            </div>
        </div>

    )
};

export default SearchBar; 
