import styles from './Home.module.css';

import CvImage from "../../assets/cv_munich-1040x1433.png"

import { Link } from "react-router-dom";

function Home() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    return (
        <div className={styles.home}>
            <div className={styles.containerLeft}>
                <div className={styles.containerTxt}>
                    <h1 className={styles.txtSemiBold48Black}>Causá una buena primera impresión</h1>
                    <p className={styles.txtRegular16Black}>Desbloquá todo tu potencial profesional,
                        con CV World no sólo creás tu CV, creás una excelente primera impresión
                    </p>
                    <div className={styles.containerBtn}>
                        <Link to={currentUser ? "/mycvs" : "/signin"} >
                            <button className={styles.btnCreate}>Crear CV</button>
                        </Link>
                        <Link to="/curriculums">
                            <button className={styles.btnExplore}>Explorar CV's</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.containerRight}>
                <img className={styles.img} src={CvImage} alt="CvImage" />
            </div>
        </div>
    )
};

export default Home;