import styles from "./Users.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import getAllUsers from "../../redux/actions/users/getAllUsers";

function AdminUsers () {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.allUsers);

    useEffect(() => {
        dispatch(getAllUsers());
    });

    return (
        <div>
            <h1>Users</h1>
        </div>
    );
};

export default AdminUsers;