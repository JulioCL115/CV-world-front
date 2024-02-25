import styles from './MyProfile.module.css';

import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import getUserById from '../../redux/actions/users/getUserById';

function UpdateProfile() {
    const dispatch = useDispatch();
    const localStorageUser = JSON.parse(localStorage.getItem('currentUser'));
    const userId = localStorageUser.id
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchUserDetail = async () => {
            const userDetail = await getUserById(userId);
            if (userDetail) {
                setCurrentUser(userDetail);
            }
        };

        fetchUserDetail();
    }, [userId, dispatch])

    console.log(currentUser);

    return (
        <div className={styles.myProfile}>
            {localStorageUser ?
                <div>
                    <h1>{currentUser ? currentUser.name : null}</h1>
                    <p>{currentUser ? currentUser.email: null}</p>
                    <Link to="/updateprofile">
                        <button className={styles.btn}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                class="w-6 h-6">
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </button>
                    </Link>
                </div> :
                null
            }
        </div >
    )
};

export default UpdateProfile;