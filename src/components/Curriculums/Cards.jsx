import styles from "./Cards.module.css"

import Card from "./Card";
import updateCv from "../../redux/actions/cvs/updateCv";

import { useNavigate, useLocation } from "react-router-dom";

function Cards({ cvs }) {
    const navigate = useNavigate();
    const location = useLocation();
    const isMyCvs = location.pathname === "/mycvs";
    const isCurriculums = location.pathname === "/curriculums";

    const handleClick = (id) => {
        updateCv({ id, views: 1 });
        navigate(`/detail/${id}`);
    }

    return (
        <div className={styles.cards}>
            {
                cvs ? cvs.map(({ id, name, image, header, contact, description, experience, education, speakingLanguages, skills, otherInterests, views, creationDate }) => (
                    <div key={id} className={styles.containerCards}>
                        <div onClick={() => handleClick(id)}>
                            <Card
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
                        </div>
                        <p className={styles.txtLight12Black}> views: {views}</p>
                        <p className={styles.txtLight12Black}>{creationDate}</p>
                    </div>
                )) : null
            }
        </div>
    )
};

export default Cards;

