import styles from "./Comments.module.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Illustrations from "../../assets/customer-review-3949821-3277282.webp";
import ProfilePicture from "../../assets/blank-profile-picture-973460_960_720.webp";
import postComment from "../../redux/actions/comments/postComment";
import getCvDetail from "../../redux/actions/cvs/getCvDetail";
import deleteComment from "../../redux/actions/comments/deleteComment";

function Comments({ cvId, comments , setCv }) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userId = currentUser ? currentUser.id : null;

    console.log(userId);

    const [comment, setComment] = useState('');

    console.log(comments);

    useEffect(() => {
        // This effect will run whenever the `comments` prop changes
        // You can add any additional logic here if needed
    }, [comments]);

    const handleChange = (event) => {
        setComment(event.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postStatus = await postComment(comment, cvId, userId)

        if (postStatus === "Success") {
            setComment('');
            const cvDetail = await (getCvDetail(cvId))
            setCv(cvDetail);
        } else { console.log("Error posting comment") }
    };

    const handleDelete = async (commentId) => {
        // Assuming deleteComment is an async function that deletes a comment and returns true on success
        const isDeleted = await deleteComment(commentId);
        if (isDeleted) {
            setCv(prevCv => ({
                ...prevCv,
                Comments: prevCv.Comments.filter(comment => comment.id !== commentId)
            }));
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
            {comments && comments.length ?
                <div className={styles.vertical}>
                    {comments.map((comment) => (
                        <div className={styles.horizontal}>
                            <img className={styles.img}
                                src={comment.userImage ? comment.userImage : ProfilePicture} alt="foto de perfil del usuario" />
                            <div>
                                <div className={styles.horizontal} id={styles.txt}>
                                    <p className={styles.txtSemiBold16Black}>{comment.userName}</p>
                                    <p className={styles.txtLight12Black}>{comment.createdAt}</p>
                                </div>
                                <p className={styles.txtRegular16Black}>{comment.comment}</p>
                                {userId === comment.userId ?
                                        <button className={styles.btnDelete}
                                            onClick={() => handleDelete(comment.id)} >Eliminar
                                        </button> : null
                                    }
                            </div>
                        </div>
                    ))}
                </div>
                : <div className={styles.containerComments}>
                    <p className={styles.txtRegular16Purple}>Nadie comentó este CV todavía</p>
                    <img className={styles.illustration} src={Illustrations} alt="Illustrations" />
                </div>}
        </div>
    )
};

export default Comments;