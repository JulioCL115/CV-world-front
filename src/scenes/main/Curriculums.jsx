import styles from './Curriculums.module.css';
import SearchBar from '../../components/Curriculums/SearchBar';
import SideBar from '../../components/Curriculums/SideBar';
import Cards from '../../components/Curriculums/Cards';
import Pagination from '../../components/Curriculums/Pagination';
import CvsNotFound from '../../components/Curriculums/CvsNotFound';
import getAllCvs from '../../redux/actions/cvs/getAllCvs';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Curriculums() {
    const dispatch = useDispatch();
    const cvs = useSelector(state => state.cvs.allCvs);
    const numberOfPages = useSelector(state => state.cvs.numberOfPages);

    const [filters, setFilters] = useState({
        search: "",
        sort: "Más recientes",
        languages: [],
        categories: [],
    });

    const [currentPage, setCurrentPage] = useState(1);
    const limit = 12;

    useEffect( () => {
        dispatch(getAllCvs(filters, limit, currentPage * limit - limit));
    }, [currentPage, filters, limit, numberOfPages, dispatch])


    return (
        <div className={styles.curriculums}>
            <div className={styles.containerTop}>
                <div className={styles.containerLeft}>
                    <SideBar filters={filters} setFilters={setFilters} setCurrentPage={setCurrentPage}/>
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
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} numberOfPages={numberOfPages} filters={filters}/>
            </div>
        </div>
    )
};

export default Curriculums;