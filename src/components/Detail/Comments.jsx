import styles from "./Contact.module.css";

import { useState } from "react";

import postComment from "../../redux/actions/comments/postComment";

function Comments() {

    const [comment, setComment] = useState("")

    const handleChange = () => { };

    const handleSubmit = () => { };

    return (
        <div className={styles.comments}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="¿Qué opinás de este CV?..."
                    onChange={handleChange}>
                </input>
                <button type="submit" >Dejar comentario</button>
            </form>
        </div>
    )
};

export default Comments;