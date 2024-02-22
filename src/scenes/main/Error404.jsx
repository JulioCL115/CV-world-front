import { Link } from 'react-router-dom';
import styles from './Error.module.css'
import imagen from '../../assets/undraw_Page_not_found_re_e9o6.png'



function Error404() {
    return (
        <div className={styles.mainContainer}>
        
            <h1 className={styles.errorMessage}>Oops</h1>
            <img className={styles.imagen} src={imagen} alt="illustration-login"></img>

            <Link to="/curriculums">
                <button className={styles.goBackButton}>vuelve a Curriculums!</button>
            </Link>
        </div>
    )
};

export default Error404;