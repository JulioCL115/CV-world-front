import styles from "./Cards.module.css"

import Card from "./Card";
import getCvDetail from "../../redux/actions/cvs/getCvDetail";
import updateCv from "../../redux/actions/cvs/updateCv";
import Error404 from "../../scenes/Error404"

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Cards() {
    const dispatch = useDispatch();
    const cvs = useSelector((state) => state.cvs.allCvs);


    const handleClick = (id) => {
        dispatch(getCvDetail(id));
        dispatch(updateCv({ id, views: 1 }));
    }

    return (
        <div className={styles.cards}>
            {
                cvs ? cvs.map(({ id, name, image, header, contact, description, experience, education, speakingLanguages, skills, otherInterests, views, creationDate, category, language, subscription }) => {
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

