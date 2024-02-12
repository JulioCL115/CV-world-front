
import styles from "./TopBar.module.css";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


import Logo from "../assets/Logo-Black.png";
import logout from "../redux/actions/users/logout";

// import { AuthContext } from "../AuthProvider/authProvider";
// import { app, auth } from "../config/firebase-config"
import { signOut } from "firebase/auth"


function TopBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const currentUser = useSelector((state) => state.users.currentUser);

    // const { token, setToken } = useContext(AuthContext) || {};

    // const token = localStorage.getItem('token')

    const logOut = async (auth, setToken) => {
        try {
            await signOut(auth);
            dispatch(logout());
            navigate('/home');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    // if (token?.token) {
    //     console.log('Usuario autenticado:', token.token);
    // }

    // const tokenInfo = token?.token

    return (
        <div className={styles.topbar}>
            <div className={styles.containerLeft}>
                <Link className={styles.txtRegular16} to="/">Home</Link>
                <Link className={styles.txtRegular16} to="/curriculums">Currículums</Link>
                <Link className={styles.txtRegular16} to="/subscriptions">Suscripciones</Link>
            </div>
            <div className={styles.containerCenter}>
                <h1 className={styles.txt} id={styles.h1}>CV World</h1>
                <img className={styles.logo} src={Logo} alt="logo"></img>
            </div>
            <div className={styles.containerRight}>
                {currentUser ?
                    <button className={styles.btn}>
                        <svg className={styles.icn} id={styles.icnBell} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-30 h-30">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                    </button>
                    : null}
                <div className={styles.containerLogin}>
                    {currentUser ?
                        <div className={styles.dropdown}>

                            <button className={styles.btnDropdown}>
                                <svg className={styles.icn} id={styles.icnDropdown} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>

                                {currentUser.name}
                            </button>

                            <div className={styles.dropdownContent}>
                                <Link className={styles.txtRegular16} to="/myprofile">Mi Perfil</Link>
                                <Link className={styles.txtRegular16} to="/mycvs">Mis CVs</Link>
                                <a href="#" onClick={logOut}>Cerrar sesión</a>
                            </div>
                        </div>
                        : <Link className={styles.txtRegular16Underlined} to="/signin">Iniciar sesión</Link>
                    }
                    {currentUser ?
                        <img className={styles.profilePicture} src={currentUser.image} alt="logo"></img>
                        : <svg className={styles.icn} id={styles.icnUser} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    }
                </div>

            </div>
        </div>
    );
}

export default TopBar;

