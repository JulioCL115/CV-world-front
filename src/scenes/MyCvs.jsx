import styles from "./MyCvs.module.css"
import Illustration from "../assets/CV-Example-Creation-Illustration.webp"
import Card from "../components/Curriculums/Card";


import { Link } from "react-router-dom";

function MyCvs() {
    // const storedUser = localStorage.getItem('currentUser');

     const storedUser = {
        cvs: [],
         subscription: "Plan Básico"
     }

    // const storedUser = {
    //     cvs: [],
    //     subscription: "Plan Premium"
    // }

    return (
        <div className={styles.myCvs}>
            <div className={styles.containerTop}>
                <h1 className={styles.txtSemiBold32Black}>Mis CV's</h1>
            </div>
            {storedUser && storedUser.cvs.length ?
                <div className={styles.containerCenter}>
                    {/* {storedUser.cvs.map(({ id, name, image, header, contact, description, experience, education, speakingLanguages, skills, otherInterests }) => {
                        return (
                            <Card key={id}
                                id={id}
                                name={name}
                                image={image}
                                header={header}
                                contact={contact}
                                description={description}
                                experience={experience}
                                education={education}
                                speakingLanguages={speakingLanguages}
                                skills={skills}
                                otherInterests={otherInterests}
                            />
                        )
                    })} */}
                </div> :
                <div className={styles.containerCenter}>
                    <img className={styles.img} src={Illustration} alt="Illustration" />
                    <p className={styles.txtSemiBold16Purple}>Parece que todavía no tenés currículums cargados</p>
                </div>
            }
            <Link to={storedUser && storedUser.cvs.length === 1 && storedUser.subscription === "Plan Básico" ? "/upgradesubscription" : "/createcv"}>
                <button className={styles.btn}>Cargar CV</button>
            </Link>
        </div>

    )
};

export default MyCvs;