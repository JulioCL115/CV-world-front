import axios from "axios";
import axiosInstance from "../../../config/axios-config";
import { setAllCategoriesUnfiltered } from "../../slices/categoriesSlice"

const getAllCategoriesUnfiltered = () => {
    const endpoint = axios.defaults.baseURL + "category/dashboard"

    return async (dispatch) => {
        try {
            const response = await axiosInstance.get(endpoint);
            let data = response.data;

            return dispatch(setAllCategoriesUnfiltered(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllCategoriesUnfiltered;