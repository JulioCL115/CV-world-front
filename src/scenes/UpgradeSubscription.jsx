import styles from './UpgradeSubscription.module.css';
import Illustration from '../assets/hr-analyzing-candidates-resume-3611324-3022084.webp';

import { Link } from 'react-router-dom';

function UpgradeSubscription() {

    return (
        <div className={styles.upgradeSubscription}>
            <img className={styles.img} src={Illustration} alt="Illustration" />
            <p className={styles.txtSemiBold16Purple}>
                Tu plan actual sólo permite cargar un CV
            </p>
            <p className={styles.txtSemiBold16Purple}>
                Mejorá tu plan para poder cargar CV’s ilimitados y otros beneficios
            </p>
            <Link to="/subscriptions">
                <button className={styles.btn}>Mejorar mi plan</button>
            </Link>
            <Link className={styles.txtRegular16PurpleUnderlined} to="/mycvs">
                Volver
            </Link>
        </div>
    )
};

export default UpgradeSubscription; 