import axios from "axios";
import axiosInstance from "../../../config/axios-config";
import { setSubscriptionDetail } from "../../slices/subscriptionsSlice"

const getSubscriptionById = (subscriptionId) => {
    const endpoint = axios.defaults.baseURL + "subscription/dashboard/" + subscriptionId;

    return async (dispatch) => {
        try {
            const response = await axiosInstance.get(endpoint);
            let data = response.data;

            console.log(data);

            return dispatch(setSubscriptionDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getSubscriptionById;