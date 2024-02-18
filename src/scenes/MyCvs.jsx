import styles from "./MyCvs.module.css"
import Illustration from "../assets/CV-Example-Creation-Illustration.webp"
import Cards from "../components/MyCvs/Cards";
import getCurrentUser from "../redux/actions/users/getCurrentUser";


import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function MyCvs() {
    const dispatch = useDispatch();
    const localStorageUser = JSON.parse(localStorage.getItem('currentUser'));
    const userEmail = localStorageUser.email
    useSelector(state => state.users.currentUser);


    useEffect(() => {
        dispatch(getCurrentUser(userEmail))
    }, [userEmail, dispatch])

    const currentUser = useSelector(state => state.users.currentUser);


    return (
        <div className={styles.myCvs}>
            <div className={styles.containerTop}>
                <h1 className={styles.txtSemiBold32Black}>Mis CV's</h1>
            </div>
            {currentUser && currentUser.Cvs.length ?
                <Cards cvs={currentUser.Cvs} />
                :
                <div className={styles.containerCenter}>
                    <img className={styles.img} src={Illustration} alt="Illustration" />
                    <p className={styles.txtSemiBold16Purple}>Parece que todavía no tenés currículums cargados</p>
                </div>
            }
            <Link to={currentUser && currentUser.Cvs.length === 1 && currentUser.Subscription.name === "Basic" ? "/upgradesubscription" : "/createcv"}>
                <button className={styles.btn}>Cargar CV</button>
            </Link>
        </div>

    )
};

export default MyCvs;