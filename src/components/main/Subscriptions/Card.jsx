import styles from './Card.module.css';

import { Link, useLocation } from "react-router-dom";

function Card({ id, name, price, included, notIncluded, paymentLink }) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const location = useLocation();
    const isCheckout = location.pathname.startsWith('/checkout');

    console.log("CURRENT USER EN CARD SUSCRIPCION" + currentUser);

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
        return included.map((item, index) => (
            <div key={index} className={styles.containerListItem}>
                <svg
                    width="30"
                    height="30"
                    className={styles.icnCheck}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    style={{ verticalAlign: 'middle', width: '30px', height: '30px' }} // Add this style
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className={styles.txtRegular16} key={index}>{item}</p>
            </div>
        ));
    };

    const renderNotIncluded = () => {
        return notIncluded.map((item, index) => (
            <div key={index} className={styles.containerListItem} id={styles.list}>
                <svg
                    width="30"
                    height="30"
                    className={styles.icnCross}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    style={{ verticalAlign: 'middle', width: '30px', height: '30px' }} // Add this style
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className={styles.txtRegular16} key={index}>{item}</p>
            </div>
        ));
    };

    return (
        <div className={styles.card}>
            <h1 className={styles.txtSemiBold32Black}>{name}</h1>
            {renderPrice()}
            <div className={styles.containerList}>
                {renderIncluded()}
                {notIncluded !== null && renderNotIncluded()}
            </div>
            {isCheckout ?
                <Link to={paymentLink}>
                    <button className={styles.btn}>Pagar con Mercado Pago</button>
                </Link> :
                <Link to={currentUser ? (currentUser.Subscription.name !== name ? `/checkout/${id}` : "/curriculums") : "/signin"}>
                    <button className={styles.btn}>{currentUser && currentUser.Subscription.name === name ? "Tu plan actual" : "Empezar"}</button>
                </Link>
            }
            {isCheckout ? <p className={styles.txtRegular12Purple}>*Este botón te va a redirigir a Mercado Pago</p> : null}
        </div>
    )
};

export default Card; 
