import styles from "./MyCvs.module.css"
import Illustration from "../../assets/upload-cv.png"
import Cards from "../../components/Curriculums/Cards";
import getUserById from "../../redux/actions/users/getUserById";


import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



function MyCvs() {
    const dispatch = useDispatch();
    const localStorageUser = JSON.parse(localStorage.getItem('currentUser'));
    const userId = localStorageUser.id
    const currentUser = useSelector(state => state.users.currentUser);

    console.log(localStorageUser);

    useEffect(() => {
        dispatch(getUserById(userId))
    }, [userId, dispatch] )

    return (
        <div className={styles.myCvs}>
            <div className={styles.containerTop}>
                <h1 className={styles.txtSemiBold32Black}>Mis CV's</h1>
            </div>
            {currentUser && currentUser.Cvs && currentUser.Cvs.length ?
                <Cards cvs={currentUser.Cvs} />
                :
                <div className={styles.containerCenter}>
                    <img className={styles.img} src={Illustration} alt="Illustration" />
                    <p className={styles.txtSemiBold16Purple}>Parece que todavía no tenés currículums cargados</p>
                </div>
            }
            <Link to={currentUser && currentUser.Cvs.length === 1 && currentUser.Subscription && currentUser.Subscription.price === 0 ? "/upgradesubscription" : "/createcv"}>
                <button className={styles.btn}>Cargar CV</button>
            </Link>
        </div>

    )
};

export default MyCvs;