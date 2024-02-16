import styles from './Curriculums.module.css';
import SearchBar from '../components/Curriculums/SearchBar';
import SideBar from '../components/Curriculums/SideBar';
import Cards from '../components/Curriculums/Cards';
import Pagination from '../components/Curriculums/Pagination';
import getAllCvs from '../redux/actions/cvs/getAllCvs';
import CvsNotFound from '../components/Curriculums/CvsNotFound';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Curriculums() {
    const dispatch = useDispatch();
    const cvs = useSelector(state => state.cvs.allCvs);

    console.log(cvs);

    const [filters, setFilters] = useState({
        search: "",
        sort: "",
        languages: [],
        categories: [],
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);
    const limit = 12;

    console.log(filters);

    useEffect(() => {
        const filtersChanged =
        filters.categories.length > 0 ||
        filters.languages.length > 0 ||
        filters.sort !== "" ||
        filters.search !== "";

    // Dispatch the getAllCvs action only if filters have changed
    if (filtersChanged) {
        dispatch(getAllCvs(filters, limit, currentPage));
        setNumberOfPages(Math.ceil(cvs && cvs.length ? cvs.length / limit : 1));
    }
        dispatch(getAllCvs(filters, limit, currentPage));
        setNumberOfPages(Math.ceil(cvs && cvs.length ? cvs.length / limit : 1));
    }, [filters])


    return (
        <div className={styles.curriculums}>
            <div className={styles.containerTop}>
                <div className={styles.containerLeft}>
                    <SideBar filters={filters} setFilters={setFilters} />
                </div>
                <div className={styles.containerRight}>
                    <div className={styles.containerRightTop}>
                        <SearchBar filters={filters} setFilters={setFilters} />
                    </div>
                    <div className={styles.containerRightBottom}>
                        {cvs && cvs.length ? <Cards cvs={cvs}/> : <CvsNotFound/>}
                    </div>
                </div>
            </div>
            <div className={styles.containerBottom}>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} numberOfPages={numberOfPages} setNumberOfPages={setNumberOfPages} filters={filters}/>
            </div>
        </div>
    )
};

export default Curriculums;