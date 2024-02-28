import styles from "./PaymentFeedback.module.css";

import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import updateUser from "../../redux/actions/users/updateUser"

import IllustrationApproved from "../../assets/payment-approved.png"
import IllustrationPending from "../../assets/payment-pending.png"
import IllustrationFailure from "../../assets/payment-failure.png"

// import updateUserSubscription from "../../redux/actions/users/updateUserSubscription";
// import { useSelector } from "react-redux";

function PaymentFeedback() {
  const location = useLocation();
  const feedbackType = location.pathname.split("/")[1];
  const localStorageUser = JSON.parse(localStorage.getItem('currentUser'));
  const userId = localStorageUser.id;

  const [newUserInfo, setNewUserInfo] = useState({
    name: null,
    email: null,
    password: null,
    repeatPassword: null,
    photo: null,
});

  useEffect(() => {
    const updateLocalStorage = async () => {
      if (feedbackType === "success") {
        try {
          const { updatedUser, updateStatus } = await updateUser(userId,newUserInfo);
          console.log( updatedUser, updateStatus)
          if (updateStatus.updateStatus.status=== "Success") {
            localStorage.removeItem('currentUser');
            localStorage.setItem('currentUser', JSON.stringify(updatedUser.updatedUser));
            console.log("Local storage updated in the feedback component");
            window.dispatchEvent(new Event('storage'));
          }
        } catch (error) {
          console.error('Error updating local storage:', error);
        }
      }
    };

    updateLocalStorage();
  }, [feedbackType]);

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
