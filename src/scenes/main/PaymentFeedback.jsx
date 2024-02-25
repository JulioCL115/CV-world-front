import styles from "./PaymentFeedback.module.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import IllustrationApproved from "../../assets/payment-approved.png"
import IllustrationPending from "../../assets/payment-pending.png"
import IllustrationFailure from "../../assets/payment-failure.png"

import updateUserSubscription from "../../redux/actions/users/updateUserSubscription";
import { useSelector } from "react-redux";

function PaymentFeedback() {
    const location = useLocation();
    const feedbackType = location.pathname.split("/")[1];
    const isSuccess = location.pathname.startsWith("/success");
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userId = currentUser ? currentUser.id : null;
    const subscriptionId = useSelector(state => state.payments.subscriptionId);

    console.log(subscriptionId);
    console.log(userId);
    
    useEffect(() => {
        if (isSuccess && subscriptionId && userId) {
            updateUserSubscription(userId, subscriptionId)
        }
    }, [isSuccess, userId, subscriptionId]);


    return (
        <div className={styles.container}>
            {feedbackType === "success" ?
                <div>
                    <img className={styles.img} src={IllustrationApproved} alt="Payment Approved" />
                    <p className={styles.txtSemiBold16Purple}>¡Tu pago se realizó con éxito!</p>
                </div> : null
            }
            {feedbackType === "pending" ?
                <div>
                    <img className={styles.img} src={IllustrationPending} alt="Payment Approved" />
                    <p className={styles.txtSemiBold16Purple}>Tu pago está pendiente, por favor revisá de nuevo más tarde</p>
                </div> : null
            }
            {feedbackType === "failure" ?
                <div>
                    <img className={styles.img} src={IllustrationFailure} alt="Payment Approved" />
                    <p className={styles.txtError16}>Tu pago fue rechazado</p>
                    <p className={styles.txtError16}>Intentá de nuevo con otro medio de pago o ponete en contacto con tu banco</p>
                </div> : null
            }
        </div>
    );
}

export default PaymentFeedback;