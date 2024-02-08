import styles from './Curriculums.module.css';
import SearchBar from '../components/Home/SearchBar';
import SideBar from '../components/Home/SideBar';
import Cards from '../components/Home/Cards';
import Pagination from '../components/Home/Pagination';

function Curriculums() {
    return (
        <div className={styles.curriculums}>
            <div>
                <SideBar/>
            </div>
            <div>
                <SearchBar/>
            </div>
            <div>
                <Cards/>
            </div>
            <div>
                <Pagination/>
            </div>
        </div>
    )
};

export default Curriculums;