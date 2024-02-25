import styles from "./MyCvs.module.css"

import Illustration from "../../assets/upload-cv.png"
import Cards from "../../components/Curriculums/Cards";
import getUserById from "../../redux/actions/users/getUserById";
import Spinner from "../../components/Spinner";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function MyCvs() {
    const dispatch = useDispatch();
    const localStorageUser = JSON.parse(localStorage.getItem('currentUser'));
    const userId = localStorageUser.id
    // const currentUser = useSelector(state => state.users.currentUser);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchUserDetail = async () => {
            const userDetail = await getUserById(userId);;
            setCurrentUser(userDetail);
        };

        fetchUserDetail();
    }, [userId, dispatch])

    console.log(currentUser);


    return (
        <div className={styles.myCvs}>
            <div className={styles.containerTop}>
                <h1 className={styles.txtSemiBold32Black}>Mis CV's</h1>
            </div>
            {currentUser && currentUser.Cvs && currentUser.Cvs.length ?
                <Cards cvs={currentUser.Cvs} setCurrentUser={setCurrentUser} />
                :
                <div className={styles.containerCenter}>
                    <img className={styles.img} src={Illustration} alt="Illustration" />
                    <p className={styles.txtSemiBold16Purple}>Parece que todavía no tenés currículums cargados</p>
                </div>
            }
            <Link to={currentUser && currentUser.Cvs && currentUser.Cvs.length === 1 && currentUser.Subscription && currentUser.Subscription.price === 0 ? "/upgradesubscription" : "/createcv"}>
                <button className={styles.btn}>Cargar CV</button>
            </Link>
        </div>

    )
};

export default MyCvs;