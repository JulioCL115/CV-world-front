import styles from "./Comments.module.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import postComment from "../../redux/actions/comments/postComment";

function Comments({ cvId, comments }) {
    const dispatch = useDispatch();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userId = currentUser ? currentUser.id : null;


    const [comment, setComment] = useState(null);

    const handleChange = (event) => {
        setComment(event.target.value)
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(postComment(comment, cvId, userId))
    };

    return (
        <div className={styles.comments}>
            {currentUser ?
                <div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="¿Qué opinás de este CV?..."
                            onChange={handleChange}>
                        </input>
                        <button className={styles.btn} type="submit">Dejar comentario</button>
                    </form>
                </div> : 
                <div>
                <p className={styles.txtSemiBold16Purple}>Inicia sesión para dejar un comentario</p>
                <Link to="" >Iniciar sesión</Link>
                </div>
                }
            {comments && comments.length ? comments.map((comment) => (
                <p>{comment}</p>
            )) : <p className={styles.txtSemiBold16Purple}>Nadie comentó este CV todavía</p>}
        </div>
    )
};

export default Comments;