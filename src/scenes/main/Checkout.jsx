import styles from './Checkout.module.css';

import Card from '../../components/Subscriptions/Card';
import createOrder from '../../redux/actions/payments/createOrder';
import getSubscriptionDetail from '../../redux/actions/subscriptions/getSubscriptionDetail';
import Illustration from "../../assets/checkout.png";

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const Checkout = () => {
    const localStorageUser = JSON.parse(localStorage.getItem('currentUser'));
    const userId = localStorageUser.id
    const [paymentLink, setPaymentLink] = useState(null);
    const { subscriptionId } = useParams();
    const dispatch = useDispatch();
    const subscription = useSelector((state) => state.subscriptions.subscriptionDetail);

    useEffect(() => {
        dispatch(getSubscriptionDetail(subscriptionId));
    }, [subscriptionId, dispatch]);

    const paymentInfo = {
        title: subscription ? subscription.name : null,
        description: "Descripción de prueba",
        quantity: 1,
        unit_price: subscription ? subscription.price : null,
    }

    console.log(subscription);

    useEffect(() => {
        const getPaymentLink = async () => {
            try {
                if (subscription && paymentInfo.unit_price && paymentInfo.title && paymentInfo.description && paymentInfo.quantity) {
                    const link = await createOrder(userId, paymentInfo);
                    setPaymentLink(link);
                } else {
                    console.log("no se cargo la suscripcion al momento de hacer el createOrder");
                }
            } catch (error) {
                console.error('Error creating order:', error);
            }
        };
        getPaymentLink();
    }, [userId, subscriptionId]);

    return (
        <div className={styles.checkout}>
            <h1 className={styles.txtSemiBold32Black}>Checkout</h1>
            <div className={styles.container}>
                <div className={styles.containerLeft}>
                    <img  className={styles.img} src={Illustration} alt="Ilustración de checkout" />
                </div>
                {
                    subscription ?
                        <div className={styles.containerRight}>
                            <Card
                                id={subscription.id}
                                name={subscription.name}
                                price={subscription.price}
                                included={subscription.included}
                                notIncluded={subscription.notIncluded}
                                paymentLink={paymentLink}
                            />
                        </div> : null
                }
            </div>
        </div>
    );
};

export default Checkout;

