import Illustration from "../../../assets/resume-assessment-3611330-3022090.webp";
import styles from "./CvsNotFound.module.css"

function UpgradeSubscription() {

    return (
        <div className={styles.cvsNotFound}>
            <img className={styles.img} src={Illustration} alt="Illustration" />
            <p className={styles.txtSemiBold16Purple}>
                Lo sentimos, no se encontraron CV's con esos parámetros
            </p>
            <p className={styles.txtSemiBold16Purple}>
                Probá cambiar los parámetros de búsqueda
            </p>
        </div>
    )
};

export default UpgradeSubscription; 