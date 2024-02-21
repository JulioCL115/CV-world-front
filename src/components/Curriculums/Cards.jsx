import styles from "./Cards.module.css"

import Card from "./Card";
import updateCv from "../../redux/actions/cvs/updateCv";
import Error404 from "../../scenes/main/Error404"

import { Link } from "react-router-dom";

function Cards({ cvs }) {
    console.log(cvs);


    const handleClick = (id) => {
        updateCv({ id, views: 1 });
    }

    return (
        <div className={styles.cards}>
            {
                cvs ? cvs.map(({ id, name, image, header, contact, description, experience, education, speakingLanguages, skills, otherInterests, views, creationDate, category, language, subscription }) => {
                    return <Link className={styles.btn}
                        to={`/detail/${id}`}
                        onClick={() => handleClick(id)}
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
                        <p>{views}</p>
                        <p>{creationDate}</p>
                        <p>{category}</p>
                        <p>{language}</p>
                        <p>{subscription}</p>
                    </Link>

                }) : <Error404 />
            }
        </div>
    )
};

export default Cards;

