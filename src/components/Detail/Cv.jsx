import styles from "./Cv.module.css";

import { useSelector } from 'react-redux';


function DetailCv() {
    const cv = useSelector((state) => state.cvs.cvDetail);

    return (
        <div className={styles.cv}>
            <div className={styles.containerLeft}>
                <h1>FLORENCIA SOLDAVINI</h1>
                <h2>DISEÑADORA & DESARROLLADORAWEB FULL STACK</h2>
                <div className={styles.containerSection}>
                    <h3>/ INFORMACIÓN DE CONTACTO</h3>
                    <div className={styles.containerList}>
                        <p>Ciudad Autónoma de Buenos Aires, Argentina</p>
                        <p>+ 54 9 11 6466-5433</p>
                        <p>florenciasoldavinivarela@gmail.com</p>
                        <p>https://github.com/florenciasoldavini</p>
                    </div>
                </div>
                <div className={styles.containerSection}>
                    <h3>/ SOBRE MÍ</h3>
                    <p>
                        Mi primera formación es en arquitectura e interiorismo. Persiguiendo un estilo de vida nómade y una carrera más rentable me sumergí en el diseño UX/UI y adquirí habilidades de programación durante un bootcamp de 4 meses. Mi meta es destacar como desarrolladora y diseñadora web, colaborar en proyectos innovadores y continuar explorando el mundo del diseño digital. Mi valiosa combinación de experiencia en diseño y desarrollo me convierte en un activo sólido para cualquier equipo, capaz de aportar una perspectiva única.
                    </p>
                </div>
            </div>
            <div className={styles.containerRight}>
                <div className={styles.containerSection}>
                    <h3>/ EXPERIENCIA</h3>
                    <div>
                        <h4>Pokemon App - Proyecto Individual</h4>
                        <p>Soy Henry Bootcamp | 2023</p>
                        <p>Diseñar y desarrollar una app de pokemones que incluía: búsquedas, filtrados, ordenamientos y creación. Desarrollar la app usando para el Front React, Redux, CSS puro y Back desarrollado en Node.js con Express.</p>
                    </div>
                </div>
                <div className={styles.containerSection}>
                    <h3>/ EDUCACION</h3>
                    <div>
                        <h4>Full Stack Web Developer</h4>
                        <p>Soy Henry Bootcamp | Julio 2023 - Actualidad</p>
                    </div>
                </div>
                <div className={styles.containerSection}>
                    <h3>/ IDIOMAS</h3>
                    <div className={styles.containerList}>
                        <p>Inglés</p>
                        <p>Italiano</p>
                    </div>
                </div>
                <div className={styles.containerSection}>
                    <h3>/ COMPETENCIAS</h3>
                    <div className={styles.containerList}>
                        <p>HTML + CSS</p>
                        <p>Javascript</p>
                        <p>Typescript</p>
                        <p>React + Redux</p>
                        <p>Redux Toolkit</p>
                        <p>React Native</p>
                        <p>Express</p>
                        <p>Node.js</p>
                        <p>SQL</p>
                        <p>Postman</p>
                        <p>Figma</p>
                        <p>Adobe XD</p>
                        <p>Photoshop</p>
                        <p>Illustrator</p>
                    </div>
                </div>
                <div className={styles.containerSection}>
                    <h3>/ OTROS INTERESES</h3>
                    <div className={styles.containerList}>
                        <p>Fotografía</p>
                        <p>Arquitectura, interiorismo y paisajismo</p>
                        <p>Modelado 3D y renderizado</p>
                        <p>Diseño gráfico</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DetailCv;