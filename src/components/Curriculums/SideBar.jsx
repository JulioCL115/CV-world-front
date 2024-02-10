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
      <h1>Filtros</h1>
      <form>
        <div>
          <h2>Languages</h2>
          {languages.map((language) => (
            <div key={language.id}>
              <input
                type="checkbox"
                id={`language-${language.id}`}
                checked={filters.languages.includes(language.id)}
                onChange={() => handleCheckboxChange('languages', language.id)}
              />
              <label htmlFor={`language-${language.id}`}>{language.name}</label>
            </div>
          ))}
        </div>

        <div>
          <h2>Subscriptions</h2>
          {subscriptions.map((subscription) => (
            <div key={subscription.id}>
              <input
                type="checkbox"
                id={`subscription-${subscription.id}`}
                checked={filters.subscriptions.includes(subscription.id)}
                onChange={() => handleCheckboxChange('subscriptions', subscription.id)}
              />
              <label htmlFor={`subscription-${subscription.id}`}>{subscription.name}</label>
            </div>
          ))}
        </div>

        <div>
          <h2>Categories</h2>
          {categories.map((category) => (
            <div key={category.id}>
              <input
                type="checkbox"
                id={`category-${category.id}`}
                checked={filters.categories.includes(category.id)}
                onChange={() => handleCheckboxChange('categories', category.id)}
              />
              <label htmlFor={`category-${category.id}`}>{category.name}</label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default SideBar;

