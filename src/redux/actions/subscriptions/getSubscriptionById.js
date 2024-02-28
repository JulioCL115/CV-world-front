import axios from "axios";
import axiosInstance from "../../../config/axios-config";

const getSubscriptionById = async (subscriptionId) => {
    const endpoint = axios.defaults.baseURL + "subscription/dashboard/" + subscriptionId;

        try {
            const response = await axiosInstance.get(endpoint);
            let data = response.data;

            console.log(data);

            return data
        } catch (error) {
            console.log(error);
        }

};

export default getSubscriptionById;