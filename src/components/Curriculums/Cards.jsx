import styles from "./Cards.module.css"
import Card from "./Card";
import { useSelector } from "react-redux";

function Cards() {
    const cvs = useSelector((state) => state.cvs.allCvs);

    return (
        <div className={styles.cards}>
            {
                cvs.map(({ id, name, image, header, description, experience, education, speakingLanguages, skills, otherIntrests }) => {
                    return <Card key={id}
                        id={id}
                        name={name}
                        image={image}
                        header={header}
                        description={description}
                        experience={experience}
                        education={education}
                        speakingLanguages={speakingLanguages}
                        skills={skills}
                        otherIntrests={otherIntrests}
                    />
                })
            }
        </div>
    )
};

export default Cards;

