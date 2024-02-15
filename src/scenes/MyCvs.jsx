import styles from "./MyCvs.module.css"
import Illustration from "../assets/CV-Example-Creation-Illustration.webp"


import { Link } from "react-router-dom";

function MyCvs() {
    const storedUser = localStorage.getItem('currentUser');

    return (
        <div>
            <div className={styles.myCvs}>
                <div className={styles.containerTop}>
                    <h1 className={styles.txtSemiBold32Black}>Mis CV's</h1>
                </div>
                {storedUser.cvs ?
                    <div>

                    </div> :
                    <div className={styles.containerBottom}>
                        <img className={styles.img} src={Illustration} alt="Illustration" />
                        <p className={styles.txtSemiBold16Purple}>Parece que todavía no tenés currículums cargados</p>
                        <Link to="/createcv">
                            <button className={styles.btn}>Cargar CV</button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
};

export default MyCvs;