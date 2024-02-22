import styles from "./Curriculums.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import getAllSubscriptions from "../../redux/actions/subscriptions/getAllSubscriptions";

function AdminSubscriptions () {
    const dispatch = useDispatch();
    const subscriptions = useSelector((state) => state.subscriptions.allSubscriptions);

    useEffect(() => {
        dispatch(getAllSubscriptions());
    });

    return (
        <div>
            <h1>Subscriptions</h1>
        </div>
    );
};

export default AdminSubscriptions;