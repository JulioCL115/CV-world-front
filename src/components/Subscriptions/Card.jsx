import styles from './Card.module.css';

import { Link } from "react-router-dom";

function Card({ id, name, price, included, notIncluded }) {

    console.log(included);
    console.log(notIncluded);


    const renderPrice = () => {
        if (price === 0) {
            return (
                <h2 className={styles.txtSemiBold32Green}>Gratis</h2>
            )
        } else {
            return (
                <div className={styles.containerPrice}>
                    <h2 className={styles.txtSemiBold32Green}>${price}/</h2>
                    <p className={styles.txtSemiBold16Green}>Mes</p>
                </div>

            )
        };
    };

    const renderIncluded = () => {
        included.forEach((item) => {
            console.log(item);
            return (
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className={styles.txtRegular16}>{item}</p>
                </div>
            )
        });
    };

    const renderNotIncluded = () => {
        notIncluded.forEach((item) => {
            return (
                <p className={styles.txtRegular16}>{item}</p>
            )
        });
    };

    return (
        <div className={styles.card}>
            <h1 className={styles.txtSemiBold32Black}>{name}</h1>
            {renderPrice()}
            {renderIncluded()}
            {notIncluded !== null && renderNotIncluded()}
            <Link to="/cart">
                <button className={styles.btn}>Empezar</button>
            </Link>
        </div>
    )
};

export default Card; 
