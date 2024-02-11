import styles from "./Cv.module.css";

import { useSelector } from 'react-redux';


function DetailCv() {
    const cv = useSelector((state) => state.cvs.cvDetail);

    return (
        <div className={styles.cv}>
            <div className={styles.containerLeft}>
                <h1 className={styles.txtRegular64Black}>FLORENCIA SOLDAVINI</h1>
                <h2 className={styles.txtSemiBold24Black}>DISEÑADORA & DESARROLLADORA WEB FULL STACK</h2>
                <div className={styles.containerSection}>
                    <h3 className={styles.txtSemiBold20Black}>/ INFORMACIÓN DE CONTACTO</h3>
                    <div className={styles.containerList}>
                        <p className={styles.txtRegular16Black}>Ciudad Autónoma de Buenos Aires, Argentina</p>
                        <p className={styles.txtRegular16Black}>+ 54 9 11 6466-5433</p>
                        <p className={styles.txtRegular16Black}>florenciasoldavinivarela@gmail.com</p>
                        <p className={styles.txtRegular16Black}>https://github.com/florenciasoldavini</p>
                    </div>
                </div>
                <div className={styles.containerSection}>
                    <h3 className={styles.txtSemiBold20Black}>/ SOBRE MÍ</h3>
                    <p className={styles.txtRegular16Black}>
                        Mi primera formación es en arquitectura e interiorismo. Persiguiendo un estilo de vida nómade y una carrera más rentable me sumergí en el diseño UX/UI y adquirí habilidades de programación durante un bootcamp de 4 meses. Mi meta es destacar como desarrolladora y diseñadora web, colaborar en proyectos innovadores y continuar explorando el mundo del diseño digital. Mi valiosa combinación de experiencia en diseño y desarrollo me convierte en un activo sólido para cualquier equipo, capaz de aportar una perspectiva única.
                    </p>
                </div>
            </div>
            <div className={styles.containerRight}>
                <div className={styles.containerSection}>
                    <h3 className={styles.txtSemiBold20Black}>/ EXPERIENCIA</h3>
                    <div>
                        <h4 className={styles.txtSemiBold16Black}>>> Pokemon App - Proyecto Individual</h4>
                        <p>Soy Henry Bootcamp | 2023</p>
                        <p className={styles.txtRegular16Black}>
                            Diseñar y desarrollar una app de pokemones que incluía: búsquedas, filtrados, ordenamientos y creación. Desarrollar la app usando para el Front React, Redux, CSS puro y Back desarrollado en Node.js con Express.
                        </p>
                    </div>
                </div>
                <div className={styles.containerSection}>
                    <h3 className={styles.txtSemiBold20Black}>/ EDUCACION</h3>
                    <div>
                        <h4 className={styles.txtSemiBold16Black}>>> Full Stack Web Developer</h4>
                        <p className={styles.txtRegular16Black}>Soy Henry Bootcamp | Julio 2023 - Actualidad</p>
                    </div>
                </div>
                <div className={styles.containerSection}>
                    <h3 className={styles.txtSemiBold20Black}>/ IDIOMAS</h3>
                    <div className={styles.containerList}>
                        <p className={styles.txtRegular16Black}>Inglés</p>
                        <p className={styles.txtRegular16Black}>Italiano</p>
                    </div>
                </div>
                <div className={styles.containerSection}>
                    <h3 className={styles.txtSemiBold20Black}>/ COMPETENCIAS</h3>
                    <div className={styles.containerList}>
                        <p className={styles.txtRegular16Black}>HTML + CSS</p>
                        <p className={styles.txtRegular16Black}>Javascript</p>
                        <p className={styles.txtRegular16Black}>Typescript</p>
                        <p className={styles.txtRegular16Black}>React + Redux</p>
                        <p className={styles.txtRegular16Black}>Redux Toolkit</p>
                        <p className={styles.txtRegular16Black}>React Native</p>
                        <p className={styles.txtRegular16Black}>Express</p>
                        <p className={styles.txtRegular16Black}>Node.js</p>
                        <p className={styles.txtRegular16Black}>SQL</p>
                        <p className={styles.txtRegular16Black}>Postman</p>
                        <p className={styles.txtRegular16Black}>Figma</p>
                        <p className={styles.txtRegular16Black}>Adobe XD</p>
                        <p className={styles.txtRegular16Black}>Photoshop</p>
                        <p className={styles.txtRegular16Black}>Illustrator</p>
                    </div>
                </div>
                <div className={styles.containerSection}>
                    <h3 className={styles.txtSemiBold20Black}>/ OTROS INTERESES</h3>
                    <div className={styles.containerList}>
                        <p className={styles.txtRegular16Black}>Fotografía</p>
                        <p className={styles.txtRegular16Black}>Arquitectura, interiorismo y paisajismo</p>
                        <p className={styles.txtRegular16Black}>Modelado 3D y renderizado</p>
                        <p className={styles.txtRegular16Black}>Diseño gráfico</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DetailCv;