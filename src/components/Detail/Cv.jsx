import styles from "./Cv.module.css";

import { useSelector } from 'react-redux';


function DetailCv({ id, name, image, header, contact, description, experience, education, speakingLanguages, skills, otherInterests }) {
    const cv = useSelector((state) => state.cvs.cvDetail);
    
        console.log(cv);

    return (
        <div className={styles.cv}>
            <div className={styles.containerLeft}>
                <h1 className={styles.txtRegular64Black}>{name}</h1>
                <h2 className={styles.txtSemiBold24Black}>{header}</h2>
                <div className={styles.containerSection}>
                    <h3 className={styles.txtSemiBold20Black}>/ INFORMACIÓN DE CONTACTO</h3>
                    <div className={styles.containerList}>
                        <p className={styles.txtRegular16Black}>{contact.location}</p>
                        <p className={styles.txtRegular16Black}>{contact.phone}</p>
                        <p className={styles.txtRegular16Black}>{contact.email}</p>
                        <p className={styles.txtRegular16Black}>{contact.website}</p>
                    </div>
                </div>
                <div className={styles.containerSection}>
                    <h3 className={styles.txtSemiBold20Black}>/ SOBRE MÍ</h3>
                    <p className={styles.txtRegular16Black}>
                        {description}
                    </p>
                </div>
            </div>
            <div className={styles.containerRight}>
                <div className={styles.containerSection}>
                    <h3 className={styles.txtSemiBold20Black}>/ EXPERIENCIA</h3>
                    {experience.map((experience, index) => {
                        return <div key={index}>
                            <h4 className={styles.txtSemiBold16Black}>>> {experience.role}</h4>
                            <p className={styles.txtRegular16Black}>{experience.company} | {experience.dateRange}</p>
                            <p className={styles.txtRegular16Black}>{experience.responsibilities}</p>
                        </div>
                    }
                    )}
                </div>
                <div className={styles.containerSection}>
                    <h3 className={styles.txtSemiBold20Black}>/ EDUCACION</h3>
                    {education.map((education, index) => {
                        return <div key={index}>
                            <h4 className={styles.txtSemiBold16Black}>>> {education.career}</h4>
                            <p className={styles.txtRegular16Black}>{education.institution} | {education.dateRange}</p>
                        </div>
                    })
                    }
                </div>
                <div className={styles.containerSection}>
                    <h3 className={styles.txtSemiBold20Black}>/ IDIOMAS</h3>
                    <div className={styles.containerList}>
                        <ul>
                            {speakingLanguages.map((skill, index) => {
                                return <li key={index} className={styles.txtRegular16Black}>{skill}</li>
                            })
                            }
                        </ul>
                    </div>
                </div>
                <div className={styles.containerSection}>
                    <h3 className={styles.txtSemiBold20Black}>/ COMPETENCIAS</h3>
                    <div className={styles.containerList}>
                        <ul>
                            {skills.map((skill, index) => {
                                return <li key={index} className={styles.txtRegular16Black}>{skill}</li>
                            })
                            }
                        </ul>
                    </div>
                </div>
                <div className={styles.containerSection}>
                    <h3 className={styles.txtSemiBold20Black}>/ OTROS INTERESES</h3>
                    <ul>
                        {otherInterests.map((interest, index) => {
                            return <li key={index} className={styles.txtRegular16Black}>{interest}</li>
                        })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default DetailCv;