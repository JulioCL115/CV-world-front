import styles from "./Contact.module.css";

import { useState } from "react";

import postComment from "../../redux/actions/comments/postComment";
import { useDispatch } from "react-redux";

function Comments({ cvId }) {
    const dispatch = useDispatch();
    const currentUser = localStorage.getItem('currentUser');
    const userId = currentUser.id;

    const [comment, setComment] = useState(null);

    const handleChange = (event) => {
        setComment(event.target.value)
    };

    const handleSubmit = () => { 
        dispatch(postComment(comment, userId, cvId))
    };

    return (
        <div className={styles.comments}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="¿Qué opinás de este CV?..."
                    onChange={handleChange}>
                </input>
                <button type="submit">Dejar comentario</button>
            </form>
        </div>
    )
};

export default Comments;