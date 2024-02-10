import styles from './SideBar.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function SideBar() {
    const languages = useSelector((state) => state.languages.allLanguages);
    const categories = useSelector((state) => state.categories.allCategories);
    const subscriptions = useSelector((state) => state.subscriptions.allSubscriptions);

    const [filters, setFilters] = useState({
        languages: [],
        subscriptions: [],
        categories: [],
    });

    const handleCheckboxChange = (filterType, value) => {
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
                    {languages.map((language) => (
                        <div className={styles.listItem} key={language.id}>
                            <input
                                className={styles.checkbox}
                                type="checkbox"
                                id={`language-${language.id}`}
                                checked={filters.languages.includes(language.id)}
                                onChange={() => handleCheckboxChange('languages', language.id)}
                            />
                            <label className={styles.txtRegular16Black} htmlFor={`language-${language.id}`}>{language.name}</label>
                        </div>
                    ))}
                </div>
                <hr class="solid" className={styles.divider} />
                <div className={styles.list}>
                    <h2 className={styles.txtSemiBold16Black}>Subscriptions</h2>
                    {subscriptions.map((subscription) => (
                        <div className={styles.listItem} key={subscription.id}>
                            <input
                                className={styles.checkbox}
                                type="checkbox"
                                id={`subscription-${subscription.id}`}
                                checked={filters.subscriptions.includes(subscription.id)}
                                onChange={() => handleCheckboxChange('subscriptions', subscription.id)}
                            />
                            <label className={styles.txtRegular16Black} htmlFor={`subscription-${subscription.id}`}>{subscription.name}</label>
                        </div>
                    ))}
                </div>
                <hr class="solid" className={styles.divider} />
                <div className={styles.list}>
                    <h2 className={styles.txtSemiBold16Black}>Categories</h2>
                    {categories.map((category) => (
                        <div className={styles.listItem} key={category.id}>
                            <input
                                className={styles.checkbox}
                                type="checkbox"
                                id={`category-${category.id}`}
                                checked={filters.categories.includes(category.id)}
                                onChange={() => handleCheckboxChange('categories', category.id)}
                            />
                            <label className={styles.txtRegular16Black} htmlFor={`category-${category.id}`}>{category.name}</label>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
}

export default SideBar;

