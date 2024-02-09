import styles from './SideBar.module.css'

import { useSelector } from "react-redux";
import { useState } from "react";


function SideBar() {
    const languages = useSelector((state) => state.languages.allLanguages);
    const categories = useSelector((state) => state.categories.allCategories);
    const subscriptions = useSelector((state) => state.subscriptions.allSubscriptions);

    const [filters, setFilters] = useState({
        languages: [],
        subscriptions: [],
        categories: [],
    });

    return (
        <div className="sidebar">
            <h1>Filtros</h1>
            <form>
            </form>
        </div>
    )
};

export default SideBar; 
