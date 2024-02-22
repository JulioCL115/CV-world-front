import styles from './ResetPassword.module.css';

import Illustration from '../../assets/3916134.webp';
import { useState } from 'react';
import { auth } from "../../config/firebase-config";
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [resetStatus, setResetStatus] = useState({
        status: null,
        message: null
    }); // ['success', 'error', 'loading'

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleClick = async () => {
        try {
            setResetStatus('loading');
            await sendPasswordResetEmail(auth, email);
                setResetStatus({
                    status: "Success",
                    message: "¡Mail enviado! Revisá tu casilla de correo."
                });

                setTimeout(() => {
                    navigate("/signin");
                }, 2000);

        } catch (error) {
            console.log("Error de reseteo: ", error)
            setResetStatus({
                status: "Fail",
                message: "No se pudo enviar el mail. Por favor, intentá nuevamente."
            });
        };
    };

    return (
        <div className={styles.resetPassword}>
            <div className={styles.containerLeft}>
                <img className={styles.illustration} src={Illustration} alt="ilustración"></img>
            </div>
            <div className={styles.containerRight}>
                <h1 className={styles.txtSemiBold32Black}>¿Olvidaste tu contraseña?</h1>
                <p className={styles.txtSemiBold16Purple}>Ingresá tu mail debajo y te enviaremos un link para que puedas recuperarla</p>
                <div className={styles.vertical}>
                    <label className={styles.txtSemiBold16Purple}>EMAIL</label>
                    <input
                        className={styles.input}
                        name='email'
                        type='text'
                        placeholder='Ingresá tu mail...'
                        onChange={handleChange}
                        value={email}
                    />
                </div>
                <button className={styles.btn} onClick={handleClick}>Recuperar contraseña</button>
                {resetStatus ?
                    <p className={resetStatus.status === "Success" ? styles.txtSuccess : styles.txtError16}>{resetStatus.message}</p>
                    : null}
            </div>
        </div >
    )
};

export default ResetPassword; 