import styles from './Footer.module.css';

import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "./../assets/Logo-White.png";

function Footer() {

    const [email, setEmail] = useState("");

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = () => { };

    return (
        <div className={styles.footer}>
            <div className={styles.vertical}>
                <div className={styles.horizontal} id={styles.containerTop}>
                    <div className={styles.vertical} id={styles.containerTopLeft}>
                        <div className={styles.horizontal}>
                            <h1 className={styles.txtLogo} id={styles.h1}>CV World</h1>
                            <img className={styles.logo} src={Logo} alt="logo-white" />
                        </div>
                        <p className={styles.txtRegular16}>Mantenete al tanto de nuestras novedades y lanzamientos
                            suscribiéndote a nuestro newsletter.</p>
                        <div className={styles.horizontal}>
                            <input className={styles.input} name="email" type="text" placeholder="Ingresá tu mail..." value={email} onChange={handleChange} />
                            <button className={styles.btn} onClick={handleSubmit}>
                                <p className={styles.txtRegular16}>Aceptar</p>
                            </button>
                        </div>
                        <p className={styles.txtRegular12} id="small">Al suscribirte estás aceptando nuestras Políticas de Privacidad y accediendo a
                            recibir novedades de nuestra compañía.</p>
                    </div>
                    <div className={styles.horizontal} id={styles.containerTopRight}>
                        <div className={styles.vertical}>
                            <h2 className={styles.txtSemiBold16}>Páginas</h2>
                            <p>
                                <Link className={styles.txtRegular16} to="/">Home</Link>
                            </p>
                            <p>
                                <Link className={styles.txtRegular16} to="/curriculums">Currículums</Link>
                            </p>
                            <p>
                                <Link className={styles.txtRegular16} to="/suscripciones">Suscripciones</Link>
                            </p>
                        </div>
                        <div className={styles.vertical}>
                            <h2 className={styles.txtSemiBold16}>Seguinos</h2>
                            <div className={styles.horizontal}>
                                <svg className={styles.icn} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="2.5" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"  ><g transform="scale(5.12,5.12)"><path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path></g></g>
                                </svg>
                                <p className={styles.txtRegular16}>Instagram</p>
                            </div>
                            <div className={styles.horizontal}>
                                <svg className={styles.icn} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="2.5" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"  ><g transform="scale(5.12,5.12)"><path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path></g></g>
                                </svg>
                                <p className={styles.txtRegular16}>Twitter</p>
                            </div>
                            <div className={styles.horizontal}>
                                <svg className={styles.icn} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="2.5" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"  ><g transform="scale(5.12,5.12)"><path d="M9,4c-2.75042,0 -5,2.24958 -5,5v32c0,2.75042 2.24958,5 5,5h32c2.75042,0 5,-2.24958 5,-5v-32c0,-2.75042 -2.24958,-5 -5,-5zM9,6h32c1.67158,0 3,1.32842 3,3v32c0,1.67158 -1.32842,3 -3,3h-32c-1.67158,0 -3,-1.32842 -3,-3v-32c0,-1.67158 1.32842,-3 3,-3zM26.04297,10c-0.5515,0.00005 -0.99887,0.44655 -1,0.99805c0,0 -0.01098,4.87522 -0.02148,9.76172c-0.0053,2.44325 -0.01168,4.88902 -0.01562,6.73047c-0.00394,1.84145 -0.00586,3.0066 -0.00586,3.10352c0,1.81526 -1.64858,3.29883 -3.52734,3.29883c-1.86379,0 -3.35156,-1.48972 -3.35156,-3.35352c0,-1.86379 1.48777,-3.35156 3.35156,-3.35156c0.06314,0 0.1904,0.02075 0.4082,0.04688c0.28415,0.03406 0.56927,-0.05523 0.78323,-0.24529c0.21396,-0.19006 0.33624,-0.46267 0.33591,-0.74885v-4.20117c-0.00005,-0.528 -0.41054,-0.965 -0.9375,-0.99805c-0.15583,-0.0098 -0.35192,-0.0293 -0.58984,-0.0293c-5.24953,0 -9.52734,4.27782 -9.52734,9.52734c0,5.24953 4.27782,9.52734 9.52734,9.52734c5.24938,0 9.52734,-4.27782 9.52734,-9.52734v-9.04883c1.45461,1.16341 3.26752,1.90039 5.26953,1.90039c0.27306,0 0.53277,-0.01618 0.78125,-0.03906c0.51463,-0.04749 0.90832,-0.47927 0.9082,-0.99609v-4.66992c0.0003,-0.52448 -0.40463,-0.9601 -0.92773,-0.99805c-3.14464,-0.22561 -5.65141,-2.67528 -5.97852,-5.79102c-0.05305,-0.50925 -0.48214,-0.89619 -0.99414,-0.89648zM27.04102,12h2.28125c0.72678,3.2987 3.30447,5.8144 6.63672,6.44531v2.86523c-2.13887,-0.10861 -4.01749,-1.1756 -5.12305,-2.85742c-0.24284,-0.36962 -0.69961,-0.53585 -1.12322,-0.40877c-0.4236,0.12708 -0.71344,0.51729 -0.71272,0.95955v11.53516c0,4.16848 -3.35873,7.52734 -7.52734,7.52734c-4.16848,0 -7.52734,-3.35887 -7.52734,-7.52734c0,-4.00052 3.12077,-7.17588 7.05469,-7.43164v2.17578c-2.71358,0.25252 -4.87891,2.47904 -4.87891,5.25586c0,2.94421 2.40735,5.35352 5.35156,5.35352c2.92924,0 5.52734,-2.30609 5.52734,-5.29883c0,0.04892 0.00186,-1.25818 0.00586,-3.09961c0.0039,-1.84143 0.01037,-4.28722 0.01563,-6.73047c0.0094,-4.3869 0.0177,-7.91447 0.01953,-8.76367z"></path></g></g>
                                </svg>
                                <p className={styles.txtRegular16}>TikTok</p>
                            </div>
                        </div>
                        <div className={styles.vertical}>
                            <h2 className={styles.txtSemiBold16}>Contactanos</h2>
                            <div className={styles.horizontal}>
                                <svg className={styles.icn} xmlns="http://www.w3.org/2000/svg" fill="none" color="white" width="20px" height="20px" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>

                                <p className={styles.txtRegular16}>cvworld@gmail.com</p>
                            </div>
                            <div className={styles.horizontal}>
                                <svg className={styles.icn} xmlns="http://www.w3.org/2000/svg" fill="none" color="white" width="20px" height="20px" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <p className={styles.txtRegular16}>+54 9 11 1234-5678</p>
                            </div>
                            <div className={styles.horizontal}>
                                <svg className={styles.icn} xmlns="http://www.w3.org/2000/svg" fill="none" color="white" width="20px" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" class="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <p className={styles.txtRegular16}>Calle Ejemplo 1234, CABA</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="solid" className={styles.divider}/>
                <div className={styles.horizontal} id={styles.containerBottom}>
                    <p className={styles.txtRegular16}>© 2024. Created by Henry students. All rights reserved.</p>
                    <div className={styles.horizontal} id={styles.containerBottomRight}>
                        <p className={styles.txtRegular16Underlined}>Políticas de Provacidad</p>
                        <p className={styles.txtRegular16Underlined}>Términos y condiciones</p>
                        <p className={styles.txtRegular16Underlined}>Configuración de Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer; 
