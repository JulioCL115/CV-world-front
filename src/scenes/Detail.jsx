import styles from "./Detail.module.css";
import Comments from "../components/Detail/Comments";
import Contact from "../components/Detail/Contact";
import Cv from "../components/Detail/Cv";

function Detail() {

    return (
        <div className={styles.detail}>
            <Cv />
            <div className={styles.containerBottom}>
                <Comments />
                <Contact />
            </div>
        </div>
    )
};

export default Detail;