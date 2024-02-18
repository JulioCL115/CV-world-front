import styles from "./Cards.module.css"

import Card from "./Card";
import getCvDetail from "../../redux/actions/cvs/getCvDetail";
import updateCv from "../../redux/actions/cvs/updateCv";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Cards({ cvs }) {
    const dispatch = useDispatch();


    const handleClick = (id) => {
        dispatch(getCvDetail(id));
        dispatch(updateCv({ id, views: 1 }));
    }
    console.log(cvs);

    return (
        <div className={styles.cards}>
            {cvs ? cvs.map(({ id, name, image, header, contact, description, experience, education, speakingLanguages, skills, otherInterests, views, creationDate, category, language, subscription }) => {
                return <Link className={styles.btn}
                    to={`/detail/${id}`}
                    onClick={handleClick(id)}
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
                >
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
                    <p>{header}</p>
                </Link>

            }) : null
            }
        </div>
    )
};

export default Cards;
