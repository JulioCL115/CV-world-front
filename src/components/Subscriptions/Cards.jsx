import styles from './Cards.module.css';

import Card from "./Card";

function Cards({ subscriptions }) {

    return (
        <div className={styles.cards}>
            {
                subscriptions ? subscriptions.map(({ id, name, price, included, notIncluded }) => {
                    return <Card key={id}
                        id={id}
                        name={name}
                        price={price}
                        included={included}
                        notIncluded={notIncluded}
                    />
                }) : null
            }
        </div>
    )
};

export default Cards; 