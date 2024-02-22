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
    const userId = localStorageUser.id;
    const [paymentLink, setPaymentLink] = useState(null);
    const { subscriptionId } = useParams();
    const dispatch = useDispatch();
    const subscription = useSelector((state) => state.subscriptions.subscriptionDetail);

    useEffect(() => {
        const fetchSubscriptionDetail = async () => {
            try {
                await dispatch(getSubscriptionDetail(subscriptionId));
            } catch (error) {
                console.error('Error fetching subscription detail:', error);
            }
        };

        fetchSubscriptionDetail();
    }, [subscriptionId, dispatch]);

    useEffect(() => {
        const getPaymentLink = async () => {
            if (subscription && subscription.name && subscription.price) {
                const paymentInfo = {
                    title: subscription.name,
                    description: "Descripción de prueba",
                    quantity: 1,
                    unit_price: subscription.price,
                    subscriptionId: subscriptionId
                };

                try {
                    const link = await createOrder(userId, paymentInfo);
                    setPaymentLink(link);
                } catch (error) {
                    console.error('Error creating order:', error);
                }
            } else {
                console.log("no se cargo la suscripcion al momento de hacer el createOrder");
            }
        };

        if (subscription) {
            getPaymentLink();
        }
    }, [subscription, userId]); 


    return (
        <div className={styles.checkout}>
            <h1 className={styles.txtSemiBold32Black}>Checkout</h1>
            <div className={styles.container}>
                <div className={styles.containerLeft}>
                    <img className={styles.img} src={Illustration} alt="Ilustración de checkout" />
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
}

export default Checkout;

