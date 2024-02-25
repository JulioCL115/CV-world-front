import axios from "axios";
import { setAllCategories } from "../../slices/categoriesSlice"

const getAllCategories = () => {
    const endpoint = axios.defaults.baseURL + "category"

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data;

            return dispatch(setAllCategories(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllCategories;