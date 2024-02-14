import styles from './Curriculums.module.css';
import SearchBar from '../components/Curriculums/SearchBar';
import SideBar from '../components/Curriculums/SideBar';
import Cards from '../components/Curriculums/Cards';
import Pagination from '../components/Curriculums/Pagination';
import getAllCvs from '../redux/actions/cvs/getAllCvs';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../redux/slices/filtersSlice';

function Curriculums() {
    const dispatch = useDispatch();
    const cvs = useSelector(state => state.cvs.allCvs);

    // console.log(currentPage);

    const [filters, setFilters] = useState({
        search: "",
        sort: "Más recientes",
        languages: [],
        subscriptions: [],
        categories: [],
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);

    console.log(filters);

    useEffect(() => {
        dispatch(getAllCvs(filters, 12, currentPage * 12 - 12));
        setNumberOfPages(Math.ceil(cvs.length / 16));
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
                        {cvs ? <Cards cvs={cvs}/> : <p>No se encontraron cvs</p>}
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