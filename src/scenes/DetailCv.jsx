import styles from "./Curriculums.module.css";

import { useSelector } from 'react-redux';


function DetailCv() {
    const cv = useSelector((state) => state.cvs.cvDetail);

    return (
        <div>
            <div className={styles.containerLeft}>
                <h1>{cv.name}</h1>
                <h2>{cv.header}</h2>
                <img src={cv.image} alt="foto" />
                <h3>INFORMACIÓN DE CONTACTO</h3>
                <p>{cv.contact.location}</p>
                <p>{cv.contact.phone}</p>
                <p>{cv.contact.email}</p>
                <p>{cv.contact.website}</p>
                <h3>SOBRE MÍ</h3>
                <p>{cv.description}</p>
            </div>
            <div className={styles.containerRight}>
                <h3>EXPERIENCIA</h3>
                <h3>EDUCACION</h3>
                <h3>IDIOMAS</h3>
                <h3>COMPETENCIAS</h3>
                <h3>OTROS INTERESES</h3>
            </div>
        </div>
    )
};

export default DetailCv;