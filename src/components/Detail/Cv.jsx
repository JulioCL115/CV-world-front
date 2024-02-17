import styles from "./Cv.module.css";

import { useSelector } from 'react-redux';


function DetailCv({ id, name, image, header, contact, description, experience, education, speakingLanguages, skills, otherInterests }) {
    const cv = useSelector((state) => state.cvs.cvDetail);
    
        console.log(cv);

    return (
        <div className={styles.cv}>
            <div className={styles.containerLeft}>
                <h1 className={styles.txtRegular64Black}>{cv.name}</h1>
                <h2 className={styles.txtSemiBold24Black}>{cv.header}</h2>
                <div className={styles.containerSection}>
                    <h3 className={styles.txtSemiBold20Black}>/ INFORMACIÓN DE CONTACTO</h3>
                    <div className={styles.containerList}>
                        <p className={styles.txtRegular16Black}>{cv.contact?.location}</p>
                        <p className={styles.txtRegular16Black}>{cv.contact?.phoneNumber}</p>
                        <p className={styles.txtRegular16Black}>{cv.contact?.email}</p>
                        <p className={styles.txtRegular16Black}>{cv.contact?.website}</p>
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
                    {cv.experience.map((experience, index) => {
                        return <div key={index}>
                            <h4 className={styles.txtSemiBold16Black}>{experience?.dates}</h4>
                            <p className={styles.txtRegular16Black}>{experience?.company} ||{experience?.dateRange}</p>
                            <p className={styles.txtRegular16Black}>{experience?.description}</p>
                        </div>
                    }
                    )}
                </div>
                <div className={styles.containerSection}>
                    <h3 className={styles.txtSemiBold20Black}>/ EDUCACION</h3>
                    {cv.education.map((education, index) => {
                        return <div key={index}>
                            <h4 className={styles.txtSemiBold16Black}> {education?.career}</h4>
                            <p className={styles.txtRegular16Black}>{education?.institution} || {education?.dateRange}</p>
                        </div>
                    })
                    }
                </div>
                <div className={styles.containerSection}>
                    <h3 className={styles.txtSemiBold20Black}>/ IDIOMAS</h3>
                    <div className={styles.containerList}>
                        <ul>
                            {cv.speakingLanguages.map((skill, index) => {
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
                            {cv.skills.map((skill, index) => {
                                return <li key={index} className={styles.txtRegular16Black}>{skill}</li>
                            })
                            }
                        </ul>
                    </div>
                </div>
                <div className={styles.containerSection}>
                    <h3 className={styles.txtSemiBold20Black}>/ OTROS INTERESES</h3>
                    <ul>
                        {cv.otherInterests.map((interest, index) => {
                            return <li key={index} className={styles.txtRegular16Black}>{interest}</li>
                        })
                        }
                    </ul>
                </div>
                <div>
                <img src={cv.image[0].secure_url} alt="logo" width={"50%"}></img>
                </div>
            </div>
        </div>
    )
};

export default DetailCv;