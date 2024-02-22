import styles from "./Curriculums.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import getAllCvs from "../../redux/actions/cvs/getAllCvs";

function AdminCurriculums () {
    const dispatch = useDispatch();
    const cvs = useSelector((state) => state.cvs.allCvs);

    useEffect(() => {
        dispatch(getAllCvs());
    });

    return (
        <div>
            <h1>Curriculums</h1>
        </div>
    );
};

export default AdminCurriculums;