import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const restoreSubscription = async (subscriptionId) => {
    const endpoint = axios.defaults.baseURL + "subscription/restore/" + subscriptionId

        try {
            await axiosInstance.put(endpoint);

            return 
        } catch (error) {
            console.log(error);
        }
};

export default restoreSubscription;