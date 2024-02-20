import styles from './Checkout.module.css';

import Card from '../../components/Subscriptions/Card';
import createOrder from '../../redux/actions/payments/createOrder';
import getSubscriptionDetail from '../../redux/actions/subscriptions/getSubscriptionDetail';
import Illustration from "../../assets/checkout.png";

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const Checkout = () => {
    const localStorageUser = JSON.parse(localStorage.getItem('currentUser'));
    const userId = localStorageUser.id
    const [paymentLinkData, setPaymentLinkData] = useState(null);
    const { subscriptionId } = useParams();
    const dispatch = useDispatch();
    const subscription = useSelector((state) => state.subscriptions.subscriptionDetail);

    useEffect(() => {
        dispatch(getSubscriptionDetail(subscriptionId));
    }, [subscriptionId, dispatch]);


    const paymentInfo = {
        title: subscription.name,
        description: "Descripción de prueba",
        quantity: 1,
        unit_price: subscription.price,
    }

    useEffect(() => {
        const fetchPaymentLink = async () => {
            try {
                const data = await createOrder(userId, paymentInfo);
                console.log('Payment link data:', data);
                setPaymentLinkData(data);
            } catch (error) {
                console.error('Error creating order:', error);
            }
        };

        fetchPaymentLink();
    }, [userId, paymentInfo]);

    return (
        <div className={styles.checkout}>
            <h1 className={styles.txtSemiBold32Black}>Checkout</h1>
            <div className={styles.container}>
                <div className={styles.containerLeft}>
                    <img src={Illustration} alt="Ilustración de checkout" />
                </div>
                <div className={styles.containerRight}>
                    <Card
                    id={subscription.id}
                    name={subscription.name}
                    price={subscription.price}
                    included={subscription.included}
                    notIncluded={subscription.notIncluded}
                    />
                </div>
            </div>
        </div>
    );
};

export default Checkout;

