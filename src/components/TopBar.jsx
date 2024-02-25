
import styles from "./TopBar.module.css";

import { Link } from "react-router-dom";

import Logo from "../assets/Logo-Black.png";
import LogoProfileImage from "../assets/Logo_Round.png"
import logout from "../redux/actions/users/logout";
import { auth } from "../config/firebase-config"
import { signOut } from "firebase/auth"
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom"; 


function TopBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const storedUser = localStorage.getItem('currentUser');
    const [currentUser, setCurrentUser] = useState(
        storedUser && storedUser !== "[object Object]" ? JSON.parse(storedUser) : null
    );
    const [selectedMenu, setSelectedMenu] = useState("home");

    useEffect(() => {
        // Set the selectedMenu based on the current path
        switch (location.pathname) {
          case '/home':
            setSelectedMenu('home');
            break;
          case '/curriculums':
            setSelectedMenu('curriculums');
            break;
          case '/subscriptions':
            setSelectedMenu('subscriptions');
            break;
          // Add more cases for other paths if needed
          default:
            setSelectedMenu('');
        }
      }, [location.pathname]); 

    useEffect(() => {
        const handleStorageChange = () => {
            setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
        };
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);


    const logOut = async () => {
        try {
            await signOut(auth);
            logout();

            setTimeout(() => {
                navigate("/signin");
            }, 2000);
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <div className={styles.topbar}>
            <div className={styles.containerLeft}>
                <Link className={selectedMenu === "home" ? styles.txtSemiBold16Black : styles.txtRegular16Black}  to="/home" >Home</Link>
                <Link className={selectedMenu === "curriculums" ? styles.txtSemiBold16Black : styles.txtRegular16Black} to="/curriculums" >Currículums</Link>
                <Link className={selectedMenu === "subscriptions" ? styles.txtSemiBold16Black : styles.txtRegular16Black} to="/subscriptions" >Suscripciones</Link>
            </div>
            <div className={styles.containerCenter}>
                <h1 className={styles.txt} id={styles.h1}>CV World</h1>
                <img className={styles.logo} src={Logo} alt="logo"></img>
            </div>
            <div className={styles.containerRight}>
                {currentUser ?
                    <button className={styles.btn}>
                        <svg className={styles.icn}
                            id={styles.icnBell}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            class="w-30 h-30">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                    </button>
                    : null}
                <div className={styles.containerLogin}>
                    {currentUser ?
                        <div className={styles.dropdown}>
                            <button className={styles.btnDropdown}>
                                <svg className={styles.icn}
                                    id={styles.icnDropdown}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                                {currentUser.name}
                            </button>

                            <div className={styles.dropdownContent}>
                                <Link className={styles.txtRegular16Black} to="/myprofile">Mi Perfil</Link>
                                <Link className={styles.txtRegular16Black} to="/mycvs">Mis CVs</Link>
                                {currentUser.role === "admin" ? <Link className={styles.txtRegular16Black} to="/admin/analytics">Admin Dashboard</Link> : null}
                                <a href="/signin" onClick={logOut}>Cerrar sesión</a>
                            </div>
                        </div>
                        : <Link className={styles.txtRegular16Underlined} to="/signin">Iniciar sesión</Link>
                    }
                    {currentUser ?
                        (currentUser?.photo ?
                            <img className={styles.profilePicture} src={currentUser && currentUser?.photo} alt="logo"></img> :
                            <img className={styles.profilePicture} src={LogoProfileImage} alt="logo"></img>)
                            : <svg className={styles.icn} id={styles.icnUser} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" class="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    }
                </div>
            </div>
        </div>
    );
}

export default TopBar;

