import styles from "./Cards.module.css"

import Card from "./Card";
// import updateCv from "../../redux/actions/cvs/updateCv";
import deleteCv from "../../redux/actions/cvs/deleteCv";
import getUserByEmail from "../../redux/actions/users/getUserByEmail";
import updateCvViews from "../../redux/actions/cvs/updateCvViews";
import Spinner from "../Spinner";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from 'react';

function Cards({ cvs }) {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    // const isMyCvs = location.pathname === "/mycvs";
    const isCurriculums = location.pathname === "/curriculums";
    const localStorageUser = JSON.parse(localStorage.getItem('currentUser'));
    const userEmail = localStorageUser ? localStorageUser.email : null
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = (id) => {
        updateCvViews(id);
        navigate(`/detail/${id}`);
    }

    const handleDelete = async (id) => {
        setIsLoading(true);
        /* eslint-disable-next-line no-restricted-globals */
        if (window.confirm("¿Estás seguro que querés eliminar este CV?")) {
            await deleteCv(id);
            dispatch(getUserByEmail(userEmail));
            setTimeout(() => {
                navigate("/mycvs");
                setIsLoading(false);
            }, 500)
        }
    };

    console.log(cvs);

    return (
        <div className={styles.cards}>
            {isLoading && <Spinner />}
            {cvs ? cvs.map(({ id, name, image, header, contact, description, experience, education, speakingLanguages, skills, otherInterests, views, creationDate }) => (
                <div key={id} className={styles.containerCards}>
                    <svg className={styles.ic}
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    height="30px"
                    width="30px"
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="#098D85" 
                    class="w-6 h-6">
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
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
                    {isCurriculums ?
                        <div>
                            <p className={styles.txtLight12Black}> views: {views}</p>
                            <p className={styles.txtLight12Black}>{creationDate}</p>
                        </div> :
                        <div>
                            <Link to={`/updatecv/${id}`}>
                                <svg className={styles.icn}
                                    height="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="black"
                                    class="w-6 h-6">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                    />
                                </svg>
                            </Link>
                            <button className={styles.btnIcn} onClick={async () => await handleDelete(id)}>
                                <svg className={styles.icn}
                                    height="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="black"
                                    class="w-6 h-6">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    }
                </div>
            )) : null
            }
        </div>
    )
};

export default Cards;

