import createOrder from '../../redux/actions/payments/createOrder';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Checkout = () => {
    const localStorageUser = JSON.parse(localStorage.getItem('currentUser'));
    const userId = localStorageUser.id
    const [paymentLinkData, setPaymentLinkData] = useState(null);

    console.log(paymentLinkData);

    const paymentInfo = {
        title: "Plan Premium",
        description: "Descripción de prueba",
        quantity: 1,
        unit_price: 2000,
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
        <div >
            <h2>Shopping Cart</h2>
            <p>This is an example of Checkout Pro integration of Mercado Pago</p>
            <Link to={paymentLinkData ? paymentLinkData : null}>Checkout</Link>
        </div>
    );
};

export default Checkout;