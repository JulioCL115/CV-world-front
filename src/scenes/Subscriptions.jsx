import styles from './Subscriptions.module.css';

import { useSelector } from 'react-redux';

import Cards from "../components/Subscriptions/Cards";

function Subscriptions() {
    const subscriptions = useSelector((state) => state.subscriptions.allSubscriptions);

    console.log(subscriptions);

    return (
        <div className={styles.subscriptions}>
            <Cards subscriptions={ subscriptions }/>
        </div>
    )
};

export default Subscriptions; 