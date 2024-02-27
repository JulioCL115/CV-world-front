import axios from "axios";
import axiosInstance from "../../../config/axios-config";
import { setCategoryDetail } from "../../slices/languagesSlice"

const getCategoryById = (categoryId) => {
    const endpoint = axios.defaults.baseURL + "category/dashboard/" + categoryId;

    return async (dispatch) => {
        try {
            const response = await axiosInstance.get(endpoint);
            let data = response.data;

            console.log(data);

            return dispatch(setCategoryDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getCategoryById;