import styles from './Pagination.module.css';


function generateOptions(n) {
    const options = [];
    for (let i = 1; i <= n; i++) {
        let opt = <option key={i} value={i}>{i}</option>
        options.push(opt);
    }
    return options;
};

const Pagination = ({ currentPage, setCurrentPage, numberOfPages }) => {

    const options = generateOptions(numberOfPages);

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        };
    };

    const handleNext = () => {
        if (currentPage < numberOfPages) {
            setCurrentPage(currentPage + 1)
        };
    };

    const handlePageChange = (event) => {
        setCurrentPage(parseInt(event.target.value))
    };

    return (
        <div className={styles.pagination}>
            <button className={styles.btn} onClick={handlePrev}>
                <svg className={styles.icn}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor">
                    <path strokeLinecap="round"
                        strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                </svg>
            </button>
            <select className={styles.dropdown} onChange={handlePageChange} value={currentPage}>
                {options}
            </select>
            <p className={styles.txtRegular16Black}> {`de ${numberOfPages}`}</p>
            <button className={styles.btn} onClick={handleNext}>
                <svg className={styles.icn}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor">
                    <path strokeLinecap="round"
                        strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>
        </div>
    )
};

export default Pagination;