import React from 'react';
import styles from'./Spinner.module.css'; // Assuming you have a Spinner.css file with the spinner styles

const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <div className={styles.doublebounce1}></div>
            <div className={styles.doublebounce2}></div>
        </div>
    );
};

export default Spinner;