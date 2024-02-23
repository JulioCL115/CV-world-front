import styles from './VerifyEmail.module.css';
import Illustration from '../../assets/send-email.png';

import { Link } from 'react-router-dom';

function VerifyEmail() {

    return (
        <div className={styles.verifyEmail}>
            <img className={styles.img} src={Illustration} alt="Illustration" />
            <p className={styles.txtSemiBold16Purple}>
                Se envió un mail a tu casilla de correo para verificar tu cuenta
            </p>
            <Link  to="/signin">
                <button className={styles.btn}>Iniciar sesión</button>
            </Link>
        </div>
    )
};

export default VerifyEmail; 