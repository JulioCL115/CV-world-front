import styles from "./Contact.module.css";

import ProfilePicture from "../../../assets/blank-profile-picture-973460_960_720.webp";

function Contact({ header, userName, userImage, email }) {

    console.log(email);

    const handleClick = () => {
        if (email) {
            const mailtoUri = "mailto:" + encodeURIComponent(email) 

            window.location.href = mailtoUri;
        }
    };

    return (
        <div className={styles.contact}>
            <div className={styles.horizontal}>
                <img className={styles.img} src={userImage ? userImage : ProfilePicture} alt="Profile" />
                <div>
                    <p className={styles.txtSemiBold16Black}>{header}</p>
                    <p className={styles.txtRegular16Black}>{userName}</p>
                </div>
            </div>
            <button className={styles.btn} onClick={handleClick}>
                <svg className={styles.icn}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="white"
                    height="20px"
                    class="w-6 h-6">
                    <path strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                Contactar
            </button>
        </div>
    )
};

export default Contact;