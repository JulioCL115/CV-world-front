import styles from "./Detail.module.css";

import Comments from "../../components/Detail/Comments";
import Contact from "../../components/Detail/Contact";
import Cv from "../../components/Detail/Cv";
import getCvDetail from "../../redux/actions/cvs/getCvDetail";
import ProfilePicture from "../../assets/blank-profile-picture-973460_960_720.webp";
import Spinner from "../../components/Spinner";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function getContactFromCV(cv) {
    if (!cv) {
        return null;
    }

    if (cv.contact && Array.isArray(cv.contact)) {
        return cv.contact[0];
    }
    return cv.contact;
}

function Detail() {
    const { cvId } = useParams();
    const [cv, setCv] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCvDetail = async () => {
            const cvDetail = await getCvDetail(cvId);
            setCv(cvDetail);
            setLoading(false);
        };

        fetchCvDetail();
    }, [cvId]);

    if (loading) {
        return <div>
            <Spinner />
        </div>;
    }

    let contact = getContactFromCV(cv);

    return (
        <div className={styles.detail}>
            {cv ? (
                <div className={styles.containerHeader}>
                    <img
                        className={styles.img}
                        src={cv.userImage ? cv.userImage : ProfilePicture}
                        alt="foto de perfil del usuario"
                    />
                    <div>
                        <p className={styles.txtSemiBold16Black}>{cv.header}</p>
                        <p className={styles.txtRegular16Black}>
                            {cv.userName}
                        </p>
                    </div>
                </div>
            ) : null}
            <div className={styles.containerTop}>
                <Cv cv={cv} />
            </div>
            <div className={styles.containerBottom}>
                <div className={styles.containerBottomLeft}>
                    <Comments cvId={cvId} comments={cv.comments} />
                </div>
                <div className={styles.containerBottomRight}>
                    <Contact
                        userName={cv.userName}
                        header={cv.header}
                        userImage={cv.userImage}
                        email={contact.email}
                    />
                </div>
            </div>
        </div>
    );
}

export default Detail;
