import styles from "./SingUp.module.css"

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import image from "../assets/Working-Man-Illustration.jpg"


function SignUp() {
  const dispatch = useDispatch();

  const [login, setLogin] = useState({
    email: "",
    password: "",
    repeatPassord: ""
  });

  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = () => {

  };

  return (
    <div className={styles.signUp}>
      <div className={styles.containerLeft}>
        <img className={styles.illustration} src={image} alt="ilustración"></img>
      </div>
      <div className={styles.containerRight}>
        <h1 className={styles.txtSemiBold32Black}>Registrarme</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.vertical}>
            <label className={styles.txtSemiBold16Purple}>EMAIL</label>
            <input
              className={styles.input}
              name='email'
              type='text'
              placeholder='Ingresá tu mail...'
              onChange={handleChange}
              value={login.email}
            />
          </div>
          <div className={styles.vertical}>
            <label className={styles.txtSemiBold16Purple}>CONTRASEÑA</label>
            <input
              className={styles.input}
              name='password'
              type='text'
              placeholder='Ingresá una contraseña...'
              onChange={handleChange}
              value={login.password}
            />
          </div>
          <div className={styles.vertical}>
            <label className={styles.txtSemiBold16Purple}>REPETIR CONTRASEÑA</label>
            <input
              className={styles.input}
              name='repeatPassword'
              type='text'
              placeholder='Ingresá la contraseña nuevamente...'
              onChange={handleChange}
              value={login.repeatPassord}
            />
          </div>
          <Link className={styles.txtSemiBold12Purple} to="/resetpassword">¿Olvidaste tu contraseña?</Link>
          <button className={styles.btnLogin}>REGISTRARME</button>
        </form>
        <p className={styles.txtSemiBold12Purple}>O REGISTRARTE CON</p>
        <button className={styles.btnGoogle}>
          <svg className={styles.icn} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
            <g fill="#3e3e70" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8.53333,8.53333)"><path d="M15.00391,3c-6.629,0 -12.00391,5.373 -12.00391,12c0,6.627 5.37491,12 12.00391,12c10.01,0 12.26517,-9.293 11.32617,-14h-1.33008h-2.26758h-7.73242v4h7.73828c-0.88958,3.44825 -4.01233,6 -7.73828,6c-4.418,0 -8,-3.582 -8,-8c0,-4.418 3.582,-8 8,-8c2.009,0 3.83914,0.74575 5.24414,1.96875l2.8418,-2.83984c-2.134,-1.944 -4.96903,-3.12891 -8.08203,-3.12891z"></path></g></g>
          </svg>
          Google
        </button>
        <div className={styles.containerSignUp}>
          <p className={styles.txtSemiBold16Green}>¿Ya tenés cuenta</p>
          <Link className={styles.txtSemiBold16Green} to="/signin">Iniciar sesión</Link>
        </div>
      </div>
    </div>
  )
};

export default SignUp; 
