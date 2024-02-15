import styles from './UpgradeSubscription.module.css';

function UpgradeSubscription() {

    return (
        <div className={styles.upgradeSubscription}>
            <img className={styles.img} src={Illustration} alt="Illustration" />
            <p className={styles.txtSemiBold16Purple}>Parece que todavía no tenés currículums cargados</p>
            <Link to="subscription">
                <button className={styles.btn}>Cargar CV</button>
            </Link>
        </div>
    )
};

export default UpgradeSubscription; 