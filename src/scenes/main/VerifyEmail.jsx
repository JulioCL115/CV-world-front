import styles from './UpgradeSubscription.module.css';
import Illustration from '../../assets/send-email.png';

import { Link } from 'react-router-dom';

function VerifyEmail() {

    return (
        <div className={styles.upgradeSubscription}>
            <img className={styles.img} src={Illustration} alt="Illustration" />
            <p className={styles.txtSemiBold16Purple}>
                Se envió un mail a tu casilla de correo para verificar tu cuenta
            </p>
            <Link className={styles.txtRegular16PurpleUnderlined} to="/signin">
                <button>Iniciar sesión</button>
            </Link>
        </div>
    )
};

export default VerifyEmail; 