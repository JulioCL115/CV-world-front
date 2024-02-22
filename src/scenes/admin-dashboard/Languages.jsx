import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import getAllLanguages from "../../redux/actions/languages/getAllLanguages";

function AdminLanguages () {
    const dispatch = useDispatch();
    const languages = useSelector((state) => state.languages.allLanguages);

    useEffect(() => {
        dispatch(getAllLanguages());
    });

    return (
        <div>
            <h1>Languages</h1>
        </div>
    );
};

export default AdminLanguages;