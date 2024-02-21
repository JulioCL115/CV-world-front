import styles from "./Comments.module.css";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Illustrations from "../../assets/customer-review-3949821-3277282.webp";
import postComment from "../../redux/actions/comments/postComment";
import getCvDetail from "../../redux/actions/cvs/getCvDetail";

function Comments({ cvId, comments }) {
    const dispatch = useDispatch();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userId = currentUser ? currentUser.id : null;

    const [comment, setComment] = useState('');

    useEffect(() => {
        // This effect will run whenever the `comments` prop changes
        // You can add any additional logic here if needed
    }, [comments]);

    const handleChange = (event) => {
        setComment(event.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

       const postStatus = await dispatch(postComment(comment, cvId, userId))

        if (postStatus === "Success") {
            setComment('');
            dispatch(getCvDetail(cvId))
        }
    };

    return (
        <div className={styles.comments}>
            {currentUser ?
                <div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <textarea
                            className={styles.textarea}
                            type="text"
                            value={comment}
                            placeholder="¿Qué opinás de este CV?..."
                            onChange={handleChange}>
                        </textarea>
                        <button className={styles.btn} type="submit">Dejar comentario</button>
                    </form>
                </div> :
                <div className={styles.containerSignIn}>
                    <p className={styles.txtSemiBold16Purple}>Inicia sesión para dejar un comentario</p>
                    <Link to="/signin" >
                        <button className={styles.btn}>Iniciar sesión</button>
                    </Link>
                </div>
            }
            {comments && comments.length ? comments.map((comment) => (
                <p>{comment}</p>
            )) : <div className={styles.containerComments}>
                <p className={styles.txtRegular16Purple}>Nadie comentó este CV todavía</p>
                <img className={styles.img} src={Illustrations} alt="Illustrations" />
            </div>}
        </div>
    )
};

export default Comments;