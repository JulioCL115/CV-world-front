import styles from './Curriculums.module.css';
import SearchBar from '../components/Curriculums/SearchBar';
import SideBar from '../components/Curriculums/SideBar';
import Cards from '../components/Curriculums/Cards';
import Pagination from '../components/Curriculums/Pagination';

function Curriculums() {
    return (
        <div className={styles.curriculums}>
            <div className={styles.containerTop}>
                <div className={styles.containerLeft}>
                    <SideBar />
                </div>
                <div className={styles.containerRight}>
                    <div className={styles.containerRightTop}>
                        <SearchBar />
                    </div>
                    <div className={styles.containerRightBottom}>
                        <Cards />
                    </div>
                </div>
            </div>
            <div className={styles.containerBottom}>
                <Pagination />
            </div>
        </div>
    )
};

export default Curriculums;