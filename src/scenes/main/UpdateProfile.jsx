import styles from "./UpdateProfile.module.css"

import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

import updateUser from "../../redux/actions/users/updateUser";
import getUserById from '../../redux/actions/users/getUserById';
import { auth } from "../../config/firebase-config";
import { updateProfile } from 'firebase/auth';


import validation from "./updateProfileValidation"


function UpdateProfile() {
    const navigate = useNavigate();
    const localStorageUser = JSON.parse(localStorage.getItem('currentUser'));
    const userId = localStorageUser.id;

    const [newUserInfo, setNewUserInfo] = useState({
        name: null,
        email: null,
        password: null,
        repeatPassword: null,
        photo: null,
    });

    const [updateStatus, setUpdateStatus] = useState({
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

    useEffect(() => {
        const getUserData = async () => {
            const userData = await getUserById(userId);
            if (userData) {
                setNewUserInfo({
                    name: userData.name || '',
                    email: userData.email || '',
                    password: '',
                    repeatPassword: '',
                    photo: userData.photo || '',
                });
            }
        };

        getUserData();
    }, [userId]);


    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setNewUserInfo({
                    ...newUserInfo,
                    photo: reader.result
                });
            };

            reader.readAsDataURL(file);
        }
    };

    const handleChange = (event) => {
        setUpdateStatus({
            status: null,
            message: null
        });

        setNewUserInfo({
            ...newUserInfo,
            [event.target.name]: event.target.value
        });

        const validationErrors = validation({
            ...newUserInfo,
            [event.target.name]: event.target.value,
        }, event.target.name);

        setErrors({
            ...errors,
            [event.target.name]: validationErrors[event.target.name]
        }
        );
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

        const validationErrors = validation(newUserInfo, 'all');
        setErrors(validationErrors);

        if (newUserInfo.name &&
            newUserInfo.email &&
            newUserInfo.password &&
            newUserInfo.repeatPassword) {
            if (!errors.name &&
                !errors.email &&
                !errors.password &&
                !errors.repeatPassword) {

                console.log("ADENTRO DEL IF");

                const updateStatus = await updateUser(userId, newUserInfo);
                setUpdateStatus({ ...updateStatus })

                if (updateStatus.status === "Success") {

                    await updateProfile(auth.currentUser, {
                        displayName: newUserInfo.name,
                        email: newUserInfo.email,
                        password: newUserInfo.password,
                        photoURL: newUserInfo.photo
                    });

                    setTimeout(() => {
                        navigate("/myprofile");
                    }, 2000);
                }
            }

        } else {
            setUpdateStatus({
                status: "Fail",
                message: "Faltan completar campos obligatorios"
            })
        };
    };

    return (
        <div className={styles.updateProfile}>
            <h1 className={styles.txtSemiBold32Black}>Editar Perfil</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.vertical}>
                    <label className={styles.txtSemiBold16Purple}>FOTO DE PERFIL</label>
                    <input
                        className={styles.input}
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                    <label className={styles.txtSemiBold16Purple}>NOMBRE DE USUARIO</label>
                    <input
                        className={styles.input}
                        name='name'
                        type='text'
                        placeholder='Ingresá un nombre de usuario...'
                        onChange={handleChange}
                        value={newUserInfo.name}
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
                        value={newUserInfo.email}
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
                            value={newUserInfo.password}
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
                            value={newUserInfo.repeatPassword}
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
                <button className={styles.btnRegister}>Actualizar</button>
            </form>
            {updateStatus ?
                <p className={updateStatus.status === "Success" ? styles.txtSemiBold16Green : styles.txtError16}>{updateStatus.message}</p>
                : null}
            <Link className={styles.txtRegular16PurpleUnderlined} to="/myprofile">Volver</Link>
        </div>
    )
};

export default UpdateProfile; 
