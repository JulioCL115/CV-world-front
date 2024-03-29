import styles from "./SingUp.module.css"

import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import image from "../../assets/Working-Man-Illustration.jpg"
import register from "../../redux/actions/users/register";

import { auth } from "../../config/firebase-config";
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

import validation from "./singUpValidation"


function SignUp() {
  const navigate = useNavigate();

  const [registerInfo, setRegisterInfo] = useState({
    name: null,
    email: null,
    password: null,
    repeatPassword: null,
  });

  const [registrationStatus, setRegistrationStatus] = useState({
    status: null,
    message: null
  })

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
    repeatPassword: null,
  });

  const [showFirstPassword, setShowFirstPassword] = useState(false);
  const [showSecondPassword, setShowSecondPassword] = useState(false);

  const handleChange = (event) => {
    let registerInfoUpdated = { ...registerInfo };

    setRegisterInfo({
      ...registerInfo,
      [event.target.name]: event.target.value
    });

    setRegistrationStatus({
      status: null,
      message: null,
    })

    const validationErrors = validation({
      ...registerInfo,
      [event.target.name]: event.target.value,
    }, event.target.name);

    setErrors((errors) => ({
      ...errors,
      [event.target.name]: validationErrors[event.target.name],
    }));
  };

  // Para mostrar y ocultar la contraseña

  const handleToggleFirstPassword = () => {
    setShowFirstPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleSecondPassword = () => {
    setShowSecondPassword((prevShowPassword) => !prevShowPassword);
  };

  // Para enviar el formilario 

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validation(registerInfo, 'all');
    setErrors(validationErrors);

    if (!registerInfo.name ||
      !registerInfo.email ||
      !registerInfo.password ||
      !registerInfo.repeatPassword) {

      setRegistrationStatus({
        status: "Fail",
        message: "Faltan completar campos obligatorios"
      })

    } else {

      if (!errors.name &&
        !errors.email &&
        !errors.password &&
        !errors.repeatPassword) {

        const registrationStatus = await register(registerInfo);

        if (registrationStatus.status === "Success") {

          try {
            const userCredential = await createUserWithEmailAndPassword(auth, registerInfo.email, registerInfo.password)
            const user = userCredential.user;

            await sendEmailVerification(user);

            setRegistrationStatus({
              status: "Success",
              message: "¡Te registraste con éxito!"
            })

            setTimeout(() => {
              navigate("/verifyemail");
            }, 2000);
          } catch (error) {
            setRegistrationStatus({
              status: "Fail",
              message: "Error de autenticación de terceros"
            })
          }
        } else {
          setRegistrationStatus({ ...registrationStatus })
        }

      } else {
        setRegistrationStatus({
          status: "Fail",
          message: "Hay campos mal completados"
        });
      }
    }
  }

  return (
    <div className={styles.signUp}>
      <div className={styles.containerLeft}>
        <img className={styles.illustration} src={image} alt="ilustración"></img>
      </div>
      <div className={styles.containerRight}>
        <h1 className={styles.txtSemiBold32Black}>Registrarme</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.vertical}>
            <label className={styles.txtSemiBold16Purple}>NOMBRE DE USUARIO</label>
            <input
              className={styles.input}
              name='name'
              type='text'
              placeholder='Ingresá un nombre de usuario...'
              onChange={handleChange}
              value={registerInfo.name}
            />
            {errors.name ? <p className={styles.txtError}>{errors.name}</p> : null}
          </div>
          <div className={styles.vertical}>
            <label className={styles.txtSemiBold16Purple}>EMAIL</label>
            <input
              className={styles.input}
              name='email'
              type='text'
              placeholder='Ingresá tu mail...'
              onChange={handleChange}
              value={registerInfo.email}
            />
            {errors.email ? <p className={styles.txtError}>{errors.email}</p> : null}
          </div>
          <div className={styles.vertical}>
            <label className={styles.txtSemiBold16Purple}>CONTRASEÑA</label>
            <div className={styles.containerPassword}>
              <input
                className={styles.input}
                name="password"
                type={showFirstPassword ? "text" : "password"}
                placeholder="Ingresá tu contraseña..."
                onChange={handleChange}
                value={registerInfo.password}
              />
              <button
                className={styles.btnEye}
                type="button"
                onClick={handleToggleFirstPassword}
              >
                {showFirstPassword ? (
                  <svg
                    className={styles.icn}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    className={styles.icn}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
            </div>
            {errors.password ? <p className={styles.txtError}>{errors.password}</p> : null}
          </div>
          <div className={styles.vertical}>
            <label className={styles.txtSemiBold16Purple}>REPETIR CONTRASEÑA</label>
            <div className={styles.containerPassword}>
              <input
                className={styles.input}
                name="repeatPassword"
                type={showSecondPassword ? "text" : "password"}
                placeholder="Ingresá de nuevo tu contraseña..."
                onChange={handleChange}
                value={registerInfo.repeatPassword}
              />
              <button
                className={styles.btnEye}
                type="button"
                onClick={handleToggleSecondPassword}
              >
                {showSecondPassword ? (
                  <svg
                    className={styles.icn}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    className={styles.icn}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
            </div>
            {errors.repeatPassword ? <p className={styles.txtError}>{errors.repeatPassword}</p> : null}
          </div>
          <Link className={styles.txtSemiBold12Purple} to="/resetpassword">¿Olvidaste tu contraseña?</Link>
          <button className={styles.btnRegister}>REGISTRARME</button>
        </form>
        {registrationStatus ?
          <p className={registrationStatus.status === "Success" ? styles.txtSemiBold16Green : styles.txtError16}>{registrationStatus.message}</p>
          : null}
        <div className={styles.containerSignIn}>
          <p className={styles.txtSemiBold16Green}>¿Ya tenés cuenta?</p>
          <Link className={styles.txtSemiBold16Green} to="/signin">Iniciar sesión</Link>
        </div>
      </div>
    </div>
  )
};

export default SignUp; 
