import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const deleteSubscription = async (subscriptionId) => {
    const endpoint = axios.defaults.baseURL + "subscription/delete/" + subscriptionId

        try {
            await axiosInstance.put(endpoint);

            return 
        } catch (error) {
            console.log(error);
        }
};

export default deleteSubscription;