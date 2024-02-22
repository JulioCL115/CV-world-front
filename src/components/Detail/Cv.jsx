import styles from "./Cv.module.css";

function DetailCv({ cv }) {

    console.log(cv);

    let contact = cv && cv.contact && Array.isArray(cv.contact) ? cv.contact[0] : cv.contact;


    return (
        <div className={styles.cv}>
            {cv ?
                <div className={styles.container}>
                    <div className={styles.containerLeft}>
                        {cv.image ? <img className={styles.img} src={cv.image} alt="Profile" /> : null}
                        <h1 className={styles.txtRegular64Black}>{cv.userName}</h1>
                        <h2 className={styles.txtSemiBold24Black}>{cv.header}</h2>
                        <div className={styles.containerSection}>
                            <h3 className={styles.txtSemiBold20Black}>/ INFORMACIÓN DE CONTACTO</h3>
                            <div className={styles.containerList}>
                                <p className={styles.txtRegular16Black}>{cv && contact ? contact.location : null}</p>
                                <p className={styles.txtRegular16Black}>{cv && contact ? contact.phone : null}</p>
                                <p className={styles.txtRegular16Black}>{cv && contact ? contact.email : null}</p>
                                <p className={styles.txtRegular16Black}>{cv && contact ? contact.website : null}</p>
                            </div>
                        </div>
                        <div className={styles.containerSection}>
                            <h3 className={styles.txtSemiBold20Black}>/ SOBRE MÍ</h3>
                            <p className={styles.txtRegular16Black}>
                                {cv.description}
                            </p>
                        </div>
                    </div>
                    <div className={styles.containerRight}>
                        <div className={styles.containerSection}>
                            <h3 className={styles.txtSemiBold20Black}>/ EXPERIENCIA</h3>
                            {cv.experience.map((experience, index) => {
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
                            {cv.education.map((education, index) => {
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
                    </div>
                </div> : null}
        </div>
    )
};

export default DetailCv;