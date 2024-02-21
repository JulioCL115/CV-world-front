import styles from "./Comments.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import getAllComments from "../../redux/actions/comments/getAllComments";

function AdminComments () {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments.allComments);

    useEffect(() => {
        dispatch(getAllComments());
    });

    return (
        <div>
            <h1>Comments</h1>
        </div>
    );
};

export default AdminComments;