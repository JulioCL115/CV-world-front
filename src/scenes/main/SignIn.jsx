import styles from "./SingIn.module.css"

import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/Working-Man-Illustration.jpg";
import login from "../../redux/actions/users/login";
import register from "../../redux/actions/users/register";

import { auth } from "../../config/firebase-config";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

import validation from "./signInValidation";

function SignIn() {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider()

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [loginStatus, setLoginStatus] = useState({
    status: null,
    message: null
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setLoginInfo({
      ...loginInfo,
      [event.target.name]: event.target.value
    });

    console.log(loginInfo);

    setLoginStatus({
      status: null,
      message: null
    });

    const validationErrors = validation({
      ...loginInfo,
      [event.target.name]: event.target.value,
    });

    setErrors((errors) => ({
      ...errors,
      [event.target.name]: validationErrors[event.target.name],
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const loginWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);

      if (userCredential) {

        if (
          userCredential._tokenResponse &&
          userCredential._tokenResponse.isNewUser
        ) {
          const loginStatus = await register({
            name: userCredential.user.displayName,
            email: userCredential.user.email,
            photo: userCredential.user.photoURL,
            password: "",
          });

          if (loginStatus.status === "Success") {
            setLoginStatus({
              status: "Success",
              message: "¡Bienvenido!"
            });

          } else {
            setLoginStatus({ ...loginStatus })
            return;
          }
        }
        login(userCredential.user.accessToken);
        navigate("/curriculums");

      }
    } catch (error) {
      setLoginStatus({
        status: "Fail",
        message: "Error de autenticación de terceros"
      })
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validation(loginInfo, 'all');
    setErrors(validationErrors);

    console.log(errors);

    if (
      !loginInfo.email ||
      !loginInfo.password
    ) {
      setLoginStatus({
        status: "Fail",
        message: "Faltan completar campos obligatorios"
      });
    } else {
      if (!errors.email &&
        !errors.password
      ) {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password);
          console.log("User Credential: ", userCredential);
          const emailVerified = userCredential.user.emailVerified;

          if (emailVerified) {
            login(userCredential.user.accessToken);

            setLoginStatus({
              status: "Success",
              message: "¡Bienvenido!"
            });

            navigate("/curriculums");

          } else {
            setLoginStatus({
              status: "Fail",
              message: "Por favor verificá tu correo electrónico con el enlace que enviamos a tu casilla de correo"
            });
          }
        } catch (error) {
          setLoginStatus({
            status: "Fail",
            message: "Email o contraseña incorrectos"
          });
        }
      }
    }
  };

  return (
    <div className={styles.signIn}>
      <div className={styles.containerLeft}>
        <img className={styles.illustration} src={image} alt="ilustración"></img>
      </div>
      <div className={styles.containerRight}>
        <h1 className={styles.txtSemiBold32Black}>Iniciar Sesión</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.vertical}>
            <label className={styles.txtSemiBold16Purple}>EMAIL</label>
            <input
              className={styles.input}
              name="email"
              type="text"
              placeholder="Ingresá tu email..."
              onChange={handleChange}
              value={loginInfo.email}
            />
            {errors.email ? <p className={styles.txtError}>{errors.email}</p> : null}
          </div>
          <div className={styles.vertical}>
            <label className={styles.txtSemiBold16Purple}>CONTRASEÑA</label>
            <div className={styles.containerPassword}>
              <input
                className={styles.input}
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Ingresá tu contraseña..."
                onChange={handleChange}
                value={loginInfo.password}
              />
              <button
                className={styles.btnEye}
                type="button"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <svg
                    className={styles.icn}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
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
                    strokeWidth="2"
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
          <Link className={styles.txtSemiBold12Purple} to="/resetpassword">¿Olvidaste tu contraseña?</Link>
          <button className={styles.btnLogin}>INICIAR SESION</button>
        </form>
        {loginStatus.status ? <p className={loginStatus.status === "Success" ? styles.txtSemiBold16Green : styles.txtError16}>{loginStatus.message}</p> : null}
        <p className={styles.txtSemiBold12Purple}>O INICIA SESION CON</p>
        <button className={styles.btnGoogle} onClick={loginWithGoogle}>
          <svg className={styles.icn} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
            <g fill="#3e3e70"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none" >
              <g transform="scale(8.53333,8.53333)">
                <path d="M15.00391,3c-6.629,0 -12.00391,5.373 -12.00391,12c0,6.627 5.37491,12 12.00391,12c10.01,0 12.26517,-9.293 11.32617,-14h-1.33008h-2.26758h-7.73242v4h7.73828c-0.88958,3.44825 -4.01233,6 -7.73828,6c-4.418,0 -8,-3.582 -8,-8c0,-4.418 3.582,-8 8,-8c2.009,0 3.83914,0.74575 5.24414,1.96875l2.8418,-2.83984c-2.134,-1.944 -4.96903,-3.12891 -8.08203,-3.12891z"></path></g></g>
          </svg>
          Google
        </button>
        <div className={styles.containerSignUp}>
          <p className={styles.txtSemiBold16Green}>¿No tenés cuenta?</p>
          <Link className={styles.txtSemiBold16Green} to="/signup">Registrate</Link>
        </div>
      </div>
    </div>
  )
};

export default SignIn; 
