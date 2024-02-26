import axios from "axios";
import axiosInstance from "../../../config/axios-config";
import { setAllSubscriptionsUnfiltered } from "../../slices/subscriptionsSlice"

const getAllSubscriptionsUnfiltered = () => {
    const endpoint = axios.defaults.baseURL + "subscription/dashboard"

    return async (dispatch) => {
        try {
            const response = await axiosInstance.get(endpoint);
            let data = response.data;

            return dispatch(setAllSubscriptionsUnfiltered(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllSubscriptionsUnfiltered;