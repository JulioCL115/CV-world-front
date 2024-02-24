import styles from './Home.module.css';

function Home() {
    return (
        <div>
            <div className={styles.containerLeft}>
                <h1>Causá una buena primera impresión</h1>
                <p>Desbloquá todo tu potencial profesional,
                    con CV World no sólo creás tu CV, creás una excelente primera impresión
                </p>
                <div>
                    <button>Crear CV</button>
                    <button>Explorar CV's</button>
                </div>
            </div>
            <div className={styles.containerRight}>

            </div>
        </div>
    )
};

export default Home;