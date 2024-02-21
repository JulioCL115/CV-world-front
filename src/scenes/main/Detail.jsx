import styles from "./Detail.module.css";
import Comments from "../../components/Detail/Comments";
import Contact from "../../components/Detail/Contact";
import Cv from "../../components/Detail/Cv";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import getCvDetail from "../../redux/actions/cvs/getCvDetail";
import { useParams } from "react-router-dom";
import ProfilePicture from "../../assets/blank-profile-picture-973460_960_720.webp";


function Detail() {
    const { cvId } = useParams();
    const dispatch = useDispatch();
    const cv = useSelector((state) => state.cvs.cvDetail);
    const comments = cv ? cv.Comments : null
    const header = cv ? cv.header : null
    const userName = cv ? cv.userName : null
    const userImage = cv ? cv.userImage : null
    const email = cv ? cv.contact[0].email : null

    console.log(cv);

   useEffect(() => {
    dispatch(getCvDetail(cvId))
   }, [cvId, dispatch])

    return (
        <div className={styles.detail}>
            {
                cv ? 
                <div className={styles.containerHeader}>
                <img className={styles.img} src={cv.userImage ? cv.userImage : ProfilePicture} alt="foto de perfil del usuario" />
                <div>
                    <p className={styles.txtSemiBold16Black}>{cv.header}</p>
                    <p className={styles.txtRegular16Black}>{cv.userName}</p>
                </div>
            </div> : null
            }
            <div className={styles.containerTop}>
                <Cv cv={cv}/>
            </div>
            <div className={styles.containerBottom}>
                <div className={styles.containerBottomLeft}>
                    <Comments cvId={cvId} comments={comments}/>
                </div>
                <div className={styles.containerBottomRight}>
                    <Contact userName={userName} header={header} userImage={userImage} email={email}/>
                </div>
            </div>
        </div>
    )
};

export default Detail;