import styles from "./Detail.module.css";
import Comments from "../components/Detail/Comments";
import Contact from "../components/Detail/Contact";
import Cv from "../components/Detail/Cv";
import { useSelector } from "react-redux";

function Detail() {
    const cv = useSelector((state) => state.cvs.cvDetail);

    return (
        <div className={styles.detail}>
            <div className={styles.containerHeader}>
                <img src="" alt="foto de perfil del usuario" />
                <div>
                    <p>Título del CV</p>
                    <p>Nombre del usuario</p>
                </div>
            </div>
            <div className={styles.containerTop}>
                <Cv />
            </div>
            <div className={styles.containerBottom}>
                <div className={styles.containerBottomLeft}>
                    <Comments />
                </div>
                <div className={styles.containerBottomRight}>
                    <Contact />
                </div>
            </div>
        </div>
    )
};

export default Detail;