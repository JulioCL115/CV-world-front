import styles from './Cards.module.css';

import Card from "./Card";

function Cards({ subscriptions }) {
    return (
        <div className={styles.cards}>
            {
                subscriptions.map(({ id, name, price, included, notIncluded }) => {
                    return <Card key={id}
                        id={id}
                        name={name}
                        price={price}
                        included={included}
                        notIncluded={notIncluded}
                    />
                })
            }
        </div>
    )
};

export default Cards; 