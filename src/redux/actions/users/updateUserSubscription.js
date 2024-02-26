import axios from "axios";
import axiosInstance from "../../../config/axios-config";

const updateUserSubscription = async (userId, subscriptionId) => {
    const endpoint = axios.defaults.baseURL + "webhook/" + userId + "/" + subscriptionId;

        try {
            const response = await axiosInstance.get(endpoint)
            let data = response.data;
            
            return data;
        } catch (error) {
            console.log(error);
        }
};

export default updateUserSubscription; 