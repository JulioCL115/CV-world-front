import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import getAllCategories from "../../redux/actions/categories/getAllCategories";

function AdminCategories() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.allCategories);

    useEffect(() => {
        dispatch(getAllCategories());
    });

    return (
        <div>
            <h1>Categories</h1>
        </div>
    );
};

export default AdminCategories;