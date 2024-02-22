import styles from './SideBar.module.css';
import { useSelector } from 'react-redux';

function SideBar({ filters, setFilters, setCurrentPage }) {
    const languages = useSelector((state) => state.languages.allLanguages);
    const categories = useSelector((state) => state.categories.allCategories);

    const handleCheckboxChange = (filterType, value) => {
        setCurrentPage(1);
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: prevFilters[filterType].includes(value)
                ? prevFilters[filterType].filter((item) => item !== value)
                : [...prevFilters[filterType], value],
        }));
    };

    return (
        <div className={styles.sidebar}>
            <h1 className={styles.txtSemiBold24Black}>Filtros</h1>
            <form className={styles.form}>
                <div className={styles.list}>
                    <h2 className={styles.txtSemiBold16Black}>Languages</h2>
                    {languages ? languages.map((language) => (
                        <div className={styles.listItem} key={language.id}>
                            <input
                                className={styles.checkbox}
                                type="checkbox"
                                id={`language-${language.id}`}
                                checked={filters.languages.includes(language.name)}
                                onChange={() => handleCheckboxChange('languages', language.name)}
                            />
                            <label className={styles.txtRegular16Black} htmlFor={`language-${language.id}`}>{language.name}</label>
                        </div>
                    )) : null
                    }
                </div>
                <hr class="solid" className={styles.divider} />
                <div className={styles.list}>
                    <h2 className={styles.txtSemiBold16Black}>Categories</h2>
                    {categories ? categories.map((category) => (
                        <div className={styles.listItem} key={category.id}>
                            <input
                                className={styles.checkbox}
                                type="checkbox"
                                id={`category-${category.id}`}
                                checked={filters.categories.includes(category.name)}
                                onChange={() => handleCheckboxChange('categories', category.name)}
                            />
                            <label className={styles.txtRegular16Black} htmlFor={`category-${category.id}`}>{category.name}</label>
                        </div>
                    )) : null
                }
                </div>
            </form>
        </div>
    );
}

export default SideBar;
